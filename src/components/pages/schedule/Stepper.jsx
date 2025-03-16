"use client";

import { motion } from "framer-motion";
import { CheckCircle, Circle } from "lucide-react";
import { useState } from "react";

const steps = [
  { title: "Your personal information", description: "Enter your name and email.", fields: [
      { type: "text", name: "name", placeholder: "Enter your name" },
      { type: "email", name: "email", placeholder: "Enter your email" }
    ] },
  { title: "What are you looking for?", description: "Provide details.", fields: [
      { type: "textarea", name: "details", placeholder: "Describe what you're looking for" }
    ] },
  { title: "What is your estimated budget?", description: "Enter your budget and currency.", fields: [
      { type: "number", name: "budget", placeholder: "Enter budget" },
      { type: "select", name: "currency", options: ["USD", "EUR", "BDT"] }
    ] },
  { title: "Select your available time and the date!", description: "Choose date and time.", fields: [
      { type: "date", name: "date" },
      { type: "time", name: "time" }
    ] }
];

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({ currency: "USD" }); // Default currency selection

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isStepFilled = () => {
    return steps[activeStep].fields.every(field => formData[field.name]);
  };

  const goNext = () => {
    if (isStepFilled() && activeStep < steps.length - 1) {
      setActiveStep(prev => prev + 1);
    }
  };

  const goPrev = () => {
    setActiveStep(prev => Math.max(prev - 1, 0));
  };

  const handleFinish = () => {
    if (isStepFilled()) {
      console.log("Submitted Data:", formData);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              {index < activeStep ? (
                <CheckCircle className="text-green-500 w-6 h-6" />
              ) : (
                <Circle className={`w-6 h-6 ${index === activeStep ? "text-blue-500" : "text-gray-300"}`} />
              )}
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{step.title}</p>
                {index === activeStep && (
                  <motion.div 
                    className="text-gray-600 mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p>{step.description}</p>
                    {step.fields.map((field, idx) => (
                      field.type === "select" ? (
                        <select 
                          key={idx}
                          className="border p-2 w-full mt-2 rounded"
                          value={formData[field.name] || ""}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                        >
                          {field.options.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          key={idx}
                          className="border p-2 w-full mt-2 rounded"
                          placeholder={field.placeholder}
                          value={formData[field.name] || ""}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                        />
                      ) : (
                        <input
                          key={idx}
                          type={field.type}
                          className="border p-2 w-full mt-2 rounded"
                          placeholder={field.placeholder}
                          value={formData[field.name] || ""}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                        />
                      )
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between mt-4">
          <button 
            onClick={goPrev} 
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            disabled={activeStep === 0}
          >
            Previous
          </button>
          {activeStep < steps.length - 1 ? (
            <button 
              onClick={goNext} 
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              disabled={!isStepFilled()}
            >
              Next
            </button>
          ) : (
            <button 
              onClick={handleFinish} 
              className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
              disabled={!isStepFilled()}
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}