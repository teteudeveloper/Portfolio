"use client"

import { Button } from "../components/ui/button"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black text-white py-6 px-8 flex items-center justify-between dark:bg-background dark:text-foreground">
      <p className="text-gray-400 text-sm">© {new Date().getFullYear()} - All rights reserved.</p>
      <Button
        onClick={scrollToTop}
        className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors dark:bg-primary dark:text-primary-foreground dark:hover:bg-gray-700"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  )
}