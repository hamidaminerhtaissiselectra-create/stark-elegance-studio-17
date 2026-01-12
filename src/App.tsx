import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Devis from "./pages/Devis";
import Zones from "./pages/Zones";
import ServiceAlarme from "./pages/services/Alarme";
import ServiceVideosurveillance from "./pages/services/Videosurveillance";
import ServiceTelesurveillance from "./pages/services/Telesurveillance";
import ServiceDepannage from "./pages/services/Depannage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/zones" element={<Zones />} />
          <Route path="/services/alarme" element={<ServiceAlarme />} />
          <Route path="/services/videosurveillance" element={<ServiceVideosurveillance />} />
          <Route path="/services/telesurveillance" element={<ServiceTelesurveillance />} />
          <Route path="/services/depannage" element={<ServiceDepannage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
