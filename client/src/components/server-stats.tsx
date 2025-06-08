import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useQuery } from "@tanstack/react-query";
import type { ServerStats } from "@shared/schema";

export function ServerStats() {
  const { data: serverStats, isLoading } = useQuery<ServerStats>({
    queryKey: ["/api/server-stats"],
  });

  const stats = [
    { 
      value: isLoading ? "..." : `${serverStats?.playersOnline || 0}/${serverStats?.maxPlayers || 150}`,
      label: "Игроков онлайн"
    },
    { 
      value: isLoading ? "..." : serverStats?.version || "1.20.1",
      label: "Версия сервера"
    },
    { 
      value: isLoading ? "..." : serverStats?.uptime || "0 days",
      label: "Время работы"
    },
    { 
      value: "99.9%",
      label: "Время безотказной работы"
    },
  ];

  return (
    <section className="py-20 bg-secondary/50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-background/50 border-border text-center hover:border-[hsl(187,85%,53%)]/40 transition-colors">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[hsl(187,85%,53%)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
