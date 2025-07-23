"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Mail,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  ExternalLink,
  Shield,
  Terminal,
  Lock,
  Music,
  AtSign,
  X,
} from "lucide-react"
import { Card } from "@/components/ui/card"

const socialLinks = [
  {
    name: "Gmail",
    url: "mailto:samyakrm81@gmail.com",
    icon: Mail,
    color: "from-red-500 to-red-600",
    description: "Email me directly",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/2011560306660",
    icon: MessageCircle,
    color: "from-green-500 to-green-600",
    description: "Chat With Samy",
  },
  {
    name: "Telegram",
    url: "https://t.me/SAMY988",
    icon: Send,
    color: "from-blue-500 to-blue-600",
    description: "Chat With Samy",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/samy.badawy.16",
    icon: Facebook,
    color: "from-blue-600 to-blue-700",
    description: "Samy_Akrm",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/samy_akrm_/",
    icon: Instagram,
    color: "from-pink-500 to-purple-600",
    description: "Samy_Akrm",
  },
  {
    name: "Threads",
    url: "https://www.threads.com/@samy_akrm_",
    icon: AtSign,
    color: "from-gray-700 to-gray-800",
    description: "@samy_akrm_",
  },
  {
    name: "X",
    url: "https://x.com/SAMY84296102",
    icon: X,
    color: "from-gray-800 to-black",
    description: "SAMY",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@r00t_10xuu0",
    icon: Music,
    color: "from-pink-600 to-red-600",
    description: "@r00t_10xuu0",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/samyakrm/",
    icon: Linkedin,
    color: "from-blue-700 to-blue-800",
    description: "SamyAkrm",
  },
  {
    name: "GitHub",
    url: "https://github.com/RO0t0x0A",
    icon: Github,
    color: "from-gray-700 to-gray-900",
    description: "RO0t0x0A",
  },
]

export default function LinkTree() {
  const [mounted, setMounted] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Simple dot pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-md">
        {/* Header with cyber security theme */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-green-400" />
            <Terminal className="w-6 h-6 text-blue-400" />
            <Lock className="w-6 h-6 text-purple-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Cyber Security Engineer
          </h1>
          <div className="text-green-400 font-mono text-sm">{"> root@security:~$ whoami"}</div>
        </div>

        {/* Profile section */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
              <Image src="/profile.jpg" alt="Samy - Cyber Security Engineer" fill className="object-cover" priority />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Samy Akram</h2>
          <p className="text-gray-300 text-sm mb-4">Protecting digital assets • Ethical hacker • Security researcher</p>
          <div className="text-green-400 font-mono text-xs">{"[SECURE_CONNECTION_ESTABLISHED]"}</div>
        </div>

        {/* Social links */}
        <div className="space-y-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Card
                key={index}
                className="relative group cursor-pointer transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => window.open(link.url, "_blank")}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}
                ></div>

                <div className="relative p-4 flex items-center gap-4">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${link.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-white group-hover:text-white/90 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {link.description}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Hover effect border */}
                <div
                  className={`absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:${link.color.replace("from-", "border-").replace("to-", "")} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                ></div>
              </Card>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Secure • Verified • Trusted</span>
          </div>
          <p className="font-mono">{"© 2025 • Built with ❤️ and 🔒"}</p>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
