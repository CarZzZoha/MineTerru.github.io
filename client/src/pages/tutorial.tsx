import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const tutorialSteps = [
  {
    step: 1,
    title: "Регистрация",
    description: "Зарегистрируйтесь в нашем Discord сервере и получите разрешение на игру от администрации."
  },
  {
    step: 2,
    title: "Установка клиента", 
    description: "Скачайте и установите modpack с нашего сайта. Убедитесь, что у вас установлена Java 17."
  },
  {
    step: 3,
    title: "Первое подключение",
    description: "Добавьте наш сервер в список серверов Minecraft и подключитесь к игре."
  },
  {
    step: 4,
    title: "Знакомство с игроками",
    description: "Познакомьтесь с другими игроками, изучите основные команды и правила сервера."
  },
  {
    step: 5,
    title: "Изучение модов",
    description: "Используйте JEI для изучения рецептов и возможностей установленных модификаций."
  },
  {
    step: 6,
    title: "Начало игры",
    description: "Найдите подходящее место для базы и начните свое приключение в мире MineTerru!"
  }
];

const faqItems = [
  {
    question: "Можно ли играть с друзьями?",
    answer: "Да! Вы можете пригласить друзей на сервер через Discord. Убедитесь, что они также установили наш modpack."
  },
  {
    question: "Что делать, если игра тормозит?",
    answer: "Выделите больше RAM для игры (рекомендуется 6-8 GB), установите Optifine и понизьте настройки графики."
  },
  {
    question: "Как получить помощь?",
    answer: "Обратитесь к администрации в Discord или используйте команду /help в игре для получения списка доступных команд."
  },
  {
    question: "Нужно ли покупать Minecraft?",
    answer: "Да, для игры на сервере необходима лицензионная копия Minecraft Java Edition."
  },
  {
    question: "Есть ли возрастные ограничения?",
    answer: "Рекомендуемый возраст 13+. Игроки младше должны играть под присмотром родителей."
  },
  {
    question: "Как попасть на сервер?",
    answer: "Сервер является приватным. Для получения доступа свяжитесь с администрацией через Discord."
  }
];

export default function Tutorial() {
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
              Как начать играть
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Пошаговое руководство для новых игроков
            </motion.p>
          </motion.div>
          
          {/* Video Tutorial */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="mb-16"
          >
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center text-foreground">
                  Видео-руководство
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-w-4xl mx-auto">
                  <div className="relative aspect-video bg-secondary/50 rounded-xl overflow-hidden border border-border/50">
                    <img
                      src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675"
                      alt="Gaming tutorial video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Button
                        size="lg"
                        className="w-20 h-20 rounded-full bg-[hsl(187,85%,53%)] hover:bg-[hsl(199,89%,48%)] p-0"
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded-lg">
                      <span className="text-white text-sm">15:30</span>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Полное руководство для новичков
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Узнайте, как подключиться к серверу, основы выживания и взаимодействие с модами
                    </p>
                    <Button
                      asChild
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      <a 
                        href="https://youtube.com/watch?v=your-tutorial-video" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <FaYoutube className="w-5 h-5" />
                        <span>Смотреть на YouTube</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Step by step guide */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              {tutorialSteps.slice(0, 3).map((step, index) => (
                <motion.div key={index} variants={fadeInLeft}>
                  <Card className="card-gradient border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[hsl(187,85%,53%)] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              {tutorialSteps.slice(3).map((step, index) => (
                <motion.div key={index + 3} variants={fadeInRight}>
                  <Card className="card-gradient border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[hsl(187,85%,53%)] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Часто задаваемые вопросы
              </h2>
              <p className="text-muted-foreground">
                Ответы на популярные вопросы от новых игроков
              </p>
            </div>
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
            >
              {faqItems.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="card-gradient border-border h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-[hsl(187,85%,53%)] mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
