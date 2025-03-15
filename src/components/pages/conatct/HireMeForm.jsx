'use client';

import { ArrowRight, Send } from 'lucide-react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
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

// Mock form submission handler
async function submitForm(prevState, formData) {
  // Simulate a delay for submission
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Log form data
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
    source: formData.get('source'),
    services: formData.getAll('services'),
  };
  console.log('Submitting Form:', data);

  // Return a success message or error state
  return { message: 'Form submitted successfully!' };
}

export default function HireMeForm() {
  const [state, formAction] = useActionState(submitForm, { message: '' });
  const { pending } = useFormStatus();

  return (
    <form
      action={formAction}
      className="space-y-6 p-6 bg-white shadow-lg rounded-2xl max-w-lg mx-auto border border-gray-200 text-black"
    >
      <h2 className="text-xl font-semibold text-gray-800">Let's Work Together</h2>
      
      <div>
        <label className="block text-gray-700 font-medium">Select Services</label>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {services.map((service) => (
            <div key={service.id} className="flex items-center gap-2">
              <Checkbox
                id={service.id}
                name="services"
                value={service.id}
              />
              <label htmlFor={service.id} className="text-gray-600">
                {service.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/50"
      />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/50"
      />
      <input
        id="phone"
              name="phone"
              inputMode="numeric"
        type="tel"
        placeholder="Phone Number (Optional)"
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/50"
      />
      <textarea
        id="message"
        name="message"
        placeholder="Tell me about your project"
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/50 min-h-[120px] resize-none"
      ></textarea>
      <input
        id="source"
        name="source"
        type="text"
        placeholder="How did you find me? (Optional)"
        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-primary/50"
      />
      
      <div className="text-sm text-gray-500">Your information is kept confidential.</div>
      
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          className="btn-primary flex items-center justify-center w-full sm:w-auto"
          disabled={pending}
        >
          <span>Send Message</span>
          {pending ? (
            <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          ) : (
            <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </Button>

        <a href="mailto:contact@example.com" className="text-primary flex items-center gap-1 hover:text-primary/80">
          <span>contact@example.com</span>
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 hover:text-green-700 hover:translate-x-2" />
        </a>
      </div>

      {state.message && <p className="text-sm text-green-600">{state.message}</p>}
    </form>
  );
}