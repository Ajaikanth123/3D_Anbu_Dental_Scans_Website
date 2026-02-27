import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 section-padding mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Privacy Policy – <span className="text-gradient">3D Anbu Dental Diagnostics LLP</span>
        </h1>
        <p className="text-sm text-muted-foreground mb-10">Effective Date: 21 February 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p>3D Anbu Dental Diagnostics LLP ("we", "our", "us") provides dental imaging and 3D dental scan services to clinics and patients.</p>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p className="mb-3">We may collect:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Name</li>
              <li>Phone number</li>
              <li>Appointment details</li>
              <li>Dental scan references</li>
              <li>Messages sent through WhatsApp</li>
            </ul>
            <p className="mt-3">We may also collect basic technical information such as device or usage information when required for service delivery.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. How We Use Information</h2>
            <p className="mb-3">We use the collected information to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Schedule appointments</li>
              <li>Provide scan updates</li>
              <li>Deliver reports</li>
              <li>Respond to inquiries</li>
              <li>Provide customer support</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Data Storage and Security</h2>
            <p>We take reasonable steps to protect personal information and restrict access to authorized personnel only.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. Data Deletion</h2>
            <p>Users may request deletion of their data by emailing:</p>
            <p className="mt-2">
              <a href="mailto:3danbudentalscansramnadu2@gmail.com" className="text-primary hover:underline font-medium">
                3danbudentalscansramnadu2@gmail.com
              </a>
            </p>
            <p className="mt-2">Subject line: <span className="font-semibold text-foreground">"Data Deletion Request"</span></p>
            <p className="mt-2">Requests will be processed within <span className="font-semibold text-foreground">7 business days</span>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Contact Information</h2>
            <p className="mb-4">For privacy-related questions, contact:</p>
            <p className="mt-2">
              <a href="mailto:3danbudentalscansramnadu2@gmail.com" className="text-primary hover:underline font-medium">
                3danbudentalscansramnadu2@gmail.com
              </a>
            </p>
            
            <div className="mt-6 space-y-4 text-sm">
              <h3 className="font-semibold text-foreground">Our Branches:</h3>
              
              <div>
                <p className="font-medium text-foreground">Branch 1 – Salem</p>
                <p>14, L.I.C. Colony, Opp. New Bus Stand, Hotel Vasantham Road, Salem - 636 004</p>
                <p>Phone: 0427-4506600 / 75983 33600</p>
                <p>Email: <a href="mailto:anbudentalscans@gmail.com" className="text-primary hover:underline">anbudentalscans@gmail.com</a></p>
              </div>
              
              <div>
                <p className="font-medium text-foreground">Branch 2 – Gugai, Salem</p>
                <p>Door No.474/157A, Trichy Main Road, Opp. Saradha Medical, Near Jojo Momos, Gugai, Salem - 636 006</p>
                <p>Phone: 0427-4510197 / 93639 17575</p>
              </div>
              
              <div>
                <p className="font-medium text-foreground">Branch 3 – Ramanathapuram</p>
                <p>Door No.1/23, Marudhupandiyar Nagar, Bharathi Nagar, Ramanathapuram - 623 503</p>
                <p>Phone: 04567-314044 / 93604 21853</p>
                <p>Email: <a href="mailto:3danbudentalscansramnadu@gmail.com" className="text-primary hover:underline">3danbudentalscansramnadu@gmail.com</a></p>
              </div>
              
              <div>
                <p className="font-medium text-foreground">Branch 4 – Hosur</p>
                <p>12/9 GRM Complex, Underground, Backside to Abi Fashions, Opp. CSI Church, Shanthi Nagar, Hosur - 635109</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
