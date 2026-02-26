import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 section-padding mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Terms of Service – <span className="text-gradient">3D Anbu Dental Diagnostics LLP</span>
        </h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>By contacting 3D Anbu Dental Diagnostics LLP through WhatsApp, you agree to communicate for appointment scheduling, scan updates, and related dental services.</p>
          <p>We reserve the right to respond or decline service requests that are not related to our services.</p>
          <p>
            For questions, contact:{" "}
            <a href="mailto:3danbudentalscansramnadu2@gmail.com" className="text-primary hover:underline font-medium">
              3danbudentalscansramnadu2@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
