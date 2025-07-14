"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import AnimatedContent from "@/components/ui/animatedcontent";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const SalesblastIndia = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are domains included, or do I need to provide my own?",
      answer:
        "You'll need to provide your own domains from a domain registrar. Once you have them, we'll take care of the rest, DNS setup, inbox creation, and configuration.",
    },
    {
      question: "Do I need to warm up the inboxes first?",
      answer:
        "Yes, we recommend warming up for at least 2 weeks. We can help warm them up directly through your sequencer.",
    },
    {
      question: "Can I reuse old domains, or do I need new ones?",
      answer:
        "You can reuse domains, but if they've been used for bulk sending before, deliverability might be affected. Either way, old or new, we can work with what you have.",
    },
    {
      question: "Why is there a limit on users per domain?",
      answer:
        "Platforms like Google and Microsoft have built-in limits to help prevent abuse. We follow the best practices to make sure your sending reputation stays clean.",
    },
    {
      question: "Do you support Google and Microsoft accounts?",
      answer:
        "Yes! We set up both Google Workspace and Microsoft 365 accounts, depending on what fits your needs best.",
    },
    {
      question: "How many emails can I send per account per day?",
      answer:
        "This depends on the platform and the warm-up stage. We'll help optimize the sending gradually so you can scale safely.",
    },
    {
      question: "How does your deliverability compare to others?",
      answer:
        "We follow deliverability best practices from day one, SPF, DKIM, DMARC, warm-up, and ongoing monitoring, so your emails land in the inbox, not spam.",
    },
  ];

  // Logo content array
  const logos = [
    { name: "", imgSrc: "/icons/cf.png" },
    { name: "", imgSrc: "/icons/instantly.png" },
    { name: "", imgSrc: "/icons/daddy.png" },
    { name: "", imgSrc: "/icons/pb.png" },
    { name: "", imgSrc: "/icons/sl.png" },
    { name: "", imgSrc: "/icons/outlook.png" },
    { name: "", imgSrc: "/icons/googleg.png" },
    { name: "", imgSrc: "/icons/bison.png" },
  ];

  const steps = [
    {
      number: "01",
      title: "Register Your Domains",
      description:
        "Use domains from any registrar you like: Porkbun, GoDaddy, etc. They all work seamlessly with Salesblast's infrastructure.",

      icon: <Shield className="w-8 h-8" />,
    },
    {
      number: "02",
      title: "White Glove Setup",
      description:
        "Our expert team handles the complete configuration of your domains with Google and Microsoft inboxes, including all technical DNS settings.",

      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "03",
      title: "Scale with Precision",
      description:
        "From boutique agencies to enterprise campaigns, our infrastructure grows with your needs, fast and reliable.",
      icon: <Mail className="w-8 h-8" />,
    },
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Universal Platform Mastery",
      subtitle:
        "As an authorized indirect reseller of Google Workspace and Microsoft 365, we help you launch on trusted platforms with properly configured accounts.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "White-Glove Excellence",
      subtitle:
        "Full DNS setup including DKIM, DMARC, and SPF, handled for you, so you don't have to worry about the technical details.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Reliable Deployment",
      subtitle:
        "We configure your accounts and warm them up properly, so you're ready to start sending once everything is verified and stable.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Inbox Placement Guidance",
      subtitle:
        "We follow proven deliverability practices to help improve inbox rates, but results can vary based on usage, content, and sending behavior.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-scroll {
          animation: scroll 40s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          will-change: transform;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 40s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          will-change: transform;
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-gradient {
          background: linear-gradient(
            -45deg,
            #667eea,
            #764ba2,
            #f093fb,
            #f5576c
          );
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }

        .glass-morphism {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .mesh-gradient {
          background: radial-gradient(
              circle at 20% 80%,
              #667eea 0%,
              transparent 50%
            ),
            radial-gradient(circle at 80% 20%, #764ba2 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #f093fb 0%, transparent 50%);
        }
        /* Logo scroll improvements */
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 12rem;
          height: 6rem;
          padding: 0 1rem;
          flex-shrink: 0;
        }

        .logo-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .logo-wrapper:hover {
          transform: scale(1.05);
        }

        .logo-image {
          max-width: 100%;
          max-height: 3rem;
          object-fit: contain;
          filter: grayscale(1) opacity(0.7);
          transition: filter 0.3s ease;
        }

        .logo-wrapper:hover .logo-image {
          filter: grayscale(0) opacity(1);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .logo-item {
            width: 10rem;
          }

          .animate-scroll,
          .animate-scroll-reverse {
            animation-duration: 35s;
          }
        }

        @media (max-width: 768px) {
          .logo-item {
            width: 8rem;
            height: 5rem;
          }

          .logo-image {
            max-height: 2.5rem;
          }

          .animate-scroll,
          .animate-scroll-reverse {
            animation-duration: 30s;
          }
        }

        @media (max-width: 480px) {
          .logo-item {
            width: 7rem;
            height: 4rem;
          }

          .logo-image {
            max-height: 2rem;
          }

          .animate-scroll,
          .animate-scroll-reverse {
            animation-duration: 25s;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>

      {/* Modern Header */}
      <header className="fixed top-0 w-full z-50 glass-morphism border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/icons/logo1.png"
                alt="Salesblast Logo"
                width={29}
                height={29}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-gray-900">
                Salesblast India
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Process
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                FAQ
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Mesh Gradient */}
      <section className="relative min-h-screen flex items-center justify-center mesh-gradient pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 via-purple-50/90 via-gray-50/70 to-white"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={true}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
            enableScrollUp={true}
          >
            <div className="animate-float">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6 sm:mb-8">
                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-blue-600 mr-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Trusted by multiple businesses worldwide
                </span>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            enableScrollUp={true}
            animateOpacity
            scale={1.0}
            threshold={0.1}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] 2xl:text-[9rem] 3xl:text-[10rem] font-normal font-hero mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 leading-[1.0] tracking-[-0.03em]">
              <span className="luxury-text bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent font-semibold">Get </span>
              <AuroraText>Reliable</AuroraText>
              <br />
              <span className="luxury-text bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent font-semibold">Inboxes, </span>
              <span className="font-orpheus italic font-normal opacity-90">
                <br />
                <TypingAnimation
                  words={["FAST", "SECURE", "READY", "CLEAN"]}
                  colors={["#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#3B82F6"]}
                  typingSpeed={120}
                  pauseDuration={2000}
                />
              </span>
            </h1>
          </AnimatedContent>
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.3}
            delay={130}
            enableScrollUp={true}
          >
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 max-w-5xl mx-auto leading-relaxed">
              Scale up your outreach with a reseller
              <span className="font-semibold text-blue-600">
                {" "}
                you can trust.
              </span>{" "}
            </p>
          </AnimatedContent>

          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.3}
            delay={160}
            enableScrollUp={true}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm w-full sm:w-auto">
                <span className="relative z-10">Buy Now</span>
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative overflow-hidden bg-transparent text-black px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 border-2 border-blue-400 hover:border-blue-300 w-full sm:w-auto">
                <span className="relative z-10">Book a call</span>
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </AnimatedContent>


        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div
          className="absolute top-1/3 right-16 w-16 h-16 bg-purple-500/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-pink-500/10 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </section>



      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        initialOpacity={0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
        enableScrollUp={true}
      >
        {/* Modern Features Section */}
        <section id="features" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Why Choose{" "}
                <span className="text-gradient">Salesblast India?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We build inbox systems that work — stable, optimized for deliverability, and backed by responsive support you can rely on.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <AnimatedContent
                  key={index}
                  distance={100}
                  direction="vertical"
                  reverse={false}
                  initialOpacity={0}
                  animateOpacity
                  scale={1.0}
                  threshold={0.1}
                  delay={index * 100}
                  enableScrollUp={true}
                >
                  <div className="group relative h-full">
                    <div
                      className={`relative p-6 lg:p-8 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover-lift bg-white h-full flex flex-col`}
                    >
                      <div
                        className={`inline-flex p-3 lg:p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-4 lg:mb-6 self-start`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 flex-shrink-0">
                        {feature.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed flex-grow">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* Problem Statement with Modern Design */}

      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        ></div>
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          initialOpacity={0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
          enableScrollUp={true}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Speed that Satisfies. Service that Delivers.
            </h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto">
              Designed for businesses that move fast and serve better — where
              every conversation counts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                initialOpacity={0}
                animateOpacity
                scale={1.0}
                threshold={0.1}
                enableScrollUp={true}
              >
                <div className="glass-morphism p-6 lg:p-8 rounded-2xl hover-lift h-full flex flex-col justify-between min-h-[320px]">
                  <div className="flex flex-col items-center flex-grow">
                    <div className="text-3xl lg:text-4xl font-bold mb-4 flex-shrink-0">
                      Instant Response
                    </div>
                    <div className="relative w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] mt-4 mx-auto flex-grow flex items-center justify-center">
                      <Image
                        src="/icons/iconreply6.png"
                        width={150}
                        height={150}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                initialOpacity={0}
                animateOpacity
                scale={1.0}
                threshold={0.1}
                delay={160}
              >
                <div className="glass-morphism p-6 lg:p-8 rounded-2xl hover-lift bg-gradient-to-r from-green-500/20 to-blue-500/20 h-full flex flex-col justify-between min-h-[320px]">
                  <div className="flex flex-col items-center flex-grow">
                    <div className="text-3xl lg:text-4xl font-bold mb-4 flex-shrink-0">
                      Outstanding Service
                    </div>
                    <div className="relative w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] mt-4 mx-auto flex-grow flex items-center justify-center">
                      <Image
                        src="/icons/outstandingicon2.png"
                        width={150}
                        height={150}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                initialOpacity={0}
                animateOpacity
                scale={1.0}
                threshold={0.1}
                delay={210}
              >
                <div className="glass-morphism p-6 lg:p-8 rounded-2xl hover-lift h-full flex flex-col justify-between min-h-[320px]">
                  <div className="flex flex-col items-center flex-grow">
                    <div className="text-3xl lg:text-4xl font-bold mb-4 flex-shrink-0">
                      Consistency that builds Trust
                    </div>
                    <div className="relative w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] mt-4 mx-auto flex-grow flex items-center justify-center">
                      <Image
                        src="/icons/handshake1.png"
                        width={150}
                        height={150}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* Modern 4 Steps Section */}
      <section
        id="process"
        className="py-32 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
              delay={100}
              enableScrollUp={true}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-gradient">3 Simple Steps</span> to Success
              </h2>
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
              delay={160}
              enableScrollUp={true}
            >
              <p className="text-xl text-gray-600 mb-4">
                Get more emails per month in just days
              </p>
            </AnimatedContent>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <AnimatedContent
                key={index}
                distance={100}
                direction="vertical"
                reverse={false}
                initialOpacity={0}
                animateOpacity
                scale={1.0}
                threshold={0.1}
                delay={index * 150}
                enableScrollUp={true}
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center justify-center w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold text-base lg:text-lg mb-4 lg:mb-6 flex-shrink-0">
                      {step.number}
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 flex-shrink-0">
                      {step.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Modern FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
              delay={100}
              enableScrollUp={true}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                <span className="text-gradient">Frequently Asked</span>{" "}
                Questions
              </h2>
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              initialOpacity={0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
              delay={160}
              enableScrollUp={true}
            >
              <p className="text-xl text-gray-600">
                Everything you need to know about Salesblast India
              </p>
            </AnimatedContent>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;

              return (
                <AnimatedContent
                  key={index}
                  distance={100}
                  direction="vertical"
                  reverse={false}
                  initialOpacity={0}
                  animateOpacity
                  scale={1.0}
                  threshold={0.1}
                  delay={100}
                  enableScrollUp={true}
                >
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <button
                      className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors rounded-2xl"
                      onClick={() => setOpenFAQ(isOpen ? null : index)}
                    >
                      <span className="font-semibold text-gray-900 text-base sm:text-lg pr-4">
                        {faq.question}
                      </span>
                      <div className="ml-4 flex-shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 transition-transform duration-300 ease-in-out" />
                        ) : (
                          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform duration-300 ease-in-out" />
                        )}
                      </div>
                    </button>

                    {/* Animated Answer Block */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-4 sm:pb-6"
                        : "grid-rows-[0fr] opacity-0 pb-0"
                        } px-4 sm:px-6 lg:px-8 overflow-hidden`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
            delay={100}
            enableScrollUp={true}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Ready to{" "}
              <span className="text-gradient animate-gradient">Scale?</span>
            </h2>
          </AnimatedContent>
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
            delay={220}
            enableScrollUp={true}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
              Join thousands of businesses generating predictable revenue with
              Salesblast India
            </p>
          </AnimatedContent>
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
            delay={160}
            enableScrollUp={true}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm w-full sm:w-auto">
                <span className="relative z-10">Buy Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative overflow-hidden bg-white/10 backdrop-blur-md text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-white/10 hover:scale-105 transition-all duration-300 border border-white/20 hover:bg-white/20 w-full sm:w-auto">
                <span className="relative z-10">Book a call</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-black text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                </div>
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold">Salesblast India</span>
              </div>
              <p className="text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
                Fast and reliable cold email infrastructure for ambitious
                businesses ready to scale.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Product</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">Company</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm sm:text-base text-center md:text-left">
              &copy; 2025 Salesblast India. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalesblastIndia;
