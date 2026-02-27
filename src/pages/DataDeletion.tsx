import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DataDeletion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 section-padding mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Data Deletion Policy – <span className="text-gradient">3D Anbu Dental Diagnostics LLP</span>
        </h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>If you wish to request deletion of your personal data, please send an email to:</p>
          <p>
            <a href="mailto:3danbudentalscansramnadu2@gmail.com" className="text-primary hover:underline font-medium text-lg">
              3danbudentalscansramnadu2@gmail.com
            </a>
          </p>
          <p>
            Subject line: <span className="font-semibold text-foreground">"Data Deletion Request"</span>
          </p>
          <p>We will process your request within <span className="font-semibold text-foreground">7 business days</span>.</p>
          
          <div className="mt-8 pt-8 border-t border-border space-y-4 text-sm">
            <h3 className="font-semibold text-foreground text-base">Contact Our Branches:</h3>
            
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataDeletion;
