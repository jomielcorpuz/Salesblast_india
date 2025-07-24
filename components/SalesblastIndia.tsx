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



const SalesblastIndia = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [orderData, setOrderData] = useState({
        clientName: '',
        masterInboxDomain: '',
        masterInboxAddress: '',
        masterInboxPassword: '',
        mainWebsite: '',
        godaddyUsername: '',
        godaddyPassword: '',
        porkbunUsername: '',
        porkbunPassword: '',
        namecheapUsername: '',
        namecheapPassword: '',
        otherRegistrarName: '',
        otherRegistrarUsername: '',
        otherRegistrarPassword: '',
        instantlyUsername: '',
        instantlyPassword: '',
        smartleadUsername: '',
        smartleadPassword: '',
        piplUsername: '',
        piplPassword: '',
        emailBisonUrl: '',
        emailBisonUsername: '',
        emailBisonPassword: '',
        otherSequencerName: '',
        otherSequencerUsername: '',
        otherSequencerPassword: '',
        enableWarmup: '',
        smartleadWarmupEmailsPerDay: '',
        smartleadDailyRampup: '',
        smartleadRandomiseEmails: '',
        smartleadReplyRate: '',
        instantlyIncreasePerDay: '',
        instantlyDailyWarmupLimit: '',
        instantlyReplyRate: '',
        additionalNote: '',

        // Domain management
        domains: [''],
        preferredPassword: '',
        usersPerDomain: '',
        emailPatterns: '',
        userFullName: '',
        profilePictureLink: ''
    });

    const handleOrderSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const orderSheet = `CLIENT AND SETUP INFO

Order Name (Client Name): ${orderData.clientName}
Master Inbox Domain: ${orderData.masterInboxDomain}
Master Inbox Address: ${orderData.masterInboxAddress}
Master Inbox Password: ${orderData.masterInboxPassword}
Main website to forward to: ${orderData.mainWebsite}

REGISTRAR INFO
Please complete only the applicable section.

Godaddy Username: ${orderData.godaddyUsername}
Godaddy Password: ${orderData.godaddyPassword}

Porkbun Username: ${orderData.porkbunUsername}
Porkbun Password: ${orderData.porkbunPassword}

Namecheap Username: ${orderData.namecheapUsername}
Namecheap Password: ${orderData.namecheapPassword}

Other Registrar Name: ${orderData.otherRegistrarName}
Other Registrar Username: ${orderData.otherRegistrarUsername}
Other Registrar Password: ${orderData.otherRegistrarPassword}

SEQUENCER INFO
Only fill in the one you intend to use:

Instantly Username: ${orderData.instantlyUsername}
Instantly Password: ${orderData.instantlyPassword}

Smartlead Username: ${orderData.smartleadUsername}
Smartlead Password: ${orderData.smartleadPassword}

Pipl Username: ${orderData.piplUsername}
Pipl Password: ${orderData.piplPassword}

EmailBison URL: ${orderData.emailBisonUrl}
EmailBison Username: ${orderData.emailBisonUsername}
EmailBison Password: ${orderData.emailBisonPassword}

Other Sequencer Name: ${orderData.otherSequencerName}
Other Sequencer Username: ${orderData.otherSequencerUsername}
Other Sequencer Password: ${orderData.otherSequencerPassword}

WARM UP SETTING (OPTIONAL)
ENABLE WARM UP (YES/NO): ${orderData.enableWarmup}
Please complete only the applicable section.

SMARTLEAD
Total number of warm up emails per day: ${orderData.smartleadWarmupEmailsPerDay}
Daily Rampup: ${orderData.smartleadDailyRampup}
Randomise number of warm up emails per day: ${orderData.smartleadRandomiseEmails}
Reply rate: ${orderData.smartleadReplyRate}

INSTANTLY
Increase per day: ${orderData.instantlyIncreasePerDay}
Daily warmup limit: ${orderData.instantlyDailyWarmupLimit}
Reply rate: ${orderData.instantlyReplyRate}

ADDITIONAL NOTE: ${orderData.additionalNote}

DOMAIN LIST
${orderData.domains.map((domain, index) => `Domain #${String(index + 1).padStart(3, '0')}: ${domain}`).filter(line => line.split(': ')[1].trim() !== '').join('\n')}

Preferred Password: ${orderData.preferredPassword}

# of users per domain: ${orderData.usersPerDomain}

Email Patterns: ${orderData.emailPatterns}

User Full Name: ${orderData.userFullName}

Profile Picture Link: ${orderData.profilePictureLink}`;

        return orderSheet;
    };



    const handleInputChange = (field: string, value: string) => {
        setOrderData(prev => ({ ...prev, [field]: value }));
    };

    const faqs = [
        {
            question: "Are domains included, or do I need to provide my own?",
            answer:
                "You'll need to provide your own domains from a domain registrar. Once you have them, we'll take care of the rest, DNS setup, inbox creation, and configuration.",
        },
        {
            question: "Do I need to warm up the inboxes first?",
            answer:
                "We recommend a warm-up period of at least two weeks to gradually build sending reputation and avoid deliverability issues. As part of our setup, we’ll configure the warm-up schedule directly within your sequencer so everything is properly aligned from day one to ensure optimal inbox placement.",
        },
        {
            question: "Can I reuse old domains, or do I need new ones?",
            answer:
                "You can reuse domains, but if they've been used for bulk sending before, deliverability might be affected and we don’t recommend it. Either way, old or new, we can work with what you have.",
        },
        {
            question: "Why is there a limit on users per domain?",
            answer:
                "Platforms like Google and Microsoft have built-in limits to help prevent abuse. We follow best practices to keep your sending reputation safe. While we suggest using three accounts for the best results, there’s technically no hard limit.",
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
                "Anyone can claim best practices — we actually deliver. From day one, we set up SPF, DKIM, DMARC, and warming strategies, then monitor continuously to ensure your emails hit the inbox.",
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
                "Our expert team handles the complete setup and configuration of your domains and inboxes, including all technical DNS settings.",

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
                "As an authorized reseller of Google Workspace and Microsoft 365, we help you launch on trusted platforms with properly configured accounts.",
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
            title: (
                <>
                    Reliable
                    <span className="hidden md:inline lg:inline xl:inline">
                        <br />
                    </span>
                    <span className="inline md:hidden lg:hidden xl:hidden"> </span>
                    Deployment
                </>
            ),
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
                                src="/icons/logo2.png"
                                alt="Salesblast Logo"
                                width={75}
                                height={75}
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
                                    Trusted By Business Worldwide
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
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] 2xl:text-[9rem] 3xl:text-[10rem] font-normal font-hero mb-3 leading-[0.85] tracking-[-0.03em]">
                            <span className="luxury-text bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent font-semibold">Get </span>
                            <AuroraText>Reliable</AuroraText>
                            <br />
                            <span className="luxury-text bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent font-semibold">Inboxes, </span>
                            <span className="font-orpheus font-normal opacity-90">
                                <br />
                                <div className="text-7xl sm:text-8xl md:text-9xl lg:text-[8rem] xl:text-[9rem] 2xl:text-[11rem] font-medium tracking-tighter py-4 px-16 mx-4 overflow-visible">
                                    <AuroraText
                                        colors={["#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#3B82F6"]}
                                        speed={1}
                                    >
                                        FAST
                                    </AuroraText>
                                </div>
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
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 mb-1 sm:mb-2 md:mb-2 lg:mb-3 xl:mb-3 max-w-5xl mx-auto leading-relaxed">
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
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
                            <button
                                /*onClick={() => setShowOrderForm(true)}*/
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm w-full sm:w-auto"
                            >
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

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.0}
                        threshold={0.1}
                        enableScrollUp={true}>

                        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                            Speed that Satisfies. Service that Delivers.
                        </h2>
                        <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto">
                            Designed for businesses that move fast and serve better — where
                            every conversation counts.
                        </p>

                    </AnimatedContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.1}
                            delay={60}
                            enableScrollUp={true}
                        >
                            <div className="glass-morphism p-6 lg:p-8 rounded-2xl hover-lift h-full flex flex-col justify-between min-h-[320px]">
                                <div className="flex flex-col items-center flex-grow">
                                    <div className="text-3xl lg:text-4xl font-bold mb-4 flex-shrink-0 leading-tight text-center">
                                        Lightening Fast
                                        Response
                                        <br />
                                        Time
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
                            delay={120}
                            enableScrollUp={true}
                        >
                            <div className="glass-morphism p-6 lg:p-8 rounded-2xl hover-lift bg-gradient-to-r from-green-500/20 to-blue-500/20 h-full flex flex-col justify-between min-h-[320px]">
                                <div className="flex flex-col items-center flex-grow">
                                    <div className="text-3xl lg:text-4xl font-bold mb-8 pb-8 flex-shrink-0">
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
                            enableScrollUp={true}
                        >
                            <div className="glass-morphism p-6 lg:p-8 rounded-2xl hover-lift h-full flex flex-col justify-between min-h-[320px]">
                                <div className="flex flex-col items-center flex-grow">
                                    <div className="text-3xl lg:text-4xl font-bold mb-4 flex-shrink-0">
                                        Consistency That Builds Trust
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
                            <button
                                onClick={() => setShowOrderForm(true)}
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm w-full sm:w-auto"
                            >
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
                                <Image
                                    src="/icons/logo2.png"
                                    alt="Salesblast Logo"
                                    width={75}
                                    height={75}
                                    className="rounded-full"
                                />
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

            {/* Order Form Modal */}
            {showOrderForm && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col">
                        {/* Sticky Header */}
                        <div className="sticky top-0 bg-white z-10 p-8 pb-4 border-b border-gray-100 shadow-sm">
                            <div className="flex justify-between items-center">
                                <h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Create Order</h2>
                                <button
                                    onClick={() => setShowOrderForm(false)}
                                    className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-3 transition-all duration-200 text-3xl font-bold w-12 h-12 flex items-center justify-center"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-8 pt-4">

                            <form onSubmit={handleOrderSubmit} className="space-y-8">
                                {/* Client and Setup Information */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white font-bold text-sm">1</span>
                                        </div>
                                        Client and Setup Information
                                    </h3>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                Order Name (Client Name) *
                                            </label>
                                            <input
                                                type="text"
                                                value={orderData.clientName}
                                                onChange={(e) => handleInputChange('clientName', e.target.value)}
                                                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                                placeholder="Enter client name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                Master Inbox Domain *
                                            </label>
                                            <input
                                                type="text"
                                                value={orderData.masterInboxDomain}
                                                onChange={(e) => handleInputChange('masterInboxDomain', e.target.value)}
                                                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                                placeholder="example.com"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                Master Inbox Address *
                                            </label>
                                            <input
                                                type="email"
                                                value={orderData.masterInboxAddress}
                                                onChange={(e) => handleInputChange('masterInboxAddress', e.target.value)}
                                                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                                placeholder="admin@example.com"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                Master Inbox Password *
                                            </label>
                                            <input
                                                type="password"
                                                value={orderData.masterInboxPassword}
                                                onChange={(e) => handleInputChange('masterInboxPassword', e.target.value)}
                                                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                                placeholder="Enter password"
                                                required
                                            />
                                        </div>

                                        <div className="lg:col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                Main Website to Forward To *
                                            </label>
                                            <input
                                                type="url"
                                                value={orderData.mainWebsite}
                                                onChange={(e) => handleInputChange('mainWebsite', e.target.value)}
                                                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                                placeholder="https://yourwebsite.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Registrar Information Section */}
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white font-bold text-sm">2</span>
                                        </div>
                                        Registrar Information
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-6 bg-white/50 p-3 rounded-lg border border-green-200">Please complete only the applicable section.</p>

                                    {/* GoDaddy Section */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-medium text-gray-700 mb-4 pb-2 border-b border-green-200">GoDaddy</h4>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    GoDaddy Username
                                                </label>
                                                <input
                                                    type="text"
                                                    value={orderData.godaddyUsername}
                                                    onChange={(e) => handleInputChange('godaddyUsername', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="GoDaddy username"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    GoDaddy Password
                                                </label>
                                                <input
                                                    type="password"
                                                    value={orderData.godaddyPassword}
                                                    onChange={(e) => handleInputChange('godaddyPassword', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="GoDaddy password"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Porkbun Section */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-medium text-gray-700 mb-4 pb-2 border-b border-green-200">Porkbun</h4>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Porkbun Username
                                                </label>
                                                <input
                                                    type="text"
                                                    value={orderData.porkbunUsername}
                                                    onChange={(e) => handleInputChange('porkbunUsername', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Porkbun username"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Porkbun Password
                                                </label>
                                                <input
                                                    type="password"
                                                    value={orderData.porkbunPassword}
                                                    onChange={(e) => handleInputChange('porkbunPassword', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Porkbun password"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Namecheap Section */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-medium text-gray-700 mb-4 pb-2 border-b border-green-200">Namecheap</h4>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Namecheap Username
                                                </label>
                                                <input
                                                    type="text"
                                                    value={orderData.namecheapUsername}
                                                    onChange={(e) => handleInputChange('namecheapUsername', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Namecheap username"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Namecheap Password
                                                </label>
                                                <input
                                                    type="password"
                                                    value={orderData.namecheapPassword}
                                                    onChange={(e) => handleInputChange('namecheapPassword', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Namecheap password"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Other Registrar Section */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-medium text-gray-700 mb-4 pb-2 border-b border-green-200">Other Registrar</h4>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Other Registrar Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={orderData.otherRegistrarName}
                                                    onChange={(e) => handleInputChange('otherRegistrarName', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Registrar name (e.g., Cloudflare, Domain.com)"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Other Registrar Username
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={orderData.otherRegistrarUsername}
                                                        onChange={(e) => handleInputChange('otherRegistrarUsername', e.target.value)}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                        placeholder="Username"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Other Registrar Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        value={orderData.otherRegistrarPassword}
                                                        onChange={(e) => handleInputChange('otherRegistrarPassword', e.target.value)}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sequencer Information Section */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white font-bold text-sm">3</span>
                                        </div>
                                        Sequencer Information
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">Only fill in the one you intend to use.</p>

                                    {/* Instantly Section */}
                                    <div className="mb-4">
                                        <h4 className="text-md font-medium text-gray-700 mb-3">Instantly</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Instantly Username
                                                </label>
                                                <input
                                                    type="text"
                                                    value={orderData.instantlyUsername}
                                                    onChange={(e) => handleInputChange('instantlyUsername', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Instantly username"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Instantly Password
                                                </label>
                                                <input
                                                    type="password"
                                                    value={orderData.instantlyPassword}
                                                    onChange={(e) => handleInputChange('instantlyPassword', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Instantly password"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Smartlead Section */}
                                    <div className="mb-4">
                                        <h4 className="text-md font-medium text-gray-700 mb-3">Smartlead</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Smartlead Username
                                                </label>
                                                <input
                                                    type="text"
                                                    value={orderData.smartleadUsername}
                                                    onChange={(e) => handleInputChange('smartleadUsername', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Smartlead username"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Smartlead Password
                                                </label>
                                                <input
                                                    type="password"
                                                    value={orderData.smartleadPassword}
                                                    onChange={(e) => handleInputChange('smartleadPassword', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Smartlead password"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pipl Section */}
                                    <div className="mb-4">
                                        <h4 className="text-md font-medium text-gray-700 mb-3">Pipl</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Pipl Username
                                                </label>
                                                <input
                                                    type="text"
                                                    value={orderData.piplUsername}
                                                    onChange={(e) => handleInputChange('piplUsername', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Pipl username"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Pipl Password
                                                </label>
                                                <input
                                                    type="password"
                                                    value={orderData.piplPassword}
                                                    onChange={(e) => handleInputChange('piplPassword', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Pipl password"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* EmailBison Section */}
                                    <div className="mb-4">
                                        <h4 className="text-md font-medium text-gray-700 mb-3">EmailBison</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    EmailBison URL
                                                </label>
                                                <input
                                                    type="url"
                                                    value={orderData.emailBisonUrl}
                                                    onChange={(e) => handleInputChange('emailBisonUrl', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="https://emailbison.com"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        EmailBison Username
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={orderData.emailBisonUsername}
                                                        onChange={(e) => handleInputChange('emailBisonUsername', e.target.value)}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                        placeholder="EmailBison username"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        EmailBison Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        value={orderData.emailBisonPassword}
                                                        onChange={(e) => handleInputChange('emailBisonPassword', e.target.value)}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                        placeholder="EmailBison password"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Other Sequencer Section */}
                                    <div className="mb-4">
                                        <h4 className="text-md font-medium text-gray-700 mb-3">Other Sequencer</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Other Sequencer Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={orderData.otherSequencerName}
                                                    onChange={(e) => handleInputChange('otherSequencerName', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="Sequencer name (e.g., Apollo, Outreach)"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Other Sequencer Username
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={orderData.otherSequencerUsername}
                                                        onChange={(e) => handleInputChange('otherSequencerUsername', e.target.value)}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                        placeholder="Username"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Other Sequencer Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        value={orderData.otherSequencerPassword}
                                                        onChange={(e) => handleInputChange('otherSequencerPassword', e.target.value)}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Warm-up Settings Section */}
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white font-bold text-sm">4</span>
                                        </div>
                                        Warm Up Setting (Optional)
                                    </h3>

                                    {/* Enable Warm Up */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Enable Warm Up (Yes/No)
                                        </label>
                                        <select
                                            value={orderData.enableWarmup}
                                            onChange={(e) => handleInputChange('enableWarmup', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                        >
                                            <option value="">Select option</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>

                                    <p className="text-sm text-gray-600 mb-4">Please complete only the applicable section.</p>

                                    {/* Smartlead Warm-up Settings */}
                                    <div className="mb-6">
                                        <h4 className="text-md font-medium text-gray-700 mb-3">Smartlead</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Total number of warm up emails per day
                                                </label>
                                                <input
                                                    type="number"
                                                    value={orderData.smartleadWarmupEmailsPerDay}
                                                    onChange={(e) => handleInputChange('smartleadWarmupEmailsPerDay', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="e.g., 50"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Daily Rampup
                                                </label>
                                                <input
                                                    type="number"
                                                    value={orderData.smartleadDailyRampup}
                                                    onChange={(e) => handleInputChange('smartleadDailyRampup', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="e.g., 5"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Randomise number of warm up emails per day
                                                </label>
                                                <select
                                                    value={orderData.smartleadRandomiseEmails}
                                                    onChange={(e) => handleInputChange('smartleadRandomiseEmails', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                >
                                                    <option value="">Select option</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Reply rate (%)
                                                </label>
                                                <input
                                                    type="number"
                                                    value={orderData.smartleadReplyRate}
                                                    onChange={(e) => handleInputChange('smartleadReplyRate', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="e.g., 30"
                                                    min="0"
                                                    max="100"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Instantly Warm-up Settings */}
                                    <div className="mb-6">
                                        <h4 className="text-md font-medium text-gray-700 mb-3">Instantly</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Increase per day
                                                </label>
                                                <input
                                                    type="number"
                                                    value={orderData.instantlyIncreasePerDay}
                                                    onChange={(e) => handleInputChange('instantlyIncreasePerDay', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="e.g., 3"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Daily warmup limit
                                                </label>
                                                <input
                                                    type="number"
                                                    value={orderData.instantlyDailyWarmupLimit}
                                                    onChange={(e) => handleInputChange('instantlyDailyWarmupLimit', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="e.g., 40"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Reply rate (%)
                                                </label>
                                                <input
                                                    type="number"
                                                    value={orderData.instantlyReplyRate}
                                                    onChange={(e) => handleInputChange('instantlyReplyRate', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                    placeholder="e.g., 25"
                                                    min="0"
                                                    max="100"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Note */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Additional Note
                                        </label>
                                        <textarea
                                            value={orderData.additionalNote}
                                            onChange={(e) => handleInputChange('additionalNote', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                            placeholder="Any additional notes or special requirements..."
                                            rows={4}
                                        />
                                    </div>
                                </div>

                                {/* Domain Management Section */}
                                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white font-bold text-sm">5</span>
                                        </div>
                                        Domain List
                                    </h3>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Domain List
                                        </label>
                                        <p className="text-sm text-gray-600 mb-3 bg-orange-50 p-3 rounded-lg border border-orange-200">
                                            📝 <strong>Instructions:</strong> Paste your domains here in any format (comma-separated, space-separated, or one per line). They will automatically be formatted with one domain per line. Perfect for bulk domain lists (100+ domains).
                                        </p>
                                        <textarea
                                            value={orderData.domains.join('\n')}
                                            onChange={(e) => {
                                                // Split by multiple delimiters: newlines, commas, semicolons, spaces, tabs
                                                const domainList = e.target.value
                                                    .split(/[\n,;\s\t]+/)
                                                    .map(domain => domain.trim())
                                                    .filter(domain => domain !== '');
                                                setOrderData(prev => ({ ...prev, domains: domainList.length > 0 ? domainList : [''] }));
                                            }}
                                            className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md resize-vertical"
                                            placeholder="example001.com, example002.com, example003.com&#10;or&#10;example001.com example002.com&#10;or&#10;example001.com;example002.com&#10;...paste domains in any format - they'll auto-format to one per line"
                                            rows={8}
                                            style={{ minHeight: '200px' }}
                                        />
                                        <div className="mt-2 text-sm text-gray-500 flex items-center justify-between">
                                            <span>💡 Tip: You can copy and paste from Excel/CSV files</span>
                                            <span className="font-medium text-orange-600">
                                                {orderData.domains.filter(d => d.trim() !== '').length} domains
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Preferred Password
                                            </label>
                                            <input
                                                type="password"
                                                value={orderData.preferredPassword}
                                                onChange={(e) => handleInputChange('preferredPassword', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                placeholder="Enter preferred password"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                # of users per domain
                                            </label>
                                            <input
                                                type="number"
                                                value={orderData.usersPerDomain}
                                                onChange={(e) => handleInputChange('usersPerDomain', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                placeholder="e.g., 10"
                                                min="1"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Patterns
                                            </label>
                                            <input
                                                type="text"
                                                value={orderData.emailPatterns}
                                                onChange={(e) => handleInputChange('emailPatterns', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                placeholder="e.g., firstname.lastname, firstname_lastname"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                User Full Name
                                            </label>
                                            <input
                                                type="text"
                                                value={orderData.userFullName}
                                                onChange={(e) => handleInputChange('userFullName', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Profile Picture Link
                                        </label>
                                        <input
                                            type="url"
                                            value={orderData.profilePictureLink}
                                            onChange={(e) => handleInputChange('profilePictureLink', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                                            placeholder="https://example.com/profile-picture.jpg"
                                        />
                                    </div>
                                </div>

                            </form>
                        </div>

                        {/* Sticky Footer with Action Buttons */}
                        <div className="sticky bottom-0 bg-white z-10 p-8 pt-4 border-t border-gray-100 shadow-lg">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    type="button"
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    Send to WhatsApp
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    Send to Gmail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SalesblastIndia;
