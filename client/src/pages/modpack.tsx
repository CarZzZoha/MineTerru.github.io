import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Shield, Settings, Check, Cpu, HardDrive, MemoryStick, Monitor } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { Download as DownloadType } from "@shared/schema";

const tools = [
  {
    title: "Server Status Checker",
    description: "Проверка доступности сервера",
    buttonText: "Проверить сервер"
  },
  {
    title: "Mod Compatibility Check", 
    description: "Проверка совместимости модов",
    buttonText: "Проверить моды"
  },
  {
    title: "Connection Tester",
    description: "Тест подключения к серверу", 
    buttonText: "Тест соединения"
  }
];

const minRequirements = [
  { icon: Cpu, label: "Intel Core i3 / AMD FX-6100" },
  { icon: MemoryStick, label: "4 GB RAM" },
  { icon: HardDrive, label: "2 GB свободного места" },
  { icon: Settings, label: "Java 17 или выше" }
];

const recommendedRequirements = [
  { icon: Cpu, label: "Intel Core i5 / AMD Ryzen 5" },
  { icon: MemoryStick, label: "8 GB RAM" },
  { icon: HardDrive, label: "4 GB свободного места" },
  { icon: Monitor, label: "Dedicated GPU" }
];

const installSteps = [
  { step: 1, title: "Скачайте", description: "Загрузите лаунчер или modpack по ссылкам выше" },
  { step: 2, title: "Установите", description: "Запустите установщик и следуйте инструкциям" },
  { step: 3, title: "Настройте", description: "Укажите IP сервера и войдите в игру" },
  { step: 4, title: "Играйте", description: "Наслаждайтесь игрой на сервере MineTerru" }
];

export default function Modpack() {
  const queryClient = useQueryClient();
  
  const { data: downloads = [], isLoading } = useQuery<DownloadType[]>({
    queryKey: ["/api/downloads"],
  });

  const incrementDownloadMutation = useMutation({
    mutationFn: (downloadId: number) =>
      apiRequest(`/api/downloads/${downloadId}/increment`, {
        method: "POST",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/downloads"] });
    },
  });

  const handleDownload = (downloadId: number, downloadUrl: string) => {
    incrementDownloadMutation.mutate(downloadId);
    window.open(downloadUrl, '_blank');
  };

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
              Сборка и программы
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Все необходимое для комфортной игры на нашем сервере
            </motion.p>
          </motion.div>

          {/* Download Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="mb-12"
          >
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center text-foreground">
                  Скачать клиент сервера
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-8">
                    <div className="text-muted-foreground">Загрузка файлов...</div>
                  </div>
                ) : downloads.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-muted-foreground">Файлы для скачивания скоро появятся</div>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-2 gap-8">
                    {downloads.map((download, index) => (
                      <motion.div
                        key={download.id}
                        variants={fadeInUp}
                        transition={{ delay: index * 0.2 }}
                        className="text-center"
                      >
                        <div className="bg-secondary/50 p-8 rounded-xl mb-6 border border-border/50 hover:border-[hsl(187,85%,53%)]/40 transition-colors">
                          <Download className="w-12 h-12 text-[hsl(187,85%,53%)] mx-auto mb-4" />
                          <h3 className="text-xl font-semibold mb-4 text-foreground">{download.name}</h3>
                          <p className="text-muted-foreground mb-6">{download.description}</p>
                          <div className="space-y-2 text-sm text-muted-foreground mb-6">
                            {download.fileSize && (
                              <div>Размер: <span className="text-[hsl(187,85%,53%)]">{download.fileSize}</span></div>
                            )}
                            <div>Версия: <span className="text-[hsl(187,85%,53%)]">{download.version}</span></div>
                            <div>Скачиваний: <span className="text-[hsl(187,85%,53%)]">{download.downloadCount}</span></div>
                          </div>
                          <Button 
                            className="bg-gradient-to-r from-[hsl(187,85%,53%)] to-[hsl(199,89%,48%)] hover:from-[hsl(185,96%,67%)] hover:to-[hsl(217,91%,60%)] text-white"
                            onClick={() => handleDownload(download.id, download.downloadUrl)}
                            disabled={incrementDownloadMutation.isPending}
                          >
                            Скачать {download.name}
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
          
          {/* System Requirements and Tools */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
            >
              <Card className="card-gradient border-border h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">Системные требования</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[hsl(187,85%,53%)] mb-3">Минимальные</h3>
                      <ul className="space-y-2">
                        {minRequirements.map((req, index) => (
                          <li key={index} className="flex items-center space-x-2 text-muted-foreground">
                            <req.icon className="w-4 h-4 text-[hsl(187,85%,53%)]" />
                            <span>{req.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[hsl(187,85%,53%)] mb-3">Рекомендуемые</h3>
                      <ul className="space-y-2">
                        {recommendedRequirements.map((req, index) => (
                          <li key={index} className="flex items-center space-x-2 text-muted-foreground">
                            <req.icon className="w-4 h-4 text-[hsl(187,85%,53%)]" />
                            <span>{req.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              initial="initial"
              animate="animate"
            >
              <Card className="card-gradient border-border h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[hsl(187,85%,53%)]" />
                    Программы для проверки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tools.map((tool, index) => (
                      <div key={index} className="bg-secondary/50 p-4 rounded-lg border border-border/50">
                        <h3 className="font-semibold text-[hsl(187,85%,53%)] mb-2">{tool.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="border-[hsl(187,85%,53%)]/20 text-[hsl(187,85%,53%)] hover:bg-[hsl(187,85%,53%)]/10"
                        >
                          {tool.buttonText}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Installation Guide */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center text-foreground">
                  Инструкция по установке
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div 
                  variants={staggerContainer}
                  className="grid md:grid-cols-4 gap-6"
                >
                  {installSteps.map((step, index) => (
                    <motion.div key={index} variants={fadeInUp} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[hsl(187,85%,53%)] to-[hsl(199,89%,48%)] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold text-white">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
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
