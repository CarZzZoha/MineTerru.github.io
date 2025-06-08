import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gamepad2, ChevronDown } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { fadeInUp, scaleIn, pulseGlow } from "@/lib/animations";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div {...scaleIn} className="mb-8">
          <motion.div 
            {...pulseGlow}
            className="w-auto h-32 mx-auto flex items-center justify-center mb-6"
          >
            <img 
              src="@assets/logo_1749396365843.png" 
              alt="MineTerru Logo" 
              className="h-24 w-auto"
            />
          </motion.div>
        </motion.div>
        
        <motion.h1 
          {...fadeInUp}
          className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
        >
          MineTerru
        </motion.h1>
        
        <motion.p 
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
        >
          Уникальный приватный сервер Minecraft<br />
          Создай свой мир, найди новых друзей
        </motion.p>
        
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[hsl(187,85%,53%)] to-[hsl(199,89%,48%)] hover:from-[hsl(185,96%,67%)] hover:to-[hsl(217,91%,60%)] text-white font-semibold px-8 py-6 text-lg"
          >
            <a 
              href="https://discord.gg/mineterru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaDiscord className="w-5 h-5" />
              <span>Присоединиться к Discord</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onGetStarted}
            className="border-[hsl(187,85%,53%)] text-[hsl(187,85%,53%)] hover:bg-[hsl(187,85%,53%)] hover:text-background px-8 py-6 text-lg"
          >
            Узнать больше
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-[hsl(187,85%,53%)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
