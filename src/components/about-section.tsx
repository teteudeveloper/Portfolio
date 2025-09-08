/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Button } from "../components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const skills = [
    { name: "HTML", imageSrc: "/html5.svg" },
    { name: "CSS", imageSrc: "/css.svg" },
    { name: "Tailwind CSS", imageSrc: "/tailwindcss.svg" },
    { name: "TypeScript", imageSrc: "/ts.svg" },
    { name: "JavaScript", imageSrc: "/js.svg" },
    { name: "React", imageSrc: "/react.svg" },
    { name: "Next.js", imageSrc: "/nextjs.svg" },
    { name: "Node.js", imageSrc: "/nodejs.svg" },
    { name: "Python", imageSrc: "/python.svg" },
    { name: "MySQL", imageSrc: "/mysql.svg" },
    { name: "MongoDB", imageSrc: "/mongodb.svg" },
    { name: "PostgreSQL", imageSrc: "/postgresql.svg" },
    { name: "Git", imageSrc: "/git.svg" },
    { name: "AWS", imageSrc: "/aws.svg" },
    { name: "Docker", imageSrc: "/docker.svg" },
    { name: "Kubernetes", imageSrc: "/kubernetes.svg" },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-16 px-8 bg-gray-50 text-black transition-all duration-1000 ease-out dark:bg-background dark:text-foreground ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-extrabold text-black mb-6 dark:text-foreground">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I work on developing complete systems, from front-end to back-end, always focusing on performance,
            usability, and information security. I have a special interest in cybersecurity and its integration into the software development cycle.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            With a solid and up-to-date approach, I contribute to the creation of reliable, scalable digital solutions
            that are aligned with industry best practices. I am constantly evolving, keeping up with the trends and technologies
            that drive the construction of more efficient and resilient systems.
          </p>
          <Link href="#about">
            <Button className="px-8 py-6 text-lg bg-black text-white hover:bg-gray-800 dark:bg-primary dark:text-primary-foreground dark:hover:bg-gray-200">
              More information
            </Button>
          </Link>
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-black mb-6 dark:text-foreground">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 dark:bg-card dark:border-border dark:hover:shadow-xl"
              >
                <Image
                  src={skill.imageSrc || "/placeholder.svg"}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="mb-2 object-contain"
                />
                <span className="text-lg font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}