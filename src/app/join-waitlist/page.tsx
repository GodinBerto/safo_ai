"use client";
import { JoinWaitlist, GetWaitlistCount } from "@/api/join_waitlist";
import ColorBends from "@/components/ColorBends";
import Footer from "@/components/footer";
import LandingNavbar from "@/components/landingNavbar";
import Toast from "@/components/ui/toast";
import Confetti from "react-confetti";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart2,
  BookOpen,
  Brain,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Code,
  Facebook,
  Lightbulb,
  Linkedin,
  Play,
  Twitter,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is SafoAI?",
    answer:
      "SafoAI is an intelligent AI platform designed to help businesses automate workflows, gain actionable insights, and accelerate software development, all in one unified system.",
  },
  {
    question: "Who can use SafoAI?",
    answer:
      "SafoAI is ideal for businesses of all sizes, software development teams, and entrepreneurs looking to streamline operations, improve decision-making, and build software faster.",
  },
  {
    question: "What kind of tasks can SafoAI automate?",
    answer:
      "SafoAI can automate tasks such as data analysis and reporting, workflow optimization, routine administrative tasks, customer support with AI chatbots, and software prototyping and code suggestions.",
  },
  {
    question: "How does SafoAI improve software development?",
    answer:
      "SafoAI provides AI-powered assistance for designing, building, and testing software, helping teams reduce development time, minimize errors, and improve overall efficiency.",
  },
  {
    question: "Is my data secure on SafoAI?",
    answer:
      "Yes. SafoAI uses advanced encryption, access controls, and secure storage to ensure your business data remains private and protected at all times.",
  },
  {
    question: "Can SafoAI integrate with existing tools?",
    answer:
      "Absolutely. SafoAI supports integration with popular business tools, APIs, and databases, allowing seamless workflow automation and data synchronization.",
  },
  {
    question: "How can I get started with SafoAI?",
    answer:
      "You can sign up on the SafoAI platform, choose a plan that fits your needs, and start leveraging AI-powered automation and insights immediately. Training resources and tutorials are also available.",
  },
  {
    question: "Is technical expertise required to use SafoAI?",
    answer:
      "Not at all. SafoAI is designed to be user-friendly for both technical and non-technical users, with intuitive dashboards, AI guidance, and step-by-step workflows.",
  },
  {
    question: "What makes SafoAI different from other AI platforms?",
    answer:
      "SafoAI combines business growth automation with software development acceleration, offering a unique platform that addresses operational efficiency and development needs in one place.",
  },
  {
    question: "Where can I get support if I have questions?",
    answer:
      "SafoAI provides 24/7 customer support via chat, email, and detailed knowledge base articles to help you resolve issues quickly.",
  },
];

const caseStudies = [
  {
    icon: <Brain className="text-white" size={24} />,
    subtitle: "AI Business Assistant",
    description:
      "Stop wading through data. Our AI Prompt Engine converts simple, natural language questions into sophisticated business intelligence, strategic insights, and precise, step-by-step action plans. Get the roadmap to your next win, instantly.",
  },
  {
    icon: <BarChart2 className="text-white" size={24} />,
    subtitle: "Market Insights",
    description:
      "Access real-time data feeds, predictive forecasts, and stunning visual deep-dives across all global industries. Identify emerging trends, quantify risk, and benchmark performance against competitors with unparalleled accuracy.",
  },
  {
    icon: <Lightbulb className="text-white" size={24} />,
    subtitle: "Idea Validation",
    description:
      "Every idea needs scrutiny. Our AI runs comprehensive SWOT analysis, maps your competitive landscape, and generates detailed, phased execution roadmaps. De-risk your innovation before you invest, ensuring market fit and traction.",
  },
  {
    icon: <Code className="text-white" size={24} />,
    subtitle: "AI Project Builder",
    description:
      "Turn high-level concepts into fully functional, production-ready applications. The AI Project Builder generates full-stack code and configurations from your prompt, providing instant deployment capabilities for prototypes, MVPs, and internal tools.",
  },
  {
    icon: <Users className="text-white" size={24} />,
    subtitle: "Investor Matching",
    description:
      "Connection is everything. We use AI to match your startup's stage, sector, and vision with a curated network of VCs, angel investors, and accelerators. Find partners who bring not just capital, but strategic value.",
  },
  {
    icon: <BookOpen className="text-white" size={24} />,
    subtitle: "Learning Hub",
    description:
      "Elevate your expertise with AI-curated courses, proven playbooks, and a vibrant, community-driven knowledge base. Learn the latest growth tactics, operational hacks, and success stories from top-tier founders and experts.",
  },
];

export default function JoinWaitlistPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [toastState, setToastState] = useState<{
    open: boolean;
    title?: string;
    message: string;
    variant?: "success" | "error" | "info";
  }>({ open: false, title: "", message: "", variant: "info" });

  const showToast = (opts: {
    title?: string;
    message: string;
    variant?: "success" | "error" | "info";
  }) => {
    setToastState({
      open: true,
      title: opts.title,
      message: opts.message,
      variant: opts.variant ?? "info",
    });
  };

  const closeToast = () => setToastState((s) => ({ ...s, open: false }));

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const verifyEmail = async (email: string) => {
    const apiKey = "52e7c000ca394457980a5c6e3c24ea00";
    const response = await fetch(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`
    );
    const data = await response.json();
    return data.is_valid_format.value && data.is_smtp_valid.value;
  };

  const joinWaitlist = async (email: string) => {
    setLoading(true);
    try {
      if (!email.trim()) {
        showToast({
          title: "Error",
          message: "Please enter an email address.",
          variant: "error",
        });
        setLoading(false);
        return;
      }

      const isRealEmail = await verifyEmail(email);
      if (!isRealEmail) {
        showToast({
          title: "Error",
          message: "Email does not exist.",
          variant: "error",
        });
        setLoading(false);
        return;
      }

      const response = await JoinWaitlist(email);
      console.log("Status:", response.status);

      if (response.status === 409) {
        showToast({
          title: "Info",
          message: "You have already joined the waitlist.",
          variant: "info",
        });
        setLoading(false);
        return;
      }

      if (!response.ok) {
        showToast({
          title: "Error",
          message: "Something went wrong.",
          variant: "error",
        });
        setLoading(false);
        return;
      }

      showToast({
        title: "Joined",
        message: "You joined the waitlist!",
        variant: "success",
      });

      setEmail("");
      setRefresh(!refresh);
      setLoading(false);
      await getWaitlistCount();
      // ✅ Show modal
      setShowCongratsModal(true);
    } catch (error) {
      console.error("Error joining waitlist:", error);
      showToast({
        title: "Error",
        message: "Failed to join waitlist.",
        variant: "error",
      });
      setLoading(false);
    }
  };

  const getWaitlistCount = async () => {
    try {
      const count = await GetWaitlistCount();
      showToast({
        title: "Waitlist Count",
        message: `${count ?? 0} people joined`,
        variant: "info",
      });
      setWaitlistCount(count);
    } catch (error) {
      console.error("Error fetching waitlist count:", error);
      showToast({
        title: "Error",
        message: "Failed to fetch waitlist count.",
        variant: "error",
      });
    }
  };

  useEffect(() => {
    getWaitlistCount();
  }, []);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        {/* Background (your ColorBends animation or 3D canvas) */}
        <ColorBends />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-none" />
      </div>

      {/* Navigation */}
      <LandingNavbar />

      {/* Content */}
      <motion.section
        className="relative w-full min-h-screen md:min-h-[calc(100vh-300px)] flex items-center justify-center overflow-hidden"
        id="join-waitlist"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Joined Count */}
          <div className="flex items-center justify-center gap-6 border-r border-stone-600/10 bg-stone-300/10 backdrop-blur-xl mb-4 w-fit mx-auto px-4 py-2 rounded-full">
            <div className="flex items-center">
              <img
                src="https://i.pravatar.cc/40"
                className="w-7 h-7 rounded-full border-2 border-white -mr-2"
                alt="avatars"
              />
              <img
                src="https://i.pravatar.cc/41"
                className="w-7 h-7 rounded-full border-2 border-white -mr-2"
                alt="avatars"
              />
              <img
                src="https://i.pravatar.cc/42"
                className="w-7 h-7 rounded-full border-2 border-white -mr-2"
                alt="avatars"
              />
            </div>
            <p className="text-sm md:text-md text-stone-300">
              {waitlistCount} people joined waitlist
            </p>
          </div>

          {/* Rank */}
          <h1 className="text-3xl md:text-6xl font-semibold text-stone-100 mb-2">
            Join{" "}
            <span className="bg-linear-to-r from-red-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              SafoAI{" "}
            </span>
            Waitlist!
          </h1>

          <p className="text-stone-300 mb-6">We are coming soon.</p>

          {/* Join waitlist */}
          <motion.div
            className="flex items-center gap-2 bg-white p-2 rounded-full shadow-md max-w-lg mx-auto mb-6 w-full"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <input
              type="email"
              placeholder="Enter your email to join the waitlist..."
              className="flex-1 px-4 py-2 text-sm text-gray-700 focus:outline-none rounded-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={async () => {
                await joinWaitlist(email);
              }}
              disabled={loading}
              className={`relative bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap cursor-pointer
    hover:bg-indigo-600 transition-all
    disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2`}
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}

              {loading ? "Joining..." : "Join Waitlist"}
            </button>
          </motion.div>

          {/* Countdown */}
          {/* <div className="flex items-center justify-center gap-4 text-center">
            {[
              { value: "102", label: "days" },
              { value: "0", label: "hours" },
              { value: "33", label: "minutes" },
              { value: "55", label: "seconds" },
            ].map((item, index) => (
              <div key={index}>
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div> */}
        </motion.div>
      </motion.section>

      <motion.section
        className="relative w-full flex flex-col items-center justify-center pb-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Video Container */}
        <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-[400px] lg:h-[600px]">
          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="absolute top-4 left-4 bg-blue-600 px-4 py-2 rounded-full flex items-center gap-2 shadow z-20"
          >
            <Play size={20} className="text-white" />
          </button>

          {/* Thumbnail overlay */}
          {/* {!isPlaying && (
            <img
              src="/images/image1.png"
              alt="Video Thumbnail"
              className="absolute inset-0 w-full h-full object-cover cursor-pointer z-10"
              onClick={handlePlay}
            />
          )} */}

          {/* Video */}
          {/* <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls={isPlaying}
            playsInline
          >
            <source src="/videos/safoai-video.mp4" type="video/mp4" />
          </video> */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Gn2KsL81n_0?si=laylEhr4AD1NaHZe"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      <motion.section
        className="text-white py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-4">
          <div className="">
            {/* Header */}
            <p className="text-xs tracking-widest text-gray-400 uppercase">
              Explore the features of SafoAI
            </p>

            <h2 className="text-4xl font-semibold mt-2">Features</h2>

            <p className="text-gray-400 max-w-xl mt-2">
              Explore SafoAI&apos;s core features, including AI-powered business
              assistants, real-time market insights, automated idea validation,
              full-stack project building, investor matching, and a
              comprehensive learning hub — all designed to streamline workflows
              and drive smarter decisions.
            </p>
          </div>
          <div>
            <Link href={"#join-waitlist"}>
              <button className="rounded-full bg-white hover:bg-white/80 text-black text-sm py-2 px-5 transition cursor-pointer">
                Discover More
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className="p-6 bg-stone-300/10 backdrop-blur-xl rounded-lg border border-stone-700 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-md mb-4">
                  {caseStudy.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {caseStudy.subtitle}
                </h3>
                <p className="text-gray-400">{caseStudy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="max-w-6xl mx-auto px-4 py-12 pb-44"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <p className="text-xs tracking-widest text-gray-400 uppercase">FAQ</p>

        <h2 className="text-4xl font-semibold mt-2">
          Your Questions About SafoAI, Answered
        </h2>

        <p className="text-gray-400 max-w-xl mt-2 mb-8">
          Discover how SafoAI helps businesses automate processes, gain
          insights, and accelerate software development with AI-powered
          solutions.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-stone-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center p-4 text-left bg-stone-300/10 backdrop-blur-xl"
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-black border-t border-stone-700">
                  <p className="text-stone-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      <Toast
        open={toastState.open}
        title={toastState.title}
        message={toastState.message}
        variant={toastState.variant}
        onClose={closeToast}
      />

      {showCongratsModal && (
        <>
          {/* Confetti */}
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={300}
          />

          {/* Modal Overlay */}
          <div className="fixed inset-0 z-40 flex items-center justify-center px-4 sm:px-0 bg-black/70">
            <div className="bg-stone-300/10 backdrop-blur-xl border border-stone-700 rounded-xl shadow-xl p-4 sm:p-6 w-full max-w-xs sm:max-w-sm text-center relative">
              {/* Close Button */}
              <button
                onClick={() => setShowCongratsModal(false)}
                className="absolute top-2 right-2 text-gray-300 hover:text-white"
              >
                <X size={20} />
              </button>

              {/* Icon & Title */}
              <CheckCircle size={50} className="mx-auto text-green-500 mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Congratulations!
              </h2>
              <p className="mb-4 text-stone-400 text-sm sm:text-base">
                You&apos;ve successfully joined the SafoAI waitlist!
                <br />
                <br />
                Stay connected with us on social media to get the latest
                updates, tips, and join our community. Click the icons below to
                follow or join us on WhatsApp, Facebook, Twitter, and LinkedIn.
              </p>

              {/* Social Sharing */}
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {/* WhatsApp */}
                <a
                  href="https://whatsapp.com/channel/0029VbC0sUZHwXbAJp7nc20J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 p-3 rounded-full text-white transition"
                >
                  <FaWhatsapp size={20} />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/sharer/sharer.php?u=https://yourwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition"
                >
                  <Facebook size={20} />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/intent/tweet?url=https://yourwebsite.com&text=Join%20SafoAI%20Waitlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full text-white transition"
                >
                  <Twitter size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://yourwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full text-white transition"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
