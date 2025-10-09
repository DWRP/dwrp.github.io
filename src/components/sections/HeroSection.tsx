"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  const t = useTranslations("Index");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-primary opacity-90 dark:opacity-80" />
      
      {/* Animated floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-8 text-center"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div className="space-y-4" variants={fadeInUp}>
            <motion.p 
              className="text-lg md:text-xl text-white/90 font-medium"
              variants={fadeInUp}
            >
              {t("hero.greeting")}
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
              variants={fadeInUp}
            >
              {t("hero.name")}
            </motion.h1>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/95"
              variants={fadeInUp}
            >
              {t("hero.title")}
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl"
              variants={fadeInUp}
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-white/80 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              {t("hero.description")}
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            variants={fadeInUp}
          >
            <Link href="#projects">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                {t("hero.cta.projects")}
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-purple-600 shadow-xl transition-all"
              >
                {t("hero.cta.contact")}
              </Button>
            </Link>
            <Link href="/Douglas Pardim - CV 2025.pdf" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-purple-600 shadow-xl transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("hero.cta.cv")}
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4"
            variants={fadeInUp}
          >
            <Link 
              href="https://github.com/DWRP" 
              target="_blank"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-purple-600 transition-all hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link 
              href="https://linkedin.com/in/douglas-pardim" 
              target="_blank"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-purple-600 transition-all hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link 
              href="mailto:douglas.skd@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-purple-600 transition-all hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-6 md:gap-12 pt-8"
            variants={fadeInUp}
          >
            {[
              { value: t("hero.stats.experience"), label: t("hero.stats.experienceLabel") },
              { value: t("hero.stats.projects"), label: t("hero.stats.projectsLabel") },
              { value: t("hero.stats.companies"), label: t("hero.stats.companiesLabel") }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator - Única seta no final */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => {
                const aboutSection = document.getElementById('about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDown className="h-8 w-8 text-white/70 hover:text-white transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

