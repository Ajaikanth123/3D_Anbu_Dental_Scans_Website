import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Implantologist, Salem",
    quote:
      "The CBCT scans from 3D Anbu are incredibly detailed. Their fast turnaround helps me plan implant surgeries with confidence. Highly recommended for any dental professional.",
    rating: 5,
  },
  {
    name: "Dr. Priya Mohan",
    role: "Orthodontist, Salem",
    quote:
      "I've been referring patients here for over 3 years. The image quality is excellent, and the digital report delivery makes my workflow seamless.",
    rating: 5,
  },
  {
    name: "Suresh Babu",
    role: "Patient",
    quote:
      "Very professional and friendly staff. The scan was quick and painless. I received my report the same day on WhatsApp. Great experience!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding section-alt">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by Dental Professionals
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from the doctors and patients who trust us with their diagnostic imaging needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="card-medical flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                "{t.quote}"
              </blockquote>
              <div className="mt-5 pt-4 border-t border-border">
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
