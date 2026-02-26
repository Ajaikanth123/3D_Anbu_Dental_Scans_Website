import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary-foreground">
              3D Anbu Dental Diagnostics LLP
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
              CBCT, 3D SCANS, OPG-CEPH, 2D RADIOGRAPHS - A COMPLETE MAXILLOFACIAL DIAGNOSTIC CENTRE
            </p>
            <p className="mt-2 text-sm text-primary-foreground/60">
              Mail: <a href="mailto:anbudentalscans@gmail.com" className="hover:text-primary-foreground transition-colors">anbudentalscans@gmail.com</a>
            </p>
          </div>

          {/* Branches */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-primary-foreground mb-4">Our Branches</h4>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-teal-glow mt-0.5" />
                <div>
                  <div className="font-medium text-primary-foreground">Branch 1 – Salem</div>
                  <div className="text-primary-foreground/60">14, L.I.C. Colony, Opp. New Bus Stand, Hotel Vasantham Road, Salem - 636 004</div>
                  <div className="flex items-center gap-1.5 mt-1 text-primary-foreground/60">
                    <Phone className="h-3.5 w-3.5" /> 0427-4506600 / 75983 33600
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-teal-glow mt-0.5" />
                <div>
                  <div className="font-medium text-primary-foreground">Branch 2 – Gugai, Salem</div>
                  <div className="text-primary-foreground/60">Door No.474/157A, Trichy Main Road, Opp. Saradha Medical, Near Jojo Momos, Gugai, Salem - 636 006</div>
                  <div className="flex items-center gap-1.5 mt-1 text-primary-foreground/60">
                    <Phone className="h-3.5 w-3.5" /> 0427-4510197 / 93639 17575
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-teal-glow mt-0.5" />
                <div>
                  <div className="font-medium text-primary-foreground">Branch 3 – Ramanathapuram</div>
                  <div className="text-primary-foreground/60">Door No.1/23, Marudhupandiyar Nagar, Bharathi Nagar, Ramanathapuram - 623 503</div>
                  <div className="flex items-center gap-1.5 mt-1 text-primary-foreground/60">
                    <Phone className="h-3.5 w-3.5" /> 04567-314044 / 93604 21853
                  </div>
                  <div className="text-primary-foreground/60 text-xs mt-1">
                    Mail: <a href="mailto:3danbudentalscansramnadu@gmail.com" className="hover:text-primary-foreground transition-colors">3danbudentalscansramnadu@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-teal-glow mt-0.5" />
                <div>
                  <div className="font-medium text-primary-foreground">Branch 4 – Hosur</div>
                  <div className="text-primary-foreground/60">12/9 GRM Complex, Underground, Backside to Abi Fashions, Opp. CSI Church, Shanthi Nagar, Hosur - 635109</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Working Hours</h4>
            <div className="flex gap-3 text-sm">
              <Clock className="h-5 w-5 flex-shrink-0 text-teal-glow mt-0.5" />
              <div>
                <div className="text-primary-foreground/60">Monday – Saturday</div>
                <div className="font-medium text-primary-foreground">9:30 AM – 8:30 PM</div>
                <div className="text-primary-foreground/60 mt-2">Sunday</div>
                <div className="font-medium text-primary-foreground">By Appointment</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} 3D Anbu Dental Diagnostics LLP. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="/data-deletion" className="hover:text-primary-foreground transition-colors">Data Deletion</a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-primary-foreground/30">
          Medical Disclaimer: This website is for informational purposes only and does not constitute medical advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
