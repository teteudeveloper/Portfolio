"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Code, ShieldCheck, Server } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Building modern, high-performance, and secure web applications from front-end to back-end, ensuring scalability and usability.",
      link: "#",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Integration",
      description:
        "Implementing robust security measures and integrating cybersecurity best practices into the software development lifecycle.",
      link: "#",
    },
    {
      icon: Server,
      title: "Cloud and Infrastructure Management",
      description:
        "Managing IT infrastructure, optimizing networks, and configuring servers in cloud environments for stability and security.",
      link: "#",
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-20 px-6 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-white dark:bg-background`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-black dark:text-foreground">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ icon: Icon, title, description, link }, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between h-full bg-gray-50 dark:bg-card dark:border-border shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="flex flex-col items-center gap-4 pt-8 text-center">
                <Icon className="w-12 h-12 text-black dark:text-foreground" />
                <CardTitle className="text-xl font-semibold text-black dark:text-foreground">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-grow text-gray-700 dark:text-muted-foreground text-center px-6 pb-8">
                <div className="flex-grow">
                  <p className="mb-6 text-sm leading-relaxed">{description}</p>
                </div>
                <Link href={link}>
                  <Button className="w-full text-base font-medium bg-black text-white hover:bg-gray-800 dark:bg-primary dark:text-primary-foreground dark:hover:bg-gray-200">
                    More information
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}