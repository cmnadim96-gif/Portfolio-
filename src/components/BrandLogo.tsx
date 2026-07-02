import React from "react";

interface BrandLogoProps {
  logoId: string;
  className?: string;
}

export function BrandLogo({ logoId, className = "w-10 h-10" }: BrandLogoProps) {
  switch (logoId) {
    case "the_dapper_dude":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-black rounded-lg p-1`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dotted Diamond border */}
          <rect x="50" y="8" width="59" height="59" transform="rotate(45 50 8)" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
          <rect x="50" y="11" width="55" height="55" transform="rotate(45 50 11)" stroke="white" strokeWidth="0.5" />
          {/* "The" in script font */}
          <text x="50" y="32" fill="white" fontSize="9" fontWeight="300" fontStyle="italic" textAnchor="middle" fontFamily="Georgia, serif">The</text>
          {/* Bold serif "DAPPER" */}
          <text x="50" y="55" fill="white" fontSize="19" fontWeight="900" letterSpacing="0.5" textAnchor="middle" fontFamily="'Times New Roman', Times, serif">DAPPER</text>
          {/* Cursive overlay "Dude" */}
          <text x="50" y="74" fill="white" fontSize="13" fontStyle="italic" fontWeight="bold" textAnchor="middle" fontFamily="Georgia, serif">Dude</text>
        </svg>
      );

    case "rehnuma":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-slate-900 rounded-lg p-1`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Metallic emblem shape (abstract calligraphy/crown motif) */}
          <path d="M50 15C50 15 42 28 35 32C32 34 30 38 31 43C32 48 37 51 42 51C47 51 48 45 48 42C48 35 44 32 44 28C44 24 50 20 50 20C50 20 56 24 56 28C56 32 52 35 52 42C52 45 53 51 58 51C63 51 68 48 69 43C70 38 68 34 65 32C58 28 50 15 50 15Z" fill="url(#rehnuma-silver-grad)" />
          {/* Dots on side curves */}
          <circle cx="34" cy="40" r="1.5" fill="#e2e8f0" />
          <circle cx="36" cy="43" r="1.2" fill="#cbd5e1" />
          <circle cx="38" cy="46" r="1" fill="#94a3b8" />
          <circle cx="66" cy="40" r="1.5" fill="#e2e8f0" />
          <circle cx="64" cy="43" r="1.2" fill="#cbd5e1" />
          <circle cx="62" cy="46" r="1" fill="#94a3b8" />
          {/* Brand Name "REHNUMA" */}
          <text x="50" y="72" fill="#ffffff" fontSize="11" fontWeight="800" letterSpacing="1" textAnchor="middle" fontFamily="serif">REHNUMA</text>
          {/* Subtitle */}
          <text x="50" y="85" fill="#94a3b8" fontSize="5" fontWeight="500" letterSpacing="0.2" textAnchor="middle">Respect Your Emotion</text>
          
          <defs>
            <radialGradient id="rehnuma-silver-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(50 30) rotate(90) scale(25)">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#475569" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "eagle_chef":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-[#d00000] rounded-lg p-1`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Red background is built into the card */}
          {/* Eagle head profile pointing right */}
          <path d="M25 75C25 75 35 70 38 65C40 62 38 58 35 55C30 51 28 45 32 38C35 32 45 28 55 32C65 36 72 45 70 55C68 65 60 72 52 75C45 78 35 78 25 75Z" fill="white" />
          {/* Chef Hat on Eagle */}
          <path d="M35 35C35 35 32 25 38 20C44 15 48 22 52 18C56 14 62 18 64 24C66 30 60 32 58 35C56 38 35 35 35 35Z" fill="white" stroke="#ff8200" strokeWidth="1.5" />
          {/* Orange beak */}
          <path d="M58 43C58 43 68 43 72 47C70 51 64 53 58 51L58 43Z" fill="#ff8200" />
          {/* Eagle eye */}
          <circle cx="48" cy="42" r="2.5" fill="#111827" />
          {/* Orange trim detail */}
          <path d="M35 55C35 55 42 62 48 60C54 58 56 68 52 73" stroke="#ff8200" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "sm_mattress":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-white rounded-lg p-1 border border-slate-100`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cyan Glow outer circle */}
          <circle cx="50" cy="50" r="42" stroke="#00f0ff" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="44" stroke="#00f0ff" strokeWidth="0.5" strokeDasharray="1 3" />
          {/* Stylized "S" in bold black */}
          <path d="M30 38C30 32 42 30 42 36C42 42 28 40 28 48C28 54 42 56 42 50" stroke="#000000" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Stylized "M" in vibrant blue */}
          <path d="M46 54V34L54 44L62 34V54" stroke="#0082f0" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Silver/Cyan ribbon wave */}
          <path d="M25 65C35 60 45 70 55 65C65 60 75 68 75 68" stroke="url(#sm-ribbon-grad)" strokeWidth="3" strokeLinecap="round" />
          {/* Subtitle text */}
          <text x="50" y="86" fill="#1e293b" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" letterSpacing="0.2">ORTHOPEDIC MATTRESS</text>
          
          <defs>
            <linearGradient id="sm-ribbon-grad" x1="25" y1="65" x2="75" y2="65" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#0082f0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "ss_skincare":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-slate-950 rounded-lg p-1`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Golden embossed woman's profile with lotus floral details */}
          <path d="M38 58C36 53 36 45 42 38C46 34 52 32 55 24C53 32 57 34 59 36C63 40 65 46 60 52C58 54 54 56 50 58C45 60 41 62 38 58Z" fill="url(#ss-gold-grad)" />
          {/* Lotus Flowers */}
          <path d="M35 34C35 34 30 25 35 20C40 25 35 34 35 34Z" fill="url(#ss-gold-grad)" />
          <path d="M31 38C31 38 24 32 26 26C30 28 31 38 31 38Z" fill="url(#ss-gold-grad)" />
          {/* Moon-like circle frame segment */}
          <path d="M62 30C68 36 68 46 62 52" stroke="url(#ss-gold-grad)" strokeWidth="1.5" strokeLinecap="round" />
          {/* "SS SKIN CARE BD" */}
          <text x="50" y="78" fill="url(#ss-gold-grad)" fontSize="8.5" fontWeight="800" textAnchor="middle" fontFamily="serif" letterSpacing="0.2">SS SKIN CARE BD</text>
          
          <defs>
            <linearGradient id="ss-gold-grad" x1="30" y1="20" x2="70" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffe49e" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#aa7c11" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "taqwa_travels":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-[#0c1524] rounded-lg p-1`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Isometric Kaaba box (Teal themed) */}
          <g transform="translate(50, 42)">
            {/* Top Face */}
            <path d="M0 -15L16 -7L0 1L-16 -7Z" fill="#14b8a6" />
            {/* Left Face */}
            <path d="M-16 -7L0 1V16L-16 8Z" fill="#0d9488" />
            {/* Right Face */}
            <path d="M0 1L16 -7V8L0 16Z" fill="#0f766e" />
            {/* Golden Ribbon accent */}
            <path d="M-16 -1L0 7L16 -1" stroke="#f59e0b" strokeWidth="1" fill="none" />
          </g>
          {/* Gold airplane taking off */}
          <path d="M35 60C45 60 55 54 62 45C68 36 70 28 72 24" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <path d="M68 22L75 22L73 29L71 25L68 22Z" fill="#f59e0b" />
          {/* Branding */}
          <text x="50" y="76" fill="#f59e0b" fontSize="7" fontWeight="900" textAnchor="middle" letterSpacing="0.2">TAQWA TOURS</text>
          <text x="50" y="86" fill="#ffffff" fontSize="6.5" fontWeight="700" textAnchor="middle" letterSpacing="0.5">AND TRAVELS</text>
        </svg>
      );

    case "al_kafi":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-black rounded-lg p-1`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Islamic Calligraphy emblem shaped like a leaf/teardrop */}
          <path d="M50 16C50 16 35 32 35 46C35 56 42 62 50 62C58 62 65 56 65 46C65 32 50 16 50 16ZM50 24C53 32 58 40 58 46C58 51 54 54 50 54C46 54 42 51 42 46C42 40 47 32 50 24Z" fill="url(#alkafi-gold)" />
          {/* Abstract calligraphic strokes inside */}
          <path d="M47 38C47 38 53 38 53 44C53 50 45 48 48 52" stroke="url(#alkafi-gold)" strokeWidth="1.5" strokeLinecap="round" />
          
          <text x="50" y="76" fill="url(#alkafi-gold)" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="0.5" fontFamily="serif">AL-KAFI</text>
          <text x="50" y="87" fill="#ffe49e" fontSize="5" fontWeight="600" textAnchor="middle" letterSpacing="0.1">ISLAMIC LIFESTYLE BRAND</text>
          
          <defs>
            <linearGradient id="alkafi-gold" x1="30" y1="16" x2="70" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fff2cb" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#aa7c11" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "duaa_lifestyle":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-white rounded-lg p-1 border border-slate-100`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Geometric block letter "D" representation */}
          <path d="M22 30H42C48 30 52 34 52 40V46C52 52 48 56 42 56H22V30Z" stroke="#000000" strokeWidth="7" strokeLinejoin="round" />
          <rect x="29" y="37" width="10" height="12" fill="#000000" />
          {/* "UA A" */}
          <text x="68" y="47" fill="#000000" fontSize="18" fontWeight="900" letterSpacing="-0.5" textAnchor="middle" fontFamily="sans-serif">UAA</text>
          {/* Red line accent */}
          <line x1="22" y1="62" x2="78" y2="62" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
          {/* Subtitle */}
          <text x="50" y="78" fill="#1e293b" fontSize="9" fontWeight="700" letterSpacing="0.5" textAnchor="middle" fontFamily="sans-serif">Lifestyle</text>
          <text x="76" y="32" fill="#dc2626" fontSize="5" fontWeight="900">TM</text>
        </svg>
      );

    case "islamic_shop":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-slate-50 rounded-lg p-1 border border-slate-100`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Modern abstract loop lettermark */}
          <path d="M35 55C35 42 45 32 50 44C55 56 65 42 65 42" stroke="url(#is-blue-orange)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="35" cy="34" r="5" fill="#3b82f6" />
          <circle cx="65" cy="34" r="5" fill="#f97316" />
          {/* Branding text */}
          <text x="50" y="74" fill="#1e3a8a" fontSize="8" fontWeight="900" textAnchor="middle">Islamic <tspan fill="#f97316">Shop</tspan> BD</text>
          
          <defs>
            <linearGradient id="is-blue-orange" x1="30" y1="30" x2="70" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "sunnah_shop":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-[#0b3336] rounded-lg p-1`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neon Ring */}
          <circle cx="50" cy="50" r="42" stroke="#00f0ff" strokeWidth="1.2" />
          {/* Calligraphic white silhouette */}
          <path d="M50 20C44 20 38 26 38 32C38 36 42 38 45 35C48 32 46 26 50 26C54 26 58 32 56 38C54 44 42 50 36 46C34 44 32 38 30 42C28 46 34 56 46 56C58 56 68 44 68 32C68 24 58 20 50 20Z" fill="white" />
          {/* Small star accent */}
          <polygon points="50,15 52,18 55,18 53,20 54,23 50,21 46,23 47,20 45,18 48,18" fill="#00f0ff" />
          {/* Branding */}
          <text x="50" y="75" fill="white" fontSize="9.5" fontWeight="900" textAnchor="middle" letterSpacing="0.5">SUNNAH</text>
          <text x="50" y="86" fill="#00f0ff" fontSize="8.5" fontWeight="800" textAnchor="middle" letterSpacing="1">SHOP</text>
        </svg>
      );

    case "najah":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-[#000000] rounded-lg p-1`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Beautiful flowing white calligraphy with red diacritics */}
          <path d="M30 45C35 42 42 38 48 44C54 50 56 34 60 30C64 26 70 34 68 46C66 58 52 64 42 60C35 57 32 50 30 45Z" fill="none" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M42 60C45 64 50 66 54 64" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          {/* Red diamond calligraphic dots */}
          <rect x="52" y="26" width="3.5" height="3.5" fill="#dc2626" transform="rotate(45 52 26)" />
          <rect x="35" y="58" width="3.5" height="3.5" fill="#dc2626" transform="rotate(45 35 58)" />
          {/* Bangla branding underneath */}
          <text x="50" y="84" fill="white" fontSize="10.5" fontWeight="800" textAnchor="middle" letterSpacing="1" fontFamily="sans-serif">নাজাহ</text>
        </svg>
      );

    case "gift_king":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-white rounded-lg p-1 border border-slate-100`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gift box graphic in pink & cyan */}
          <rect x="28" y="38" width="44" height="34" rx="4" fill="#ec4899" />
          <rect x="25" y="32" width="50" height="8" rx="2" fill="#f472b6" />
          {/* Cyan ribbon band */}
          <rect x="46" y="32" width="8" height="40" fill="#06b6d4" />
          {/* Heart/Ribbon loop on top */}
          <path d="M42 22C38 18 45 15 50 25C55 15 62 18 58 22C54 26 50 28 50 28C50 28 46 26 42 22Z" fill="#06b6d4" />
          {/* Branding text */}
          <text x="50" y="86" fill="#ec4899" fontSize="9" fontWeight="900" textAnchor="middle">GIFT KING <tspan fill="#06b6d4">BD</tspan></text>
        </svg>
      );

    case "epos_bd":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-[#110c1c] rounded-lg p-1`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neon gradient rounded box */}
          <rect x="15" y="15" width="70" height="70" rx="14" stroke="url(#epos-neon-grad)" strokeWidth="2.5" />
          {/* Hexagonal icon inner */}
          <polygon points="50,26 66,35 66,53 50,62 34,53 34,35" stroke="#10b981" strokeWidth="1.5" fill="none" />
          {/* "EPOS" in modern font */}
          <text x="50" y="48" fill="white" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="0.5" fontFamily="sans-serif">EPOS</text>
          <text x="50" y="56" fill="#10b981" fontSize="5" fontWeight="800" textAnchor="middle" letterSpacing="0.2">COM.BD</text>
          {/* Glow spots */}
          <circle cx="15" cy="15" r="3" fill="#10b981" filter="blur(1px)" />
          <circle cx="85" cy="85" r="3" fill="#8b5cf6" filter="blur(1px)" />
          
          <defs>
            <linearGradient id="epos-neon-grad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "most_collection":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-[#e01a22] rounded-lg p-1`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* White inner circle */}
          <circle cx="50" cy="50" r="42" fill="white" />
          {/* Elegant gold and black Arabic calligraphic monogram monogram representing "M" */}
          <path d="M50 25C42 25 36 34 36 42C36 50 40 55 45 55C48 55 50 51 50 48C50 42 45 42 45 36C45 30 50 28 50 28C50 28 55 30 55 36C55 42 50 42 50 48C50 51 52 55 55 55C60 55 64 50 64 42C64 34 58 25 50 25Z" fill="#1e293b" />
          <path d="M50 25C50 25 54 18 50 15C46 18 50 25 50 25Z" fill="#d4af37" />
          {/* Golden outline details */}
          <circle cx="50" cy="50" r="38" stroke="#d4af37" strokeWidth="1.5" fill="none" />
          {/* Branding text */}
          <text x="50" y="80" fill="#1e293b" fontSize="7" fontWeight="900" textAnchor="middle" letterSpacing="0.2">MOST COLLECTION</text>
        </svg>
      );

    case "daily_choice":
      return (
        <svg viewBox="0 0 100 100" className={`${className} bg-white rounded-lg p-1 border border-amber-400`} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* White circle with yellow border is the theme */}
          {/* House icon outline in orange/black */}
          <path d="M50 24L28 42H36V62H64V42H72L50 24Z" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinejoin="round" />
          <rect x="46" y="48" width="8" height="14" fill="#1e293b" />
          {/* "DAILY CHOICE BD" */}
          <text x="50" y="74" fill="#1e3a8a" fontSize="7.5" fontWeight="900" textAnchor="middle">DAILY CHOICE <tspan fill="#f59e0b">BD</tspan></text>
          {/* Bangla text */}
          <text x="50" y="84" fill="#475569" fontSize="4.5" fontWeight="700" textAnchor="middle">আস্থার সাথে বেছে নিন</text>
        </svg>
      );

    default:
      // Generic fallback
      return (
        <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#3a86ff]/20 to-blue-500/20 flex items-center justify-center text-[#3a86ff] font-extrabold text-sm border border-white/10">
          {logoId.charAt(0).toUpperCase()}
        </div>
      );
  }
}
