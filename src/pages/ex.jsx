import React, { useState } from "react";
import Insta from "../components/Insta";
import Whatsapp from "../components/Whatsapp";
import Call from "../components/Call";
import nrLogo from "../assets/nr-logo.jpeg";
import hair1 from "../assets/hair1.jpeg";
import hair2 from "../assets/hair2.jpeg";
import nail from "../assets/nail.jpeg";
import lashes from "../assets/lashes.jpeg";
import insta1 from "../assets/insta1.jpg";
import insta2 from "../assets/insta2.jpg";
import insta3 from "../assets/insta3.jpg";
import facial from "../assets/facial.jpeg";
import ladieshair from "../assets/ladieshair.jpeg";
import extension from "../assets/extension.jpeg";
import scalp from "../assets/scalp.jpeg";
import menhair from "../assets/menhair.jpeg";
import front from "../assets/front.png"
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "7907016692";
const KOCHI_PHONE = "7907016692";
const KOCHI_PHONE_DISPLAY = "+91 79070 16692";
const MUVA_PHONE = "7907186692";
const MUVA_PHONE_DISPLAY = "+91 79071 86692";
const KOCHI_WHATSAPP = "917907016692";
const MUVA_WHATSAPP = "917907186692";
const INSTAGRAM_HANDLE = "nail_republic_kochi";
const INSTAGRAM_URL = "https://instagram.com/nail_republic_kochi";

// central image map — swap srcs here to replace any photo site-wide
const IMAGES = {
  hero: front,
};

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    title: "Nails",
    items: [
      "Gel X Extensions",
      "Acrylic Extensions",
      "Nail Art",
      "Manicure",
      "Pedicure",
    ],
    img: nail,
  },
  {
    title: "Ladies Hair Grooming",
    items: [
      "Haircuts",
      "Hair Styling & Blowouts",
      "Hair Spa & Treatments",
      "Hair Colouring",
      "Hair Extensions",
      "Hair Wash & Conditioning",
      "Special Occasion Styling",
    ],
    img: ladieshair,
  },
  {
    title: "Gents Hair & Grooming",
    items: ["Gents Haircuts", "Hair Styling", "Beard Styling & Grooming"],
    img: menhair,
  },
  {
    title: "Facials & Skin Rejuvenation",
    items: [
      "Premium Rejuvenation Facials",
      "O3+ Facial Treatments",
      "Raga Skin Treatments",
      "Skinora Treatments",
      "Anti-Acne Treatments",
      "Anti-Aging Treatments",
      "Glow & Skin Rejuvenation",
    ],
    img: facial,
  },
  {
    title: "Brows & Lashes",
    items: [
      "Eyebrow Tinting",
      "Eyebrow Lift",
      "Microblading",
      "Lash Extensions",
      "Lash Lift",
      "Lash Tint",
    ],
    img: lashes,
  },
  {
    title: "Scalp Care",
    items: [
      "Dandruff Treatments",
      "Hair & Scalp Treatments",
      "Hot Oil Head Massage",
    ],
    img: scalp,
  },
  {
    title: "Hair Extensions",
    items: [
      "16-inch Hair Extensions",
      "100% Sterilised Keratin Treated Human Hair",
      "Nano Extensions",
      "LW Extensions",
    ],
    img: extension,
  },
];

const MENU = [
  {
    title: "Nail Extensions",
    items: [
      ["Gel X Extensions · Two Hands", "₹3,500"],
      ["Acrylic Extensions · Two Hands", "₹4,000"],
      ["Nail Art", "₹100 / finger"],
    ],
  },
  {
    title: "Lash Extensions",
    items: [["Eyelash Extensions", "Starts at ₹3,500"]],
  },
  {
    title: "Hair Extensions",
    items: [
      ["16-inch Extensions", "Enquire"],
      ["Nano Extensions", "Enquire"],
      ["LW Extensions", "Enquire"],
    ],
  },
  {
    title: "Skin & Hair Services",
    items: [
      ["Skin Services", "Available"],
      ["Hair Services", "Available"],
    ],
  },
];

const HOURS = [
  ["Kochi", "Every day except Tuesday · 9:30 AM – 7:30 PM"],
  ["Muva", "Every day except Wednesday · 10:30 AM – 6:00 PM"],
];

const FAQS = [
  {
    question: "What services does The Nail Republic offer?",
    answer:
      "We offer nail, hair, skin and hair extension services. Please contact us directly for the latest service details and availability.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Please contact us by phone or WhatsApp to check availability and service details.",
  },
  {
    question: "How can I enquire about a service?",
    answer:
      "You can call us or contact us through WhatsApp for service enquiries, pricing and availability.",
  },
  {
    question: "What are your opening hours?",
    answer: "9:30 AM - 7:30PM in Kochi and 10:30AM - 6:00PM in Muvattupuzha",
  },
];

function NRLogo({ size = 40 }) {
  return (
    <img
      src={nrLogo}
      alt="The Nail Republic"
      className="nrlogo-img"
      style={{ width: size, height: size }}
    />
  );
}

export default function TheNailRepublicSimple() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeAction, setActiveAction] = useState(null);

  return (
    <div className="site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Inter:wght@400;500&display=swap');

        .site {
          --bg: #0c0c0b;
          --bg-alt: #131211;
          --text: #ede7dc;
          --text-dim: #b7ad9d;
          --muted: #a39c8f;
          --gold: #b3925a;
          --line: rgba(237,231,220,0.12);
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.6;
          overflow-x: hidden;
        }
        .site * { box-sizing: border-box; }
        html {
  scroll-behavior: smooth;
}

#home {
  scroll-margin-top: 90px;
}
        .site a { color: inherit; text-decoration: none; }
        .site ul { list-style: none; margin: 0; padding: 0; }
        .serif { font-family: 'Playfair Display', serif; }

        .wrap { max-width: 1120px; margin: 0 auto; padding: 0 6vw; }

        .nrlogo-img {
        display: block;
        object-fit: contain;
        flex-shrink: 0;
        }

        /* shared palette-matched photo treatment: pulls any photo toward
           the site's black / warm-gold tone so nothing looks "stock" */
        .toned-img {
          filter: grayscale(0.35) sepia(0.28) saturate(1.15) brightness(0.92) contrast(1.05);
        }

        /* NAV */
        .nav { border-bottom: 1px solid var(--line); position: sticky; top: 0; background: var(--bg); z-index: 40; }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 1.2rem; gap: 1rem; }
        .nav-brand { display: flex; align-items: center; gap: 0.7rem; min-width: 0; }
        .nav-brand span { font-family: 'Playfair Display', serif; font-size: 1.05rem; letter-spacing: 0.02em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .nav-links { display: flex; gap: 2rem; }
        .nav-links a { font-size: 0.88rem; color: var(--text-dim); }
        .nav-links a:hover { color: var(--gold); }
        .nav-call-wrap { flex-shrink: 0; }

/* Hamburger button (mobile nav trigger) */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
}
.burger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--text);
}
.burger span:nth-child(2) { width: 16px; }

.btn-solid,
.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem 1.5rem;
  min-width: 120px;

  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  text-decoration: none;
  cursor: pointer;

  transition: all 0.3s ease;
}

/* Primary button */
.btn-solid {
  background: var(--gold);
  color: #0c0c0b;
  border: 1px solid var(--gold);
}

.btn-solid:hover {
  background: #d8bd82;
  border-color: #d8bd82;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(190, 155, 88, 0.15);
}

/* Secondary button */
.btn-outline {
  background: transparent;
  color: var(--gold);
  border: 1px solid rgba(190, 155, 88, 0.65);
}

.btn-outline:hover {
  background: rgba(190, 155, 88, 0.08);
  border-color: var(--gold);
  transform: translateY(-2px);
}

.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.8rem 1.5rem;
  min-width: 120px;

  background: transparent;
  color: var(--gold);
  border: 1px solid rgba(190, 155, 88, 0.65);

  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.3s ease;
}

.whatsapp-btn:hover {
  background: rgba(190, 155, 88, 0.08);
  border-color: var(--gold);
  transform: translateY(-2px);
}

.whatsapp-branch {
  color: var(--gold) !important;
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

        .mmenu { position: fixed; inset: 0; background: var(--bg); z-index: 50; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 1.4rem; padding: 0 8vw; }
        .mmenu a { font-family: 'Playfair Display', serif; font-size: 1.5rem; }
        .mclose { position: absolute; top: 1.4rem; right: 8vw; background: none; border: none; color: var(--text); font-size: 1.6rem; cursor: pointer; padding: 0.4rem; }

        /* HERO */
        .hero { padding: 5rem 0 4.5rem; }
        .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3.5rem; align-items: center; }
        .hero-eyebrow { font-size: 0.78rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.8rem; }
        .hero h1 { font-family: 'Playfair Display', serif; font-weight: 600; font-size: clamp(2.2rem, 4.6vw, 3.2rem); margin: 0 0 0.5rem; }
        .hero-sub { font-family: 'Playfair Display', serif; font-style: italic; color: var(--muted); font-size: 1.15rem; margin: 0 0 1.3rem; }
        .hero-desc { color: var(--text-dim); font-size: 0.96rem; max-width: 42ch; margin-bottom: 1.8rem; }
        .hero-cta { display: flex; gap: 0.9rem; flex-wrap: wrap; }
        .hero-img { aspect-ratio: 4/5; background: var(--bg-alt); border: 1px solid var(--line); position: relative; overflow: hidden; }
        .hero-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        
       .branch-options {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  animation: branchExpand 0.3s ease;
}

.branch-options a {
  border: none !important;
  background: transparent !important;
  padding: 0.4rem 0 !important;

  color: var(--gold) !important;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  text-decoration: none;
  position: relative;
  transition: color 0.25s ease;
}

/* Elegant gold underline */
.branch-options a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: var(--gold);
  transition: width 0.3s ease;
}

.branch-options a:hover {
  color: #f5e6bd !important;
}

.branch-options a:hover::after {
  width: 100%;
}

@keyframes branchExpand {
  from {
    opacity: 0;
    transform: translateX(-8px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
        @media (max-width: 820px) { .hero-grid { grid-template-columns: 1fr; } .hero-img { order: -1; aspect-ratio: 16/10; } }

        /* SECTION HEADING */
        .section { padding: 4rem 0; border-top: 1px solid var(--line); }
        .kicker { font-size: 0.78rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.6rem; }
        .h2 { font-family: 'Playfair Display', serif; font-weight: 600; font-size: 1.7rem; margin: 0; }

        /* ABOUT */
        .about-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 3rem; margin-top: 1.5rem; }
        .about-grid p { color: var(--text-dim); font-size: 0.96rem; max-width: 62ch; margin: 0 0 1rem; }
        .divider { width: 40px; height: 1px; background: var(--gold); margin: 1.6rem 0; }
        @media (max-width: 720px) { .about-grid { grid-template-columns: 1fr; gap: 1.2rem; } }

        /* SERVICES */
        .svc-list { margin-top: 2rem; }
        .svc-group { display: flex; align-items: center; gap: 1.4rem; padding: 1.4rem 0; border-top: 1px solid var(--line); }
        .svc-group:last-child { border-bottom: 1px solid var(--line); }
        .svc-thumb { width: 64px; height: 64px; flex-shrink: 0; border: 1px solid var(--line); overflow: hidden; background: var(--bg-alt); }
        .svc-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .svc-thumb.empty { visibility: hidden; }
        .svc-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; width: 160px; flex-shrink: 0; color: var(--gold); }
        .svc-items { color: var(--text-dim); font-size: 0.94rem; }
        @media (max-width: 620px) { .svc-group { flex-wrap: wrap; gap: 0.8rem 1rem; } .svc-title { width: auto; } .svc-items { width: 100%; } }

        /* MENU */
        .menu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem 3rem; margin-top: 2rem; }
        .menu-cat h3 { font-family: 'Playfair Display', serif; font-size: 1.05rem; color: var(--gold); margin: 0 0 0.9rem; }
        .menu-row { display: flex; align-items: baseline; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px dashed var(--line); font-size: 0.92rem; }
        .menu-row .dots { flex: 1; border-bottom: 1px dotted var(--line); transform: translateY(-4px); }
        .menu-row .price { font-family: 'Playfair Display', serif; color: var(--text); white-space: nowrap; }
        .menu-note { margin-top: 1.6rem; font-size: 0.82rem; color: var(--text-dim); font-style: italic; }
        @media (max-width: 620px) { .menu-grid { grid-template-columns: 1fr; } }

        /* PREMIUM SERVICES & PRICING */
        .section-intro {
          max-width: 62ch;
          margin: 0.9rem 0 2.4rem;
          color: var(--text-dim);
          font-size: 0.94rem;
          line-height: 1.8;
        }

        .service-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--bg);
          border: 1px solid var(--line);
        }

        .service-card {
          background: var(--bg);
          padding: 1.6rem;
          min-height: 260px;
          transition: background 0.3s ease;
        }

        .service-card:hover { background: var(--bg-alt); }

        .service-card-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .service-number {
          color: var(--gold);
          font-size: 0.68rem;
          letter-spacing: 0.16em;
        }

        .service-card h3, .price-card h3 {
          font-family: 'Playfair Display', serif;
          color: var(--text);
          font-size: 1.25rem;
          font-weight: 500;
          margin: 0;
        }

        .service-card-image {
          height: 300px;
          margin: 0 -0.4rem 1.1rem;
          overflow: hidden;
          border: 1px solid var(--line);
        }

        .service-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-items-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.45rem 1.2rem;
          margin: 0;
          padding: 0;
          list-style: none;
          color: var(--text-dim);
          font-size: 0.86rem;
        }

        .service-items-list li::before {
          content: "·";
          color: var(--gold);
          margin-right: 0.5rem;
        }

        .price-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem;
          margin-top: 2rem;
        }

        .price-card {
          padding: 1.5rem 0;
          border-top: 1px solid var(--gold);
          border-bottom: 1px solid var(--line);
        }

        .price-card h3 {
          color: var(--gold);
          margin-bottom: 0.8rem;
          font-size: 1.05rem;
        }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 0.8rem;
          padding: 0.65rem 0;
          border-bottom: 1px dashed var(--line);
          color: var(--text-dim);
          font-size: 0.88rem;
        }

        .price-value {
          margin-left: auto;
          color: var(--text);
          font-family: 'Playfair Display', serif;
          white-space: nowrap;
        }

        .pricing-note {
          margin-top: 2.2rem;
          padding: 1.4rem 1.5rem;
          border-left: 1px solid var(--gold);
          background: var(--bg-alt);
        }

        .pricing-note span {
          color: var(--gold);
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .pricing-note p {
          margin: 0.45rem 0 0;
          color: var(--text-dim);
          font-size: 0.86rem;
        }

        @media (max-width: 720px) {
          .service-cards, .price-grid { grid-template-columns: 1fr; }
          .service-items-list { grid-template-columns: 1fr; }
        }

        /* INSTAGRAM */
        .insta { text-align: center; }
        .insta .kicker { justify-content: center; }
        .insta h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; margin: 0.3rem 0 1.3rem; }
        .insta-row { display: flex; justify-content: center; gap: 2.8rem; margin: 1.6rem auto; max-width: 800px; }
        .insta-row .gal-item {
  flex: 1;
}

.insta-row .gal-item img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

        /* FAQ */
        .faq-list {
          margin-top: 2rem;
          border-top: 1px solid var(--line);
        }
        .faq-item {
          border-bottom: 1px solid var(--line);
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.15rem 0;
          background: none;
          border: 0;
          color: var(--text);
          font: inherit;
          font-size: 0.94rem;
          text-align: left;
          cursor: pointer;
        }
        .faq-question:hover {
          color: var(--gold);
        }
        .faq-icon {
          color: var(--gold);
          font-size: 1.15rem;
          font-weight: 400;
          flex-shrink: 0;
        }
        .faq-answer {
          color: var(--text-dim);
          font-size: 0.9rem;
          line-height: 1.7;
          max-width: 70ch;
          padding: 0 2rem 1.15rem 0;
        }

        @media (max-width: 820px) {
          .reviews-grid { grid-template-columns: 1fr; }
        }

        /* CONTACT */
        .branch-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2.5rem;
}

.branch-card {
  border: 1px solid var(--line);
  padding: 1.5rem;
  min-width: 0;
}

.branch-title {
  font-family: 'Playfair Display', serif;
  color: var(--gold);
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
}

.branch-info {
  margin-bottom: 1.2rem;
}

.branch-info .label {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.3rem;
}

.branch-info div {
  font-size: 0.92rem;
  color: var(--text);
}

.branch-hours {
  color: var(--text-dim) !important;
}

.branch-cta {
  display: flex;
  gap: 0.8rem;
  margin-top: 1.4rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.branch-cta a {
  flex: 1;
  min-width: 130px;
}

.branch-map {
  width: 100%;
  height: 300px;
  border: 1px solid var(--line);
}

.branch-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(0.5) invert(0.92) contrast(0.9);
}

@media (max-width: 820px) {
  .branch-grid {
    grid-template-columns: 1fr;
  }
}

        /* FOOTER */
        .foot { border-top: 1px solid var(--line); padding: 3rem 0 2.2rem; text-align: center; }
        .foot-logo { display: flex; justify-content: center; margin-bottom: 1rem; }
        .foot .brand { font-family: 'Playfair Display', serif; font-size: 1.05rem; margin-bottom: 0.3rem; }
        .foot .tag { color: var(--muted); font-size: 0.88rem; margin-bottom: 0.2rem; }
        .foot .sub { color: var(--text-dim); font-size: 0.86rem; margin-bottom: 1.2rem; }
        .foot-links { display: flex; justify-content: center; gap: 1.4rem; margin-bottom: 1.2rem; font-size: 0.86rem; color: var(--text-dim); }
        .foot-links a:hover { color: var(--gold); }
        .foot-nav { display: flex; justify-content: center; gap: 1.2rem; margin-bottom: 1.6rem; font-size: 0.84rem; color: var(--text-dim); }
        .foot-copy { font-size: 0.76rem; color: rgba(237,231,220,0.4); }

        /* =========================================================
           MOBILE / SMALL-SCREEN OVERRIDES
           ========================================================= */
        @media (max-width: 860px) {
          .wrap { padding: 0 5vw; }

          /* nav: swap desktop links + call button for a burger trigger */
          .nav-links { display: none; }
          .nav-call-wrap { display: none; }
          .burger { display: flex; }
          .nav-brand span { font-size: 0.95rem; }
          .nav {
  min-height: 85px;
}

.nav-inner {
  min-height: 85px;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
}

          .hero { padding: 3.2rem 0 3rem; }
          .hero-desc { max-width: 100%; }
          .hero-cta { flex-direction: column; align-items: stretch; }
          .hero-cta .btn-solid,
          .hero-cta .btn-outline { width: 100%; }
          .hero-cta .branch-options { flex-direction: column; align-items: stretch; gap: 1rem; }
          .hero-cta .branch-options a { padding: 0.6rem 0 !important; }

          .section { padding: 3rem 0; }
          .h2 { font-size: 1.4rem; }

          .insta-row { flex-direction: column; align-items: center; gap: 1.4rem; max-width: 260px; }
          .insta-row .gal-item { width: 100%; }

          .branch-cta { flex-direction: column; }
          .branch-cta a { width: 100%; }
          .branch-map { height: 220px; }
        }

        @media (max-width: 420px) {
          .hero h1 { font-size: 1.9rem; }
          .nav-brand span { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="#home" className="nav-brand">
            <NRLogo size={40} />
            <span>The Nail Republic</span>
          </a>

          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="nav-call-wrap">
            {activeAction === "nav-call" ? (
              <div className="branch-options">
                <a href={`tel:${KOCHI_PHONE}`} className="btn-outline">
                  Kochi
                </a>

                <a href={`tel:${MUVA_PHONE}`} className="btn-outline">
                  Muvattupuzha
                </a>
              </div>
            ) : (
              <button
                className="btn-outline"
                onClick={() => setActiveAction("nav-call")}
              >
                Call Now
              </button>
            )}
          </div>

          <button
            className="burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mmenu">
          <button
            className="mclose"
            onClick={() => setMenuOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <header id="home" className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="hero-eyebrow">Premium Unisex Salon</div>
            <h1 className="serif">The Nail Republic</h1>
            <p className="hero-sub">A Signature Of Beauty.</p>
            <p className="hero-desc">
              Premium Nail, Hair, Skin & Hair Extension Services.
              <br />
              <span className="hero-locations">Kochi · Muva, Kerala</span>
            </p>
            <div className="hero-cta branch-actions">
              {activeAction === "call" ? (
                <div className="branch-options">
                  <a href={`tel:${KOCHI_PHONE}`} className="btn-solid">
                    Kochi
                  </a>

                  <a href={`tel:${MUVA_PHONE}`} className="btn-solid">
                    Muvattupuzha
                  </a>
                </div>
              ) : activeAction === "direction" ? (
                <div className="branch-options">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=The%20Nail%20Republic%20Kochi"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                  >
                    Kochi
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=The%20Nail%20Republic%20Muvattupuzha"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                  >
                    Muvattupuzha
                  </a>
                </div>
              ) : activeAction === "whatsapp" ? (
                <div className="branch-options">
                  <a
                    href={`https://wa.me/${KOCHI_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-branch"
                  >
                    Kochi
                  </a>

                  <a
                    href={`https://wa.me/${MUVA_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-branch"
                  >
                    Muvattupuzha
                  </a>
                </div>
              ) : (
                <>
                  <button
                    className="btn-solid"
                    onClick={() => setActiveAction("call")}
                  >
                    Call Now
                  </button>

                  <button
                    className="whatsapp-btn"
                    onClick={() => setActiveAction("whatsapp")}
                  >
                    <FaWhatsapp size={20} />
                    <span>WhatsApp</span>
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="hero-img">
            <img
              className="toned-img"
              src={IMAGES.hero}
              alt="Elegant nude manicure close up"
            />
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="wrap">
          <div className="about-grid">
            <div className="kicker">About The Nail Republic</div>
            <div>
              <p>
                The Nail Republic is a premium unisex salon in Kochi, Kerala,
                offering nail, hair, skin and hair extension services in a calm,
                considered setting.
              </p>
              <p>
                Every service is approached with precision and care, using
                quality products and techniques suited to each client's
                individual style and needs.
              </p>
              <p>
                Whether you're visiting for a quick touch-up or a full
                transformation, the goal is the same — a premium experience,
                done well.
              </p>
              <div className="divider" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services-premium">
        <div className="wrap">
          <div className="kicker">The Republic Collection</div>
          <h2 className="h2">Beauty, Hair, Skin & Nails</h2>
          <p className="section-intro">
            A complete selection of premium beauty services, from signature
            nails and hair grooming to skin rejuvenation, lashes and specialist
            extensions.
          </p>

          <div className="service-cards">
            {SERVICES.map((g, index) => (
              <article className="service-card" key={g.title}>
                <div className="service-card-top">
                  <span className="service-number">0{index + 1}</span>
                  <h3>{g.title}</h3>
                </div>
                {g.img && (
                  <div className="service-card-image">
                    <img className="toned-img" src={g.img} alt={g.title} />
                  </div>
                )}
                <ul className="service-items-list">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section pricing-premium">
        <div className="wrap">
          <div className="kicker">Signature Pricing</div>
          <h2 className="h2">Selected Services</h2>
          <p className="section-intro">
            A few signature prices are listed below. For other hair, skin and
            beauty services, please contact The Nail Republic for details and
            availability.
          </p>

          <div className="price-grid">
            {MENU.map((cat) => (
              <article className="price-card" key={cat.title}>
                <h3>{cat.title}</h3>
                {cat.items.map(([name, price]) => (
                  <div className="price-row" key={name}>
                    <span>{name}</span>
                    <span className="price-value">{price}</span>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <div className="pricing-note">
            <span>Signature details</span>
            <p>
              Hair extensions are available in 16-inch length using 100%
              sterilised, keratin-treated human hair, including Nano and LW
              extensions.
            </p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section insta">
        <div className="wrap">
          <div className="kicker">Follow The Republic</div>
          <h3 className="serif">@{INSTAGRAM_HANDLE}</h3>
          <div className="insta-row">
            <div className="gal-item">
              <img className="toned-img" src={insta2} alt="Instagram post" />
            </div>
            <div className="gal-item">
              <img className="toned-img" src={insta3} alt="Instagram post" />
            </div>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="wrap">
          <div className="kicker">FAQ</div>
          <h2 className="h2">Frequently Asked Questions</h2>

          <div className="faq-list">
            {FAQS.map((faq, index) => (
              <div className="faq-item" key={faq.question}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="wrap">
          <div className="kicker">Visit Us</div>
          <h2 className="h2">Our Locations</h2>

          <div className="branch-grid">
            {/* KOCHI */}
            <div className="branch-card">
              <div className="branch-title">Kochi</div>

              <div className="branch-info">
                <div className="label">Address</div>
                <div>
                  Nail Republic Unisex Premium Salon, HIG-2 Kathurba Nagar,
                  Kadavanthara PO, Kochi 682020
                </div>
              </div>

              <div className="branch-info">
                <div className="label">Opening Hours</div>
                <div className="branch-hours">
                  Every day except Tuesday · 9:30 AM – 7:30 PM
                </div>
              </div>

              <div className="branch-cta">
                <a href={`tel:${KOCHI_PHONE}`} className="btn-solid">
                  Call Now
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=The%20Nail%20Republic%20Kochi"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  Get Directions
                </a>
              </div>

              <div className="branch-map">
                <iframe
                  title="The Nail Republic Kochi location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3929.853978910777!2d76.29594037503043!3d9.946104990156563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTYnNDYuMCJOIDc2wrAxNyc1NC43IkU!5e0!3m2!1sen!2sin!4v1786215698375!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            {/* MUVA */}
            <div className="branch-card">
              <div className="branch-title">Muvattupuzha</div>

              <div className="branch-info">
                <div className="label">Address</div>
                <div>
                  CHIRA junction, near Anicadu, Muvattupuzha, Kerala 686661
                </div>
              </div>

              <div className="branch-info">
                <div className="label">Opening Hours</div>
                <div className="branch-hours">
                  Every day except Wednesday · 10:30 AM – 6:00 PM
                </div>
              </div>

              <div className="branch-cta">
                <a href={`tel:${MUVA_PHONE}`} className="btn-solid">
                  Call Now
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=The%20Nail%20Republic%20Muva"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  Get Directions
                </a>
              </div>

              <div className="branch-map">
                <iframe
                  title="The Nail Republic Muva location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.577737138984!2d76.6092956!3d9.9690462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dd30a3cba87b%3A0x7bafcc897f96998!2sThe%20Nail%20Republic%20Unisex%20Salon%20-%20Your%20Ultimate%20Beauty%20Parlor%20Destination!5e0!3m2!1sen!2sin!4v1786218021884!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-logo">
            <NRLogo size={46} />
          </div>
          <div className="brand">The Nail Republic</div>
          <div className="tag">
            Premium Nail • Hair • Skin & Hair Extensions
          </div>
          <div className="sub">Kochi, Kerala</div>
          <div className="foot-copy">
            © 2023 The Nail Republic. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
