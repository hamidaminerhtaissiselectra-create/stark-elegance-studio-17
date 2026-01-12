import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import GlobalFloatingCTA from "./components/GlobalFloatingCTA";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import LegalPage from "./pages/LegalPage";
import ZonesIntervention from "./pages/ZonesIntervention";
import CityPage from "./pages/villes/CityPage";
import RegionPage from "./pages/regions/RegionPage";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import ServicesHub from "./pages/ServicesHub";
import { Navigate } from "react-router-dom";
import Videosurveillance from "./pages/services/Videosurveillance";
import Alarme from "./pages/services/Alarme";
import ControleAcces from "./pages/services/ControleAcces";
import Reseau from "./pages/services/Reseau";
import Domotique from "./pages/services/Domotique";
import Maintenance from "./pages/services/Maintenance";
import AntenneSatellite from "./pages/services/AntenneSatellite";
import PortailsParking from "./pages/services/PortailsParking";
import Installation from "./pages/services/Installation";
import Depannage from "./pages/services/Depannage";
import Location from "./pages/services/Location";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <GlobalFloatingCTA />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          
          {/* Hub géographique - Niveau 2 (Page Pivot Nationale SEO) */}
          <Route path="/zones-intervention" element={<ZonesIntervention />} />
          
          {/* Redirection legacy /regions vers /zones-intervention */}
          <Route path="/regions" element={<Navigate to="/zones-intervention" replace />} />
          
          {/* Pages régions - Niveau 3 */}
          <Route path="/zones-intervention/:regionSlug" element={<RegionPage />} />
          
          {/* Legacy redirect pour anciennes URLs /regions/:slug */}
          <Route path="/regions/:regionSlug" element={<RegionPage />} />
          
          {/* Pages villes - Niveau 4 */}
          <Route path="/villes/:citySlug" element={<CityPage />} />
          
          {/* Page Hub Services - Niveau 1 (Page Pivot) */}
          <Route path="/services" element={<ServicesHub />} />
          
          {/* Pages services individuelles - Niveau 2 */}
          <Route path="/services/videosurveillance" element={<Videosurveillance />} />
          <Route path="/services/alarme" element={<Alarme />} />
          <Route path="/services/controle-acces" element={<ControleAcces />} />
          <Route path="/services/reseau" element={<Reseau />} />
          <Route path="/services/domotique" element={<Domotique />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/services/antenne-satellite" element={<AntenneSatellite />} />
          <Route path="/services/portails-parking" element={<PortailsParking />} />
          <Route path="/services/installation" element={<Installation />} />
          <Route path="/services/depannage" element={<Depannage />} />
          <Route path="/services/location" element={<Location />} />
          
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          
          {/* Pages légales */}
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/politique-confidentialite" element={<LegalPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
