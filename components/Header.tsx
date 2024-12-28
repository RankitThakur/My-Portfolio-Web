"use client"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState, memo } from "react"
import { HiMenuAlt2, HiX, HiUser, HiCode, HiMail, HiRefresh } from "react-icons/hi"
import { socials } from "../constants/socials"
import Logo from "./Logo"

const Links = [
  {
    name: "About me",
    href: "/",
    icon: HiUser,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: HiCode,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: HiMail,
  },
]

const SocialIcons = memo(() => (
  <div className="flex flex-row space-x-4 text-[1.1em] md:text-[1.3rem]">
    {socials.map((social) => (
      <a
        key={social.name}
        href={social.url}
        rel="noopener noreferrer"
        className="flex items-center justify-center"
        target="_blank"
      >
        <social.icon className="fill-gray-400 hover:fill-neonGreen" />
      </a>
    ))}
  </div>
))

const NavigationDrawer = ({
  navigationDrawer,
  setNavigationDrawer,
}: {
  navigationDrawer: boolean
  setNavigationDrawer: React.Dispatch<React.SetStateAction<boolean>>
}) => (
  <AnimatePresence>
    {navigationDrawer && (
      <>
        <motion.div
          initial={{ opacity: 0, left: "-100%" }}
          animate={{ opacity: 1, left: "0" }}
          exit={{ opacity: 0, left: "-100%" }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] h-screen w-100 rounded-r-3xl bg-background2"
        >
          <div className="relative flex h-full w-full flex-col justify-between px-5 py-10">
            <div className="flex flex-row items-center justify-between">
              <Logo />
              <HiX className="cursor-pointer fill-gray-200 text-3xl" onClick={() => setNavigationDrawer(false)} />
            </div>
            <nav>
              <ul className="flex flex-col space-y-10 pl-4">
                {Links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <a className="flex flex-row items-center space-x-5">
                        <link.icon className="fill-gray-200 text-3xl" />
                        <span className="text-xl font-bold text-gray-200">{link.name}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <SocialIcons />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 h-screen w-full bg-background2"
          onClick={() => setNavigationDrawer(false)}
        />
      </>
    )}
  </AnimatePresence>
)

export default function Header() {
  const [navigationDrawer, setNavigationDrawer] = useState(false)

  return (
    <>
      <NavigationDrawer navigationDrawer={navigationDrawer} setNavigationDrawer={setNavigationDrawer} />

      <div className="relative z-10 w-full border-b-2 border-background2 bg-background">
        <div className="container mx-auto px-5 py-5 sm:py-8">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and Navigation Links */}
            <div className="flex items-center space-x-8">
              <div className="md:hidden">
                <HiMenuAlt2 className="cursor-pointer fill-gray-200 text-3xl" onClick={() => setNavigationDrawer(true)} />
              </div>
              <div className="hidden md:block">
                <Logo />
              </div>
              <div className="hidden md:flex space-x-8">
                {Links.map((link, i) => (
                  <Link href={link.href} key={i} passHref>
                    <a className="text-[0.93rem] font-semibold uppercase tracking-tight text-gray-100 hover:text-neonGreen">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - Resume Button and Social Icons */}
            <div className="flex space-y-4 flex-start">
              <div>
                <Link
                  href="/https://drive.google.com/file/d/1cYwHDvVG4ZRAqcS358lvMMbx--fDpGfF/view?usp=sharing"
                  passHref
                >
                  <a className="flex items-center space-x-2 rounded-md border-2 border-neonGreen bg-background px-3 py-2 text-sm font-bold sm:space-x-3 sm:px-5 sm:py-2 md:text-lg">
                    <HiRefresh className="fill-neonGreen" />
                    <span className="text-neonGreen">Get Resume</span>
                  </a>
                </Link>
              </div>
              <div className="hidden md:block ml-4">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

