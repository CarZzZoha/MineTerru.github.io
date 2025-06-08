import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Users, Wrench } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const serverDetails = [
  { label: "IP адрес:", value: "play.mineterru.ru" },
  { label: "Порт:", value: "25565" },
  { label: "Версия:", value: "1.20.1 Forge" },
  { label: "Максимум игроков:", value: "150" },
  { label: "Регион:", value: "Европа (Россия)" },
];

const serverRules = [
  "Уважайте других игроков",
  "Запрещен гриферство и воровство", 
  "Не используйте читы и дюпы",
  "Соблюдайте адекватность в чате",
  "Слушайтесь администрацию",
];

const mods = [
  { name: "JEI (Just Enough Items)", description: "Просмотр рецептов и предметов" },
  { name: "Biomes O' Plenty", description: "Дополнительные биомы" },
  { name: "Tinkers' Construct", description: "Создание инструментов" },
  { name: "Applied Energistics 2", description: "Цифровое хранение" },
  { name: "Thermal Expansion", description: "Технические машины" },
  { name: "Waystones", description: "Телепортация между точками" },
];

export default function ServerInfo() {
  return (
    <div className="pt-16">
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            >
              Информация о сервере
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Узнайте всё о нашем сервере, его возможностях и правилах
            </motion.p>
          </motion.div>
          
          {/* Server Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
            >
              <Card className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground flex items-center gap-2">
                    <Wrench className="w-6 h-6 text-[hsl(187,85%,53%)]" />
                    Технические характеристики
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {serverDetails.map((detail, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-border/50 pb-2">
                        <span className="text-muted-foreground">{detail.label}</span>
                        <span className="text-[hsl(187,85%,53%)] font-mono font-semibold">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              initial="initial"
              animate="animate"
            >
              <Card className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[hsl(187,85%,53%)]" />
                    Правила сервера
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {serverRules.map((rule, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-[hsl(187,85%,53%)] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Mods Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center text-foreground flex items-center justify-center gap-2">
                  <Users className="w-6 h-6 text-[hsl(187,85%,53%)]" />
                  Установленные модификации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div 
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {mods.map((mod, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      className="bg-secondary/30 p-6 rounded-xl border border-border/50 hover:border-[hsl(187,85%,53%)]/40 transition-colors"
                    >
                      <h3 className="text-lg font-semibold mb-3 text-[hsl(187,85%,53%)]">{mod.name}</h3>
                      <p className="text-muted-foreground text-sm">{mod.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
