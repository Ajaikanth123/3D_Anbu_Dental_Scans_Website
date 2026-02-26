import { Phone, MessageCircle, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl text-center">
        <div className="card-medical gradient-primary border-0 py-12 sm:py-16 px-6 sm:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            Ready to Schedule a Scan?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Whether you're a dentist referring a patient or a patient needing diagnostics, we're here to help. Reach out today.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+914272333600"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-base font-semibold text-foreground shadow-lg transition-transform hover:scale-105 w-full sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              Call: 0427 233 3600
            </a>
            <a
              href="https://wa.me/919363917575"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href="mailto:info@3danbuscan.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 w-full sm:w-auto"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
