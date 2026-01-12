import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Videosurveillance from "./pages/services/Videosurveillance";
import Alarme from "./pages/services/Alarme";
import ControleAcces from "./pages/services/ControleAcces";
import Reseau from "./pages/services/Reseau";
import Domotique from "./pages/services/Domotique";
import Maintenance from "./pages/services/Maintenance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/services/videosurveillance" element={<Videosurveillance />} />
          <Route path="/services/alarme" element={<Alarme />} />
          <Route path="/services/controle-acces" element={<ControleAcces />} />
          <Route path="/services/reseau" element={<Reseau />} />
          <Route path="/services/domotique" element={<Domotique />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
