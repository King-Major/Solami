import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Pill,
  Truck,
  Snowflake,
  Stethoscope,
  ShieldCheck,
  Users,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  ArrowUpRight,
  Building2,
  BadgeCheck,
  ClipboardList,
  Send,
} from "lucide-react";


/* ---------------------------------------------------------------- */
/* Design tokens                                                     */
/* ---------------------------------------------------------------- */
const C = {
  ink: "#0B2447",
  inkSoft: "#3E5375",
  muted: "#5B6B85",
  primary: "#1663C7",
  primaryDark: "#0F4C9C",
  teal: "#0E9488",
  tealSoft: "#E4F5F2",
  surface: "#F3F7FC",
  surface2: "#EAF1FB",
  line: "#DCE6F2",
  white: "#FFFFFF",
};

const REGISTRY = {
  company: "ALEB PHARMACEUTICALS",
  legal: "ALEB PHARMACEUTICALS LIMITED",
  type: "Business Name",
  nature: "Pharmaceutical Services",
  address: "15 Kere Ahmed Street, Shango, Minna, Niger State",
  rc: "2637201",
  status: "ACTIVE",
  registered: "6 Aug 2018",
};

const NAV = ["Home", "About", "Services", "Contact"];

/* ---------------------------------------------------------------- */
/* Font loader                                                       */
/* ---------------------------------------------------------------- */
function useFonts() {
  useEffect(() => {
    const id = "aleb-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

/* ---------------------------------------------------------------- */
/* Small building blocks                                             */
/* ---------------------------------------------------------------- */
function Eyebrow({ children }) {
  return (
    <div
      className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium mb-4"
      style={{ color: C.teal, fontFamily: "'IBM Plex Mono', monospace" }}
    >
      <span
        className="inline-block w-6 h-px"
        style={{ backgroundColor: C.teal }}
      />
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, sub, light }) {
  return (
    <div className="max-w-2xl mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className="text-3xl sm:text-4xl font-semibold leading-tight"
        style={{
          color: light ? C.white : C.ink,
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: light ? "#C9D9F2" : C.muted }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* Registry / vial-label tag — the signature element, drawn directly
   from the commercial register announcement supplied for this brief */
function RegistryTag({ compact, rotate = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: rotate ? -3 : 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotate ? -2 : 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative select-none"
      style={{
        width: compact ? 240 : 300,
        backgroundColor: C.white,
        border: `1px solid ${C.line}`,
        borderRadius: 4,
        boxShadow: "0 24px 48px -18px rgba(11,36,71,0.28)",
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      {/* perforation notches */}
      <div
        className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
        style={{ backgroundColor: C.surface, border: `1px solid ${C.line}` }}
      />
      <div
        className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
        style={{ backgroundColor: C.surface, border: `1px solid ${C.line}` }}
      />
      <div className="px-5 py-4 border-b" style={{ borderColor: C.line }}>
        <div
          className="text-[10px] tracking-widest uppercase"
          style={{ color: C.muted }}
        >
          Commercial Register
        </div>
        <div
          className="text-sm font-semibold mt-1"
          style={{ color: C.ink, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {REGISTRY.company}
        </div>
      </div>
      <div className="px-5 py-4 space-y-2 text-[11px]">
        <Row label="RC No." value={REGISTRY.rc} />
        <Row label="Nature" value={REGISTRY.nature} />
        <Row label="Registered" value={REGISTRY.registered} />
        <div className="flex items-center justify-between pt-1">
          <span style={{ color: C.muted }}>Status</span>
          <span className="inline-flex items-center gap-1.5 font-medium" style={{ color: C.teal }}>
            <motion.span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: C.teal }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            {REGISTRY.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span style={{ color: C.muted }}>{label}</span>
      <span style={{ color: C.ink }}>{value}</span>
    </div>
  );
}

/* Ambient molecule dots for hero atmosphere */
function MoleculeField() {
  const dots = [
    { x: "8%", y: "18%", r: 3 },
    { x: "22%", y: "62%", r: 2 },
    { x: "80%", y: "12%", r: 2.5 },
    { x: "92%", y: "48%", r: 3 },
    { x: "65%", y: "82%", r: 2 },
    { x: "40%", y: "8%", r: 2 },
  ];
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
    >
      <line x1="8%" y1="18%" x2="22%" y2="62%" stroke={C.line} strokeWidth="1" />
      <line x1="80%" y1="12%" x2="92%" y2="48%" stroke={C.line} strokeWidth="1" />
      <line x1="40%" y1="8%" x2="80%" y2="12%" stroke={C.line} strokeWidth="1" />
      {dots.map((d, i) => (
        <motion.circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={i % 2 === 0 ? C.teal : C.primary}
          animate={{ opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Nav                                                                */
/* ---------------------------------------------------------------- */
function Nav({ active, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-shadow"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate("Home")}
          className="flex items-center gap-2"
        >
          <span
            className="w-8 h-8 rounded-sm flex items-center justify-center"
            style={{ backgroundColor: C.primary }}
          >
            <Pill size={16} color={C.white} strokeWidth={2.2} />
          </span>
          <span
            className="text-sm font-semibold tracking-tight"
            style={{ color: C.ink, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ALEB <span style={{ color: C.primary }}>PHARMACEUTICALS</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className="relative text-sm font-medium py-1"
              style={{ color: active === item ? C.primary : C.inkSoft }}
            >
              {item}
              {active === item && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full"
                  style={{ backgroundColor: C.primary }}
                />
              )}
            </button>
          ))}
          <button
            onClick={() => onNavigate("Contact")}
            className="text-sm font-medium px-4 py-2 rounded-sm"
            style={{ backgroundColor: C.ink, color: C.white }}
          >
            Get in touch
          </button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} color={C.ink} /> : <Menu size={22} color={C.ink} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: C.white, borderTop: `1px solid ${C.line}` }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavigate(item);
                    setOpen(false);
                  }}
                  className="text-left text-base font-medium"
                  style={{ color: active === item ? C.primary : C.inkSoft }}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Sections                                                           */
/* ---------------------------------------------------------------- */
function Hero({ sectionRef, onNavigate }) {
  return (
    <section
      ref={sectionRef}
      id="Home"
      className="relative pt-40 pb-28 overflow-hidden"
      style={{ backgroundColor: C.white }}
    >
      <MoleculeField />
      <div className="max-w-6xl mx-auto px-6 relative grid md:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Pharmaceutical Services &middot; Minna, Niger State</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08]"
            style={{ color: C.ink, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Medicines you can trust,
            <br />
            from a name you can{" "}
            <span style={{ color: C.primary }}>verify.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed max-w-lg"
            style={{ color: C.muted }}
          >
            ALEB Pharmaceuticals Limited supplies, dispenses and safeguards
            essential medicines for Minna and Niger State &mdash; registered,
            active, and built on a discipline that treats every consignment
            like it matters, because it does.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => onNavigate("Services")}
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3.5 rounded-sm"
              style={{ backgroundColor: C.primary, color: C.white }}
            >
              Explore our services
              <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => onNavigate("Contact")}
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3.5 rounded-sm border"
              style={{ borderColor: C.line, color: C.ink }}
            >
              Visit our Shango office
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex justify-center md:justify-end"
        >
          <RegistryTag />
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const facts = [
    { label: "RC Number", value: REGISTRY.rc },
    { label: "Registered", value: "2018" },
    { label: "Status", value: "Active" },
    { label: "Base", value: "Minna, NG" },
  ];
  return (
    <div style={{ backgroundColor: C.ink }}>
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {facts.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div
              className="text-[11px] uppercase tracking-widest"
              style={{ color: "#7C93BC", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {f.label}
            </div>
            <div
              className="text-lg font-semibold mt-1"
              style={{ color: C.white, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {f.value}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function About({ sectionRef }) {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      copy: "Every product handled and dispensed exactly as regulation and good practice require, no shortcuts.",
    },
    {
      icon: BadgeCheck,
      title: "Quality",
      copy: "Storage, handling and sourcing decisions are made to protect the medicine, not just the margin.",
    },
    {
      icon: Users,
      title: "Access",
      copy: "Essential medicines should reach the people who need them, priced and stocked with that in mind.",
    },
    {
      icon: Building2,
      title: "Community",
      copy: "A Minna-based business, accountable to the Niger State community it was registered to serve.",
    },
  ];

  return (
    <section ref={sectionRef} id="About" className="py-28" style={{ backgroundColor: C.surface }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-16 items-start">
          <div className="grid sm:grid-cols-2 gap-6 md:order-1">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-sm"
                style={{ backgroundColor: C.white, border: `1px solid ${C.line}` }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                  style={{ backgroundColor: C.tealSoft }}
                >
                  <v.icon size={18} color={C.teal} />
                </div>
                <div
                  className="text-base font-semibold mb-2"
                  style={{ color: C.ink, fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {v.title}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {v.copy}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="sm:col-span-2 p-6 rounded-sm"
              style={{ backgroundColor: C.ink }}
            >
              <p
                className="text-base leading-relaxed"
                style={{ color: "#DCE6F2" }}
              >
                &ldquo;Our objective is simple: keep Minna and the wider Niger
                State community reliably supplied with genuine, correctly
                stored medicines &mdash; and keep our register spotless while
                we do it.&rdquo;
              </p>
              <div
                className="mt-4 text-xs uppercase tracking-widest"
                style={{ color: C.teal, fontFamily: "'IBM Plex Mono', monospace" }}
              >
                Office of the Directors, ALEB Pharmaceuticals Ltd
              </div>
            </motion.div>
          </div>

          <div className="md:order-2 md:self-start md:bg-white/90 md:backdrop-blur-sm md:shadow-xl md:shadow-slate-200/10 md:border md:border-slate-200/70 md:rounded-3xl md:p-6">
            <SectionHeading
              eyebrow="About the company"
              title="A pharmaceutical business built on paperwork you can check."
              sub="ALEB Pharmaceuticals was formally registered in Niger State on 6 August 2018 under RC 2637201, with pharmaceutical services declared as its core line of business at 15 Kere Ahmed Street, Shango, Minna."
            />
            <RegistryTag compact rotate={false} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ sectionRef }) {
  const items = [
    {
      icon: Truck,
      title: "Pharmaceutical Distribution",
      copy: "Wholesale supply of essential and prescription medicines to pharmacies, clinics and hospitals across Niger State.",
    },
    {
      icon: Pill,
      title: "Retail Dispensing",
      copy: "Over-the-counter and prescription dispensing at our Shango facility, with pharmacist guidance on every order.",
    },
    {
      icon: Snowflake,
      title: "Cold-Chain Storage",
      copy: "Temperature-controlled handling for vaccines and biologics from receipt through to dispatch.",
    },
    {
      icon: Stethoscope,
      title: "Hospital & Clinic Supply",
      copy: "Scheduled procurement and delivery arrangements for health facilities that need dependable stock levels.",
    },
    {
      icon: ClipboardList,
      title: "Public Health Procurement",
      copy: "Sourcing support for institutional and public-programme orders, documented to registration standard.",
    },
    {
      icon: Users,
      title: "Medication Counselling",
      copy: "Plain-language guidance on dosage, interactions and storage for patients and caregivers alike.",
    },
  ];

  return (
    <section ref={sectionRef} id="Services" className="py-28" style={{ backgroundColor: C.white }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Services scoped to what our registration covers."
          sub="Every line of work below sits under the pharmaceutical-services objective declared on our commercial register — nothing more, nothing improvised."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-sm group"
              style={{ backgroundColor: C.surface, border: `1px solid ${C.line}` }}
            >
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center mb-5 transition-colors"
                style={{ backgroundColor: C.white, border: `1px solid ${C.line}` }}
              >
                <it.icon size={19} color={C.primary} />
              </div>
              <div
                className="text-base font-semibold mb-2"
                style={{ color: C.ink, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {it.title}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                {it.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ sectionRef }) {
  const [sent, setSent] = useState(false);
  return (
    <section ref={sectionRef} id="Contact" className="py-28" style={{ backgroundColor: C.ink }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Find us at our registered address in Shango."
          sub="For orders, procurement enquiries or facility visits, reach out below and our team will follow up."
          light
        />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <InfoRow icon={MapPin} label="Address" value={REGISTRY.address} />
            <InfoRow icon={Building2} label="RC Number" value={REGISTRY.rc} />
            <InfoRow icon={Mail} label="Email" value="Available on request" />
            <InfoRow icon={Phone} label="Phone" value="Available on request" />

            <div
              className="mt-8 p-5 rounded-sm text-sm leading-relaxed"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#B9C9E6" }}
            >
              <CheckCircle2 size={16} className="inline mr-2" color={C.teal} />
              Registered {REGISTRY.registered} &middot; Status: {REGISTRY.status} &middot;
              Nature of business: {REGISTRY.nature}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="p-7 rounded-sm space-y-4"
            style={{ backgroundColor: C.white }}
          >
            <div>
              <label className="text-xs uppercase tracking-widest" style={{ color: C.muted, fontFamily: "'IBM Plex Mono', monospace" }}>
                Full name
              </label>
              <input
                required
                type="text"
                className="mt-1.5 w-full px-3 py-2.5 text-sm rounded-sm outline-none"
                style={{ border: `1px solid ${C.line}`, color: C.ink }}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest" style={{ color: C.muted, fontFamily: "'IBM Plex Mono', monospace" }}>
                Email
              </label>
              <input
                required
                type="email"
                className="mt-1.5 w-full px-3 py-2.5 text-sm rounded-sm outline-none"
                style={{ border: `1px solid ${C.line}`, color: C.ink }}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest" style={{ color: C.muted, fontFamily: "'IBM Plex Mono', monospace" }}>
                Message
              </label>
              <textarea
                required
                rows={4}
                className="mt-1.5 w-full px-3 py-2.5 text-sm rounded-sm outline-none resize-none"
                style={{ border: `1px solid ${C.line}`, color: C.ink }}
                placeholder="Tell us what you need"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-sm"
              style={{ backgroundColor: C.primary, color: C.white }}
            >
              {sent ? "Message noted" : "Send message"}
              <Send size={15} />
            </button>
            {sent && (
              <p className="text-xs" style={{ color: C.teal }}>
                Thanks — this is a demo form, so nothing was actually sent.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
      >
        <Icon size={17} color="#7FD8CE" />
      </div>
      <div>
        <div
          className="text-[11px] uppercase tracking-widest"
          style={{ color: "#7C93BC", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {label}
        </div>
        <div className="text-sm mt-0.5" style={{ color: "#E7EEFA" }}>
          {value}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: "#081A38" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm" style={{ color: "#7C93BC" }}>
          &copy; {new Date().getFullYear()} ALEB Pharmaceuticals Limited &middot; RC {REGISTRY.rc}
        </div>
        <div
          className="text-[11px] uppercase tracking-widest"
          style={{ color: "#4F6795", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          Registered with the Corporate Affairs Commission, Nigeria
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------- */
/* App                                                                */
/* ---------------------------------------------------------------- */
export default function AlebPharmaceuticals() {
  useFonts();
  const [active, setActive] = useState("Home");
  const refs = {
    Home: useRef(null),
    About: useRef(null),
    Services: useRef(null),
    Contact: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    Object.values(refs).forEach((r) => r.current && observer.observe(r.current));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNavigate = (key) => {
    refs[key]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <Nav active={active} onNavigate={onNavigate} />
      <Hero sectionRef={refs.Home} onNavigate={onNavigate} />
      <TrustBar />
      <About sectionRef={refs.About} />
      <Services sectionRef={refs.Services} />
      <Contact sectionRef={refs.Contact} />
      <Footer />
    </div>
  );
}