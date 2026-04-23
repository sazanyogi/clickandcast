"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  const whatsappManager = "https://wa.me/1XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20Click%20%26%20Cast%20services.";

  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for New Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your next event, production, or digital project. Quick-connect via
            WhatsApp or send us a message.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappManager}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#22c55e] transition-colors text-base"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors text-base"
            >
              Send a Message <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
