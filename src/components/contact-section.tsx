/* eslint-disable react-hooks/exhaustive-deps */
"use client"; 

import { useForm, ValidationError } from '@formspree/react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID!;
  if (!formId) {
    console.warn("NEXT_PUBLIC_FORMSPREE_FORM_ID Error: Was not configured correctly");
  }

  const [state, handleSubmit] = useForm(formId);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-16 px-8 bg-white text-black transition-all duration-1000 ease-out dark:bg-background dark:text-foreground ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-12">Get in touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Do you have a project in mind or want to learn more about how I can help? Feel free to send me a
              message or connect through my social media.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <Linkedin className="w-6 h-6" />
                <Link
                  href="https://www.linkedin.com/in/teteudev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  teteudev
                </Link>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Mail className="w-6 h-6" />
                <Link href="mailto:teteudeveloper@gmail.com" className="hover:underline">
                  teteudeveloper@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {state.succeeded ? (
              <p className="text-green-600 text-lg font-medium">Mensagem enviada com sucesso!</p>
            ) : (
              <>
                <div>
                  <Label htmlFor="name" className="text-lg">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black dark:border-border dark:focus:ring-ring dark:focus:border-ring dark:bg-input dark:text-foreground"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-lg">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black dark:border-border dark:focus:ring-ring dark:focus:border-ring dark:bg-input dark:text-foreground"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <Label htmlFor="message" className="text-lg">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black dark:border-border dark:focus:ring-ring dark:focus:border-ring dark:bg-input dark:text-foreground"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 text-lg bg-black text-white hover:bg-gray-800 dark:bg-primary dark:text-primary-foreground dark:hover:bg-gray-200"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}