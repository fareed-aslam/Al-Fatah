"use client";

import { useState } from "react";
import { ChevronRight, X, CheckCircle2 } from "lucide-react";

type ServiceId =
  | "dental-implants"
  | "zirconia-crowns"
  | "teeth-whitening"
  | "braces-aligners"
  | "root-canal"
  | "scaling-polishing";

interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

interface ServiceData {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  processTitle: string;
  processDescription: string;
  steps: ServiceStep[];
}

const servicesData: Record<ServiceId, ServiceData> = {
  "dental-implants": {
    title: "Dental Implant Treatment",
    description:
      "At Al Fatah Dental Care, we specialize in restoring smiles through advanced dental implant treatments. Whether you're missing one tooth or several, our expert dentists provide durable, natural-looking implants that feel and function just like real teeth — helping you eat, speak, and smile with full confidence.",
    image: "/dental-implant-procedure.jpg",
    imageAlt: "Dental Implant Procedure at Al Fatah Dental Care",
    processTitle: "Our Simple Implant Process",
    processDescription:
      "Our treatment process ensures maximum comfort, safety, and precision at every stage — giving you a healthy, confident smile that lasts a lifetime.",
    steps: [
      {
        number: "01",
        title: "Consultation & Examination",
        description:
          "We begin with a full dental assessment and X-rays to evaluate your oral health and plan your personalized implant treatment.",
      },
      {
        number: "02",
        title: "Implant Placement",
        description:
          "Our specialists place a titanium implant into the jawbone under local anesthesia, ensuring precision and minimal discomfort.",
      },
      {
        number: "03",
        title: "Crown Placement",
        description:
          "Once healing is complete, a custom-made crown is attached to the implant, perfectly matching your natural teeth in color and shape.",
      },
    ],
  },
  "zirconia-crowns": {
    title: "Zirconia Crown Treatment",
    description:
      "At Al Fatah Dental Care, we offer premium zirconia crowns that combine exceptional strength with natural aesthetics. These metal-free restorations are designed to restore damaged or weakened teeth while maintaining a beautiful, translucent appearance that blends seamlessly with your natural smile.",
    image: "/zirconia-crowns.jpg",
    imageAlt: "Zirconia Crown Treatment at Al Fatah Dental Care",
    processTitle: "Our Crown Placement Process",
    processDescription:
      "We use advanced digital technology and precision craftsmanship to create custom crowns that fit perfectly and last for years.",
    steps: [
      {
        number: "01",
        title: "Tooth Preparation",
        description:
          "We carefully prepare the tooth by removing any decay and shaping it to receive the crown, ensuring optimal fit and function.",
      },
      {
        number: "02",
        title: "Digital Impression",
        description:
          "Using advanced 3D scanning technology, we create precise digital impressions for your custom zirconia crown.",
      },
      {
        number: "03",
        title: "Crown Fitting",
        description:
          "Your custom-made zirconia crown is expertly fitted and bonded to your tooth, restoring both strength and beauty.",
      },
    ],
  },
  "teeth-whitening": {
    title: "Professional Teeth Whitening",
    description:
      "At Al Fatah Dental Care, we help you achieve a brighter, more confident smile with our professional teeth whitening treatments. Using safe, effective techniques, we can lighten your teeth by several shades in just one visit, removing years of stains from coffee, tea, wine, and aging.",
    image: "/teeth-whitening.jpg",
    imageAlt: "Teeth Whitening Treatment at Al Fatah Dental Care",
    processTitle: "Our Whitening Process",
    processDescription:
      "Our professional whitening system delivers dramatic results while protecting your tooth enamel and gum health.",
    steps: [
      {
        number: "01",
        title: "Consultation & Shade Assessment",
        description:
          "We evaluate your current tooth shade and discuss your whitening goals to create a customized treatment plan.",
      },
      {
        number: "02",
        title: "Professional Whitening",
        description:
          "We apply a professional-grade whitening gel and use advanced LED technology to activate the whitening process safely.",
      },
      {
        number: "03",
        title: "Results & Maintenance",
        description:
          "You'll see immediate results with teeth several shades whiter. We provide guidance on maintaining your bright smile.",
      },
    ],
  },
  "braces-aligners": {
    title: "Braces & Clear Aligners",
    description:
      "At Al Fatah Dental Care, we offer comprehensive orthodontic solutions including traditional braces and modern clear aligners. Whether you're dealing with crowded teeth, gaps, or bite issues, our experienced orthodontists will create a personalized treatment plan to give you the straight, healthy smile you deserve.",
    image: "/braces-aligners.jpg",
    imageAlt: "Braces and Aligners Treatment at Al Fatah Dental Care",
    processTitle: "Your Orthodontic Journey",
    processDescription:
      "We guide you through every step of your orthodontic treatment with regular monitoring and adjustments for optimal results.",
    steps: [
      {
        number: "01",
        title: "Orthodontic Assessment",
        description:
          "We perform a comprehensive evaluation including X-rays and 3D scans to analyze your teeth alignment and create your treatment plan.",
      },
      {
        number: "02",
        title: "Treatment Application",
        description:
          "Your custom braces or aligners are fitted with precision. We ensure comfort and provide detailed care instructions.",
      },
      {
        number: "03",
        title: "Progress Monitoring",
        description:
          "Regular check-ups allow us to track your progress and make necessary adjustments for the best possible outcome.",
      },
    ],
  },
  "root-canal": {
    title: "Root Canal Treatment",
    description:
      "At Al Fatah Dental Care, we provide gentle, effective root canal treatments that save infected teeth and eliminate pain. Using modern techniques and advanced technology, our specialists can preserve your natural tooth while removing infection and restoring your oral health comfortably.",
    image: "/root-canal.jpg",
    imageAlt: "Root Canal Treatment at Al Fatah Dental Care",
    processTitle: "Our Root Canal Procedure",
    processDescription:
      "Our gentle approach and advanced techniques make root canal treatment comfortable while effectively treating infection.",
    steps: [
      {
        number: "01",
        title: "Diagnosis & Planning",
        description:
          "We use digital X-rays to assess the infection and plan your root canal treatment, ensuring we address all affected areas.",
      },
      {
        number: "02",
        title: "Cleaning & Disinfection",
        description:
          "Under local anesthesia, we carefully remove infected pulp, clean the root canals, and disinfect the area thoroughly.",
      },
      {
        number: "03",
        title: "Sealing & Restoration",
        description:
          "The cleaned canals are sealed with a biocompatible material, and the tooth is restored with a crown for lasting protection.",
      },
    ],
  },
  "scaling-polishing": {
    title: "Scaling & Polishing",
    description:
      "At Al Fatah Dental Care, we offer professional scaling and polishing treatments to maintain your oral health and keep your smile bright. This essential preventive care removes plaque, tartar, and surface stains, helping you prevent gum disease and cavities while maintaining fresh breath.",
    image: "/scaling-polishing.jpg",
    imageAlt: "Scaling and Polishing at Al Fatah Dental Care",
    processTitle: "Our Cleaning Process",
    processDescription:
      "Our thorough yet gentle cleaning process leaves your teeth smooth, clean, and healthy.",
    steps: [
      {
        number: "01",
        title: "Examination",
        description:
          "We examine your teeth and gums to identify areas of concern and assess the level of cleaning required.",
      },
      {
        number: "02",
        title: "Scaling",
        description:
          "Using ultrasonic and hand instruments, we carefully remove hardened tartar and plaque from above and below the gum line.",
      },
      {
        number: "03",
        title: "Polishing",
        description:
          "Your teeth are polished to a smooth finish, removing surface stains and making it harder for plaque to accumulate.",
      },
    ],
  },
};

const servicesList: { id: ServiceId; name: string }[] = [
  { id: "dental-implants", name: "Dental Implants" },
  { id: "zirconia-crowns", name: "Zirconia Crowns" },
  { id: "teeth-whitening", name: "Teeth Whitening" },
  { id: "braces-aligners", name: "Braces / Aligners" },
  { id: "root-canal", name: "Root Canal Treatment" },
  { id: "scaling-polishing", name: "Scaling & Polishing" },
];

export default function ServicesExtra() {
  const [selectedService, setSelectedService] =
    useState<ServiceId>("dental-implants");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const currentService = servicesData[selectedService];

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Form submitted! (This is a demo - no actual submission occurs)");
    console.log("Form data:", formData);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                {currentService.title}
              </h1>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {currentService.description}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={currentService.image}
                alt={currentService.imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Process Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {currentService.processTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-12">
                {currentService.processDescription}
              </p>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentService.steps.map((step, index) => (
                  <div key={index}>
                    <p className="text-sm text-muted-foreground font-medium mb-2">
                      Step {step.number}
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <div className="mb-4">
                      <CheckCircle2 className="w-6 h-6 text-teal-600" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Popular Services */}
            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-6">
                <X className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-bold text-foreground">
                  Popular Services
                </h3>
              </div>

              <div className="space-y-4">
                {servicesList.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full flex items-center justify-between py-3 border-b border-border last:border-b-0 text-left transition-colors ${
                      selectedService === service.id
                        ? "text-teal-600 font-semibold"
                        : "text-foreground font-medium hover:text-teal-600"
                    }`}
                  >
                    <span>{service.name}</span>
                    <ChevronRight
                      className={`w-5 h-5 transition-colors ${
                        selectedService === service.id
                          ? "text-teal-600"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Book a Free
              </h3>
              <p className="text-2xl font-bold text-teal-600 mb-6">
                Dental Consultation
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select Service</option>
                  {servicesList.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full px-4 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
