import { Shield, Users, Lock, Heart } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Advanced Equipment",
    description: "Latest CBCT and CT technology for the highest image quality and lowest radiation dose.",
  },
  {
    icon: Users,
    title: "Expert Radiologists",
    description: "Experienced dental imaging specialists ensuring precise and reliable diagnostics.",
  },
  {
    icon: Lock,
    title: "Accurate & Secure",
    description: "DICOM-standard imaging with secure digital delivery and patient data privacy.",
  },
  {
    icon: Heart,
    title: "Patient-Friendly",
    description: "Comfortable, quick procedures with caring staff and minimal wait times.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding section-alt">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Your Trusted Diagnostic Partner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We combine cutting-edge technology with compassionate care to deliver diagnostics that dental professionals rely on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-5 card-medical">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                <reason.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
