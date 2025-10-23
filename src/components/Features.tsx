export default function Features() {
    const features = [
      {
        icon: "🦷",
        title: "Trusted Dental Experts",
        description:
          "Our experienced dentists in Karachi deliver high-quality treatments with precision, care, and years of expertise.",
      },
      {
        icon: "⚙️",
        title: "Advanced Technology",
        description:
          "We use the latest dental equipment for accurate diagnosis, painless treatments, and lasting results.",
      },
      {
        icon: "😊",
        title: "Patient-Focused Care",
        description:
          "We prioritize your comfort and satisfaction through compassionate care and personalized treatment plans.",
      },
      {
        icon: "🏥",
        title: "Comprehensive Services",
        description:
          "From preventive checkups to cosmetic and restorative dentistry — all under one roof for all age groups.",
      },
    ];
  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" rounded-2xl p-8 bg-teal-600 text-accent-foreground"
            >
              <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center mb-6 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
