import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessFlow from "@/components/ProcessFlow";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <Services />
        <section id="why-us">
          <WhyChooseUs />
        </section>
        <section id="process">
          <ProcessFlow />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
