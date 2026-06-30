"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// SVG Icons as inline components for clean bundle and zero dependency friction
const TreesLogoIcon = () => (
  <svg className="w-8 h-8 text-brand-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="5" r="3" fill="#2dd4bf" stroke="currentColor" strokeWidth="2" />
    <circle cx="7" cy="11" r="3" fill="#14b8a6" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="11" r="3" fill="#14b8a6" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="17" r="3.5" fill="currentColor" />
  </svg>
);

const GroupIcon = () => (
  <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const PadlockIcon = () => (
  <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="5" y="11" width="14" height="10" rx="2" ry="2" strokeWidth="2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11V15M8 11V7a4 4 0 018 0v4" />
  </svg>
);

const SlidersIcon = () => (
  <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.5 12h19M12 2.5a15.3 15.3 0 014 9.5 15.3 15.3 0 01-4 9.5M12 2.5A15.3 15.3 0 008 12a15.3 15.3 0 004 9.5" />
  </svg>
);

// Services Icons
const SkincareIcon = () => (
  <svg className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

const HaircareIcon = () => (
  <svg className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const SunscreenIcon = () => (
  <svg className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" strokeWidth="2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const ReformulationIcon = () => (
  <svg className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const StabilityIcon = () => (
  <svg className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const RegulatoryIcon = () => (
  <svg className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const testimonials = [
    {
      name: "Arthur Jackson",
      role: "Founder, Bloom Skincare",
      quote: "I found a knowledgeable, competent chemist that I would not have found otherwise. The relationship management via Kolabtree worked great and provides a good record of the work.",
      initials: "AJ"
    },
    {
      name: "Jade Amaka",
      role: "R&D Director, Organics Lab",
      quote: "Great pricing, good quality chemist, has everything you may need. Turnaround super quick with milestones. Everything is in your control. I found the site is very safe and simple.",
      initials: "JA"
    },
    {
      name: "Dr. Sarah Jenkins",
      role: "Lead Formulator, Glow Botanicals",
      quote: "Kolabtree connected us with an exceptional toxicologist who cleared our EU regulatory hurdle in days. The milestone system kept the project on track and within budget.",
      initials: "SJ"
    },
    {
      name: "Marcus Vance",
      role: "VP of Product, Apex Haircare",
      quote: "We needed to reformulate our entire conditioning line to meet clean beauty standards. The expert we hired was professional, responsive, and delivered stable, high-performing formulas.",
      initials: "MV"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxIdx = isDesktop ? testimonials.length - 2 : testimonials.length - 1;
    if (activeTestimonial > maxIdx) {
      setActiveTestimonial(maxIdx);
    }
  }, [isDesktop, activeTestimonial, testimonials.length]);

  const handlePrev = () => {
    setActiveTestimonial((prev) => {
      const maxIdx = isDesktop ? testimonials.length - 2 : testimonials.length - 1;
      return prev === 0 ? maxIdx : prev - 1;
    });
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => {
      const maxIdx = isDesktop ? testimonials.length - 2 : testimonials.length - 1;
      return prev >= maxIdx ? 0 : prev + 1;
    });
  };

  const faqs = [
    {
      question: "How does the hiring process work?",
      answer: "Start by submitting your project request with key formulation objectives and timelines. Vetted cosmetic experts will review your scope and submit custom proposals. You can interview candidates directly, choose the best fit, and fund your project via Kolabtree's secure escrow system."
    },
    {
      question: "What qualifications do cosmetic formulation experts on Kolabtree have?",
      answer: "Our specialists include PhD-level chemists, formulation scientists, regulatory affairs consultants, and experienced industry toxicologists. Most have years of experience working with top global cosmetics brands and hold degrees in cosmetic science, chemistry, or chemical engineering."
    },
    {
      question: "Can I work with experts under a Non-Disclosure Agreement (NDA)?",
      answer: "Yes, confidentiality is built into the platform. You can upload your own custom NDA, or request that experts sign a standard confidentiality agreement before sharing proprietary ingredients or product formulations."
    },
    {
      question: "How quickly can I get started?",
      answer: "Most project requests receive their first qualified proposals within 24 to 48 hours. Once you review proposals, message the experts, and fund the milestone, you can begin collaborating immediately."
    },
    {
      question: "Can experts help develop a product from concept to launch?",
      answer: "Absolutely. Kolabtree specialists support every stage: raw ingredient research, prototype formulation, packaging compatibility, stability testing, scale-up planning, and final international regulatory filings."
    },
    {
      question: "Can experts assist with reformulating an existing product?",
      answer: "Yes, experts can help optimize texture, improve ingredient profiles (such as switching to clean or organic standards), reduce manufacturing costs, and troubleshoot stability or phase separation issues."
    },
    {
      question: "Can experts help with stability testing and product validation?",
      answer: "Yes, specialists are equipped to design and coordinate stability testing protocols, shelf-life verification studies, temperature fluctuations checks, and preservative efficacy testing (PET)."
    },
    {
      question: "Can experts assist with regulatory requirements in different markets?",
      answer: "Yes. Our global network includes regulatory consultants experienced in FDA (US), EU Cosmetics Regulation (EC 1223/2009), Health Canada, and other international regulatory boards to help compile PIFs, safety assessments, and ingredient claims reviews."
    }
  ];

  return (
    <div className="flex-1 bg-background text-zinc-800 font-sans selection:bg-brand-primary selection:text-white relative overflow-hidden">
      
      {/* Decorative blurred background shapes */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-emerald-100/30 blur-3xl -z-10" />
      <div className="absolute top-[10%] right-[-200px] w-[600px] h-[600px] rounded-full bg-sky-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-[20%] left-[-300px] w-[700px] h-[700px] rounded-full bg-teal-50/40 blur-3xl -z-10" />

      {/* 1. Header/Navbar */}
      <header className="w-full border-b border-zinc-100/80 bg-[#F6F3F3]/75 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <div className="w-full px-8 md:px-12 h-20 flex items-center justify-between">
          <div className="cursor-pointer">
            <Image
              src="/Kolabtree_logo.svg"
              alt="Kolabtree Logo"
              width={159}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </div>
          
          <a
            href="#contact"
            className="text-sm font-semibold text-brand-primary hover:text-brand-primary-light relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-primary-light after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-16 pb-[15px] md:pt-24 md:pb-[15px] px-6 isolate">
        <div className="w-[90%] md:w-[80%] max-w-6xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-primary tracking-tight leading-[1.05] mb-6 max-w-5xl">
            Hire Freelance Cosmetic Formulation Experts
          </h1>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-10 max-w-5xl">
            Develop skincare, haircare and personal care products with support from experienced cosmetic chemists, formulation scientists and regulatory consultants. Whether you&apos;re creating a new product or improving an existing formulation, Kolabtree connects you with experts who can help bring your ideas to market.
          </p>
          
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-brand-primary text-white rounded-full font-semibold shadow-lg shadow-teal-900/10 hover:shadow-xl hover:shadow-teal-900/20 active:scale-98 transition-all duration-200 overflow-hidden mb-16 inline-flex items-center gap-2"
          >
            <span className="relative z-10">Request a Service</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="absolute inset-0 bg-brand-primary-light translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
          </a>

          {/* Hero Image Container with Blobs behind */}
          <div className="relative w-full max-w-4xl overflow-visible select-none">
            {/* Background Blobs (div.relative container matching layout) */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-visible">
              {/* Blob 1: Top Right (div.animate-background-blob) */}
              <div className="hero-blob-1 animate-background-blob" />
              {/* Blob 2: Bottom Left (div.animate-background-blob) */}
              <div className="hero-blob-2 animate-background-blob-reverse" />
            </div>

            {/* Hero Image */}
            <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative group bg-zinc-100 aspect-[16/9] z-20">
              <Image
                src="/hero_lab.png"
                alt="Cosmetic formulation chemists in lab"
                fill
                priority
                className="object-cover group-hover:scale-101 transition-transform duration-700"
                sizes="(max-w-1024px) 100vw, 1000px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Bar — full-width infinite marquee */}
      <section className="w-full py-[15px] overflow-hidden relative z-10" style={{ background: 'linear-gradient(87.76deg, #265B69 1.88%, #0B4027 187.11%)' }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate the set twice so the loop is seamless */}
          {[0, 1].map((setIdx) => (
            <div key={setIdx} className="flex shrink-0 items-center gap-10 px-5">

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <GroupIcon />
                </div>
                <span className="text-sm font-medium tracking-wide text-white">Work with vetted experts</span>
              </div>

              <span className="text-white/20 text-lg select-none">✦</span>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <PadlockIcon />
                </div>
                <span className="text-sm font-medium tracking-wide text-white">Confidential collaboration</span>
              </div>

              <span className="text-white/20 text-lg select-none">✦</span>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <SlidersIcon />
                </div>
                <span className="text-sm font-medium tracking-wide text-white">Flexible project engagement</span>
              </div>

              <span className="text-white/20 text-lg select-none">✦</span>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <GlobeIcon />
                </div>
                <span className="text-sm font-medium tracking-wide text-white">Global network of specialists</span>
              </div>

              <span className="text-white/20 text-lg select-none">✦</span>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Cosmetic Formulation Services Section */}
      <section className="py-[15px] px-[15px] relative z-10 bg-background">
        <div>
          <div className="bg-white rounded-3xl border border-zinc-100 p-8 md:p-16 shadow-sm">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-4">
                Cosmetic Formulation Services
              </h2>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                From concept development to regulatory support, Kolabtree experts can assist with a wide range of cosmetic and personal care projects.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              
              {/* Card 1 */}
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-bg-light flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <SkincareIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">Skincare Formulation</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  Develop creams, serums, cleansers, masks and treatment products tailored to your target market.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-bg-light flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <HaircareIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">Haircare Formulation</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  Create shampoos, conditioners, hair oils, styling products and specialised hair treatments.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-bg-light flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <SunscreenIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">Sunscreen Development</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  Work with experts experienced in SPF formulation, ingredient selection and product performance testing.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-bg-light flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <ReformulationIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">Product Reformulation</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  Improve stability, efficacy, texture, ingredient profiles or manufacturing costs for existing products.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-bg-light flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <StabilityIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">Stability Testing</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  Assess product stability, shelf life and performance under different environmental conditions.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-bg-light flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <RegulatoryIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">Regulatory Support</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  Receive guidance on compliance requirements, ingredient reviews, product claims and documentation.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Work with Experienced Cosmetic Industry Experts Section */}
      <section className="px-[15px] py-[15px]">
        <div 
          className="rounded-3xl text-white relative overflow-hidden py-16 md:py-24 px-8 md:px-12"
          style={{ background: 'linear-gradient(87.76deg, #265B69 1.88%, #0B4027 187.11%)' }}
        >
          {/* Background visual detail */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-white/5 -skew-x-12 pointer-events-none" />
          
          <div className="w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col justify-center text-left">
                <div className="lg:mx-auto">
                  <h2 className="text-[32px] md:text-[42px] font-medium tracking-[-1.5px] mb-6 leading-[1.2] max-w-[320px]">
                    Work with Experienced Cosmetic Industry Experts
                  </h2>
                  <p className="text-teal-50 text-base md:text-lg leading-relaxed max-w-[340px]">
                    Kolabtree provides access to specialists across cosmetic science, formulation development and regulatory affairs.
                  </p>
                </div>
              </div>

              {/* Right side expert cards: scrollable on mobile, grid on desktop */}
              <div className="lg:col-span-7 w-full">
              
              {/* Mobile Carousel / Desktop Grid */}
              <div className="overflow-x-auto no-scrollbar flex flex-nowrap pb-6 lg:pb-0 lg:overflow-visible lg:flex-none lg:grid lg:grid-cols-2 gap-5 px-1 lg:px-0 scroll-smooth snap-x">
                
                {/* Expert Card 1 */}
                <div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl snap-center transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Cosmetic Chemists</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Experts in product formulation, ingredient selection and product performance.
                  </p>
                </div>

                {/* Expert Card 2 */}
                <div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl snap-center transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Formulation Scientists</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Support for new product development, optimisation and scale-up.
                  </p>
                </div>

                {/* Expert Card 3 */}
                <div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl snap-center transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Regulatory Affairs Specialists</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Guidance on compliance requirements across global markets.
                  </p>
                </div>

                {/* Expert Card 4 */}
                <div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl snap-center transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Product Development Consultants</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Strategic support for product launches and commercialisation.
                  </p>
                </div>

                {/* Expert Card 5 */}
                <div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl snap-center transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Toxicologists</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Safety assessments and ingredient evaluations.
                  </p>
                </div>

                {/* Expert Card 6 */}
                <div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl snap-center transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Stability Specialists</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Support for product validation and shelf-life studies.
                  </p>
                </div>

              </div>

              {/* Scroll indicators on mobile */}
              <div className="flex justify-center gap-1.5 mt-2 lg:hidden">
                <div className="w-6 h-1 rounded-full bg-teal-400" />
                <div className="w-1.5 h-1 rounded-full bg-teal-700" />
                <div className="w-1.5 h-1 rounded-full bg-teal-700" />
              </div>

            </div>

          </div>
        </div>
        </div>
      </section>

      {/* 6. How Kolabtree Works Section */}
      <section className="py-[15px] px-[15px]">
        <div>
          <div className="bg-white rounded-3xl border border-zinc-100 p-8 md:p-16 shadow-sm">
            
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-4">
                How Kolabtree Works
              </h2>
              <p className="text-zinc-600 text-sm md:text-base">
                Hiring top-tier scientific talent is fast, simple, and completely secure.
              </p>
            </div>

            {/* Desktop/Mobile timeline */}
            <div className="relative">
              
              {/* Horizontal connection line (desktop only) */}
              <div className="hidden md:block absolute top-7 left-[15%] right-[15%] h-0.5 bg-zinc-200 z-0" />
              
              {/* Vertical connection line (mobile only) */}
              <div className="md:hidden absolute top-7 bottom-7 left-[28px] w-0.5 bg-zinc-200 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 z-10 relative">
                
                {/* Step 1 */}
                <div className="flex md:flex-col gap-6 md:gap-0 items-start md:items-center text-left md:text-center relative">
                  <div className="w-14 h-14 rounded-full bg-zinc-100 md:bg-white text-zinc-800 border-2 border-zinc-200 flex items-center justify-center text-xl font-bold md:mb-6 shrink-0 shadow-sm relative after:absolute after:inset-1 after:rounded-full after:border after:border-dashed after:border-zinc-300">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-primary mb-2">Tell Us About Your Project</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-xs md:mx-auto">
                      Share your formulation requirements, objectives and timeline.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex md:flex-col gap-6 md:gap-0 items-start md:items-center text-left md:text-center relative">
                  <div className="w-14 h-14 rounded-full bg-zinc-100 md:bg-white text-zinc-800 border-2 border-zinc-200 flex items-center justify-center text-xl font-bold md:mb-6 shrink-0 shadow-sm relative after:absolute after:inset-1 after:rounded-full after:border after:border-dashed after:border-zinc-300">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-primary mb-2">Receive Expert Responses</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-xs md:mx-auto">
                      Review proposals from qualified cosmetic formulation professionals.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex md:flex-col gap-6 md:gap-0 items-start md:items-center text-left md:text-center relative">
                  <div className="w-14 h-14 rounded-full bg-zinc-100 md:bg-white text-zinc-800 border-2 border-zinc-200 flex items-center justify-center text-xl font-bold md:mb-6 shrink-0 shadow-sm relative after:absolute after:inset-1 after:rounded-full after:border after:border-dashed after:border-zinc-300">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-primary mb-2">Start Collaborating</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-xs md:mx-auto">
                      Choose the expert that best fits your project and begin working together.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-[15px] px-[15px]">
        <div 
          className="text-white rounded-3xl py-12 md:py-16 px-6 md:px-12 text-center relative overflow-hidden shadow-xl shadow-teal-900/10"
          style={{ background: 'linear-gradient(94.51deg, #27A469 -150.94%, #265B69 89.82%)' }}
        >
          
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-12 max-w-3xl mx-auto">
            {/* Responsive titles */}
            <span className="hidden md:inline">Trusted by Researchers, Businesses & Organisations Worldwide</span>
            <span className="md:hidden">Trusted by Businesses Worldwide</span>
          </h2>

          {/* Testimonial slider / Grid */}
          <div className="relative w-full mx-auto flex items-center justify-center gap-2 md:gap-4">
            
            {/* Left Nav Button */}
            <button
              onClick={handlePrev}
              className="flex w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 items-center justify-center hover:bg-white/10 active:scale-95 transition-all shrink-0"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Testimonials container */}
            <div className="flex-1 w-full overflow-hidden py-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6 md:gap-8"
                style={{
                  transform: isDesktop
                    ? `translateX(calc(-${activeTestimonial} * (50% + 16px)))`
                    : `translateX(calc(-${activeTestimonial} * (100% + 24px)))`
                }}
              >
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-white/90 backdrop-blur-sm border border-white/20 p-8 rounded-2xl text-left flex flex-col justify-between min-h-[220px] shadow-lg shadow-black/5 shrink-0 w-full md:w-[calc(50%-16px)]"
                  >
                    <p className="text-zinc-700 text-base italic leading-relaxed mb-6 flex-grow">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 border-t border-zinc-200/60 pt-4 shrink-0">
                      <div className="w-10 h-10 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center shadow-inner">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900">{t.name}</h4>
                        <span className="text-xs text-zinc-500">{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Nav Button */}
            <button
              onClick={handleNext}
              className="flex w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 items-center justify-center hover:bg-white/10 active:scale-95 transition-all shrink-0"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.slice(0, isDesktop ? testimonials.length - 1 : testimonials.length).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3.5 h-1.5 rounded-full transition-all duration-200 ${
                  activeTestimonial === idx ? "bg-teal-400 w-6" : "bg-teal-800 hover:bg-teal-700"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 8. Popular Cosmetic Formulation Projects Section */}
      <section className="py-[15px] px-[15px]">
        <div>
          <div className="bg-white rounded-3xl border border-zinc-100 p-8 md:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left: bullet lists */}
              <div className="lg:col-span-6">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-4">
                  Popular Cosmetic Formulation Projects
                </h2>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8">
                  Our experts support projects across skincare, haircare, cosmetics and personal care categories.
                </p>

                {/* Bullets layout - 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    "Moisturiser Formulation",
                    "Anti-Ageing Skincare Development",
                    "Facial Serum Formulation",
                    "Sunscreen Development",
                    "Hair Growth Products",
                    "Shampoo and Conditioner Formulation",
                    "Natural and Organic Cosmetics",
                    "Clean Beauty Products",
                    "Product Stability Testing",
                    "Ingredient Research",
                    "Product Claims Review",
                    "Manufacturing Scale-Up Support"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-zinc-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right: scientists discussion photo */}
              <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
                <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-zinc-100 aspect-[1/1] relative group bg-zinc-100">
                  <Image
                    src="/scientists_discussion.png"
                    alt="Scientists discussing formulas in a lab"
                    fill
                    className="object-cover group-hover:scale-101 transition-transform duration-700"
                    sizes="(max-w-768px) 100vw, 450px"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs Section */}
      <section className="py-[15px] px-[15px]">
        <div className="bg-white rounded-3xl border border-zinc-100 p-8 md:p-16 shadow-sm">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-4">
                FAQs
              </h2>
              <p className="text-zinc-500 text-sm">
                Common questions about working with freelance chemists on Kolabtree.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-zinc-50/40 border border-zinc-100 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-brand-primary hover:text-brand-primary-light transition-colors"
                    >
                      <span>{faq.question}</span>
                      <span className="ml-4 shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-zinc-100 text-brand-primary">
                        {isOpen ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </span>
                    </button>
                    
                    {/* Slide open/close panels */}
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[300px] border-t border-zinc-100 opacity-100 py-5 px-6" : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 10. Bottom CTA Banner */}
      <section id="contact" className="py-[15px] px-[15px]">
        <div className="bg-brand-primary text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-xl shadow-teal-900/10">
          
          {/* Decorative shapes */}
          <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-teal-800/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-teal-800/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Need Help with a Cosmetic Formulation Project?
            </h2>
            <p className="text-teal-100 text-base md:text-lg mb-10 leading-relaxed">
              Connect with experienced cosmetic chemists, formulation scientists and regulatory consultants for support at every stage of product development.
            </p>
            
            <button
              onClick={() => alert("Registration and submission modal would open here!")}
              className="group px-8 py-4 bg-white text-brand-primary rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-teal-50 hover:shadow-teal-950/20 active:scale-98 transition-all inline-flex items-center gap-2"
            >
              Request a Service
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-zinc-50 py-20 md:py-24 px-6">
        <div className="w-full px-8 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-zinc-200">
            
            {/* Column 1: Logo */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4">
                <Image
                  src="/Kolabtree_logo.svg"
                  alt="Kolabtree Logo"
                  width={159}
                  height={36}
                  className="h-9 w-auto"
                />
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
                The global freelance marketplace connecting companies with specialized scientists and academic experts.
              </p>
            </div>

            {/* Column 2: Address */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-4">Address</h4>
              <div className="text-zinc-600 text-sm space-y-2">
                <p>123 Market Street</p>
                <p>San Francisco, CA 94103</p>
                <p>United States</p>
              </div>
            </div>

            {/* Column 3: Navigation */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-4">Navigation</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-zinc-600 text-sm font-medium">
                <a href="#" className="hover:text-brand-primary transition-colors">Website</a>
                <a href="#" className="hover:text-brand-primary transition-colors">Cosmetic Formulation</a>
                <a href="#" className="hover:text-brand-primary transition-colors">Academic Research</a>
                <a href="#" className="hover:text-brand-primary transition-colors">Food &amp; Beverage</a>
                <a href="#" className="hover:text-brand-primary transition-colors">Medical Research</a>
              </div>
            </div>

          </div>

          {/* Bottom Social & Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { name: "Twitter", path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                { name: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { name: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-500 hover:text-brand-primary hover:border-brand-primary transition-all duration-200"
                  aria-label={`Visit our ${social.name}`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <span className="text-zinc-500 text-xs font-medium tracking-wide">
              &copy; 2026 Kolabtree. All rights reserved.
            </span>

          </div>

        </div>
      </footer>

    </div>
  );
}
