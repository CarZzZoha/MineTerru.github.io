import { HeroSection } from "@/components/hero-section";
import { ServerStats } from "@/components/server-stats";
import { FeaturesSection } from "@/components/features-section";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function CommunityShowcase() {
  const showcaseImages = [
    {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Замок Драконов",
      author: "by PlayerName"
    },
    {
      src: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Футуристический город",
      author: "by BuilderPro"
    },
    {
      src: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Средневековая деревня",
      author: "by CraftMaster"
    }
  ];

  return (
    <section className="py-20 bg-secondary/50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6 text-foreground">
            Наше сообщество
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Посмотрите на удивительные постройки наших игроков
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {showcaseImages.map((image, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group overflow-hidden hover:shadow-lg transition-shadow bg-background/50 border-border">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-lg font-semibold text-foreground">{image.title}</h4>
                      <p className="text-sm text-muted-foreground">{image.author}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-16">
      <HeroSection onGetStarted={scrollToFeatures} />
      <ServerStats />
      <div id="features">
        <FeaturesSection />
      </div>
      <CommunityShowcase />
    </div>
  );
}
