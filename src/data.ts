/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  percentage: number;
  iconClass: string; // Font Awesome 6 icon classes
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string; // This image will have the smooth vertical scroll effect on hover
  liveUrl: string;
  detailsUrl?: string;
  results: string; // Digital marketing portfolios focus on ROI and results
}

export interface Experience {
  duration: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  comment: string;
}

export interface Brand {
  name: string;
  logoUrl?: string;
  logoId?: string;
  industry: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    englishName: string;
    title: string;
    subtitle: string;
    profileImage: string;
    phone: string;
    email: string;
    location: string;
    aboutText: string;
    experienceYears: number;
    completedProjects: number;
    happyClients: number;
    successRate: string;
  };
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    whatsapp?: string;
    youtube?: string;
  };
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  testimonials: Testimonial[];
  brands: Brand[];
  contactConfig: {
    telegramBotToken: string; // User's Telegram Bot Token
    telegramChatId: string;    // User's Telegram Chat ID
    googleFormActionUrl: string; // Google Form post submission URL
  };
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "নাদিম হাসান চৌধুরী",
    englishName: "Nadim Hasan Chowdhury",
    title: "ডিজিটাল মার্কেটিং ও গ্রোথ স্পেশালিস্ট",
    subtitle: "ডাটা-ড্রাইভেন মার্কেটিং এবংROI-ভিত্তিক ক্যাম্পেইনের মাধ্যমে ব্যবসার দ্রুত সেলস ও ব্রান্ড ভ্যালু বৃদ্ধি করি।",
    profileImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDAj8fJBOuka74hqyLrRJ_obnRNCrs36PL5OSK9h-SF4RldqUKUf3Zt3PvT96x-fCLQP82xh0znNLBJtEg7g_imCSalNrO5OQRy61CcgcMQbmY4E336HXRoVKXiSj9ghtdChuCQY-oNM4rtqdC-tqqpeTSH2jp7Tob14MeY9kl_iVIBBBYgmYAbz_a2aqz/s1600/aifaceswap-cd016e7f1da8ebba4e86fc62c16c791b.jpg",
    phone: "01960-492566",
    email: "risedigitalads26@gmail.com",
    location: "ঢাকা, বাংলাদেশ",
    aboutText: "আমি একজন পেশাদার ডিজিটাল মার্কেটার এবং গ্রোথ স্ট্র্যাটেজিস্ট। বিগত ৫ বছরেরও বেশি সময় ধরে আমি দেশী ও বিদেশী বিভিন্ন ব্র্যান্ডকে তাদের ডিজিটাল উপস্থিতি শক্তিশালী করতে সাহায্য করে আসছি। আমি বিশ্বাস করি মার্কেটিং শুধু অ্যাড রান করার নাম নয়, বরং এটি সঠিক কাস্টমারের কাছে সঠিক সময়ে সঠিক বার্তা পৌঁছানোর বিজ্ঞান। সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO), মেটা ও গুগল অ্যাডস এবং হাই-কনভার্টিং সেলস ফানেল তৈরির মাধ্যমে আমি ব্যবসার সেলস ও আরওআই (ROI) নিশ্চিত করে থাকি।",
    experienceYears: 5,
    completedProjects: 900,
    happyClients: 45,
    successRate: "৯৮%",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/risedigital25",
    instagram: "https://www.instagram.com/rise_digital25/",
    youtube: "https://www.youtube.com/@RiseDigital25",
    whatsapp: "https://api.whatsapp.com/send?phone=8801960492566",
  },
  skills: [
    {
      name: "সোশ্যাল মিডিয়া মার্কেটিং (SMM)",
      percentage: 95,
      iconClass: "fa-brands fa-facebook-f",
      description: "মেটা (ফেসবুক ও ইনস্টাগ্রাম) অ্যাডস ক্যাম্পেইন, পিক্সেল ট্র্যাকিং, কাস্টম অডিয়েন্স এবং রিটার্গেটিং ফানেল সেটআপ।"
    },
    {
      name: "সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO)",
      percentage: 90,
      iconClass: "fa-solid fa-magnifying-glass-chart",
      description: "অন-পেজ, অফ-পেজ এবং টেকনিক্যাল এসইও (Technical SEO) এর মাধ্যমে গুগল র‍্যাংকিং বৃদ্ধি এবং অর্গানিক ট্রাফিক জেনারেশন।"
    },
    {
      name: "সার্চ ইঞ্জিন মার্কেটিং (SEM) & PPC",
      percentage: 88,
      iconClass: "fa-solid fa-chart-line",
      description: "গুগল সার্চ অ্যাডস, ডিসপ্লে অ্যাডস, ইউটিউব মার্কেটিং এবং কস্ট-ইফেক্টিভ বিডিং স্ট্র্যাটেজি।"
    },
    {
      name: "ডাটা অ্যানালিটিক্স ও ট্র্যাকিং",
      percentage: 85,
      iconClass: "fa-solid fa-chart-pie",
      description: "Google Analytics 4 (GA4), Tag Manager (GTM) এবং কনভার্সন এপিআই এর মাধ্যমে কাস্টমার বিহেভিয়ার বিশ্লেষণ।"
    },
    {
      name: "কনটেন্ট ও সেলস ফানেল স্ট্র্যাটেজি",
      percentage: 92,
      iconClass: "fa-solid fa-filter",
      description: "কপিরাইটিং, ল্যান্ডিং পেজ অপ্টিমাইজেশন এবং হাই-কনভার্টিং ইমেল বা মেসেঞ্জার অটোমেশন ফানেল তৈরি।"
    },
    {
      name: "ব্র্যান্ডিং ও পিআর কনসালটেন্সি",
      percentage: 87,
      iconClass: "fa-solid fa-award",
      description: "মার্কেটে নতুন পণ্যের সঠিক পজিশনিং এবং লং-টার্ম কাস্টমার রিলেশনশিপ বিল্ডিং স্ট্র্যাটেজি।"
    }
  ],
  projects: [
    {
      id: 1,
      title: "ই-কমার্স ব্র্যান্ড সেলস বুস্টিং ক্যাম্পেইন",
      category: "সোশ্যাল মিডিয়া মার্কেটিং",
      description: "একটি নামকরা দেশীয় ক্লথিং ই-কমার্স ব্র্যান্ডের জন্য মেটা অ্যাডস এবং হাই-কনভার্টিং ভিডিও ফানেল অপ্টিমাইজেশন। ৩ মাসের মধ্যে তাদের মান্থলি অর্ডার ৪ গুণ বৃদ্ধি পেয়েছে।",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://facebook.com",
      results: "৩২০% সেলস গ্রোথ এবং ৪.৮x আরওআই (ROI)"
    },
    {
      id: 2,
      title: "সার্ভিস প্রোভাইডার লিড জেনারেশন ফানেল",
      category: "গুগল ও মেটা অ্যাডস",
      description: "রিয়েল এস্টেট ও কনসালটেন্সি বিজনেসগুলোর জন্য হাই-কোয়ালিটি লিড জেনারেশন ফানেল তৈরি। কাস্টম কুইজ ফরম্যাট ল্যান্ডিং পেজ তৈরি করে কনভার্সন রেট ৩০% বাড়ানো হয়েছে।",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://google.com",
      results: "১২০০+ কোয়ালিফাইড সেলস লিড জেনারেশন"
    },
    {
      id: 3,
      title: "এডু-টেক স্টার্টআপ অর্গানিক গ্রোথ (SEO)",
      category: "সার্চ ইঞ্জিন অপ্টিমাইজেশন",
      description: "একটি জনপ্রিয় অনলাইন লার্নিং প্ল্যাটফর্মের সম্পূর্ণ ওয়েবসাইট এসইও অডিট, কি-ওয়ার্ড রিসার্চ এবং ব্যাকলিংক বিল্ডিং ক্যাম্পেইন। ৫ মাসে সাইটের ট্রাফিক বৃদ্ধি পেয়েছে ২৫০%।",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://google.com",
      results: "গুগলের প্রথম পেজে ২৫+ কি-ওয়ার্ড র‍্যাংক"
    }
  ],
  experiences: [
    {
      duration: "২০২৩ - বর্তমান",
      role: "সিনিয়র ডিজিটাল মার্কেটিং কনসালটেন্ট",
      company: "নেক্সাস ডিজিটাল লিমিটেড",
      description: "মাল্টি-চ্যানেল মার্কেটিং ক্যাম্পেইন ডিজাইন ও পরিচালনা করা। ১৫+ মেম্বারের মার্কেটিং টিম লিড দেওয়া এবং কী-অ্যাকাউন্টস ক্লায়েন্টদের বিজনেস গ্রোথ অ্যাডভাইজ করা।",
      achievements: [
        "কোম্পানির ক্লায়েন্টদের জন্য মেটা ও গুগল অ্যাডসে বার্ষিক ২০ লক্ষ টাকারও বেশি বাজেট অপ্টিমাইজেশন",
        "নতুন সেলস ফানেল মেথড চালু করার মাধ্যমে ক্লায়েন্ট কনভার্সন রেশিও ১৫% বৃদ্ধি",
        "মার্কেটিং অটোমেশন টুলস ব্যবহার করে ক্লায়েন্ট রিটেনশন রেট ৪০% বৃদ্ধি"
      ]
    },
    {
      duration: "২০২১ - ২০২৩",
      role: "ডিজিটাল মার্কেটিং এক্সিকিউটিভ",
      company: "গ্রোথহ্যাক ইন্টারন্যাশনাল",
      description: "গ্লোবাল ড্রপশিপিং ও লোকাল ই-কমার্স ব্র্যান্ডগুলোর জন্য অ্যাড ম্যানেজমেন্ট, পিক্সেল ট্র্যাকিং, এবং এ/বি টেস্টিং ক্যাম্পেইন রান করা।",
      achievements: [
        "ফেসবুক এবং ইনস্টাগ্রাম অ্যাডস অপ্টিমাইজ করে ৪.৫x এর বেশি কাস্টমার অ্যাকুইজিশন ভ্যালু অর্জন",
        "সরাসরি গুগল এনালিটিক্স ও ট্যাগ ম্যানেজার দিয়ে রিয়েল-টাইম ক্লায়েন্ট ড্যাশবোর্ড ম্যানেজমেন্ট"
      ]
    },
    {
      duration: "২০১৯ - ২০২১",
      role: "এসইও ও কন্টেন্ট স্ট্র্যাটেজিস্ট",
      company: "আইটি সলিউশন বাংলাদেশ",
      description: "লোকাল ও গ্লোবাল এফিলিয়েট সাইটের জন্য সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO) এবং হাই-কনভার্টিং কন্টেন্ট প্ল্যানিং তৈরি করা।",
      achievements: [
        "গুগলে অর্গানিক সার্চ ইম্প্রেশন মান্থলি ৫০ হাজার থেকে বাড়িয়ে ৩ লাখে উন্নীতকরণ",
        "হাই-কোয়ালিটি গেস্ট পোস্টিং এবং টেকনিক্যাল এসইও ফিক্স করার মাধ্যমে সাইট স্পিড অপ্টিমাইজেশন"
      ]
    }
  ],
  testimonials: [
    {
      name: "মেহরাব হোসেন",
      role: "সিইও (CEO)",
      company: "ডিভাইন ফ্যাশন বিডি",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      comment: "নাদিম ভাইয়ের মেটা অ্যাডস স্ট্র্যাটেজি সত্যি চমৎকার। আমাদের ফ্যাশন ব্র্যান্ডের সেলস ৩ মাসে ৪ গুণের বেশি বেড়েছে। উনার ডাটা-ড্রাইভেন গাইডলাইন এবং ফানেল সেটআপ ছাড়া এটি সম্ভব হতো না। আমি উনার কাজের আন্তরিকতা দেখে মুগ্ধ।"
    },
    {
      name: "নুসরাত জাহান",
      role: "ফাউন্ডার (Founder)",
      company: "লার্ন ইজি অনলাইন",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      comment: "আমাদের এডু-টেক ওয়েবসাইটের এসইও (SEO) নিয়ে আমরা চিন্তিত ছিলাম। নাদিম হাসান চৌধুরী মাত্র ৫ মাসের মধ্যে আমাদের ২৫টিরও বেশি কঠিন কি-ওয়ার্ড গুগলের প্রথম পাতায় র‍্যাংক করে দিয়েছেন। তার টেকনিক্যাল জ্ঞান অসাধারণ।"
    },
    {
      name: "মাহমুদুল হাসান",
      role: "ডিরেক্টর",
      company: "এপেক্স হোল্ডিংস",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      comment: "লিড জেনারেশন ও ক্লায়েন্ট হান্টিং ক্যাম্পেইনের জন্য নাদিম আমাদের কোম্পানির জন্য একটি অসাধারণ গেম চেঞ্জার ল্যান্ডিং পেজ ফানেল তৈরি করেছিলেন। আমাদের কস্ট-পার-লিড অর্ধেক হয়ে গেছে এবং লিড কোয়ালিটি অনেক উন্নত হয়েছে।"
    }
  ],
  brands: [
    {
      name: "The Dapper Dude",
      logoId: "the_dapper_dude",
      industry: "Fashion & Clothing"
    },
    {
      name: "Rehnuma",
      logoId: "rehnuma",
      industry: "Premium Fashion"
    },
    {
      name: "Eagle Chef",
      logoId: "eagle_chef",
      industry: "Food & Restaurant"
    },
    {
      name: "SM Orthopedic Mattress",
      logoId: "sm_mattress",
      industry: "Mattress & Bedding"
    },
    {
      name: "SS Skin Care BD",
      logoId: "ss_skincare",
      industry: "Cosmetics & Beauty"
    },
    {
      name: "Taqwa Tours & Travels",
      logoId: "taqwa_travels",
      industry: "Hajj & Umrah Tour"
    },
    {
      name: "Al-Kafi",
      logoId: "al_kafi",
      industry: "Islamic Lifestyle Brand"
    },
    {
      name: "Duaa Lifestyle",
      logoId: "duaa_lifestyle",
      industry: "Islamic & Premium Clothing"
    },
    {
      name: "Islamic Shop BD",
      logoId: "islamic_shop",
      industry: "Islamic E-Commerce"
    },
    {
      name: "Sunnah Shop",
      logoId: "sunnah_shop",
      industry: "Premium Attire & Products"
    },
    {
      name: "Najah (নাজাহ)",
      logoId: "najah",
      industry: "Arabic Calligraphy & Fashion"
    },
    {
      name: "Gift King BD",
      logoId: "gift_king",
      industry: "Gift & E-Commerce"
    },
    {
      name: "EPOS BD",
      logoId: "epos_bd",
      industry: "Retail POS & Tech Solutions"
    },
    {
      name: "Most Collection",
      logoId: "most_collection",
      industry: "Trendy & Modern Apparel"
    },
    {
      name: "Daily Choice BD",
      logoId: "daily_choice",
      industry: "Super Shop & Grocery"
    }
  ],
  contactConfig: {
    telegramBotToken: "YOUR_TELEGRAM_BOT_TOKEN_HERE", // Example token (will be easily configurable by user)
    telegramChatId: "YOUR_TELEGRAM_CHAT_ID_HERE",
    googleFormActionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfD_u-M97l8eR-Z56H9H8wDAd73G5-example/formResponse" // Example URL
  }
};
