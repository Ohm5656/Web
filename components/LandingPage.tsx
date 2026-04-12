"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from 'motion/react';
import {
  Sparkles,
  Smartphone,
  Zap,
  Search,
  Headphones,
  Palette,
  Building2,
  ShoppingCart,
  Utensils,
  Hotel,
  Briefcase,
  Layout,
  Code,
  Menu,
  X
} from 'lucide-react';
import FloatingContact from '@/components/FloatingContact';
import DesktopMockup from '@/components/DesktopMockup';
import MobileMockup from '@/components/MobileMockup';

const serviceCardEntrances = [
  { x: -56, y: 40, rotate: -4 },
  { x: 0, y: -54, rotate: 2 },
  { x: 60, y: 0, rotate: 3 },
  { x: 48, y: -38, rotate: 4 },
  { x: -54, y: 0, rotate: -3 },
  { x: 0, y: 52, rotate: 2 },
  { x: -42, y: -40, rotate: -4 },
  { x: 44, y: 42, rotate: 3 }
];

const serviceBlobs = [
  {
    className: 'left-[5%] top-16 h-[4.5rem] w-12 md:left-[8%] md:top-24 md:h-24 md:w-14',
    color: 'from-blue-300/18 via-sky-300/10 to-blue-400/5',
    duration: 9.5,
    delay: 0.4
  },
  {
    className: 'right-[7%] top-24 h-14 w-14 md:right-[10%] md:top-20 md:h-[4.5rem] md:w-[4.5rem]',
    color: 'from-cyan-300/16 via-blue-300/8 to-sky-200/0',
    duration: 8.6,
    delay: 1.3
  },
  {
    className: 'left-[16%] bottom-[4.5rem] h-10 w-10 md:left-[20%] md:bottom-20 md:h-14 md:w-12',
    color: 'from-blue-400/14 via-sky-300/8 to-transparent',
    duration: 10.4,
    delay: 0.8
  },
  {
    className: 'right-[18%] bottom-10 h-16 w-11 md:right-[22%] md:bottom-16 md:h-20 md:w-14',
    color: 'from-blue-200/16 via-blue-300/10 to-transparent',
    duration: 11.2,
    delay: 1.8
  },
  {
    className: 'left-1/2 top-1/2 h-12 w-8 -translate-x-1/2 md:h-16 md:w-10',
    color: 'from-sky-300/12 via-blue-200/6 to-transparent',
    duration: 9.8,
    delay: 2.2
  }
];

const navItems = [
  { label: 'บริการ', href: '#services' },
  { label: 'แพ็กเกจ', href: '#packages' },
  { label: 'ผลงาน', href: '#portfolio' },
  { label: 'ทำไมต้องเรา', href: '#why-us' }
];

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    { icon: Building2, label: 'เว็บไซต์บริษัท' },
    { icon: Briefcase, label: 'เว็บไซต์องค์กร' },
    { icon: ShoppingCart, label: 'เว็บไซต์ขายของออนไลน์' },
    { icon: Utensils, label: 'เว็บไซต์ร้านอาหาร' },
    { icon: Hotel, label: 'เว็บไซต์โรงแรม' },
    { icon: Layout, label: 'Landing Page' },
    { icon: Palette, label: 'Portfolio' },
    { icon: Code, label: 'Web App' }
  ];

  const benefits = [
    { icon: Palette, title: 'ดีไซน์สวยและแตกต่าง', desc: 'ออกแบบให้โดดเด่นเหนือคู่แข่ง' },
    { icon: Smartphone, title: 'รองรับมือถือ', desc: 'ใช้งานได้ลื่นทุกอุปกรณ์' },
    { icon: Zap, title: 'โหลดไว', desc: 'เว็บไซต์เร็วและประสิทธิภาพสูง' },
    { icon: Search, title: 'SEO-Friendly', desc: 'เพิ่มโอกาสติดอันดับ Google' },
    { icon: Headphones, title: 'ดูแลต่อได้', desc: 'บริการหลังการขายครบวงจร' },
    { icon: Sparkles, title: 'ใช้งานง่าย', desc: 'ระบบจัดการเนื้อหาที่เข้าใจง่าย' }
  ];

  const desktopPortfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      title: 'Modern E-commerce Platform',
      category: 'เว็บไซต์ขายของออนไลน์'
    },
    {
      image: 'https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      title: 'Creative Design Studio',
      category: 'เว็บไซต์บริษัท'
    },
    {
      image: 'https://images.unsplash.com/photo-1770899621442-24237af4c8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
      title: 'Premium Corporate Site',
      category: 'เว็บไซต์องค์กร'
    }
  ];

  const mobilePortfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1648134859177-66e35b61e106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Brand Portfolio',
      category: 'Portfolio'
    },
    {
      image: 'https://images.unsplash.com/photo-1648134859175-78b41b4db186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Product Landing',
      category: 'Landing Page'
    },
    {
      image: 'https://images.unsplash.com/photo-1766128867499-549b5ad1f61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Restaurant Menu',
      category: 'เว็บไซต์ร้านอาหาร'
    }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-40">
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.55))] backdrop-blur-xl'
              : 'bg-transparent'
          }`}
        >
          <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6">
            <div className={`relative mx-auto max-w-7xl transition-all duration-300 ${isScrolled ? 'h-[70px]' : 'h-[84px]'}`}>
              <div className="flex h-full items-center justify-between">
              <a
                href="#home"
                className={`inline-flex min-w-0 items-center transition-all duration-300 ${isScrolled ? 'gap-0' : 'gap-3'}`}
                aria-label="LC Software Studio"
              >
                <div className={`relative overflow-hidden rounded-full transition-all duration-300 ${isScrolled ? 'h-11 w-11' : 'h-12 w-12 md:h-14 md:w-14'}`}>
                  <Image
                    src="/logo-clean.png"
                    alt="LC Software Studio"
                    fill
                    sizes="56px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div
                  className={`min-w-0 overflow-hidden transition-all duration-300 ${
                    isScrolled ? 'ml-0 max-w-0 opacity-0' : 'ml-0 max-w-[12rem] opacity-100'
                  }`}
                  aria-hidden={isScrolled}
                >
                  <div className={`truncate text-[0.62rem] font-semibold uppercase tracking-[0.32em] transition-colors duration-300 ${isScrolled ? 'text-slate-500' : 'text-slate-500/90'}`}>
                    LC Software
                  </div>
                  <div className="truncate text-sm font-semibold text-slate-900 md:text-base">
                    Studio
                  </div>
                </div>
              </a>

              <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative py-2 text-sm font-medium tracking-[0.015em] transition-all duration-300 after:absolute after:-bottom-[0.35rem] after:left-0 after:h-px after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 hover:text-slate-950 hover:after:scale-x-100 ${
                      isScrolled ? 'text-slate-600' : 'text-slate-700/95'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={() => setIsMenuOpen((open) => !open)}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 md:hidden ${
                  isScrolled
                    ? 'bg-slate-900 text-white shadow-[0_12px_24px_rgba(15,23,42,0.14)]'
                    : 'border border-slate-300/80 bg-white/80 text-slate-900 backdrop-blur-sm'
                }`}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              </div>
            </div>
          </div>

          {isMenuOpen ? (
            <div className="mx-auto max-w-[1440px] px-4 pb-3 md:hidden">
              <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-white/80 bg-white/92 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.1)] backdrop-blur-xl">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-36 pb-20 lg:pt-28 flex items-center justify-center overflow-hidden bg-white">
        {/* Soft Background Gradients */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-blue-50 to-white blur-3xl" />
          <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-50/80 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight uppercase">
              สร้างสรรค์
              <br />
              ประสบการณ์
              <br />
              ดิจิทัลที่เหนือระดับ
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              บริการออกแบบและจัดทำเว็บไซต์แบบ Visual-first ที่ผสานนวัตกรรม ศิลปะ และประสบการณ์ผู้ใช้ที่ยอดเยี่ยม เพื่อยกระดับแบรนด์ของคุณ
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-semibold text-[15px] hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center"
              >
                ดูผลงานของเรา
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-white text-slate-900 rounded-full font-semibold text-[15px] border border-slate-300 hover:border-slate-400 transition-colors flex items-center justify-center shadow-sm"
              >
                เริ่มต้นโปรเจกต์
              </motion.a>
            </div>
          </motion.div>

          {/* Right Mockups Content (Complex Layout) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full flex items-center justify-center mt-10 lg:mt-0"
          >
            {/* Background Blob Gradients for Right Side */}
            <div className="absolute top-1/4 -left-10 w-64 h-64 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-pink-400/20 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-10 right-20 w-64 h-64 bg-purple-400/20 blur-[80px] rounded-full pointer-events-none"></div>

            {/* 1. Floating Card: Selected Work Grid (Top Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -left-4 sm:-left-12 lg:-left-20 top-10 lg:top-16 z-10"
            >
              <div className="bg-gradient-to-br from-blue-200 via-white to-pink-200 p-[1px] rounded-2xl shadow-xl">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-3 sm:p-4 w-40 sm:w-48 lg:w-56">
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 mb-2 tracking-wider">SELECTED WORK</div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <div className="bg-slate-900 rounded-md h-12 sm:h-16 w-full flex items-center justify-center overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80" className="w-full h-full object-cover opacity-80" alt="Work" />
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded w-2/3 mt-1.5"></div>
                      <div className="h-1 bg-slate-100 rounded w-1/2 mt-1"></div>
                    </div>
                    <div>
                      <div className="bg-slate-100 border border-slate-200 rounded-md h-12 sm:h-16 w-full flex items-center justify-center overflow-hidden relative">
                         <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded w-3/4 mt-1.5"></div>
                      <div className="h-1 bg-slate-100 rounded w-1/3 mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Floating Card: Typography (Top Middle) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute right-0 sm:right-10 lg:right-20 -top-4 sm:-top-10 lg:-top-16 z-0"
            >
              <div className="bg-gradient-to-br from-pink-200 via-white to-purple-200 p-[1px] rounded-2xl shadow-lg">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-3 w-32 sm:w-40 lg:w-48">
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 mb-2 tracking-wider">SELECTED WORK</div>
                  <div className="flex justify-between items-start gap-2">
                    <div className="w-1/2 bg-slate-900 rounded-md h-16 sm:h-20 flex flex-col justify-center px-2">
                      <div className="text-white text-[10px] sm:text-xs font-bold leading-[1.1]">EX<br/>TYPOG<br/>REM</div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-1.5">
                      <div className="bg-slate-100 rounded-md h-8 sm:h-10 w-full"></div>
                      <div className="bg-slate-100 rounded-md h-6 sm:h-8 w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Floating Card: Services (Top Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute right-0 sm:right-0 lg:-right-4 xl:-right-12 top-20 sm:top-24 lg:top-32 z-20 hidden sm:block"
            >
              <div className="bg-white p-[1px] rounded-2xl shadow-xl border border-slate-100">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 w-32 sm:w-36 lg:w-40">
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 mb-3 tracking-wider">SERVICES</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800">Strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800">Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800">Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Laptop Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="relative z-10 w-[260px] sm:w-[400px] lg:w-[480px] xl:w-[540px] flex flex-col items-center mt-10"
            >
              {/* Screen Lid */}
              <div className="w-full bg-[#1a1a1a] p-1.5 sm:p-2 lg:p-3 pb-3 sm:pb-4 lg:pb-6 rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl border-t border-x border-slate-700 relative shadow-2xl">
                {/* Inner Screen content */}
                <div className="relative bg-slate-50 aspect-[16/10] overflow-hidden rounded-sm sm:rounded-md lg:rounded-lg cursor-ns-resize group">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1760008486593-a85315610136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Desktop View"
                    className="w-full h-full object-cover object-top"
                    initial={{ objectPosition: "50% 0%" }}
                    whileHover={{ objectPosition: "50% 100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                  {/* Subtle top bar for the browser inside */}
                  <div className="absolute top-0 inset-x-0 h-4 sm:h-5 lg:h-6 bg-white/80 backdrop-blur border-b border-slate-200 flex items-center px-2 gap-1.5 pointer-events-none">
                     <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-300" />
                     <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-300" />
                     <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-300" />
                  </div>
                </div>
              </div>
              {/* Base */}
              <div className="relative w-[110%] h-2.5 sm:h-3 lg:h-4 bg-gradient-to-b from-[#d1d5db] to-[#9ca3af] rounded-b-lg sm:rounded-b-2xl lg:rounded-b-3xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex justify-center">
                <div className="w-1/6 h-1 sm:h-1.5 bg-slate-600 rounded-b-md"></div>
              </div>
            </motion.div>

            {/* Mobile Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              className="absolute left-2 sm:-left-4 lg:left-0 bottom-10 lg:bottom-16 z-30 w-[80px] sm:w-[120px] lg:w-[140px]"
            >
              <div className="bg-[#1a1a1a] p-1 sm:p-1.5 lg:p-2 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] border border-slate-700 shadow-2xl relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-3 sm:h-4 lg:h-5 bg-[#1a1a1a] rounded-b-lg z-40"></div>
                <div className="relative aspect-[9/19] bg-slate-100 overflow-hidden rounded-[1.2rem] sm:rounded-[1.6rem] lg:rounded-[2.1rem] cursor-ns-resize group">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Mobile View"
                    className="w-full h-full object-cover object-top"
                    initial={{ objectPosition: "50% 0%" }}
                    whileHover={{ objectPosition: "50% 100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Client Feedback Badge (Middle Right) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute right-2 sm:right-0 lg:-right-6 xl:-right-16 top-[40%] sm:top-[45%] z-30"
            >
              <div className="bg-white rounded-xl p-2 sm:p-3 shadow-xl border border-blue-50/50 w-32 sm:w-40 lg:w-48">
                <div className="text-[7px] sm:text-[8px] font-bold text-blue-500 mb-1 tracking-wider">CLIENT FEEDBACK</div>
                <div className="text-[9px] sm:text-[11px] font-semibold text-slate-800 leading-tight mb-1">"Exceptional creative partner!"</div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>
            </motion.div>

            {/* 4. Floating Card: Design System (Bottom Right) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute right-4 sm:right-0 lg:-right-4 xl:-right-8 bottom-0 sm:bottom-4 lg:bottom-10 z-20"
            >
              <div className="bg-gradient-to-br from-cyan-200 via-pink-200 to-purple-200 p-[2px] rounded-2xl shadow-xl">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 sm:p-5 w-36 sm:w-44 lg:w-56">
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-500 mb-3 tracking-wider text-center">DESIGN SYSTEM</div>
                  
                  <div className="mb-3 sm:mb-4">
                    <div className="text-[9px] sm:text-[10px] text-slate-400 mb-1">Typography</div>
                    <div className="flex items-end gap-2 border-b border-slate-100 pb-2">
                      <span className="text-xl sm:text-2xl font-serif text-slate-800">Aa</span>
                      <span className="text-sm sm:text-base font-serif text-slate-400">/ Aa</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 mb-1.5">Palette</div>
                    <div className="flex justify-between gap-1">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded bg-slate-900 shadow-sm"></div>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded bg-slate-100 shadow-sm border border-slate-200"></div>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded bg-blue-500 shadow-sm"></div>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded bg-indigo-400 shadow-sm"></div>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded bg-pink-300 shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_55%)]" />
          {serviceBlobs.map((blob, index) => (
            <motion.div
              key={index}
              aria-hidden="true"
              className={`absolute rounded-[999px] bg-gradient-to-b blur-[1.5px] ${blob.className} ${blob.color}`}
              initial={
                shouldReduceMotion
                  ? { opacity: 0.08, y: 0, scale: 1 }
                  : { opacity: 0.08, y: -10, scale: 0.96 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 0.08 }
                  : {
                      y: [-10, 16, 2, -10],
                      x: [0, index % 2 === 0 ? -6 : 6, 0],
                      opacity: [0.08, 0.16, 0.1, 0.08],
                      scale: [0.96, 1.06, 1, 0.96]
                    }
              }
              transition={{
                duration: blob.duration,
                delay: blob.delay,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              บริการของเรา
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              รองรับทุกประเภทธุรกิจ ออกแบบตามความต้องการ
            </p>
          </motion.div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const entrance = serviceCardEntrances[index % serviceCardEntrances.length];

              return (
                <motion.div
                  key={service.label}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0, y: 18 }
                      : {
                          opacity: 0,
                          x: entrance.x,
                          y: entrance.y,
                          rotate: entrance.rotate,
                          scale: 0.96
                        }
                  }
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.34 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.45 : 0.86,
                    delay: 0.08 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ y: -8, scale: 1.02, rotate: 0.35 }}
                  className="group bg-white/92 backdrop-blur-sm rounded-2xl p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_60px_rgba(30,58,138,0.12)] transition-all cursor-pointer border border-slate-100 hover:border-blue-200 will-change-transform"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_16px_30px_rgba(37,99,235,0.22)]">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm md:text-base">
                    {service.label}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              แพ็กเกจของเรา
            </h2>
            <p className="text-lg text-slate-600">
              เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-200"
            >
              <div className="text-sm font-semibold text-blue-600 mb-2">STARTER</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">แพ็กเกจเริ่มต้น</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">฿XX,XXX</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>เหมาะสำหรับธุรกิจขนาดเล็ก</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>รองรับมือถือ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>SEO พื้นฐาน</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>ระบบจัดการเนื้อหา</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-full bg-slate-100 text-slate-900 font-semibold hover:bg-slate-200 transition-all">
                เลือกแพ็กเกจนี้
              </button>
            </motion.div>

            {/* Professional Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all border-2 border-blue-400 relative md:-mt-4"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full text-sm font-semibold text-blue-950">
                แนะนำ
              </div>
              <div className="text-sm font-semibold text-blue-300 mb-2">PROFESSIONAL</div>
              <h3 className="text-3xl font-bold text-white mb-2">แพ็กเกจมืออาชีพ</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">฿XX,XXX</span>
              </div>
              <ul className="space-y-3 mb-8 text-blue-100">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>เหมาะสำหรับธุรกิจขนาดกลาง</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>ฟีเจอร์ครบครัน</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>SEO ขั้นสูง</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>ระบบ Analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>ดูแล 6 เดือน</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-full bg-white text-blue-950 font-semibold hover:bg-blue-50 transition-all">
                เลือกแพ็กเกจนี้
              </button>
            </motion.div>

            {/* Enterprise Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-200"
            >
              <div className="text-sm font-semibold text-blue-600 mb-2">ENTERPRISE</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">แพ็กเกจองค์กร</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">฿XX,XXX</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>เหมาะสำหรับองค์กรขนาดใหญ่</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>ปรับแต่งได้ไม่จำกัด</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>ระบบความปลอดภัยสูง</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>API Integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>ดูแล 12 เดือน</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-full bg-slate-100 text-slate-900 font-semibold hover:bg-slate-200 transition-all">
                เลือกแพ็กเกจนี้
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section - Enhanced with Mockups */}
      <section id="portfolio" className="py-32 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
        
           

          {/* Desktop Mockups */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-3">
                Desktop Experience
              </h3>
              <p className="text-slate-600">
                เว็บไซต์ที่ออกแบบให้ประทับใจทุกหน้าจอ
              </p>
            </motion.div>

            <div className="space-y-24">
              {/* First two items in a row */}
              <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
                {desktopPortfolioItems.slice(0, 2).map((item, index) => (
                  <DesktopMockup
                    key={index}
                    image={item.image}
                    title={item.title}
                    category={item.category}
                  />
                ))}
              </div>

              {/* Third item centered */}
              {desktopPortfolioItems.length > 2 && (
                <div className="max-w-2xl mx-auto">
                  <DesktopMockup
                    image={desktopPortfolioItems[2].image}
                    title={desktopPortfolioItems[2].title}
                    category={desktopPortfolioItems[2].category}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-20">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full max-w-md" />
          </div>

          {/* Mobile Mockups */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-3">
                Mobile Experience
              </h3>
              <p className="text-slate-600">
                ใช้งานได้ลื่นไหลบนทุกอุปกรณ์
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
              {mobilePortfolioItems.map((item, index) => (
                <MobileMockup
                  key={index}
                  image={item.image}
                  title={item.title}
                  category={item.category}
                />
              ))}
            </div>
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-20"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-900 to-blue-950 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
            >
              ดูผลงานทั้งหมด
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              ทำไมต้องเลือกเรา
            </h2>
            <p className="text-lg text-slate-600">
              คุณสมบัติที่ทำให้เว็บไซต์ของคุณโดดเด่น
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="text-center p-8 rounded-2xl hover:bg-slate-50 transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">
                    {benefit.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            พร้อมมีเว็บไซต์ที่ดูดี
            <br />
            และน่าเชื่อถือ?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            เริ่มต้นออกแบบเว็บไซต์ของคุณวันนี้
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-blue-950 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/20 transition-all"
            >
              ดูแพ็กเกจ
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              ติดต่อสอบถาม
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © 2026  LC SOFTWARE STUDIO. All rights reserved.
          </p>
        </div>
      </footer>

      <FloatingContact />
    </div>
  );
}
