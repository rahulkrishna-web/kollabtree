"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Simple custom SVG for Trees Logo
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

export default function AcademicPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const testimonials = [
    {
      name: "Valli Maya",
      role: "Associate Professor, Scientific Methodologies",
      quote: "I find Kolabtree to be a great platform for academic freelancers. Kolabtree provides a unique opportunity for freelancers, specifically those in the academic field, to connect with clients who require their expertise and services.",
      initials: "VM"
    },
    {
      name: "Fasil Merawi",
      role: "Department Chair, Addis Ababa University",
      quote: "Kolabtree is an excellent platform to interact with field-specific experts. For every need in research, education and academic functions, there are experts here to help. Moreover, Kolabtree personnel are also very active in fulfilling our needs.",
      initials: "FM"
    },
    {
      name: "Dr. Elena Rostova",
      role: "Senior Researcher, Molecular Biology",
      quote: "I needed a specialized biostatistician to review our clinical study dataset before submitting to Nature. The statistician we hired via Kolabtree was brilliant, fast, and helped refine our methodology sections perfectly.",
      initials: "ER"
    },
    {
      name: "Prof. Arthur Pendelton",
      role: "Director of Research, Environmental Sciences",
      quote: "Our grant proposal draft was good, but the scientific editing and formatting provided by the Kolabtree expert elevated it to a winning submission. Truly a seamless, secure, and professional collaboration.",
      initials: "AP"
    },
    {
      name: "Dr. Hiroshi Tanaka",
      role: "Professor of Chemistry, Kyoto Institute",
      quote: "Kolabtree allowed us to hire an expert in quantum chemistry simulation on demand. The results were highly accurate and critical for our subsequent journal publication.",
      initials: "HT"
    },
    {
      name: "Dr. Beatrice Vance",
      role: "Associate Dean, Social Sciences",
      quote: "We needed qualitative data analysis for a multi-country survey. The sociologist we found on Kolabtree delivered top-tier thematic coding that exceeded our expectations.",
      initials: "BV"
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
      answer: "Start by submitting your research project details, key objectives, and timeline. Vetted academic experts and researchers will review your requirements and submit custom proposals. You can message and interview candidates directly, choose the best fit, and fund your project securely via Kolabtree's milestone escrow system."
    },
    {
      question: "What qualifications do researchers on Kolabtree have?",
      answer: "Our network consists of PhD-level researchers, peer-reviewed scientists, experienced statisticians, and academic editors. Most hold doctorates or advanced degrees from top global universities and research institutes, with extensive publication histories in leading scientific journals."
    },
    {
      question: "Can experts assist with publication-ready manuscripts?",
      answer: "Yes, our scientific writers and peer-review editors help refine, structure, and check research papers to ensure they meet the rigorous submission standards of high-impact journals, including formatting, clarity, and language polishing."
    },
    {
      question: "Can I work with experts under a Non-Disclosure Agreement (NDA)?",
      answer: "Absolutely. Confidentiality is fundamental to academic research. You can upload your own custom NDA, or request that experts sign a standard confidentiality agreement before sharing any proprietary datasets, hypotheses, or manuscript drafts."
    },
    {
      question: "How are payments handled?",
      answer: "Payments are safely held in Kolabtree's secure escrow system. You fund milestones before work begins, and funds are only released to the expert once you review and approve the completed deliverables at each stage."
    },
    {
      question: "Can experts help with statistical analysis and data interpretation?",
      answer: "Yes. We have certified biostatisticians, data scientists, and statistical modeling experts who can assist with study design, sample size calculations, hypothesis testing, R/SPSS/Python analysis, and data visualization."
    },
    {
      question: "How quickly will I receive proposals?",
      answer: "Most project postings receive initial proposals from qualified academic freelancers within 24 to 48 hours. You can review their profiles, check past research history, and start communicating immediately."
    },
    {
      question: "Can experts support grant applications and funding proposals?",
      answer: "Yes. Many experts have extensive experience preparing grant applications, research proposals, and funding submissions for organizations like the NIH, NSF, Horizon Europe, and private foundations."
    }
  ];

  return (
    <div className="flex-1 bg-white text-zinc-800 font-sans selection:bg-brand-primary selection:text-white">
      
      {/* 1. Header/Navbar */}
      <header className="w-full bg-white border-b border-zinc-100">
        <div className="w-full px-8 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <TreesLogoIcon />
            <span className="text-2xl font-normal text-brand-primary">
              Kolabtree
            </span>
          </div>
          
          <a
            href="#contact"
            className="text-lg font-medium text-[#18181B] hover:text-brand-primary transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </header>

      {/* 2. Hero Section (Gradient, Split Layout) */}
      <section 
        className="text-white w-full pb-10"
        style={{ background: 'linear-gradient(87.76deg, #265B69 1.88%, #0B4027 187.11%)' }}
      >
        <div className="w-full px-8 md:px-12 pt-16 pb-10 md:pt-24 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                Academic Research &amp; Support Services
              </h1>
              <p className="text-teal-50 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                Get expert support at every stage of the research process. From literature reviews and study design to statistical analysis and manuscript preparation, Kolabtree connects you with experienced researchers, scientists and subject matter experts.
              </p>
              
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-white text-brand-primary rounded-full font-bold shadow-lg hover:bg-teal-50 hover:shadow-xl active:scale-98 transition-all inline-flex items-center gap-3"
              >
                <span>Request a Service</span>
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Right Image */}
            <div className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/academic_hero.png"
                alt="Academic researchers collaborating"
                fill
                priority
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 800px"
              />
            </div>
          </div>
        </div>

        {/* Sub-hero animated trust bar (Marquee) */}
        <div className="w-full py-[15px] overflow-hidden relative z-10 bg-transparent">
          <div className="flex animate-marquee whitespace-nowrap">
            {[0, 1].map((setIdx) => (
              <div key={setIdx} className="flex shrink-0 items-center gap-10 px-5 text-teal-100 text-sm md:text-base font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <GroupIcon />
                  </div>
                  <span>Work with vetted experts</span>
                </div>
                <span className="text-teal-700 text-lg select-none">|</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <PadlockIcon />
                  </div>
                  <span>Confidential collaboration</span>
                </div>
                <span className="text-teal-700 text-lg select-none">|</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <SlidersIcon />
                  </div>
                  <span>Flexible project-based engagement</span>
                </div>
                <span className="text-teal-700 text-lg select-none">|</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <GlobeIcon />
                  </div>
                  <span>Global network of specialists</span>
                </div>
                <span className="text-teal-700 text-lg select-none">|</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Academic Research Support Services Section (Card inside Card) */}
      <section className="py-[15px] px-[15px] bg-zinc-50/50">
        <div>
          <div className="bg-white rounded-3xl border border-zinc-200/60 p-8 md:p-16 shadow-xl shadow-zinc-200/30">
            
            <div className="text-left max-w-3xl mb-12">
              <h2 className="text-[32px] md:text-[42px] font-medium text-[#18181B] leading-[1.2] tracking-[-1.5px] mb-6">
                Academic Research Support Services
              </h2>
              <p className="text-[#18181B] text-base md:text-lg leading-relaxed">
                Whether you&apos;re conducting academic research, preparing a publication or managing a complex research project, Kolabtree experts can provide specialised support tailored to your objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/50 shadow-sm hover:border-teal-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full text-left">
                <span className="text-brand-primary text-xl md:text-2xl font-bold mb-3">01</span>
                <h3 className="text-lg font-bold text-[#18181B] mb-2">Literature Reviews</h3>
                <p className="text-[#18181B] text-sm md:text-base leading-relaxed">
                  Conduct comprehensive literature reviews to identify existing research, knowledge gaps and emerging trends.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/50 shadow-sm hover:border-teal-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full text-left">
                <span className="text-brand-primary text-xl md:text-2xl font-bold mb-3">02</span>
                <h3 className="text-lg font-bold text-[#18181B] mb-2">Research Methodology</h3>
                <p className="text-[#18181B] text-sm md:text-base leading-relaxed">
                  Develop robust study designs and research methodologies aligned with your project goals.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/50 shadow-sm hover:border-teal-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full text-left">
                <span className="text-brand-primary text-xl md:text-2xl font-bold mb-3">03</span>
                <h3 className="text-lg font-bold text-[#18181B] mb-2">Systematic Reviews</h3>
                <p className="text-[#18181B] text-sm md:text-base leading-relaxed">
                  Receive support with evidence synthesis, systematic reviews and meta-analysis projects.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/50 shadow-sm hover:border-teal-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full text-left">
                <span className="text-brand-primary text-xl md:text-2xl font-bold mb-3">04</span>
                <h3 className="text-lg font-bold text-[#18181B] mb-2">Statistical Analysis</h3>
                <p className="text-[#18181B] text-sm md:text-base leading-relaxed">
                  Work with statisticians and data analysts to interpret research findings with confidence.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/50 shadow-sm hover:border-teal-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full text-left">
                <span className="text-brand-primary text-xl md:text-2xl font-bold mb-3">05</span>
                <h3 className="text-lg font-bold text-[#18181B] mb-2">Manuscript Preparation</h3>
                <p className="text-[#18181B] text-sm md:text-base leading-relaxed">
                  Improve the quality, structure and presentation of research papers before submission.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/50 shadow-sm hover:border-teal-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full text-left">
                <span className="text-brand-primary text-xl md:text-2xl font-bold mb-3">06</span>
                <h3 className="text-lg font-bold text-[#18181B] mb-2">Grant Writing Support</h3>
                <p className="text-[#18181B] text-sm md:text-base leading-relaxed">
                  Develop compelling grant applications and funding proposals with expert guidance.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Work with Experienced Research Professionals Section (Dark Teal Gradient Card) */}
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
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="lg:mx-auto">
                  <h2 className="text-[32px] md:text-[42px] font-medium tracking-[-1.5px] mb-6 leading-[1.2] max-w-[320px]">
                    Work with Experienced Research Professionals
                  </h2>
                  <p className="text-teal-50 text-base md:text-lg leading-relaxed max-w-[340px]">
                    Kolabtree provides access to academic researchers, statisticians, scientists and subject matter experts across a wide range of disciplines.
                  </p>
                </div>
              </div>

              {/* Right Column Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Card 1 */}
                <div className="flex flex-col bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-lg shadow-black/5 hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-bold text-lg text-[#18181B] mb-2">Academic Researchers</h3>
                  <p className="text-[#18181B] text-sm leading-relaxed">Researchers with experience across universities, research institutions and industry.</p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-lg shadow-black/5 hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-bold text-lg text-[#18181B] mb-2">Statisticians</h3>
                  <p className="text-[#18181B] text-sm leading-relaxed">Experts in data analysis, study design and interpretation of research findings.</p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-lg shadow-black/5 hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-bold text-lg text-[#18181B] mb-2">Scientific Writers</h3>
                  <p className="text-[#18181B] text-sm leading-relaxed">Support for manuscripts, journal articles, white papers and technical reports.</p>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-lg shadow-black/5 hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-bold text-lg text-[#18181B] mb-2">Subject Matter Experts</h3>
                  <p className="text-[#18181B] text-sm leading-relaxed">Specialists across life sciences, healthcare, engineering, social sciences and more.</p>
                </div>

                {/* Card 5 */}
                <div className="flex flex-col bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-lg shadow-black/5 hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-bold text-lg text-[#18181B] mb-2">Research Consultants</h3>
                  <p className="text-[#18181B] text-sm leading-relaxed">Guidance on project planning, methodology and research strategy.</p>
                </div>

                {/* Card 6 */}
                <div className="flex flex-col bg-white/90 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-lg shadow-black/5 hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-bold text-lg text-[#18181B] mb-2">Data Analysts</h3>
                  <p className="text-[#18181B] text-sm leading-relaxed">Support for data management, statistical modelling and research insights.</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. How Kolabtree Works (Connecting Lines) */}
      <section className="py-[15px] px-[15px] bg-[#fcfafa]">
        <div>
          <div className="bg-white rounded-3xl border border-zinc-100 p-8 md:p-16 shadow-sm relative overflow-hidden">
            <div className="w-full relative z-10">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-[32px] md:text-[42px] font-medium text-[#18181B] leading-[1.2] tracking-[-1.5px] mb-4">
                  How Kolabtree Works
                </h2>
                <p className="text-[#18181B] text-base md:text-lg leading-relaxed">
                  Connect with qualified researchers and academic experts in three simple steps.
                </p>
              </div>

              <div className="relative w-full md:w-[85%] lg:w-[80%] mx-auto">
                {/* Horizontal Line for Desktop */}
                <div className="hidden md:block absolute top-[73px] left-[16.6%] right-[16.6%] h-[2px] bg-[#D4DEE1] -z-10" />
                
                {/* Vertical Line for Mobile */}
                <div className="md:hidden absolute top-[73px] bottom-[73px] left-1/2 -translate-x-1/2 w-[2px] bg-[#D4DEE1] -z-10" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                  
                  {/* Step 1 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[147px] h-[147px] shrink-0 rounded-full bg-[#D4DEE1] flex items-center justify-center text-4xl font-bold text-[#265B69] mb-6 z-10 shadow-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-primary mb-2">Tell Us About Your Research Project</h3>
                      <p className="text-[#18181B] text-base leading-relaxed">
                        Share your objectives, requirements and timeline.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[147px] h-[147px] shrink-0 rounded-full bg-[#D4DEE1] flex items-center justify-center text-4xl font-bold text-[#265B69] mb-6 z-10 shadow-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-primary mb-2">Receive Expert Responses</h3>
                      <p className="text-[#18181B] text-base leading-relaxed">
                        Review proposals from qualified academic research professionals.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[147px] h-[147px] shrink-0 rounded-full bg-[#D4DEE1] flex items-center justify-center text-4xl font-bold text-[#265B69] mb-6 z-10 shadow-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-primary mb-2">Start Collaborating</h3>
                      <p className="text-[#18181B] text-base leading-relaxed">
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

      {/* 6. Testimonials Section (PDF matching names & design) */}
      <section className="py-[15px] px-[15px]">
        <div 
          className="text-white rounded-3xl py-12 md:py-16 px-6 md:px-12 text-center relative overflow-hidden shadow-xl shadow-teal-900/10"
          style={{ background: 'linear-gradient(94.51deg, #27A469 -150.94%, #265B69 89.82%)' }}
        >
          
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-12 max-w-3xl mx-auto">
            Trusted by Researchers Worldwide
          </h2>

          <div className="relative w-full flex items-center justify-center gap-2 md:gap-4">
            
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

      {/* 7. Popular Academic Research Projects (Flip Layout & 1-Col list) */}
      <section className="py-[15px] px-[15px] bg-[#fcfafa]">
        <div>
          <div className="bg-white rounded-3xl border border-zinc-200/60 p-8 md:p-16 shadow-xl relative overflow-hidden">
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Image (Mobile: Top, Desktop: Left) */}
                <div className="order-1 lg:order-1 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/academic_collaboration.png"
                    alt="Researchers at a desk"
                    fill
                    className="object-cover"
                    sizes="(max-w-1024px) 100vw, 600px"
                  />
                </div>

                {/* Text & List (Mobile: Bottom, Desktop: Right) */}
                <div className="order-2 lg:order-2">
                  <h2 className="text-[32px] md:text-[42px] font-medium text-[#18181B] leading-[1.2] tracking-[-1.5px] mb-6">
                    Popular Academic Research Projects
                  </h2>
                  <p className="text-[#18181B] text-[20px] leading-[28px] font-normal mb-8">
                    Our experts support a wide range of academic and research initiatives across multiple disciplines.
                  </p>

                  <div className="flex flex-col space-y-3">
                    {[
                      "Literature Reviews",
                      "Systematic Reviews",
                      "Meta-Analyses",
                      "Research Methodology Development",
                      "Statistical Analysis",
                      "Survey Design & Analysis",
                      "Journal Manuscript Preparation",
                      "Grant Writing",
                      "Research Proposal Development",
                      "Data Interpretation",
                      "Scientific Reporting",
                      "Publication Support"
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                        <span className="text-[#18181B] text-[20px] leading-[28px] font-normal">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs Section */}
      <section className="py-[15px] px-[15px] bg-[#fcfafa]">
        <div>
          <div className="bg-white rounded-3xl border border-zinc-200/60 p-8 md:p-16 shadow-xl relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
              
              <h2 className="text-[32px] md:text-[42px] font-medium text-[#18181B] leading-[1.2] tracking-[-1.5px] text-center mb-12">
                FAQs
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`bg-white rounded-xl border border-zinc-200/60 p-5 md:p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                        isOpen ? "shadow-md border-zinc-300" : ""
                      }`}
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left transition-colors"
                      >
                        <span className="font-bold text-[#18181B] text-base md:text-[17px] leading-snug">
                          {faq.question}
                        </span>
                        <span className="ml-4 shrink-0 text-[#18181B] font-light text-2xl">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      
                      <div 
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-[#18181B]/80 text-sm md:text-base leading-relaxed pt-1">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 9. Bottom CTA Section */}
      <section id="contact" className="py-[15px] px-[15px] bg-[#fcfafa]">
        <div className="w-full bg-gradient-to-br from-[#285B69] to-[#0b4027] text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          
          <h2 className="text-4xl md:text-[72px] font-bold leading-[1.05] tracking-[-1.8px] max-w-4xl mx-auto mb-6">
            Need Support with Your Research Project?
          </h2>
          <p className="text-teal-50 text-base md:text-lg mb-10 leading-relaxed">
            Connect with experienced researchers, statisticians and subject matter experts for support across every stage of the research process.
          </p>
          
          <button
            onClick={() => alert("Modal interaction")}
            className="group px-8 py-4 bg-white text-brand-primary rounded-full font-bold shadow-lg hover:shadow-xl active:scale-98 transition-all inline-flex items-center gap-2"
          >
            Request a Service
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>
      </section>

      {/* 10. Footer matching homepage style */}
      <footer className="bg-zinc-50 py-20 md:py-24 px-6 border-t border-zinc-100">
        <div className="w-full px-8 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-zinc-200">
            
            {/* Column 1: Logo */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-4">
                <TreesLogoIcon />
                <span className="text-lg font-bold text-brand-primary tracking-tight">Kolabtree</span>
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
