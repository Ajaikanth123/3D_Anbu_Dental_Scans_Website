import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Advanced CBCT dental imaging scanner at 3D Anbu Dental Diagnostics LLP"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl section-padding min-h-[90vh] flex items-center">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90 backdrop-blur-sm mb-6">
              Trusted Dental Diagnostic Partner
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
            Precision 3D Dental
            <span className="block mt-1" style={{ color: "hsl(172, 66%, 55%)" }}>
              Imaging You Can Trust
            </span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 text-lg sm:text-xl leading-relaxed text-primary-foreground/80 max-w-xl">
            CBCT, 3D SCANS, OPG-CEPH, 2D RADIOGRAPHS - A Complete Maxillofacial Diagnostic Centre.
            Trusted by 500+ dental professionals across Tamil Nadu.
          </p>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+914272333600"
              className="gradient-primary inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Book Appointment
            </a>
            <a
              href="https://wa.me/919363917575"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-8 py-4 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <div className="animate-fade-up-delay-3 mt-8 flex items-center gap-6 text-sm text-primary-foreground/60">
            <span>✓ Same-Day Reports</span>
            <span>✓ Digital Delivery</span>
            <span>✓ 4 Branches</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
