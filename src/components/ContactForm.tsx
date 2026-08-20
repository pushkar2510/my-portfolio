"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Sparkles, CheckCircle2, Send } from "lucide-react";
import { profileData } from "@/data/portfolioData";

export const ContactForm: React.FC = () => {
  const [formState, handleFormSubmit] = useForm("mjybakwd");

  return (
    <section aria-label="Contact" className="space-y-6 animate-fadeIn">
      <div className="space-y-1">
        <h2 className="text-white text-base font-medium flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>let's build together</span>
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm">
          Reach out for collaborations, project inquiries, or freelance opportunities.
        </p>
      </div>

      {formState.succeeded ? (
        <div className="bg-neutral-800/30 border border-neutral-800 p-6 sm:p-8 rounded-lg text-center space-y-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-400/10 text-amber-400 mb-1">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-white text-sm font-medium">Message sent successfully!</h3>
          <p className="text-neutral-400 text-xs max-w-sm mx-auto">
            Thanks for reaching out! I've received your note and will get back to you shortly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="space-y-4 bg-neutral-800/20 p-4 sm:p-5 rounded-lg border border-neutral-800"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs text-neutral-400">
                your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="e.g. Alex"
                className="w-full bg-neutral-900/80 border border-neutral-700/80 rounded px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={formState.errors}
                className="text-red-400 text-[11px]"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs text-neutral-400">
                your email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="e.g. alex@example.com"
                className="w-full bg-neutral-900/80 border border-neutral-700/80 rounded px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={formState.errors}
                className="text-red-400 text-[11px]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-xs text-neutral-400">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Write your message here..."
              className="w-full bg-neutral-900/80 border border-neutral-700/80 rounded px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-amber-400 transition-colors resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={formState.errors}
              className="text-red-400 text-[11px]"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
            <button
              type="submit"
              disabled={formState.submitting}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-medium text-xs rounded transition-colors disabled:opacity-50"
            >
              {formState.submitting ? (
                <span>sending...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>send message</span>
                </>
              )}
            </button>

            <p className="text-neutral-500 text-[11px]">
              or email directly at{" "}
              <a
                href={`mailto:${profileData.email}`}
                className="text-amber-400/90 hover:underline"
              >
                {profileData.email}
              </a>
            </p>
          </div>
        </form>
      )}
    </section>
  );
};
