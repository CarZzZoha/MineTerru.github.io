import { Link } from "wouter";
import { Gamepad2 } from "lucide-react";
import { FaDiscord, FaYoutube, FaTelegram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[hsl(187,85%,53%)] to-[hsl(199,89%,48%)] rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">
                MineTerru
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Уникальный приватный сервер Minecraft с дружелюбным сообществом и интересными модами.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://discord.gg/mineterru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[hsl(187,85%,53%)] transition-colors"
              >
                <FaDiscord className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@mineterru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[hsl(187,85%,53%)] transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/mineterru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[hsl(187,85%,53%)] transition-colors"
              >
                <FaTelegram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Быстрые ссылки</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/" className="hover:text-[hsl(187,85%,53%)] transition-colors">Главная</Link></li>
              <li><Link href="/server-info" className="hover:text-[hsl(187,85%,53%)] transition-colors">О сервере</Link></li>
              <li><Link href="/modpack" className="hover:text-[hsl(187,85%,53%)] transition-colors">Сборка</Link></li>
              <li><Link href="/tutorial" className="hover:text-[hsl(187,85%,53%)] transition-colors">Как играть</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Поддержка</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-[hsl(187,85%,53%)] transition-colors">Правила сервера</a></li>
              <li><a href="#" className="hover:text-[hsl(187,85%,53%)] transition-colors">Техподдержка</a></li>
              <li><a href="#" className="hover:text-[hsl(187,85%,53%)] transition-colors">Баг-репорты</a></li>
              <li><a href="#" className="hover:text-[hsl(187,85%,53%)] transition-colors">Донат</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 MineTerru. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
