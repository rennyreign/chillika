"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Offers", href: "#offers" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#footer" },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50"
      style={{ height: "94px" }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: "1320px",
          height: "94px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <img
            src="/chillika/images/home/brand_logo_primary.webp"
            alt="Chillika logo"
            style={{ width: "150px", maxHeight: "50px", objectFit: "contain" }}
          />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-[14px] font-medium transition-colors duration-[180ms] hover:text-[#E8A34A]"
              style={{
                color: item.label === "Home" ? "#E8A34A" : "#FFFFFF",
                marginLeft: "38px",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#footer"
          className="hidden lg:inline-flex items-center justify-center font-sans font-semibold text-[14px] text-white transition-all duration-[180ms] ease-out hover:-translate-y-[1px] hover:brightness-90"
          style={{
            width: "152px",
            height: "52px",
            background: "#D85D18",
            borderRadius: "8px",
            boxShadow: "0 6px 16px rgba(123,55,16,0.25)",
          }}
        >
          Book a Table
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          style={{ color: "#FFFFFF" }}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="lg:hidden absolute top-full left-0 right-0"
          aria-label="Mobile navigation"
          style={{ background: "#092E21" }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block font-sans text-[16px] font-medium text-white transition-colors hover:text-[#E8A34A]"
              style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#footer"
            onClick={() => setMobileOpen(false)}
            className="block font-sans text-[16px] font-semibold text-white text-center"
            style={{
              margin: "16px 20px",
              height: "48px",
              lineHeight: "48px",
              background: "#D85D18",
              borderRadius: "8px",
            }}
          >
            Book a Table
          </a>
        </nav>
      )}
    </header>
  )
}
