import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Settings } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: Users,
    title: "Дружелюбное сообщество",
    description: "Присоединяйтесь к активному сообществу игроков, всегда готовых помочь новичкам"
  },
  {
    icon: Shield,
    title: "Защита от гриферов",
    description: "Современная система защиты территорий и строений от нежелательных действий"
  },
  {
    icon: Settings,
    title: "Уникальные моды",
    description: "Эксклюзивная сборка модов, создающая неповторимый игровой опыт"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            Особенности сервера
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Откройте для себя уникальные возможности нашего сервера
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-foreground">Почему выбирают нас?</h3>
            <motion.div 
              variants={staggerContainer}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-[hsl(187,85%,53%)] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Gaming setup"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>

        {/* Server Rules */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card className="card-gradient border-border">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-foreground">
                Правила сервера
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "🤝", title: "Уважение", description: "Относитесь с уважением ко всем участникам сообщества" },
                  { icon: "🚫", title: "Без читов", description: "Использование читов и эксплойтов строго запрещено" },
                  { icon: "🏠", title: "Стройте красиво", description: "Создавайте красивые постройки и уважайте труд других" }
                ].map((rule, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-4">{rule.icon}</div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{rule.title}</h4>
                    <p className="text-muted-foreground text-sm">{rule.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
