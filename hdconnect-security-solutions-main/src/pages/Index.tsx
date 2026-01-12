import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientTypes from "@/components/ClientTypes";
import Testimonials from "@/components/Testimonials";
import CoverageArea from "@/components/CoverageArea";
import QuoteFunnelSimple from "@/components/QuoteFunnelSimple";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <ClientTypes />
        <Testimonials />
        <CoverageArea />
        <QuoteFunnelSimple />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;