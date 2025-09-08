"use client"

import { Button } from "../components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="outset"
      ref={sectionRef}
      className={`flex flex-col items-start justify-center py-16 px-8 transition-all duration-1000 ease-out dark:bg-background dark:text-foreground ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto md:mx-0 md:ml-24">
        {" "}
        <h2 className="text-4xl font-bold mb-2 pt-4">Hello, my name is</h2>
        <h1 className="text-6xl font-extrabold mb-6">Matheus</h1>
        <p className="text-lg leading-relaxed max-w-md mb-8">
          I&apos;m a full-stack developer and cybersecurity enthusiast, focused on building modern, high-performance, and secure web applications.
          I constantly strive to improve my technical skills and apply best security practices at every stage of development.
        </p>
        <div className="flex space-x-4 mb-8 justify-start">
          <Link
            href="https://github.com/teteudeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-black rounded-full hover:bg-gray-100 transition-colors dark:border-white dark:hover:bg-gray-800"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/teteudev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-black rounded-full hover:bg-gray-100 transition-colors dark:border-white dark:hover:bg-gray-800"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
        <Link href="#contact">
          <Button className="px-8 py-6 text-lg bg-black text-white hover:bg-gray-800 dark:bg-primary dark:text-primary-foreground dark:hover:bg-gray-200">
            Get in touch
          </Button>
        </Link>
      </div>
    </section>
  )
}