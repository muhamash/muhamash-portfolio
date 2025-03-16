"use client"

import { motion } from "framer-motion";
import { CheckCircle, Circle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const steps = [
  { title: "Your personal information", description: "This is the first step.", placeholder: "Enter step 1 data" },
  { title: "What you are looking for?", description: "This is the second step.", placeholder: "Enter step 2 data" },
  { title: "Do you fix your estimate budget?", description: "This is the third step.", placeholder: "Enter step 3 data" },
  { title: "Time and date selector", description: "This is the final step.", placeholder: "Enter step 4 data" },
];

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
    const [ formData, setFormData ] = useState( Array( steps.length ).fill( "" ) );
    const router = useRouter();

  const handleInputChange = (index, value) => {
    const newData = [...formData];
    newData[index] = value;
    setFormData(newData);
  };

  const goNext = () => {
    if (formData[activeStep] && activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

    return (
        <div className="w-full max-w-md mx-auto p-6">
            <div className="flex flex-col gap-6">
                { steps.map( ( step, index ) => (
                    <div key={ index } className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            { index < activeStep ? (
                                <CheckCircle className="text-green-500 w-6 h-6" />
                            ) : (
                                <Circle className={ `w-6 h-6 ${index === activeStep ? "text-blue-500" : "text-gray-300"}` } />
                            ) }
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold flex items-center gap-2">
                                    { step.title }
                                </p>
                                { index === activeStep && (
                                    <motion.div
                                        className="text-gray-600 mt-2"
                                        initial={ { opacity: 0, height: 0 } }
                                        animate={ { opacity: 1, height: "auto" } }
                                        exit={ { opacity: 0, height: 0 } }
                                    >
                                        <p>{ step.description }</p>
                                        <input
                                            type="text"
                                            className="border p-2 w-full mt-2 rounded"
                                            placeholder={ step.placeholder }
                                            value={ formData[ index ] }
                                            onChange={ ( e ) => handleInputChange( index, e.target.value ) }
                                        />
                                    </motion.div>
                                ) }
                            </div>
                        </div>
                    </div>
                ) ) }
                <div className="flex justify-between mt-4">
                    <button
                        onClick={ goPrev }
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                        disabled={ activeStep === 0 }
                    >
                        Previous
                    </button>
                    { activeStep < steps.length - 1 ? (
                        <button
                            onClick={ goNext }
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                            disabled={ !formData[ activeStep ] }
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={ () => router.push( "/" ) }
                            className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
                            disabled={ !formData[ activeStep ] }
                        >
                            Finish
                        </button>
                    ) }
                </div>
            </div>
        </div>
    );
}