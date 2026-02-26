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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataDeletion;
