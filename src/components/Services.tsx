import { Card } from "@/components/ui/card";
import {
  Smile,
  ShieldCheck,
  Sparkles,
  AlignCenter,
  Users
} from "lucide-react";

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: "Dental Implants",
      description:
        "Restore missing teeth with durable, natural-looking dental implants. Regain chewing function, confidence, and a complete smile.",
      icon: Smile,
    },
    {
      id: 2,
      title: "Zirconia Crowns",
      description:
        "Strong, aesthetically pleasing zirconia crowns designed for long-lasting results and a natural appearance.",
      icon: ShieldCheck,
    },
    {
      id: 3,
      title: "PFM Crowns",
      description:
        "Reliable and durable PFM crowns that combine strength with a natural look, ideal for restoring damaged teeth.",
      icon: ShieldCheck,
    },
    {
      id: 4,
      title: "Removable Dentures",
      description:
        "Custom-made dentures for comfort, functionality, and a natural smile for patients with multiple missing teeth.",
      icon: Users,
    },
    {
      id: 5,
      title: "Whitening / Scaling & Polishing",
      description:
        "Professional whitening, cleaning, and polishing treatments to remove stains, plaque, and tartar, restoring a bright and healthy smile.",
      icon: Sparkles,
    },
    {
      id: 6,
      title: "Braces / Invisible Aligners",
      description:
        "Correct misaligned teeth with traditional braces or invisible aligners, offering effective results in a discreet and comfortable way.",
      icon: AlignCenter,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-teal-600 tracking-widest uppercase mb-3">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Care for Every Smile
          </h1>
          <p className="text-gray-700 text-lg">
            From implants to aligners, Al Fatah Dental Care provides trusted,
            expert dental solutions under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="p-8 bg-teal-500 hover:bg-gray-900 transition-all duration-300 text-white rounded-lg shadow-lg hover:shadow-xl"
              >
                <Icon className="w-12 h-12 mb-6 text-white" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed text-white/90">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}
