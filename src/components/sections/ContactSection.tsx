"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  const t = useTranslations("Index");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: t("contact.cta.email"),
      href: "mailto:douglas.skd@gmail.com",
      value: "douglas.skd@gmail.com",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Linkedin,
      label: t("contact.cta.linkedin"),
      href: "https://linkedin.com/in/douglas-pardim",
      value: "linkedin.com/in/douglas-pardim",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Github,
      label: t("contact.cta.github"),
      href: "https://github.com/DWRP",
      value: "github.com/DWRP",
      color: "from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100"
    }
  ];

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-28 lg:py-36 bg-muted/50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            {t("contact.subtitle")}
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-4">
            {t("contact.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-muted-foreground">
            <span>{t("contact.location")}</span>
            <span>{t("contact.phone")}</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined}>
                    <Card className="h-full card-hover border-purple-500/20 shadow-lg group cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${link.color} mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold mb-2">{link.label}</h3>
                        <p className="text-sm text-muted-foreground break-all">
                          {link.value}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Card */}
          <motion.div
            {...fadeInUp}
          >
            <Card className="border-purple-500/20 shadow-xl overflow-hidden">
              <div className="h-2 gradient-primary" />
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <div className="inline-flex p-4 rounded-full gradient-primary mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Pronto para começar um projeto?
                  </h3>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Entre em contato comigo através do email ou redes sociais. Vamos conversar sobre como posso ajudar no seu projeto!
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <Link href="mailto:douglas.skd@gmail.com">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-xl"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        {t("contact.cta.email")}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/Douglas Pardim - CV 2025.pdf" target="_blank">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-purple-500/50 hover:border-purple-500 font-semibold"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {t("contact.cta.cv")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

