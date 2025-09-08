"use client"

import { useState, useEffect, useRef } from "react" 
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const headerRef = useRef<HTMLElement>(null) 

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (headerRef.current) {
      const updateHeaderHeight = () => {
        document.documentElement.style.setProperty("--header-dynamic-height", `${headerRef.current?.offsetHeight}px`)
      }

      updateHeaderHeight()
      window.addEventListener("resize", updateHeaderHeight)

      return () => {
        window.removeEventListener("resize", updateHeaderHeight)
      }
    }
  }, [isMenuOpen, mounted]) 

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <header
      ref={headerRef} 
      className="flex flex-col bg-white text-black border-b border-gray-200 fixed top-0 w-full z-50 dark:bg-background dark:text-foreground dark:border-border"
    >
      <div className="flex items-center justify-between px-8 py-6 w-full">
        <div className="text-xl font-bold">Matheus Ramalho</div>

        <div className="flex items-center md:space-x-8 ml-auto">
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#outset"
              className="relative text-lg font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 dark:after:bg-white"
            >
              Outset
            </Link>
            <Link
              href="#about"
              className="relative text-lg font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 dark:after:bg-white"
            >
              About
            </Link>
            <Link
              href="#services"
              className="relative text-lg font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 dark:after:bg-white"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="relative text-lg font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 dark:after:bg-white"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-2 md:hidden">
            {" "}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu"
              className="bg-transparent hover:bg-transparent"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Alternar tema"
              className="bg-transparent hover:bg-transparent" 
            >
              {theme === "dark" ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-black" />}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Alternar tema"
            className="hidden md:block bg-transparent hover:bg-transparent"
          >
            {theme === "dark" ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-black" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-start p-4 space-y-4 border-t border-gray-200 dark:border-border">
            <Link
              href="#outset"
              className="text-lg font-medium hover:text-gray-700 transition-colors dark:hover:text-gray-300"
              onClick={handleLinkClick}
            >
              Outset
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium hover:text-gray-700 transition-colors dark:hover:text-gray-300"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-lg font-medium hover:text-gray-700 transition-colors dark:hover:text-gray-300"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:text-gray-700 transition-colors dark:hover:text-gray-300"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}