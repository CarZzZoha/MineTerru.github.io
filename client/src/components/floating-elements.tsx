import { motion } from "framer-motion";
import { floatingAnimation } from "@/lib/animations";

const floatingElements = [
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=120",
    alt: "Minecraft tree",
    className: "top-20 left-10 w-16 h-20",
    delay: 0
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=100",
    alt: "Minecraft spruce tree",
    className: "top-60 right-20 w-12 h-16",
    delay: 2
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=90&h=110",
    alt: "Mountain pine tree",
    className: "bottom-40 left-1/4 w-14 h-18",
    delay: 1
  },
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60",
    alt: "Minecraft block",
    className: "top-80 right-1/3 w-10 h-10",
    delay: 3
  },
  {
    src: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
    alt: "Diamond minecraft block",
    className: "bottom-20 right-10 w-8 h-8",
    delay: 0.5
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=70&h=70",
    alt: "Stone block",
    className: "top-1/2 left-3/4 w-12 h-12",
    delay: 4
  }
];

export function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {floatingElements.map((element, index) => (
        <motion.img
          key={index}
          src={element.src}
          alt={element.alt}
          className={`floating-element opacity-10 ${element.className}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.1,
            y: [-20, 20, -20],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: element.delay },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: element.delay }
          }}
        />
      ))}
    </div>
  );
}
