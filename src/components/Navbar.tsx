"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { HomeIcon, LearnIcon, QuizIcon, ProgressIcon, BookIcon, FileTextIcon } from "@/components/icons/NavIcons";

const navItems = [
  { href: "/", icon: <HomeIcon />, label: "Home" },
  { href: "/learn", icon: <LearnIcon />, label: "Belajar" },
  { href: "/vocabulary", icon: <BookIcon />, label: "Kosakata" },
  { href: "/levels", icon: <QuizIcon />, label: "Ujian" },
  { href: "/stories", icon: <FileTextIcon />, label: "Bacaan" },
  { href: "/progress", icon: <ProgressIcon />, label: "Progress" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Navigasi utama">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item ${isActive ? "active" : ""}`}
            aria-current={isActive ? "page" : undefined}
            id={`nav-${item.label.toLowerCase()}`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 32,
                  height: 2,
                  background: "var(--gradient-purple)",
                  borderRadius: "var(--radius-full)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="nav-indicator-line"
              />
            )}
            <motion.span
              className="nav-icon"
              animate={{ scale: isActive ? 1.15 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              aria-hidden="true"
            >
              {item.icon}
            </motion.span>
            <span className="nav-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
