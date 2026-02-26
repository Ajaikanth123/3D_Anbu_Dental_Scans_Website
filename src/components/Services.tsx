import { ScanLine, Stethoscope, FileText, Clock } from "lucide-react";

const services = [
  {
    icon: ScanLine,
    title: "CBCT / 3D Imaging",
    description:
      "High-resolution Cone Beam CT scans for implant planning, root canal analysis, and jaw assessment with sub-millimeter accuracy.",
  },
  {
    icon: Stethoscope,
    title: "OPG-CEPH",
    description:
      "Panoramic and Cephalometric radiography for comprehensive orthodontic evaluation, treatment planning, and dental diagnostics.",
  },
  {
    icon: FileText,
    title: "2D Radiographs",
    description:
      "Complete range of 2D dental X-rays for routine diagnostics, cavity detection, and periodontal assessment.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Same-day reporting for most scans. Urgent cases prioritized to ensure your treatment planning stays on schedule.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Complete Maxillofacial Diagnostic Centre
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            CBCT, 3D Scans, OPG-CEPH, and 2D Radiographs - State-of-the-art imaging technology for accurate diagnosis and treatment planning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="card-medical text-center group">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
