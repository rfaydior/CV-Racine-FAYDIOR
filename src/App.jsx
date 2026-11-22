import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  RadioTower, 
  Download, 
  Mail, 
  Send, 
  ArrowDown, 
  CheckCircle2, 
  Check, 
  FileText, 
  Network, 
  Activity, 
  Users, 
  Globe, 
  GitBranch, 
  Gauge, 
  Zap, 
  Radio, 
  Wrench, 
  Layers, 
  Cpu, 
  Languages, 
  GraduationCap, 
  Car, 
  HeartHandshake, 
  Compass, 
  PhoneCall, 
  MapPin, 
  ExternalLink, 
  FileCheck2, 
  Copy, 
  CheckCheck 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const compRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('rfaydior@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Animations
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.1,
      });

      // 2. Timeline Animations
      gsap.utils.toArray('.timeline-item').forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      });

      // 3. Circular Gauges Animation
      gsap.utils.toArray('.skill-card').forEach((card) => {
        const circle = card.querySelector('.gauge-circle');
        const countSpan = card.querySelector('.count-val');
        if (!circle || !countSpan) return;

        const targetPct = parseInt(circle.getAttribute('data-pct'), 10);

        ScrollTrigger.create({
          trigger: card,
          start: 'top 85%',
          onEnter: () => {
            const offset = 100 - targetPct;
            circle.style.strokeDashoffset = offset;

            const counter = { val: 0 };
            gsap.to(counter, {
              val: targetPct,
              duration: 1.6,
              ease: 'power2.out',
              onUpdate: () => {
                countSpan.innerText = Math.round(counter.val) + '%';
              },
            });
          },
        });
      });

      // 4. Section Revealing
      gsap.utils.toArray('#about, #skills, #education, #contact').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 0.8,
          duration: 0.6,
          ease: 'power2.out',
        });
      });
    }, compRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={compRef} className="bg-tech-black text-slate-100 font-sans selection:bg-signal-blue selection:text-white relative bg-noise antialiased overflow-x-hidden min-h-screen">
      
      {/* NAVBAR : La Signature Flottante (Élargie & Parfaitement Centrée) */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 lg:gap-8 px-6 py-3.5 rounded-full border border-tech-border/80 backdrop-blur-xl transition-all duration-300 shadow-2xl max-w-6xl w-full ${
            scrolled ? 'bg-tech-surface/95 py-2.5 shadow-signal-blue/10 border-signal-blue/40' : 'bg-tech-surface/80 py-3.5'
          }`}
        >
          {/* Identité / Logo (Gauche, shrink-0) */}
          <div className="flex items-center shrink-0">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-signal-blue flex items-center justify-center font-bold text-white text-sm tracking-wider shadow-md group-hover:scale-105 transition-transform shrink-0">
                RF
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-white group-hover:text-signal-glow transition-colors whitespace-nowrap">
                  Racine FAYDIOR
                </span>
                <span className="font-mono text-[10px] text-tech-muted tracking-wider whitespace-nowrap hidden sm:block">
                  CHEF DE POLE TELECOM
                </span>
              </div>
            </a>
          </div>

          {/* Liens Navigation Desktop (Centre parfait, flex-1 justify-center) */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-5 lg:gap-8 text-xs font-mono tracking-wider text-slate-300">
            <a href="#about" className="hover:text-signal-glow transition-colors whitespace-nowrap">À PROPOS</a>
            <a href="#experience" className="hover:text-signal-glow transition-colors whitespace-nowrap">PARCOURS</a>
            <a href="#skills" className="hover:text-signal-glow transition-colors whitespace-nowrap">COMPÉTENCES</a>
            <a href="#education" className="hover:text-signal-glow transition-colors whitespace-nowrap">FORMATION</a>
            <a href="#contact" className="hover:text-signal-glow transition-colors whitespace-nowrap">CONTACT</a>
          </div>

          {/* Actions rapides (Droite, shrink-0) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="CV Racine FAYDIOR.pdf"
              download="CV_Racine_FAYDIOR.pdf"
              className="btn-magnetic flex items-center gap-2 bg-signal-blue hover:bg-signal-light text-white font-mono text-xs px-4 py-2 rounded-full shadow-lg transition-all whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">CV PDF</span>
            </a>
            <a
              href="#contact"
              className="btn-magnetic border border-slate-700 hover:border-signal-blue text-slate-200 font-mono text-xs px-4 py-2 rounded-full transition-all whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 sm:hidden" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </nav>
      </header>

      {/* SECTION HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 tech-grid overflow-hidden">
        {/* Lueur laser */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-signal-blue/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute -top-10 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Badge disponibilité */}
          <div className="hero-anim inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-tech-card border border-tech-border/90 text-xs font-mono text-slate-300 mb-8 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">DISPONIBLE // DAKAR, SÉNÉGAL & MISSIONS INTERNATIONALES</span>
          </div>

          {/* Avatar Monogramme avec lueur fibre */}
          <div className="hero-anim relative mb-6 group cursor-default">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-tech-card via-tech-surface to-slate-800 border-2 border-signal-blue/80 p-1 flex items-center justify-center fiber-glow group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-tech-surface flex flex-col items-center justify-center text-white relative overflow-hidden">
                <span className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white">RF</span>
                <span className="text-[9px] font-mono text-signal-glow mt-0.5">INGÉNIEUR</span>
                <div className="absolute inset-0 bg-gradient-to-t from-signal-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-signal-blue text-white p-2 rounded-full shadow-lg border border-white/20">
              <RadioTower className="w-4 h-4" />
            </div>
          </div>

          {/* Nom massif */}
          <h1 className="hero-anim text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase font-sans">
            Racine <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-signal-glow">FAYDIOR</span>
          </h1>

          {/* Titre professionnel */}
          <p className="hero-anim text-xl sm:text-2xl md:text-3xl font-serif italic text-signal-light mt-4 max-w-3xl font-normal leading-relaxed">
            Responsable Pôle Fibre Optique & Conduite de Travaux Télécoms
          </p>

          <p className="hero-anim font-mono text-xs md:text-sm text-tech-muted mt-3 max-w-2xl">
            Expert Déploiement FTTH • GPON • Backbone • Réflectométrie OTDR & Recette Réseaux Opérateurs
          </p>

          {/* Stats Monospace */}
          <div className="hero-anim grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mt-10">
            <div className="p-4 rounded-3xl bg-tech-card/80 border border-tech-border/80 backdrop-blur-sm card-lift">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">12+</div>
              <div className="text-[11px] font-mono text-tech-muted mt-1 uppercase tracking-wider">Ans d'Expertise</div>
            </div>
            <div className="p-4 rounded-3xl bg-tech-card/80 border border-tech-border/80 backdrop-blur-sm card-lift">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-signal-glow">30+</div>
              <div className="text-[11px] font-mono text-tech-muted mt-1 uppercase tracking-wider">Projets & Roll-outs</div>
            </div>
            <div className="p-4 rounded-3xl bg-tech-card/80 border border-tech-border/80 backdrop-blur-sm card-lift">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">4</div>
              <div className="text-[11px] font-mono text-tech-muted mt-1 uppercase tracking-wider">Opérateurs Majeurs</div>
            </div>
            <div className="p-4 rounded-3xl bg-tech-card/80 border border-tech-border/80 backdrop-blur-sm card-lift">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-signal-glow">100%</div>
              <div className="text-[11px] font-mono text-tech-muted mt-1 uppercase tracking-wider">Conformité Recette</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-anim flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="CV Racine FAYDIOR.pdf"
              download="CV_Racine_FAYDIOR.pdf"
              className="btn-magnetic flex items-center gap-3 bg-signal-blue hover:bg-signal-light text-white font-sans font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-signal-blue/25 transition-all text-sm tracking-wide"
            >
              <Download className="w-4 h-4" />
              Télécharger le CV Complet (PDF)
            </a>
            <a
              href="#contact"
              className="btn-magnetic flex items-center gap-2.5 bg-tech-card hover:bg-tech-surface text-slate-200 border border-tech-border hover:border-signal-blue px-7 py-3.5 rounded-full transition-all text-sm font-sans"
            >
              <Send className="w-4 h-4 text-signal-glow" />
              Me contacter
            </a>
            <a
              href="#experience"
              className="btn-magnetic flex items-center gap-2 text-xs font-mono text-tech-muted hover:text-white px-4 py-3 transition-colors"
            >
              Explorer mon parcours <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-tech-muted text-[11px] font-mono opacity-60 hover:opacity-100 transition-opacity">
          <span>SCROLL</span>
          <div className="w-4 h-7 rounded-full border border-tech-muted/50 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-signal-blue rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* SECTION À PROPOS */}
      <section id="about" className="py-28 px-6 bg-paper text-slate-900 rounded-5xl md:rounded-6xl my-8 mx-3 sm:mx-6 shadow-2xl relative overflow-hidden transition-all">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 font-mono text-xs text-signal-dark uppercase tracking-widest mb-10">
            <span className="w-8 h-px bg-signal-blue"></span>
            <span>01 // MANIFESTE PROFESSIONNEL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-slate-950 leading-[1.15]">
                L'Excellence du Déploiement Optique et la Rigueur de la Recette.
              </h2>
              <div className="mt-8 pt-8 border-t border-slate-300">
                <div className="font-mono text-xs text-slate-600 uppercase tracking-wider mb-2">PÔLES D'INTERVENTION</div>
                <p className="font-sans font-medium text-slate-800 text-sm leading-relaxed">
                  SAGEMCOM Sénégal & Togo • Orange Sénégal • Free Sénégal • Expresso • Tigo • Togocom • Ministère de l'Enseignement Supérieur
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-1 self-stretch flex justify-center">
              <div className="w-0.5 h-full bg-signal-blue/40 rounded-full"></div>
            </div>

            <div className="lg:col-span-6 space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-900">
                Fort de plus de <strong>12 années de pratique intensive</strong> sur les chantiers télécoms majeurs en Afrique de l'Ouest, j'ai forgé mon expertise au cœur des déploiements structurants : du premier câble tiré jusqu'à la certification de recette définitive.
              </p>
              <p className="text-slate-700 text-sm sm:text-base">
                Actuel <strong>Responsable du Pôle Soudure et Recette chez SAGEMCOM</strong>, j'assure le pilotage, l'intégrité technique et la conformité des réseaux fibre optique <strong>GPON, FTTH, FTTM (4G) et Backbones de transmission</strong>. Mon rôle englobe la coordination de multiples équipes sur le terrain, la validation réflectométrique minutieuse (OTDR) et la réalisation des dossiers d'homologation selon les normes strictes des opérateurs télécoms (Orange, Free, Togocom).
              </p>
              <p className="text-slate-700 text-sm sm:text-base">
                Mon parcours allie rigueur scientifique, sens aigu du management humain et maîtrise complète des technologies optiques. Qu'il s'agisse d'un roll-out national complet ou de la résolution d'incidents critiques sur un backbone opérateur, ma priorité demeure invariable : <strong>livrer des infrastructures fiables, performantes et pérennes</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="p-4 bg-white/70 rounded-2xl border border-slate-300 shadow-sm">
                  <Activity className="w-5 h-5 text-signal-blue mb-2" />
                  <div className="font-bold text-sm text-slate-900">Zéro Compromis</div>
                  <div className="text-xs text-slate-600 mt-1">Recette réflectométrique et bilans optiques sans faille.</div>
                </div>
                <div className="p-4 bg-white/70 rounded-2xl border border-slate-300 shadow-sm">
                  <Users className="w-5 h-5 text-signal-blue mb-2" />
                  <div className="font-bold text-sm text-slate-900">Leadership Serein</div>
                  <div className="text-xs text-slate-600 mt-1">Management de techniciens, sécurité chantier et SLA.</div>
                </div>
                <div className="p-4 bg-white/70 rounded-2xl border border-slate-300 shadow-sm">
                  <Globe className="w-5 h-5 text-signal-blue mb-2" />
                  <div className="font-bold text-sm text-slate-900">Envergure Régionale</div>
                  <div className="text-xs text-slate-600 mt-1">Expérience avérée au Sénégal et à l'international (Togo).</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION EXPÉRIENCE */}
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-signal-glow uppercase tracking-widest mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>02 // PARCOURS PROFESSIONNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-white tracking-tight">
            Une Trajectoire Dédiée aux Réseaux
          </h2>
          <p className="font-mono text-xs sm:text-sm text-tech-muted mt-3">
            Direction de chantiers télécoms, management de pôles recette et déploiements à grande échelle chez SAGEMCOM.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-signal-blue via-signal-blue/50 to-transparent"></div>

          {/* Item 1: 2023 - Présent */}
          <div className="timeline-item relative flex flex-col md:flex-row items-start mb-16 group">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-tech-black border-2 border-signal-blue flex items-center justify-center z-10 fiber-glow group-hover:scale-125 transition-transform">
              <div className="w-2.5 h-2.5 bg-signal-blue rounded-full pulse-dot"></div>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
              <div className="inline-block px-3 py-1 rounded-full font-mono text-xs text-signal-glow bg-signal-blue/10 border border-signal-blue/30 mb-2">
                2023 — PRÉSENT
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">Responsable Pôle Soudure et Recette</h3>
              <p className="font-mono text-xs text-slate-400 mt-1">SAGEMCOM SÉNÉGAL</p>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-12 mt-4 md:mt-0">
              <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift">
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Pilotage stratégique et opérationnel des activités de raccordement, soudure et recette définitive des réseaux très haut débit optique.
                </p>
                <ul className="space-y-2 text-xs text-slate-400 font-sans">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-signal-glow flex-shrink-0" /> Déploiement et certification du réseau GPON Orange</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-signal-glow flex-shrink-0" /> Fibrage d'infrastructures et transport pour Free Sénégal</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-signal-glow flex-shrink-0" /> FTTH Free : Raccordement des nouveaux abonnés & Maintenance continue des boucles locales optiques</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-tech-border/60 font-mono text-[11px]">
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-slate-300 border border-tech-border">FTTH Free</span>
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-slate-300 border border-tech-border">GPON Orange</span>
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-slate-300 border border-tech-border">Soudure Fusion</span>
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-slate-300 border border-tech-border">Maintenance SLA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: 2022 */}
          <div className="timeline-item relative flex flex-col md:flex-row-reverse items-start mb-16 group">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-tech-black border-2 border-signal-blue flex items-center justify-center z-10 fiber-glow group-hover:scale-125 transition-transform">
              <div className="w-2.5 h-2.5 bg-signal-blue rounded-full"></div>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-12 md:text-left">
              <div className="inline-block px-3 py-1 rounded-full font-mono text-xs text-signal-glow bg-signal-blue/10 border border-signal-blue/30 mb-2">
                2022
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">Responsable Adjoint Pôle Raccordement & Recette</h3>
              <p className="font-mono text-xs text-slate-400 mt-1">SAGEMCOM SÉNÉGAL</p>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 mt-4 md:mt-0">
              <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift">
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Coordination conjointe des chantiers de raccordement d'abonnés et validation des liaisons de transmission haut débit.
                </p>
                <ul className="space-y-2 text-xs text-slate-400 font-sans">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-signal-glow flex-shrink-0" /> Déploiement Projet FTTH Free et raccordements multi-zones</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-signal-glow flex-shrink-0" /> Déploiement Projet FTTH GPON Orange 2022</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-signal-glow flex-shrink-0" /> Liaisons FO-FH (Fibre Optique - Faisceaux Hertziens) Orange</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-signal-glow flex-shrink-0" /> Campagnes de fibrage d'envergure pour Free</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-tech-border/60 font-mono text-[11px]">
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-slate-300 border border-tech-border">FO-FH</span>
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-slate-300 border border-tech-border">FTTH GPON</span>
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-slate-300 border border-tech-border">Recette Technique</span>
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: 2021 (Togo) */}
          <div className="timeline-item relative flex flex-col md:flex-row items-start mb-16 group">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-tech-black border-2 border-emerald-400 flex items-center justify-center z-10 fiber-glow group-hover:scale-125 transition-transform">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
              <div className="inline-block px-3 py-1 rounded-full font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 mb-2">
                2021 — DÉPLOIEMENT INTERNATIONAL
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">Roll-out National FTTH TOGOCOM</h3>
              <p className="font-mono text-xs text-slate-400 mt-1">SAGEMCOM TOGO</p>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-12 mt-4 md:mt-0">
              <div className="p-6 rounded-4xl bg-tech-card border border-emerald-500/30 card-lift">
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Déploiement national d'envergure du réseau FTTH pour l'opérateur <strong>TOGOCOM</strong> :
                </p>
                <div className="p-3 rounded-2xl bg-tech-surface/80 border border-tech-border font-mono text-xs text-emerald-300 mb-4">
                  Villes : Lomé, Kara, Sinkassé, Dapaong, Sokodé, Atakpamé, Aného, Afidegnygban, Pallémé.
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Supervision des travaux de tirage optique, raccordement, mise en place des répartiteurs, tests de continuité et réflectométrie sur tout le territoire togolais.
                </p>
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-tech-border/60 font-mono text-[11px]">
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-emerald-300 border border-emerald-500/20">TOGOCOM</span>
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-slate-300 border border-tech-border">Roll-out National</span>
                </div>
              </div>
            </div>
          </div>

          {/* Item 4: 2016 - 2020 */}
          <div className="timeline-item relative flex flex-col md:flex-row-reverse items-start mb-16 group">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-tech-black border-2 border-signal-blue flex items-center justify-center z-10 fiber-glow group-hover:scale-125 transition-transform">
              <div className="w-2.5 h-2.5 bg-signal-blue rounded-full"></div>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-12 md:text-left">
              <div className="inline-block px-3 py-1 rounded-full font-mono text-xs text-signal-glow bg-signal-blue/10 border border-signal-blue/30 mb-2">
                2016 — 2020
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">Chef de Pôle Recette & Conducteur de Travaux Fibre</h3>
              <p className="font-mono text-xs text-slate-400 mt-1">SAGEMCOM SÉNÉGAL</p>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 mt-4 md:mt-0">
              <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift">
                <ul className="space-y-2 text-xs text-slate-400 font-sans">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-signal-glow mt-0.5 flex-shrink-0" />
                    <span><strong>Chef du Pôle Recette Fibre Orange & Free :</strong> GPON FTTH, FTTM, Backbone - Liaisons inter-centraux.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-signal-glow mt-0.5 flex-shrink-0" />
                    <span><strong>Conducteur de travaux Fibre pour la 4G :</strong> Projets FTTM Orange (Phases 1, 2, 3 et extensions) & Projet FTTM Tigo au Sénégal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-signal-glow mt-0.5 flex-shrink-0" />
                    <span><strong>Chef d'équipe Déploiement GPON FTTH Orange (2017-2019) & Free (2020).</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-signal-glow mt-0.5 flex-shrink-0" />
                    <span><strong>Projets Spécifiques :</strong> Raccordement Small Cell Orange, Wifi-Offload Orange et Réflectométrie TNT (Télévision Numérique Terrestre).</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-tech-border/60 font-mono text-[11px]">
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-slate-300 border border-tech-border">4G FTTM Orange & Tigo</span>
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-slate-300 border border-tech-border">TNT Sénégal</span>
                  <span className="px-2.5 py-1 rounded-full bg-tech-surface text-slate-300 border border-tech-border">Small Cells</span>
                </div>
              </div>
            </div>
          </div>

          {/* Item 5: 2014 - 2015 */}
          <div className="timeline-item relative flex flex-col md:flex-row items-start mb-16 group">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-tech-black border-2 border-signal-blue flex items-center justify-center z-10 fiber-glow group-hover:scale-125 transition-transform">
              <div className="w-2.5 h-2.5 bg-signal-blue rounded-full"></div>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
              <div className="inline-block px-3 py-1 rounded-full font-mono text-xs text-signal-glow bg-signal-blue/10 border border-signal-blue/30 mb-2">
                2014 — 2015
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">Chef d'Équipe Maintenance & Déploiement Backbone</h3>
              <p className="font-mono text-xs text-slate-400 mt-1">SAGEMCOM SÉNÉGAL</p>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-12 mt-4 md:mt-0">
              <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift">
                <ul className="space-y-2 text-xs text-slate-400 font-sans">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-signal-glow flex-shrink-0" /> Maintenance 24/7 des réseaux fibre optique pour Tigo, Expresso et Orange</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-signal-glow flex-shrink-0" /> Déploiement génie civil et raccordement Backbone d'EXPRESSO (FTTB)</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-signal-glow flex-shrink-0" /> Déploiement génie civil et raccordement Backbone de TIGO (FTTT)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 6: 2012 */}
          <div className="timeline-item relative flex flex-col md:flex-row-reverse items-start group">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-tech-black border-2 border-slate-600 flex items-center justify-center z-10 group-hover:scale-125 transition-transform">
              <div className="w-2.5 h-2.5 bg-slate-400 rounded-full"></div>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-12 md:text-left">
              <div className="inline-block px-3 py-1 rounded-full font-mono text-xs text-slate-300 bg-tech-surface border border-tech-border mb-2">
                2012
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">Chargé d'Études & Confection Plans Réseaux</h3>
              <p className="font-mono text-xs text-slate-400 mt-1">AZTELCO & ECOTEL.SA</p>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 mt-4 md:mt-0">
              <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift">
                <ul className="space-y-3 text-xs text-slate-400 font-sans">
                  <li className="flex items-start gap-2">
                    <FileText className="w-3.5 h-3.5 text-slate-300 mt-0.5 flex-shrink-0" />
                    <span><strong>AZTELCO :</strong> Étude de construction et plan de réseaux optiques pour l'Appel d'Offres N°4/TIC/PGF-SUP du Ministère de l'Enseignement Supérieur du Sénégal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Network className="w-3.5 h-3.5 text-slate-300 mt-0.5 flex-shrink-0" />
                    <span><strong>ECOTEL.SA :</strong> Stage réseaux d'accès, raccordements cuivre Sonatel et installations abonnés ADSL.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION COMPÉTENCES */}
      <section id="skills" className="py-24 px-6 bg-tech-surface border-y border-tech-border relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-signal-glow uppercase tracking-widest mb-3">
                <Gauge className="w-3.5 h-3.5" />
                <span>03 // TABLEAU DE BORD TECHNIQUE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-white tracking-tight">
                Grille de Maîtrise Métier
              </h2>
            </div>
            <p className="font-mono text-xs text-tech-muted max-w-md">
              Évaluation basée sur 12+ années de direction de chantiers télécoms, de tests de recette et d'audits réflectométriques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="skill-card p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-2xl bg-signal-blue/15 text-signal-glow border border-signal-blue/30">
                    <Activity className="w-5 h-5" />
                  </span>
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                      <path className="text-tech-border" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-signal-blue gauge-circle" strokeDasharray="100, 100" strokeDashoffset="100" data-pct="98" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="absolute font-mono text-xs font-bold text-white count-val">98%</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Réflectométrie OTDR & Recette Optique</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Mesures bidirectionnelles, analyse des événements (épissures, connecteurs, contraintes), photométrie et confection intégrale des dossiers de recette conformes opérateurs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-tech-border/70 flex flex-wrap gap-1.5 font-mono text-[10px] text-signal-glow">
                <span>OTDR</span> • <span>Photomètre</span> • <span>Cahiers de recette</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="skill-card p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-2xl bg-signal-blue/15 text-signal-glow border border-signal-blue/30">
                    <Zap className="w-5 h-5" />
                  </span>
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                      <path className="text-tech-border" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-signal-blue gauge-circle" strokeDasharray="100, 100" strokeDashoffset="100" data-pct="96" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="absolute font-mono text-xs font-bold text-white count-val">96%</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Déploiement FTTH & Soudure Fibre</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Tirage de câbles optiques, pose d'équipements (NRO, PM, PBO), soudure par fusion haute précision et raccordement d'abonnés finaux et professionnels.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-tech-border/70 flex flex-wrap gap-1.5 font-mono text-[10px] text-signal-glow">
                <span>Fusionneuse</span> • <span>Tirage & Aiguillage</span> • <span>Boîtes d'épissures</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="skill-card p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-2xl bg-signal-blue/15 text-signal-glow border border-signal-blue/30">
                    <Users className="w-5 h-5" />
                  </span>
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                      <path className="text-tech-border" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-signal-blue gauge-circle" strokeDasharray="100, 100" strokeDashoffset="100" data-pct="94" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="absolute font-mono text-xs font-bold text-white count-val">94%</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Management & Pilotage de Projets</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Direction d'équipes de techniciens sur chantiers complexes, planification des interventions, gestion des stocks matériel, sécurité HSE et suivi des jalons.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-tech-border/70 flex flex-wrap gap-1.5 font-mono text-[10px] text-signal-glow">
                <span>Leadership</span> • <span>Coordination Terrain</span> • <span>HSE</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="skill-card p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-2xl bg-signal-blue/15 text-signal-glow border border-signal-blue/30">
                    <Radio className="w-5 h-5" />
                  </span>
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                      <path className="text-tech-border" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-signal-blue gauge-circle" strokeDasharray="100, 100" strokeDashoffset="100" data-pct="92" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="absolute font-mono text-xs font-bold text-white count-val">92%</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Liaisons Mobiles 4G/5G (FTTM & FO-FH)</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Déploiement de liens optiques vers les stations de base mobiles (NodeB, eNodeB), interconnexion fibre-faisceaux hertziens, Small Cells et Wifi-Offload.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-tech-border/70 flex flex-wrap gap-1.5 font-mono text-[10px] text-signal-glow">
                <span>FTTM 4G</span> • <span>FO-FH</span> • <span>Small Cells</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="skill-card p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-2xl bg-signal-blue/15 text-signal-glow border border-signal-blue/30">
                    <Wrench className="w-5 h-5" />
                  </span>
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                      <path className="text-tech-border" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-signal-blue gauge-circle" strokeDasharray="100, 100" strokeDashoffset="100" data-pct="95" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="absolute font-mono text-xs font-bold text-white count-val">95%</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Maintenance Réseaux & SAV Abonnés</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Localisation rapide de ruptures de câbles optiques par réflectométrie, rétablissement d'urgence, maintenance préventive et traitement selon les SLA.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-tech-border/70 flex flex-wrap gap-1.5 font-mono text-[10px] text-signal-glow">
                <span>Dépannage 24/7</span> • <span>SLA Opérateurs</span> • <span>Diagnostic Câble</span>
              </div>
            </div>

            {/* Card 6 */}
            <div className="skill-card p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2.5 rounded-2xl bg-signal-blue/15 text-signal-glow border border-signal-blue/30">
                    <Layers className="w-5 h-5" />
                  </span>
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                      <path className="text-tech-border" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-signal-blue gauge-circle" strokeDasharray="100, 100" strokeDashoffset="100" data-pct="88" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="absolute font-mono text-xs font-bold text-white count-val">88%</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">Études & Dimensionnement Réseaux</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Calcul de bilans optiques, plans de tirage et de raccordement, utilisation experte de logiciels spécialisés (Fiber Cable, AutoCAD, outils SIG QGIS).
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-tech-border/70 flex flex-wrap gap-1.5 font-mono text-[10px] text-signal-glow">
                <span>Fiber Cable</span> • <span>AutoCAD</span> • <span>QGIS</span>
              </div>
            </div>
          </div>

          {/* Outils & Langues */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="p-6 rounded-4xl bg-tech-card/80 border border-tech-border">
              <div className="flex items-center gap-2 font-mono text-xs text-signal-glow uppercase tracking-wider mb-4">
                <Cpu className="w-4 h-4" />
                <span>ÉCOSYSTÈME LOGICIEL & INFORMATIQUE</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-tech-surface text-xs font-mono text-white border border-tech-border">Fiber Cable (Expert)</span>
                <span className="px-3 py-1.5 rounded-full bg-tech-surface text-xs font-mono text-white border border-tech-border">AutoCAD</span>
                <span className="px-3 py-1.5 rounded-full bg-tech-surface text-xs font-mono text-white border border-tech-border">QGIS / SIG</span>
                <span className="px-3 py-1.5 rounded-full bg-tech-surface text-xs font-mono text-white border border-tech-border">Pack Office (Excel Avancé, Word, PPT)</span>
                <span className="px-3 py-1.5 rounded-full bg-tech-surface text-xs font-mono text-slate-300 border border-tech-border">Python</span>
                <span className="px-3 py-1.5 rounded-full bg-tech-surface text-xs font-mono text-slate-300 border border-tech-border">Langage C</span>
                <span className="px-3 py-1.5 rounded-full bg-tech-surface text-xs font-mono text-slate-300 border border-tech-border">HTML / Web / Drupal</span>
              </div>
            </div>

            <div className="p-6 rounded-4xl bg-tech-card/80 border border-tech-border">
              <div className="flex items-center gap-2 font-mono text-xs text-signal-glow uppercase tracking-wider mb-4">
                <Languages className="w-4 h-4" />
                <span>LANGUES PRATIQUÉES</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-tech-surface border border-tech-border/80">
                  <div className="font-bold text-white">Français</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">Courant / Écrit & Parlé (Langue de travail)</div>
                </div>
                <div className="p-3 rounded-2xl bg-tech-surface border border-tech-border/80">
                  <div className="font-bold text-white">Anglais</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">Professionnel / Écrit & Parlé</div>
                </div>
                <div className="p-3 rounded-2xl bg-tech-surface border border-tech-border/80">
                  <div className="font-bold text-white">Wolof</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">Langue nationale / Parlé & Compris</div>
                </div>
                <div className="p-3 rounded-2xl bg-tech-surface border border-tech-border/80">
                  <div className="font-bold text-white">Poular</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">Langue maternelle / Écrit & Parlé</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FORMATION */}
      <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-signal-glow uppercase tracking-widest mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>04 // FORMATION & DIPLÔMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-white tracking-tight">
              Fondations Académiques & Parcours
            </h2>
          </div>
          <p className="font-mono text-xs text-tech-muted max-w-md">
            Une formation supérieure spécialisée en réseaux de télécommunications couplée à un socle scientifique rigoureux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full font-mono text-xs text-signal-glow bg-signal-blue/15 border border-signal-blue/30 mb-2">
                  2009 — 2012
                </span>
                <h3 className="text-lg font-bold text-white font-sans">Licence en Réseaux Informatiques & Télécommunications</h3>
                <p className="text-sm text-slate-400 mt-1 font-sans">ISI — Institut Supérieur d'Informatique, Dakar</p>
              </div>
              <div className="sm:text-right font-mono text-xs text-slate-400">
                Diplôme d'Enseignement Supérieur
              </div>
            </div>

            <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full font-mono text-xs text-slate-300 bg-tech-surface border border-tech-border mb-2">
                  Janvier — Février 2012
                </span>
                <h3 className="text-lg font-bold text-white font-sans">Stage d'Étude Réseaux d'Accès & Cuivre Sonatel</h3>
                <p className="text-sm text-slate-400 mt-1 font-sans">ECOTEL.SA — Étude et Construction de Réseaux Télécoms</p>
              </div>
              <div className="sm:text-right font-mono text-xs text-slate-400">
                ADSL & Boucle Locale
              </div>
            </div>

            <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full font-mono text-xs text-slate-300 bg-tech-surface border border-tech-border mb-2">
                  2005 — 2008
                </span>
                <h3 className="text-lg font-bold text-white font-sans">Premier Cycle d'Étude Médicale & Stages Hospitaliers</h3>
                <p className="text-sm text-slate-400 mt-1 font-sans">Hôpital Universitaire de Fann (2007-2008) & Hôpital Le Dantec (2006-2007), Dakar</p>
              </div>
              <div className="sm:text-right font-mono text-xs text-slate-400">
                Médecine & Santé
              </div>
            </div>

            <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full font-mono text-xs text-slate-300 bg-tech-surface border border-tech-border mb-2">
                  2003 — 2004
                </span>
                <h3 className="text-lg font-bold text-white font-sans">Baccalauréat Série S2 (Sciences Expérimentales)</h3>
                <p className="text-sm text-slate-400 mt-1 font-sans">Académie de Dakar, Sénégal</p>
              </div>
              <div className="sm:text-right font-mono text-xs text-slate-400">
                Diplôme d'État
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-4xl bg-gradient-to-b from-tech-card to-tech-surface border border-tech-border">
              <div className="flex items-center gap-2 font-mono text-xs text-signal-glow uppercase tracking-wider mb-3">
                <Car className="w-4 h-4" />
                <span>PERMIS DE CONDUIRE</span>
              </div>
              <div className="text-lg font-bold text-white font-mono">Catégories Multiples (2016)</div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Permis valide pour la conduite de véhicules professionnels et de chantiers :
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3 font-mono text-xs font-bold text-signal-glow">
                <span className="px-2.5 py-1 bg-tech-surface border border-tech-border rounded-lg">A1</span>
                <span className="px-2.5 py-1 bg-tech-surface border border-tech-border rounded-lg">B</span>
                <span className="px-2.5 py-1 bg-tech-surface border border-tech-border rounded-lg">BE</span>
                <span className="px-2.5 py-1 bg-tech-surface border border-tech-border rounded-lg">C1</span>
                <span className="px-2.5 py-1 bg-tech-surface border border-tech-border rounded-lg">C1E</span>
              </div>
            </div>

            <div className="p-6 rounded-4xl bg-tech-card border border-tech-border">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-wider mb-3">
                <HeartHandshake className="w-4 h-4" />
                <span>ENGAGEMENT ASSOCIATIF</span>
              </div>
              <div className="text-sm font-bold text-white">Président Commission Santé (2007 — 2011)</div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Association d'étudiants et d'élèves :
              </p>
              <ul className="text-xs text-slate-400 mt-2 space-y-1">
                <li className="flex items-center gap-2">• Caravanes médicales et soins gratuits</li>
                <li className="flex items-center gap-2">• Journées culturelles et scientifiques</li>
              </ul>
            </div>

            <div className="p-6 rounded-4xl bg-tech-card border border-tech-border">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300 uppercase tracking-wider mb-3">
                <Compass className="w-4 h-4" />
                <span>CENTRES D'INTÉRÊT</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="px-3 py-1 bg-tech-surface rounded-full border border-tech-border">Lecture technique</span>
                <span className="px-3 py-1 bg-tech-surface rounded-full border border-tech-border">Football</span>
                <span className="px-3 py-1 bg-tech-surface rounded-full border border-tech-border">Basketball</span>
                <span className="px-3 py-1 bg-tech-surface rounded-full border border-tech-border">Lutte traditionnelle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-tech-surface via-tech-black to-tech-black border-t border-tech-border relative overflow-hidden">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-signal-blue/20 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-signal-glow uppercase tracking-widest mb-3">
              <Send className="w-3.5 h-3.5" />
              <span>05 // CONTACT & COLLABORATION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white leading-tight">
              Construisons vos infrastructures de demain.
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 mt-4">
              Besoin d'un responsable expérimenté pour piloter vos chantiers optiques, certifier vos recettes télécoms ou auditer votre réseau ? Parlons-en dès aujourd'hui.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card Email */}
            <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-signal-blue/15 text-signal-glow border border-signal-blue/30 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="font-mono text-xs text-tech-muted uppercase">Courriel Professionnel</div>
                <a href="mailto:rfaydior@gmail.com" className="text-lg font-bold text-white hover:text-signal-glow transition-colors block mt-1 break-all">
                  rfaydior@gmail.com
                </a>
                <p className="text-xs text-slate-400 mt-2">Réponse rapide assurée sous 24h.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-tech-border/70 flex items-center justify-between">
                <a href="mailto:rfaydior@gmail.com" className="font-mono text-xs text-signal-glow hover:underline flex items-center gap-1.5">
                  <span>Écrire un message</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button onClick={copyEmail} className="text-xs font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-tech-surface border border-tech-border flex items-center gap-1">
                  {copied ? <CheckCheck className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copié !' : 'Copier'}</span>
                </button>
              </div>
            </div>

            {/* Card Téléphone */}
            <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-signal-blue/15 text-signal-glow border border-signal-blue/30 flex items-center justify-center mb-4">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="font-mono text-xs text-tech-muted uppercase">Téléphone & WhatsApp</div>
                <a href="tel:+221774569147" className="text-lg font-bold text-white hover:text-signal-glow transition-colors block mt-1 font-mono">
                  +221 77 456 91 47
                </a>
                <a href="tel:+221784250101" className="text-sm font-semibold text-slate-300 hover:text-signal-glow transition-colors block mt-0.5 font-mono">
                  +221 78 425 01 01
                </a>
                <p className="text-xs text-slate-400 mt-2">Disponible pour échanges téléphoniques et WhatsApp.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-tech-border/70">
                <a href="tel:+221774569147" className="font-mono text-xs text-signal-glow hover:underline flex items-center gap-1.5">
                  <span>Appeler maintenant</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card Localisation & LinkedIn */}
            <div className="p-6 rounded-4xl bg-tech-card border border-tech-border card-lift flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-signal-blue/15 text-signal-glow border border-signal-blue/30 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="font-mono text-xs text-tech-muted uppercase">Base & Réseau Pro</div>
                <div className="text-base font-bold text-white mt-1">Dakar, SÉNÉGAL</div>
                <p className="text-xs text-slate-400 mt-1">1774 Pikine Nord, Diack Sao Fass 2</p>
                <p className="text-xs text-slate-500 mt-0.5">Mobilité : Afrique de l'Ouest & International</p>
              </div>
              <div className="mt-6 pt-4 border-t border-tech-border/70 flex items-center justify-between">
                <a href="https://www.linkedin.com/in/racine-faydior" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-signal-glow hover:underline flex items-center gap-1.5">
                  <span>Profil LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Vérifié</span>
              </div>
            </div>
          </div>

          {/* Bannière Téléchargement */}
          <div className="mt-12 p-8 rounded-5xl bg-gradient-to-r from-signal-blue/20 via-tech-card to-signal-blue/10 border border-signal-blue/30 flex flex-col sm:flex-row items-center justify-between gap-6 fiber-glow">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-3xl bg-signal-blue text-white flex items-center justify-center shadow-lg flex-shrink-0">
                <FileCheck2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white font-sans">Document Officiel Disponible</h4>
                <p className="text-xs text-slate-300 font-mono mt-0.5">Fichier PDF certifié : Curriculum Vitae complet de Racine FAYDIOR</p>
              </div>
            </div>
            <a
              href="CV Racine FAYDIOR.pdf"
              download="CV_Racine_FAYDIOR.pdf"
              className="btn-magnetic flex items-center gap-3 bg-white text-slate-950 font-sans font-bold px-8 py-4 rounded-full shadow-2xl hover:bg-slate-100 transition-all text-sm whitespace-nowrap"
            >
              <Download className="w-4 h-4 text-signal-blue" />
              Télécharger mon CV (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-slate-400 py-12 px-6 rounded-t-5xl md:rounded-t-6xl border-t border-tech-border relative">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-center">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-signal-blue flex items-center justify-center font-bold text-white text-xs">
              RF
            </div>
            <div>
              <span className="text-white font-bold">Racine FAYDIOR</span> © 2026. Tous droits réservés.
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tech-surface border border-tech-border text-[11px] text-slate-300 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>SYSTÈME EN LIGNE • LATENCE OPTIQUE MINIMALE</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
