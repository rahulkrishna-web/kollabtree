"use client";

import { useState, useEffect, useRef } from "react";
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
  <Image
    src="/skincare_formulation.svg"
    alt="Skincare Formulation"
    width={48}
    height={48}
    className="w-12 h-12 object-contain"
  />
);

const HaircareIcon = () => (
  <Image
    src="/haircare_formulation.svg"
    alt="Haircare Formulation"
    width={48}
    height={48}
    className="w-12 h-12 object-contain"
  />
);

const SunscreenIcon = () => (
  <Image
    src="/sunscreen_development.svg"
    alt="Sunscreen Development"
    width={48}
    height={48}
    className="w-12 h-12 object-contain"
  />
);

const ReformulationIcon = () => (
  <Image
    src="/product_reformulation.svg"
    alt="Product Reformulation"
    width={48}
    height={48}
    className="w-12 h-12 object-contain"
  />
);

const StabilityIcon = () => (
  <Image
    src="/stability_testing.svg"
    alt="Stability Testing"
    width={48}
    height={48}
    className="w-12 h-12 object-contain"
  />
);

const RegulatoryIcon = () => (
  <Image
    src="/regulatory_support.svg"
    alt="Regulatory Support"
    width={48}
    height={48}
    className="w-12 h-12 object-contain"
  />
);

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  const testimonials = [
    {
      name: "Arthur Jackson",
      role: "Client",
      quote: "I found a knowledgeable, competent chemist that I would not have found otherwise. The relationship management via Kolabtree worked great and provides a good record of the work.",
      initials: "AJ"
    },
    {
      name: "Jade Amaka",
      role: "Client",
      quote: "Great pricing, good quality chemist, has everything you may need. Turnaround super quick with milestones. Everything is in your control. I found the site is very safe and simple.",
      initials: "JA"
    },
    {
      name: "Philip D Bush",
      role: "Client",
      quote: "This website connected me with a freelancer who allowed my dreams of creating the perfect product to become possible!",
      initials: "PB"
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
    const ctas = document.querySelectorAll('[data-cta="true"]');
    if (ctas.length === 0) return;

    let visibleCount = 0;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleCount++;
        } else {
          visibleCount = Math.max(0, visibleCount - 1);
        }
      });
      setShowFloatingCta(visibleCount === 0);
    }, { threshold: 0 });

    ctas.forEach(cta => observer.observe(cta));

    return () => observer.disconnect();
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
          

        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-16 pb-[15px] md:pt-24 md:pb-[15px] isolate">
        {/* Text content — constrained width, padded to match navbar */}
        <div className="px-8 md:px-6 w-full md:w-[80%] max-w-6xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-primary tracking-tight leading-[1.05] mb-6 max-w-5xl">
            Hire Freelance Cosmetic Formulation Experts
          </h1>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-10 max-w-5xl">
            Develop skincare, haircare and personal care products with support from experienced cosmetic chemists, formulation scientists and regulatory consultants. Whether you&apos;re creating a new product or improving an existing formulation, Kolabtree connects you with experts who can help bring your ideas to market.
          </p>
          
          <a
            href="https://www.kolabtree.com/create-project"
            data-cta="true"
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
        </div>

        {/* Hero Image — navbar-width on mobile, max-w-5xl on desktop */}
        <div className="relative w-full max-w-5xl mx-auto overflow-visible select-none px-8 md:px-0">
          {/* Background Blobs */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-visible">
            <div className="hero-blob-1 animate-background-blob" />
            <div className="hero-blob-2 animate-background-blob-reverse" />
          </div>

          {/* Hero Image */}
          <div className="relative w-full rounded-xl overflow-hidden z-20">
            <Image
              src="/cosmetic_hero.png"
              alt="Cosmetic formulation chemists in lab"
              width={956}
              height={576}
              priority
              className="w-full h-auto block scale-105"
            />
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
                <div className="mb-6">
                  <SkincareIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">Skincare Formulation</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  Develop creams, serums, cleansers, masks and treatment products tailored to your target market.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="mb-6">
                  <HaircareIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">Haircare Formulation</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  Create shampoos, conditioners, hair oils, styling products and specialised hair treatments.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="mb-6">
                  <SunscreenIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">Sunscreen Development</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  Work with experts experienced in SPF formulation, ingredient selection and product performance testing.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="mb-6">
                  <ReformulationIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">Product Reformulation</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  Improve stability, efficacy, texture, ingredient profiles or manufacturing costs for existing products.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="mb-6">
                  <StabilityIcon />
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-3">Stability Testing</h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  Assess product stability, shelf life and performance under different environmental conditions.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white p-5 md:p-8 rounded-2xl border border-zinc-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="mb-6">
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
          className="rounded-3xl text-white relative py-16 md:py-24 px-8 md:px-12 overflow-visible lg:overflow-hidden"
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

              {/* Mobile Carousel / Desktop Grid — -mx-8 breaks out of parent padding, px-8 restores leading space */}
              <div className="-mx-8 lg:mx-0 overflow-x-auto no-scrollbar flex flex-nowrap pb-4 lg:pb-0 lg:overflow-visible lg:flex-none lg:grid lg:grid-cols-2 gap-4 lg:gap-5 scroll-smooth snap-x snap-mandatory px-8 lg:px-0">
                
                {/* Expert Card 1 */}
                <div className="flex-shrink-0 w-[75vw] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl snap-start scroll-ml-8 transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Cosmetic Chemists</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Experts in product formulation, ingredient selection and product performance.
                  </p>
                </div>

                {/* Expert Card 2 */}
                <div className="flex-shrink-0 w-[75vw] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl snap-start scroll-ml-8 transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Formulation Scientists</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Support for new product development, optimisation and scale-up.
                  </p>
                </div>

                {/* Expert Card 3 */}
                <div className="flex-shrink-0 w-[75vw] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl snap-start scroll-ml-8 transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Regulatory Affairs Specialists</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Guidance on compliance requirements across global markets.
                  </p>
                </div>

                {/* Expert Card 4 */}
                <div className="flex-shrink-0 w-[75vw] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl snap-start scroll-ml-8 transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Product Development Consultants</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Strategic support for product launches and commercialisation.
                  </p>
                </div>

                {/* Expert Card 5 */}
                <div className="flex-shrink-0 w-[75vw] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl snap-start scroll-ml-8 transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Toxicologists</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Safety assessments and ingredient evaluations.
                  </p>
                </div>

                {/* Expert Card 6 */}
                <div className="flex-shrink-0 w-[75vw] sm:w-[320px] lg:w-auto bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl snap-start scroll-ml-8 transition-colors duration-300 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-bold mb-2 text-zinc-900">Stability Specialists</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    Support for product validation and shelf-life studies.
                  </p>
                </div>

                {/* Trailing spacer — ensures last card scrolls fully into view on mobile */}
                <div className="flex-shrink-0 w-4 lg:hidden" aria-hidden="true" />

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
          <div className="bg-white rounded-3xl border border-zinc-100 p-8 md:p-16 shadow-sm relative overflow-hidden">
            <div className="w-full relative z-10">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-[32px] md:text-[42px] font-medium text-[#18181B] leading-[1.2] tracking-[-1.5px] mb-4">
                  How Kolabtree Works
                </h2>
                <p className="text-[#18181B] text-base md:text-lg leading-relaxed">
                  Hiring top-tier scientific talent is fast, simple, and completely secure.
                </p>
              </div>

              <div className="relative w-full md:w-[85%] lg:w-[80%] mx-auto">
                {/* Horizontal Line for Desktop */}
                <div className="hidden md:block absolute top-[73px] left-[16.6%] right-[16.6%] h-[2px] bg-[#D4DEE1] -z-10" />

                {/* Vertical Line for Mobile — aligned to left circle center */}
                <div className="md:hidden absolute top-[20px] bottom-[20px] left-[19px] w-[2px] bg-[#D4DEE1] -z-10" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">

                  {/* Step 1 */}
                  <div className="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0 text-left md:text-center">
                    <div className="w-10 h-10 md:w-[147px] md:h-[147px] shrink-0 rounded-full bg-[#D4DEE1] flex items-center justify-center text-base md:text-4xl font-bold text-[#265B69] md:mb-6 z-10 shadow-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-brand-primary mb-1 md:mb-2">Tell Us About Your Project</h3>
                      <p className="text-[#18181B] text-sm md:text-base leading-relaxed">
                        Share your formulation requirements, objectives and timeline.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0 text-left md:text-center">
                    <div className="w-10 h-10 md:w-[147px] md:h-[147px] shrink-0 rounded-full bg-[#D4DEE1] flex items-center justify-center text-base md:text-4xl font-bold text-[#265B69] md:mb-6 z-10 shadow-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-brand-primary mb-1 md:mb-2">Receive Expert Responses</h3>
                      <p className="text-[#18181B] text-sm md:text-base leading-relaxed">
                        Review proposals from qualified cosmetic formulation professionals.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0 text-left md:text-center">
                    <div className="w-10 h-10 md:w-[147px] md:h-[147px] shrink-0 rounded-full bg-[#D4DEE1] flex items-center justify-center text-base md:text-4xl font-bold text-[#265B69] md:mb-6 z-10 shadow-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-brand-primary mb-1 md:mb-2">Start Collaborating</h3>
                      <p className="text-[#18181B] text-sm md:text-base leading-relaxed">
                        Choose the expert that best fits your project and begin working together.
                      </p>
                    </div>
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
              className="hidden md:flex w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 items-center justify-center hover:bg-white/10 active:scale-95 transition-all shrink-0"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Testimonials container */}
            <div 
              className="flex-1 w-[calc(100%+3rem)] -mx-6 px-6 md:w-full md:mx-0 md:px-0 overflow-x-auto md:overflow-hidden py-4 no-scrollbar snap-x snap-mandatory md:snap-none"
            >
              <div 
                className="flex md:transition-transform md:duration-500 md:ease-in-out gap-6 md:gap-8"
                style={isDesktop ? {
                  transform: `translateX(calc(-${activeTestimonial} * (50% + 16px)))`
                } : {}}
              >
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-white/90 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl text-left flex flex-col justify-between min-h-[220px] shadow-lg shadow-black/5 shrink-0 w-full md:w-[calc(50%-16px)] snap-start scroll-ml-6 md:scroll-ml-0 md:snap-none"
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
              className="hidden md:flex w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 items-center justify-center hover:bg-white/10 active:scale-95 transition-all shrink-0"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>


        </div>
      </section>

      {/* 8. Popular Cosmetic Formulation Projects Section */}
      <section className="py-[15px] px-[15px]">
        <div>
          <div className="bg-white rounded-3xl border border-zinc-100 p-8 md:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left: bullet lists */}
              <div>
                <h2 className="text-[32px] md:text-[42px] font-medium text-[#18181B] leading-[1.2] tracking-[-1.5px] mb-4 text-center md:text-left">
                  Popular Cosmetic Formulation Projects
                </h2>
                <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
                  Our experts support projects across skincare, haircare, cosmetics and personal care categories.
                </p>

                {/* Bullets layout - 1 column */}
                <div className="flex flex-col space-y-3">
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
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                      <span className="text-zinc-800 text-base font-normal leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: scientists discussion photo */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/cosmetic_projects.png"
                  alt="Scientists discussing formulas in a lab"
                  fill
                  className="object-cover scale-105"
                  sizes="(max-w-1024px) 100vw, 600px"
                  priority
                />
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
            
            <a
              href="https://www.kolabtree.com/create-project"
              data-cta="true"
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
            </a>
          </div>

        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-800 font-sans">
        <div className="w-full px-8 md:px-12">
          
          <div className="flex flex-col lg:flex-row justify-between gap-y-12 lg:gap-8 pb-12 border-b border-zinc-800">
            
            {/* Column 1: Address */}
            <div className="flex flex-col items-start text-left">
              <h4 className="text-base font-bold text-white mb-6">Address</h4>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                Cactus Communications Limited, 15-19 Bloomsbury Way, Holborn, London WC1A 2TH, United Kingdom
              </p>
            </div>

            {/* Column 2: Follow Us */}
            <div className="flex flex-col items-start text-left">
              <h4 className="text-base font-bold text-white mb-6">Follow Us</h4>
              <div className="flex flex-wrap gap-4 lg:gap-6 items-center">
                <a href="https://www.kolabtree.com/blog/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                  <img src="https://images.kolabtree.com/blog_icon_14_09_2021.svg" alt="Kolabtree Blog" className="w-6 h-6 object-contain shrink-0" />
                  <span className="hidden sm:inline">Kolabtree Blog</span>
                </a>
                <a href="https://twitter.com/kolabtree" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                  <span className="hidden sm:inline">Twitter</span>
                </a>
                <a href="https://www.facebook.com/kolabtree" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M14.885 24v-10.963h3.684l.551-4.278h-4.235v-2.731c0-1.238.344-2.08 2.119-2.08h2.261v-3.829c-.391-.052-1.733-.169-3.295-.169-3.262 0-5.495 1.99-5.495 5.648v3.161h-3.693v4.278h3.693v10.963h4.41z" />
                    </svg>
                  </div>
                  <span className="hidden sm:inline">Facebook</span>
                </a>
                <a href="https://www.linkedin.com/company/kolabtree" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Column 3: Payment Partners */}
            <div className="flex flex-col items-start text-left">
              <h4 className="text-base font-bold text-white mb-6">Our Payment Partners</h4>
              <div className="flex items-center gap-2 flex-wrap">
                <img src="https://images.kolabtree.com/Payment_Partner_07_09_21.svg" alt="Payment Partners" className="h-8 w-auto bg-white rounded py-1 px-2 object-contain" />
              </div>
            </div>

          </div>

          {/* Copyright below line */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-3 text-zinc-500 text-sm font-medium">
            <img src="https://images.kolabtree.com/cactus-logo-white.svg" alt="Cactus Logo" className="h-6 w-auto" />
            <span>© 2026 Cactus Communications Limited, UK. All Rights Reserved</span>
          </div>

        </div>
      </footer>

      {/* Floating CTA */}
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          showFloatingCta ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <a
          href="https://www.kolabtree.com/create-project"
          className="group px-8 py-4 bg-brand-primary text-white rounded-full font-bold shadow-2xl hover:shadow-3xl hover:bg-teal-700 active:scale-98 transition-all inline-flex items-center gap-2"
        >
          Request a Service
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
