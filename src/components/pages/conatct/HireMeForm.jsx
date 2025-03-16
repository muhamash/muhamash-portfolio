'use client';

import { hireMeForm } from '@/utils/actions/formActions';
import { ArrowRight, Send } from 'lucide-react';
import Link from 'next/link';
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Checkbox } from '../projects/ui/CheckBox';
import { Button } from '../projects/ui/button';

const services = [
  { id: 'web-dev', label: 'Web Development' },
  { id: 'backend-dev', label: 'Backend Development' },
  { id: 'frontend-dev', label: 'Frontend Development' },
  { id: 'ecommerce-dev', label: 'Ecommerce Development' },
  { id: 'api-integration', label: 'API/WebSocket Integration' },
  { id: 'app-modernization', label: 'App Modernization' },
  { id: 'mvp-dev', label: 'MVP Development & Prototyping' },
];

export default function HireMeForm() {
  const [state, formAction] = useActionState(hireMeForm, { message: '' });
  const { pending } = useFormStatus();
  const [checkedServices, setCheckedServices] = useState([]);
  const [phone, setPhone] = useState('');

  const handleCheckboxChange = (id) => {
    setCheckedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  console.log( state );

  return (
    <form action={formAction} className="space-y-6 md:p-6 p-2 bg-white max-w-lg mx-auto text-black">
      {state.message && (
        <p className={`text-sm ${state.error ? 'text-red-600' : 'text-green-600'}`}>
          {state.message}
        </p>
      )}

      {/* Service Selection */}
      <div>
        <label className="block text-gray-700 font-semibold text-lg font-edu">Select Services</label>
        <div className="md:grid md:grid-cols-2 grid-cols-1 md:gap-3 mt-2 bg-slate-300 p-2 rounded-md shadow-sm hover:shadow-xl font-outfit">
          {services.map((service) => (
            <div key={service.id} className="flex items-center gap-2 py-1 md:py-0">
              <Checkbox
                id={service.id}
                name="services"
                value={service.id}
                onChange={() => handleCheckboxChange(service.id)}
              />
              <label htmlFor={service.id} className="text-gray-600">
                {service.label}
              </label>
            </div>
          ))}
        </div>
        {checkedServices.length === 0 && (
          <p className="text-red-500 text-sm mt-1 font-code">At least one service is required.</p>
        )}
      </div>

      {/* Name Input */}
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/50 font-outfit"
      />

      {/* Budget Input with Currency Selector */}
      <div className="flex items-center space-x-2 border rounded-lg px-4 py-2 w-full">
        <input
          id="budget"
          name="budget"
          type="number"
          placeholder="Your estimated budget"
          required
          onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
          className="w-full outline-none font-outfit"
        />
        <select
          id="currency"
          name="currency"
          className="bg-transparent outline-none cursor-pointer font-outfit"
        >
          <option value="BDT">BDT (৳)</option>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
        </select>
      </div>

      {/* Email Input */}
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/50 font-outfit "
      />

      {/* Phone Input */}
      <PhoneInput
        country={'bd'}
        value={phone}
        onChange={setPhone}
        inputProps={{
          name: 'phone',
          required: true,
        }}
        containerClass="w-full"
        inputClass="!w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/50 font-outfit"
      />

      {/* Project Details */}
      <textarea
        id="message"
        name="message"
        placeholder="Tell me about your project"
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/50 min-h-[120px] resize-none font-outfit"
      ></textarea>

      {/* How Did You Find Me? */}
      <input
        id="source"
        name="source"
        type="text"
        placeholder="How did you find me? (Optional)"
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/50 font-outfit"
      />

      {/* Confidentiality Notice */}
      <div className="text-sm text-rose-500 font-nunito">
        Note : Your information is kept confidential; Don't worry!!
      </div>

      {/* Submit Button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          className="btn-primary flex items-center justify-center w-full sm:w-auto font-outfit"
          disabled={pending}
        >
          <span>Send Message</span>
          {pending ? (
            <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent font-outfit"></div>
          ) : (
            <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 font-outfit" />
          )}
        </Button>

        {/* Email Contact */}
        <Link
          href="mailto:muhammad-ashraful@outlook.com"
          className="text-primary flex items-center justify-center gap-1 hover:text-primary/80 font-outfit"
        >
          <span className="font-code font-semibold text-violet-500">
            muhammad-ashraful@outlook.com
          </span>
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 font-outfit hover:text-green-700 hover:translate-x-2" />
        </Link>
      </div>
    </form>
  );
}