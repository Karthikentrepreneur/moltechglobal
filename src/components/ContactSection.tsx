// src/components/GetInTouchCard.tsx
import React, { useState } from "react";

const GetInTouchCard: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Dummy submit simulation
    setTimeout(() => {
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Row 2: Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="+61 ..."
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Row 3: Subject */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="How can we help you?"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Row 4: Message (no transportation method text) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Type your message here"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-submit inline-flex items-center justify-center"
          data-submit
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default GetInTouchCard;
