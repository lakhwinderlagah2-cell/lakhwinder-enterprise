import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  DollarSign,
  DoorOpen,
  Hammer,
  Home,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Package,
  Palette,
  Phone,
  Sofa,
  Star,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";
import {
  Position,
  useSubmitContact,
  useSubmitJobApplication,
} from "./hooks/useQueries";

// ─── Nav Links ────────────────────────────────────────────────────────────
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

// ─── Services Data ────────────────────────────────────────────────────────
const services = [
  {
    icon: Sofa,
    title: "Custom Furniture Making",
    description:
      "Bespoke tables, chairs, beds and shelving crafted to your exact dimensions and aesthetic vision.",
  },
  {
    icon: Home,
    title: "Home Renovation & Woodwork",
    description:
      "Complete home transformations — flooring, panelling, staircases and structural woodwork.",
  },
  {
    icon: Package,
    title: "Cabinet & Wardrobe Installation",
    description:
      "Precision-fitted kitchen cabinets and full-wall wardrobes designed to maximise every inch of space.",
  },
  {
    icon: DoorOpen,
    title: "Door & Window Frames",
    description:
      "Solid wood frames and shutters built for durability, security and lasting visual appeal.",
  },
  {
    icon: Wrench,
    title: "Interior Wooden Fittings",
    description:
      "Ceiling panels, wall cladding, skirting boards and decorative joinery for refined interiors.",
  },
  {
    icon: Building2,
    title: "Commercial Carpentry",
    description:
      "Office fit-outs, retail fixtures and large-scale commercial installations delivered on schedule.",
  },
];

// ─── Why Choose Us ────────────────────────────────────────────────────────
const whyUs = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    desc: "Every joint, finish and detail meets the highest standard — no shortcuts, ever.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Transparent, competitive quotes with no hidden costs. Premium work at honest prices.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "We respect your schedule. Projects are planned and executed to meet agreed deadlines.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Our four master carpenters bring decades of combined expertise to every project.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Your vision, realised. We work closely with you to create pieces that fit your life.",
  },
];

// ─── Portfolio Images ─────────────────────────────────────────────────────
const portfolioItems = [
  {
    src: "https://picsum.photos/seed/wood1/600/400",
    label: "Solid Oak Dining Set",
  },
  {
    src: "https://picsum.photos/seed/carpenter1/600/400",
    label: "Master Bedroom Wardrobe",
  },
  {
    src: "https://picsum.photos/seed/furniture1/600/400",
    label: "Kitchen Cabinet Refit",
  },
  {
    src: "https://picsum.photos/seed/wood2/600/400",
    label: "Handcrafted Bookshelf",
  },
  {
    src: "https://picsum.photos/seed/interior1/600/400",
    label: "Hardwood Floor Installation",
  },
  {
    src: "https://picsum.photos/seed/workshop1/600/400",
    label: "Commercial Office Fit-out",
  },
];

// ─── Open Positions ───────────────────────────────────────────────────────
const openPositions = [
  {
    title: "Carpenter",
    type: "Full-time",
    value: Position.carpenter,
    desc: "Skilled woodworker for residential and commercial projects.",
  },
  {
    title: "Apprentice Carpenter",
    type: "Entry-level",
    value: Position.apprenticeCarpenter,
    desc: "Eager learner ready to develop under our master craftsmen.",
  },
  {
    title: "Site Supervisor",
    type: "Full-time",
    value: Position.siteSupervisor,
    desc: "Oversee project execution, coordinate teams and ensure quality.",
  },
];

const benefits = [
  "Competitive Pay & Bonuses",
  "Hands-on Skill Development",
  "Friendly, Family-like Team Environment",
  "Steady Year-round Work",
  "Flexible Scheduling Where Possible",
];

// ─── Fade-in wrapper ──────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <FadeIn className="text-center mb-14">
      <p
        className={`text-sm font-semibold tracking-[0.15em] uppercase mb-3 font-body ${
          light ? "text-amber-light/80" : "text-amber"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-4xl md:text-5xl font-display font-bold mb-4 ${
          light ? "text-wood-cream" : "text-wood-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto font-body ${
            light ? "text-wood-tan/80" : "text-wood-medium"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-16 h-1 mx-auto mt-6 rounded-full ${
          light ? "bg-amber" : "bg-amber"
        }`}
      />
    </FadeIn>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-wood-dark/95 backdrop-blur-md shadow-wood-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#")}
          className="flex items-center gap-2.5 group"
          aria-label="Lakhwinder Enterprise home"
        >
          <div className="w-9 h-9 rounded-lg bg-amber flex items-center justify-center shadow-amber-glow group-hover:scale-105 transition-transform">
            <Hammer className="w-5 h-5 text-wood-dark" />
          </div>
          <div className="hidden sm:block">
            <div className="text-wood-cream font-display font-bold text-lg leading-none">
              Lakhwinder
            </div>
            <div className="text-amber text-xs font-body tracking-widest uppercase">
              Enterprise
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-wood-tan/80 hover:text-amber font-body text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => handleNavClick("#contact")}
            className="bg-amber hover:bg-amber-dark text-wood-dark font-semibold text-sm px-5 h-9 rounded-full shadow-amber-glow transition-all duration-200 hover:shadow-none"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-wood-cream p-2 rounded-lg hover:bg-wood-medium/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-wood-dark/98 backdrop-blur-md border-t border-wood-medium/20"
          >
            <ul className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left py-3 px-2 text-wood-tan hover:text-amber font-body text-base font-medium border-b border-wood-medium/10 last:border-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-3">
                <Button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full bg-amber hover:bg-amber-dark text-wood-dark font-semibold rounded-full"
                >
                  Get a Free Quote
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────
function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/woodworkshop/1600/900"
          alt="Carpentry workshop"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/80 via-wood-dark/70 to-wood-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/60 via-transparent to-transparent" />
      </div>

      {/* Decorative grain */}
      <div
        className="absolute inset-0 z-[1] opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-amber/15 border border-amber/30 text-amber text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-8 font-body"
        >
          <Hammer className="w-4 h-4" />
          Established in Punjab, India
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-wood-cream leading-[1.05] mb-6"
        >
          Lakhwinder
          <br />
          <span className="text-amber">Enterprise</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl md:text-2xl font-display italic text-wood-tan mb-4"
        >
          "Crafting Excellence in Every Cut"
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base md:text-lg text-wood-tan/70 font-body mb-12 max-w-xl mx-auto"
        >
          Premium Carpentry Services — Custom Furniture, Renovations & More
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => handleScroll("#contact")}
            size="lg"
            className="bg-amber hover:bg-amber-dark text-wood-dark font-bold text-base px-8 h-13 rounded-full shadow-amber-glow hover:shadow-none transition-all duration-200 group"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => handleScroll("#careers")}
            variant="outline"
            size="lg"
            className="border-2 border-wood-tan/40 text-wood-cream hover:bg-wood-tan/10 hover:border-amber font-semibold text-base px-8 h-13 rounded-full transition-all duration-200 bg-transparent"
          >
            Join Our Team
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { num: "4+", label: "Expert Carpenters" },
            { num: "100+", label: "Projects Done" },
            { num: "5yr", label: "Experience" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-amber">
                {s.num}
              </div>
              <div className="text-xs text-wood-tan/60 font-body mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="text-wood-tan/50"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-wood-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <FadeIn>
              <p className="text-sm font-semibold tracking-[0.15em] uppercase text-amber font-body mb-3">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-wood-dark mb-6">
                About Lakhwinder Enterprise
              </h2>
              <div className="w-14 h-1 bg-amber rounded-full mb-8" />
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-wood-medium font-body text-lg leading-relaxed mb-6">
                Founded on a deep respect for the craft, Lakhwinder Enterprise
                has been delivering exceptional woodwork to homes and businesses
                across Punjab for over five years. We believe that quality
                carpentry is not merely a trade — it is an art form that shapes
                the spaces where life happens.
              </p>
              <p className="text-wood-medium font-body text-base leading-relaxed mb-10">
                Our skilled team of four experienced carpenters brings decades
                of combined mastery to every project. From intricate custom
                furniture to full-scale commercial fit-outs, we approach each
                commission with the same dedication to precision, durability,
                and beauty.
              </p>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "4+", label: "Expert Carpenters" },
                  { num: "100+", label: "Projects Completed" },
                  { num: "5 Yrs", label: "Experience" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center p-4 rounded-xl bg-white border border-wood-tan/30 shadow-wood"
                  >
                    <div className="text-3xl font-display font-bold text-amber">
                      {s.num}
                    </div>
                    <div className="text-xs text-wood-medium font-body mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Values */}
            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col gap-3">
                {[
                  "Uncompromising attention to detail",
                  "Transparent communication from quote to completion",
                  "Premium materials sourced locally",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber flex-shrink-0" />
                    <span className="text-wood-medium font-body text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn delay={0.15} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-wood-lg">
              <img
                src="https://picsum.photos/seed/woodworkshop2/700/520"
                alt="Our carpentry workshop"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-amber text-wood-dark rounded-xl p-5 shadow-amber-glow">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-wood-dark" />
                <div>
                  <div className="text-xl font-display font-bold leading-none">
                    100+
                  </div>
                  <div className="text-xs font-body font-semibold mt-0.5">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-wood-dark relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%, oklch(0.32 0.06 50) 0%, transparent 60%), radial-gradient(circle at 80% 20%, oklch(0.28 0.05 52) 0%, transparent 50%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          subtitle="From intimate home projects to large commercial commissions — we deliver craftsmanship you can see and feel."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative bg-wood-medium/20 border border-wood-medium/30 rounded-2xl p-7 hover:bg-wood-medium/30 hover:border-amber/40 hover:shadow-amber-glow transition-all duration-300 cursor-default h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-amber/15 flex items-center justify-center mb-5 group-hover:bg-amber/25 transition-colors duration-200">
                  <service.icon className="w-6 h-6 text-amber" />
                </div>
                <h3 className="text-lg font-display font-bold text-wood-cream mb-3">
                  {service.title}
                </h3>
                <p className="text-wood-tan/70 font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────
function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-wood-tan/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Our Strengths"
          title="Why Choose Us"
          subtitle="We've built our reputation on these five principles — and we stand behind every one of them."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyUs.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="group text-center p-7 rounded-2xl bg-white border border-wood-tan/40 shadow-wood hover:shadow-wood-lg hover:border-amber/50 transition-all duration-300 h-full flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber/10 flex items-center justify-center mb-5 group-hover:bg-amber/20 transition-colors duration-200">
                  <item.icon className="w-7 h-7 text-amber" />
                </div>
                <h3 className="text-base font-display font-bold text-wood-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-wood-medium font-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio Section ────────────────────────────────────────────────────
function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-wood-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Our Work"
          subtitle="A glimpse of the projects that define our craft — each one a story of collaboration and skill."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioItems.map((item, i) => (
            <FadeIn key={item.src} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative rounded-2xl overflow-hidden shadow-wood cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 via-wood-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-wood-cream font-display font-bold text-lg">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Careers Section ──────────────────────────────────────────────────────
function CareersSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [position, setPosition] = useState<Position | "">("");
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useSubmitJobApplication();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !experience || !position) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await submitMutation.mutateAsync({
        name: name.trim(),
        phone: phone.trim(),
        experienceYears: BigInt(
          Math.max(0, Number.parseInt(experience, 10) || 0),
        ),
        position: position as Position,
      });
      setSubmitted(true);
      toast.success("Application submitted! We'll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="careers"
      className="py-24 bg-wood-dark overflow-hidden relative"
    >
      {/* Decorative bg */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, oklch(0.72 0.18 55) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        {/* Hiring Banner */}
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 bg-amber text-wood-dark px-8 py-3 rounded-full font-display font-bold text-xl shadow-amber-glow mb-6">
              <span className="text-2xl">🔨</span>
              We're Hiring!
              <span className="text-2xl">🪚</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-wood-cream mb-4">
              Join Our Team
            </h2>
            <p className="text-wood-tan/70 font-body text-lg max-w-2xl mx-auto">
              Are you a skilled craftsperson looking for steady work and room to
              grow? We'd love to hear from you.
            </p>
            <div className="w-16 h-1 bg-amber rounded-full mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Positions + Benefits */}
          <div>
            <FadeIn delay={0.05}>
              <h3 className="text-2xl font-display font-bold text-wood-cream mb-6">
                Open Positions
              </h3>
            </FadeIn>

            <div className="flex flex-col gap-4 mb-10">
              {openPositions.map((pos, i) => (
                <FadeIn key={pos.title} delay={0.1 + i * 0.08}>
                  <div className="group bg-wood-medium/20 border border-wood-medium/30 hover:border-amber/40 rounded-xl p-5 transition-all duration-200 hover:bg-wood-medium/30">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-base font-display font-bold text-wood-cream group-hover:text-amber transition-colors">
                          {pos.title}
                        </h4>
                        <p className="text-wood-tan/60 font-body text-sm mt-1">
                          {pos.desc}
                        </p>
                      </div>
                      <span className="flex-shrink-0 text-xs font-semibold bg-amber/15 text-amber border border-amber/30 px-3 py-1 rounded-full font-body">
                        {pos.type}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.35}>
              <h3 className="text-xl font-display font-bold text-wood-cream mb-5">
                Benefits of Joining Us
              </h3>
              <ul className="flex flex-col gap-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber flex-shrink-0" />
                    <span className="text-wood-tan/80 font-body text-sm">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right: Application Form */}
          <FadeIn delay={0.2}>
            <div className="bg-wood-medium/15 border border-wood-medium/30 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-wood-cream mb-6">
                Apply Now
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-amber/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-9 h-9 text-amber" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-wood-cream mb-2">
                    Application Received!
                  </h4>
                  <p className="text-wood-tan/70 font-body text-sm">
                    Thank you for your interest. We'll review your application
                    and reach out to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("");
                      setExperience("");
                      setPosition("");
                    }}
                    className="mt-6 border-amber/40 text-amber hover:bg-amber/10 rounded-full bg-transparent"
                  >
                    Submit Another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <Label
                      htmlFor="app-name"
                      className="text-wood-tan font-body text-sm mb-2 block"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="app-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Sukhdev Singh"
                      required
                      className="bg-wood-medium/20 border-wood-medium/40 text-wood-cream placeholder:text-wood-tan/40 focus:border-amber focus:ring-amber/30 rounded-xl"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="app-phone"
                      className="text-wood-tan font-body text-sm mb-2 block"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="app-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                      className="bg-wood-medium/20 border-wood-medium/40 text-wood-cream placeholder:text-wood-tan/40 focus:border-amber focus:ring-amber/30 rounded-xl"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="app-exp"
                      className="text-wood-tan font-body text-sm mb-2 block"
                    >
                      Years of Experience *
                    </Label>
                    <Input
                      id="app-exp"
                      type="number"
                      min="0"
                      max="50"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      placeholder="3"
                      required
                      className="bg-wood-medium/20 border-wood-medium/40 text-wood-cream placeholder:text-wood-tan/40 focus:border-amber focus:ring-amber/30 rounded-xl"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="app-position"
                      className="text-wood-tan font-body text-sm mb-2 block"
                    >
                      Position Applying For *
                    </Label>
                    <Select
                      value={position}
                      onValueChange={(v) => setPosition(v as Position)}
                    >
                      <SelectTrigger
                        id="app-position"
                        className="bg-wood-medium/20 border-wood-medium/40 text-wood-cream data-[placeholder]:text-wood-tan/40 focus:border-amber focus:ring-amber/30 rounded-xl"
                      >
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent className="bg-wood-dark border-wood-medium/40">
                        <SelectItem
                          value={Position.carpenter}
                          className="text-wood-cream hover:bg-wood-medium/30 focus:bg-wood-medium/30"
                        >
                          Carpenter
                        </SelectItem>
                        <SelectItem
                          value={Position.apprenticeCarpenter}
                          className="text-wood-cream hover:bg-wood-medium/30 focus:bg-wood-medium/30"
                        >
                          Apprentice Carpenter
                        </SelectItem>
                        <SelectItem
                          value={Position.siteSupervisor}
                          className="text-wood-cream hover:bg-wood-medium/30 focus:bg-wood-medium/30"
                        >
                          Site Supervisor
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-amber hover:bg-amber-dark text-wood-dark font-bold text-base h-12 rounded-full shadow-amber-glow hover:shadow-none transition-all duration-200"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────
function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      await submitMutation.mutateAsync({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you shortly.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-wood-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="Ready to start your project or have a question? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 shadow-wood border border-wood-tan/30">
              <h3 className="text-2xl font-display font-bold text-wood-dark mb-6">
                Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-amber/15 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-9 h-9 text-amber" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-wood-dark mb-2">
                    Message Received!
                  </h4>
                  <p className="text-wood-medium font-body text-sm">
                    Thank you for contacting us. We'll respond to your enquiry
                    within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="mt-6 border-amber/40 text-amber hover:bg-amber/10 rounded-full"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label
                        htmlFor="ct-name"
                        className="text-wood-medium font-body text-sm mb-2 block"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="ct-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Gurpreet Kaur"
                        required
                        className="border-wood-tan/50 focus:border-amber focus:ring-amber/30 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="ct-phone"
                        className="text-wood-medium font-body text-sm mb-2 block"
                      >
                        Phone *
                      </Label>
                      <Input
                        id="ct-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                        className="border-wood-tan/50 focus:border-amber focus:ring-amber/30 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="ct-email"
                      className="text-wood-medium font-body text-sm mb-2 block"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="ct-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="border-wood-tan/50 focus:border-amber focus:ring-amber/30 rounded-xl"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="ct-message"
                      className="text-wood-medium font-body text-sm mb-2 block"
                    >
                      Your Message *
                    </Label>
                    <Textarea
                      id="ct-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your project — what you need, your timeline, and any specific requirements…"
                      required
                      rows={5}
                      className="border-wood-tan/50 focus:border-amber focus:ring-amber/30 rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-amber hover:bg-amber-dark text-wood-dark font-bold text-base h-12 rounded-full shadow-amber-glow hover:shadow-none transition-all duration-200"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Contact Info + Map */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-6">
              {/* Info cards */}
              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  value: "123 Woodcraft Lane, Amritsar, Punjab 143001, India",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  value: "+91 98765 43210",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  value: "info@lakhwinderenterprise.com",
                },
              ].map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-wood-tan/30 shadow-wood"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-wood-medium/60 font-body uppercase tracking-wider mb-1">
                      {info.title}
                    </p>
                    <p className="text-wood-dark font-body text-sm font-medium">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="relative rounded-2xl overflow-hidden bg-wood-tan/20 border-2 border-dashed border-wood-tan/60 h-52 flex items-center justify-center shadow-wood">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-amber/15 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-7 h-7 text-amber" />
                  </div>
                  <p className="font-display font-bold text-wood-dark text-lg">
                    Find Us Here
                  </p>
                  <p className="text-wood-medium font-body text-sm mt-1">
                    Amritsar, Punjab, India
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-wood-dark border-t border-wood-medium/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber flex items-center justify-center">
                <Hammer className="w-5 h-5 text-wood-dark" />
              </div>
              <div>
                <div className="text-wood-cream font-display font-bold text-lg leading-none">
                  Lakhwinder
                </div>
                <div className="text-amber text-xs font-body tracking-widest uppercase">
                  Enterprise
                </div>
              </div>
            </div>
            <p className="text-wood-tan/60 font-body text-sm leading-relaxed max-w-xs">
              Crafting excellence in every cut. Premium carpentry services for
              homes and businesses across Punjab, India.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              {[
                { Icon: SiFacebook, label: "Facebook", href: "#" },
                { Icon: SiInstagram, label: "Instagram", href: "#" },
                { Icon: SiWhatsapp, label: "WhatsApp", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-wood-medium/30 hover:bg-amber/20 flex items-center justify-center text-wood-tan/60 hover:text-amber transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-wood-cream font-display font-bold text-base mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-wood-tan/60 hover:text-amber font-body text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-wood-cream font-display font-bold text-base mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                {
                  icon: MapPin,
                  text: "123 Woodcraft Lane, Amritsar, Punjab 143001",
                },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "info@lakhwinderenterprise.com" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" />
                  <span className="text-wood-tan/60 font-body text-sm">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-wood-medium/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-wood-tan/40 font-body text-xs">
            © {year} Lakhwinder Enterprise. All Rights Reserved.
          </p>
          <p className="text-wood-tan/40 font-body text-xs">
            Built with ❤ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber/60 hover:text-amber transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster richColors position="top-right" />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
