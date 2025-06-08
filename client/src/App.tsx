import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingElements } from "@/components/floating-elements";

import Home from "@/pages/home";
import ServerInfo from "@/pages/server-info";
import Modpack from "@/pages/modpack";
import Tutorial from "@/pages/tutorial";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/server-info" component={ServerInfo} />
      <Route path="/modpack" component={Modpack} />
      <Route path="/tutorial" component={Tutorial} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
            <FloatingElements />
            <Navbar />
            <main className="relative z-10">
              <Router />
            </main>
            <Footer />
            <Toaster />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
