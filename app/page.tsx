"use client";

import { useState } from "react";
import Image from "next/image";
import { MoreVertical, Share2, Check } from "lucide-react";

// Types
interface LinkItem {
  title: string;
  description: string;
  href: string;
}

interface SocialItem {
  name: string;
  href: string;
  icon: "instagram" | "youtube" | "tiktok" | "whatsapp";
}

// ---------------------------------------------------------------------------
// PROFILE & REAL LINKS DATA
// ---------------------------------------------------------------------------
const profile = {
  name: "Ahmed khairy",
  tagline: "Hybrid Athlete",
  heroImage: "/hero.jpg",
};

const links: LinkItem[] = [
  {
    title: "TRAIN WITH ME  ",
    description: "",
    href: "https://wa.me/message/OW7BVKQQEABYK1",
  },
  {
    title: "Shop KGoing",
    description: "",
    href: "https://kgoing.com/?ref=AHMEDASHRAFKHAIRY",
  },

  {
    title: "Follow My Journey on Instagram",
    description: "",
    href: "https://www.instagram.com/ahmedkhaiiryy__?stkn=c2wxaHdvMzQ4enpw&utm_source=qr",
  },
  {
    title: "Watch on TikTok ",
    description: "",
    href: "https://www.tiktok.com/@ahmedkhairy640?_r=1&_t=ZS-99hg2Ef9pwq",
  },
];

const socials: SocialItem[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ahmedkhaiiryy__?stkn=c2wxaHdvMzQ4enpw&utm_source=qr",
    icon: "instagram",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ahmedkhairy640?_r=1&_t=ZS-99hg2Ef9pwq",
    icon: "tiktok",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@ahmedkhairyhybridathele?si=A9sROPnyosBbw_ur",
    icon: "youtube",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/message/OW7BVKQQEABYK1",
    icon: "whatsapp",
  },
];

// Crisp Social Icon SVGs
function SocialIcon({ icon }: { icon: SocialItem["icon"] }) {
  switch (icon) {
    case "instagram":
      return (
        <svg
          className="w-5 h-5 fill-none stroke-current stroke-[2.2]"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "youtube":
      return (
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-3.04-1.52z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29" />
        </svg>
      );
  }
}

export default function LinkInBio() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      const shareData = {
        title: "Ahmed khairy | Hybrid Athlete",
        text: "Check out Ahmed khairy's links and training resources",
        url: window.location.href,
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
          return;
        } catch {
          // Fallback to clipboard
        }
      }

      // Copy to clipboard fallback
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch {
        // clipboard error
      }
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#5c5040] flex justify-center items-start sm:py-6 md:py-10 px-0 sm:px-4">
      {/* Centered Mobile-style Container with Warm Earthy Background */}
      <div className="w-full max-w-[440px] bg-[#5e5241] sm:rounded-[36px] shadow-2xl shadow-black/40 overflow-hidden flex flex-col min-h-screen sm:min-h-0 border-0 sm:border sm:border-white/5">

        {/* ================================================================= */}
        {/* 1. HERO SECTION: LARGE, PROMINENT ATHLETE PHOTO                   */}
        {/* ================================================================= */}
        <div className="relative w-full h-[460px] sm:h-[500px] overflow-hidden select-none bg-[#5e5241]">
          {/* Athlete photo — bright, clear, running outdoors */}
          <Image
            src={profile.heroImage}
            alt={profile.name}
            fill
            priority
            className="object-cover object-[center_12%]"
          />

          {/* Top-Left: Star/Asterisk button */}
          <div className="absolute top-4 left-4 z-20">
            <button
              type="button"
              aria-label="Profile badge"
              className="w-9 h-9 rounded-full bg-black/35 hover:bg-black/50 backdrop-blur-md flex items-center justify-center text-white transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
              </svg>
            </button>
          </div>

          {/* Top-Right: Share button with Copy/Share feedback */}
          <div className="absolute top-4 right-4 z-20">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share profile"
              className="w-9 h-9 rounded-full bg-black/35 hover:bg-black/50 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 active:scale-95"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-300 stroke-[2.4]" />
              ) : (
                <Share2 className="w-4 h-4 stroke-[2.2]" />
              )}
            </button>
            {copied && (
              <span className="absolute -bottom-7 right-0 text-[11px] font-semibold bg-black/80 text-white px-2 py-0.5 rounded shadow whitespace-nowrap">
                Link copied!
              </span>
            )}
          </div>

          {/* Soft Bottom Fade: ONLY at the bottom 25% of the photo */}
          {/* Leaves the athlete fully clear and visible above! */}
          <div
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#5e5241] via-[#5e5241]/75 to-transparent pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Profile Name & Tagline positioned cleanly in the fade area */}
          <div className="absolute inset-x-0 bottom-3 z-20 flex flex-col items-center text-center px-4">
            <h1 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight drop-shadow font-sans">
              {profile.name}
            </h1>
            <p className="text-[14px] sm:text-[15px] font-medium text-[#ded8ce] tracking-wide mt-1 drop-shadow">
              {profile.tagline}
            </p>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. PRIMARY LINK BUTTONS (WARM TAN PILLS WITH REAL LINKS)          */}
        {/* ================================================================= */}
        <div className="w-full px-4 sm:px-5 pt-4 pb-6 flex flex-col gap-3.5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full px-6 py-4 rounded-full bg-[#948977] hover:bg-[#9e9381] active:scale-[0.985] hover:scale-[1.015] transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-between"
            >
              {/* Left spacer for optical center alignment */}
              <div className="w-4 shrink-0" aria-hidden="true" />

              {/* Centered Button Title & Description */}
              <div className="flex flex-col items-center text-center px-2">
                <span className="text-[#1b1712] font-bold text-[14px] sm:text-[15px] leading-snug group-hover:text-black transition-colors">
                  {link.title}
                </span>
                <span className="text-[#3c3529] text-xs sm:text-[13px] leading-tight mt-0.5 group-hover:text-[#252018] transition-colors">
                  {link.description}
                </span>
              </div>

              {/* Right: Three Dots Action Icon */}
              <div className="w-4 shrink-0 flex justify-end">
                <MoreVertical className="w-4 h-4 text-[#473e33] group-hover:text-[#1b1712] transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* ================================================================= */}
        {/* 3. SOCIAL ICONS ROW (INSTAGRAM, TIKTOK, YOUTUBE, WHATSAPP)        */}
        {/* ================================================================= */}
        <div className="w-full flex items-center justify-center gap-3.5 pt-1 pb-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="w-11 h-11 rounded-full bg-[#948977] hover:bg-[#9e9381] text-[#1b1712] hover:text-black flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>

        {/* ================================================================= */}
        {/* 4. FOOTER                                                         */}
        {/* ================================================================= */}
        <footer className="w-full text-center text-xs text-[#b3a897] font-medium tracking-wide pb-8 pt-1">
          <p>© {currentYear} {profile.name}</p>
        </footer>

      </div>
    </main>
  );
}
