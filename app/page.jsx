"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const impactStats = [
  { value: "58%", copy: "More convenient\npickup points", tone: "lime" },
  { value: "23%", copy: "Fewer customer\nphone calls", tone: "blue" },
  { value: "27%", copy: "More first-time\ncustomers", tone: "peach" },
  { value: "40%", copy: "Less time spent\nwaiting", tone: "lavender" },
];

function CarIllustration() {
  return (
    <svg
      className="car-art"
      viewBox="0 0 760 330"
      role="img"
      aria-label="A bright orange sports car viewed from above"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="body" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffb24a" />
          <stop offset=".48" stopColor="#ff762f" />
          <stop offset="1" stopColor="#e94c22" />
        </linearGradient>
        <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#26373a" />
          <stop offset=".55" stopColor="#162528" />
          <stop offset="1" stopColor="#53696a" />
        </linearGradient>
        <filter id="car-shadow" x="-20%" y="-30%" width="140%" height="170%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#000" floodOpacity=".35" />
        </filter>
      </defs>
      <g filter="url(#car-shadow)" strokeLinejoin="round">
        <path
          d="M96 70 160 41Q214 18 292 15L492 12Q570 13 622 40L687 76Q720 95 728 126L740 165 728 204Q719 237 687 255L622 290Q569 318 492 319L292 316Q212 314 160 289L96 260Q68 246 55 217L42 166 55 114Q67 84 96 70Z"
          fill="url(#body)"
          stroke="#20282a"
          strokeWidth="9"
        />
        <path d="M85 95 184 53 199 63 112 116ZM84 237 184 279 199 267 111 216Z" fill="#ffbe69" opacity=".75" />
        <path d="M243 34 271 38 281 70 249 70ZM243 297 271 293 281 261 249 261Z" fill="#1c2426" stroke="#596061" strokeWidth="5" />
        <path
          d="M190 67Q233 47 294 45L486 44Q543 46 580 71L617 99Q635 113 640 139L646 165 640 192Q635 218 617 232L580 260Q543 284 486 286L294 285Q233 283 190 263L155 242Q132 228 126 203L117 165 126 127Q132 102 155 88Z"
          fill="url(#glass)"
          stroke="#22292a"
          strokeWidth="8"
        />
        <path d="M217 73Q254 61 300 60L329 60 329 270 300 270Q252 268 217 255L171 229Q151 216 146 194L139 165 146 136Q151 114 171 101Z" fill="#273739" stroke="#718283" strokeWidth="3" />
        <path d="M343 60 478 60Q522 61 551 80L587 107Q605 121 610 143L615 165 610 187Q605 210 587 223L551 250Q522 269 478 270L343 270Z" fill="#314649" stroke="#718283" strokeWidth="3" />
        <path d="M335 59 335 271M208 75 192 253M559 83Q581 114 585 145L588 165 585 185Q581 216 559 247" fill="none" stroke="#152123" strokeWidth="9" />
        <path d="M350 70 350 260M478 68 478 262" stroke="#b7c5bd" strokeOpacity=".28" strokeWidth="3" />
        <path d="M156 116 197 98M156 214 197 232M563 97 602 120M563 233 602 210" stroke="#a8b9af" strokeOpacity=".25" strokeWidth="9" strokeLinecap="round" />
        <path d="M68 81Q84 69 108 77L151 91 128 113 83 105ZM68 249Q84 261 108 253L151 239 128 217 83 225ZM669 69 700 78 712 100 675 115 650 95ZM669 261 700 252 712 230 675 215 650 235Z" fill="#171f20" stroke="#667172" strokeWidth="4" />
        <path d="M60 132 92 140 92 190 60 198Q51 166 60 132ZM698 125 723 139 728 165 723 191 698 205 685 184 685 146Z" fill="#f4f0cf" stroke="#212829" strokeWidth="5" />
        <path d="M683 153 716 158M683 177 716 172" stroke="#fffbdc" strokeWidth="5" strokeLinecap="round" />
        <path d="M130 82Q153 50 191 42M130 248Q153 280 191 288M618 44Q658 59 679 81M618 286Q658 271 679 249" fill="none" stroke="#ffc778" strokeOpacity=".68" strokeWidth="5" />
        <path d="M179 165H195M590 165H606" stroke="#e9ece0" strokeOpacity=".5" strokeWidth="3" />
        <path d="M93 108 107 111M93 222 107 219M670 118 682 123M670 212 682 207" stroke="#151d1e" strokeWidth="5" />
      </g>
    </svg>
  );
}

export default function Home() {
  const page = useRef(null);
  const car = useRef(null);
  const roadGlow = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!reduceMotion) {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from(".eyebrow", { y: 12, autoAlpha: 0, duration: 0.7 })
          .from(".headline-char", { yPercent: 115, autoAlpha: 0, stagger: 0.035, duration: 0.85 }, "-=0.3")
          .from(".intro-copy, .hero-meta", { y: 18, autoAlpha: 0, duration: 0.7, stagger: 0.12 }, "-=0.45")
          .from(".stat-card", { y: 22, autoAlpha: 0, duration: 0.65, stagger: 0.1 }, "-=0.4")
          .from(".scroll-cue", { autoAlpha: 0, duration: 0.5 }, "-=0.25");

        gsap.to(car.current, {
          x: () =>
            Math.max(
              0,
              Math.min(
                window.innerWidth * 0.64,
                window.innerWidth - car.current.offsetWidth - car.current.offsetLeft,
              ),
            ),
          rotate: 4,
          scale: 0.88,
          ease: "none",
          scrollTrigger: {
            trigger: page.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(roadGlow.current, {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: page.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      }
    },
    { scope: page },
  );

  return (
    <main ref={page}>
      <section className="journey" aria-labelledby="hero-title">
        <div className="journey-sticky">
          <div className="ambient ambient-one" />
          <div className="ambient ambient-two" />

          <header className="site-header">
            <a className="brand" href="#top" aria-label="itzfizz home">
              itz<span>fizz</span><i aria-hidden="true">®</i>
            </a>
            <div className="header-note"><span className="status-dot" /> GOOD THINGS ARE IN MOTION</div>
            <a className="menu-link" href="#impact">OUR IMPACT <span aria-hidden="true">↗</span></a>
          </header>

          <div className="hero-copy" id="top">
            <p className="eyebrow"><span>THE ROAD TO BETTER</span><span className="eyebrow-line" /></p>
            <h1 className="headline" id="hero-title" aria-label="Welcome itzfizz">
              <span className="headline-word" aria-hidden="true">
                {"WELCOME".split("").map((char, index) => (
                  <span className="headline-char" key={`welcome-${index}`}>{char}</span>
                ))}
              </span>
              <span className="headline-gap" aria-hidden="true" />
              <span className="headline-word" aria-hidden="true">
                {"ITZFIZZ".split("").map((char, index) => (
                  <span className="headline-char" key={`itzfizz-${index}`}>{char}</span>
                ))}
              </span>
            </h1>
            <p className="intro-copy">Small stops. Big difference.<br /><span>We make every journey a little easier.</span></p>
          </div>

          <div className="road-scene" aria-label="A sports car travelling along a road">
            <div className="road-top-line" />
            <div className="road">
              <div className="road-edge road-edge-top" />
              <div className="road-centerline" />
              <div className="road-edge road-edge-bottom" />
              <div className="road-progress" ref={roadGlow} />
            </div>
            <div className="car-wrap" ref={car}><CarIllustration /></div>
            <div className="road-caption"><span>YOUR JOURNEY</span><span>01 — 04</span></div>
          </div>

          <div className="hero-bottom">
            <div className="hero-meta"><span>BETTER FOR PEOPLE</span><span>BETTER FOR BUSINESS</span></div>
            <a className="scroll-cue" href="#impact"><span>SCROLL TO EXPLORE</span><i aria-hidden="true">↓</i></a>
          </div>

          <div className="stat-grid" id="impact" aria-label="Our impact">
            {impactStats.map((stat, index) => (
              <article className={`stat-card stat-${stat.tone}`} key={stat.value}>
                <div className="stat-top"><span>0{index + 1} / IMPACT</span><span className="stat-arrow" aria-hidden="true">↗</span></div>
                <strong>{stat.value}</strong>
                <p>{stat.copy.split("\n").map((line) => <span key={line}>{line}</span>)}</p>
              </article>
            ))}
          </div>

          <div className="vertical-label">MADE FOR THE WAY YOU MOVE</div>
          <div className="page-index">01<span> / </span>04</div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">itz<span>fizz</span><i aria-hidden="true">®</i></a>
        <p>HERE’S TO THE BETTER WAY.</p>
        <span>© ITZFIZZ 2026</span>
      </footer>
    </main>
  );
}
