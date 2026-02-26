import { CalendarCheck, ScanLine, FileCheck } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book or Refer",
    description: "Schedule an appointment or refer a patient through call, WhatsApp, or walk-in.",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Scan & Diagnose",
    description: "Quick, comfortable 3D imaging with our advanced CBCT scanner at either branch.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Receive Report",
    description: "Get digital reports delivered same-day via email or WhatsApp for immediate treatment planning.",
  },
];

const ProcessFlow = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Simple 3-Step Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From appointment to report delivery, we make diagnostics effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-primary/20" />
              )}
              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent text-primary">
                <s.icon className="h-8 w-8" />
                <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full gradient-primary text-xs font-bold text-primary-foreground">
                  {s.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xs mx-auto">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
