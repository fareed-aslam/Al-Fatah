"use client"
import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import Image from "next/image";


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = (e: any) => {
  e.preventDefault();

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,     // 🔹 Your EmailJS Service ID
       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2!,    // 🔹 Your EmailJS Template ID
      formData,             // 🔹 Data from your form
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!     // 🔹 Your EmailJS Public Key
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch((error: any) => {
      console.error("Email send failed:", error);
      alert("❌ Failed to send message. Try again later.");
    });
};


        

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Form and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-gray-100 lg:col-span-2 rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Send Us Message
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Your email address will not be published.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 placeholder-black focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 placeholder-black focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 placeholder-black focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md text-gray-900 placeholder-black focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              />

              <button
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors"
              >
                Send Message
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Image */}
          {/* <div className="rounded-lg overflow-hidden shadow-sm">
            <img
              src="/contact.png"
              alt="Professional team members"
              className="w-full h-full object-cover"
            />
          </div> */}

          {/* Image */}
<div className="rounded-lg overflow-hidden shadow-sm">
  <Image
    src="/contact.png"
    alt="Professional team members"
    width={500}
    height={500}
    className="w-full h-full object-cover rounded-lg overflow-hidden shadow-sm"
    priority             // ✅ preloads on first paint
    fetchPriority="high" // ✅ browser-level hint to load immediately
    quality={100}        // ✅ highest visual quality
    sizes="(max-width: 768px) 100vw, 500px" // ✅ responsive hint for optimization
  />
</div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Get in Touch Card */}

          {/* Map */}
          <div className="bg-white rounded-lg lg:col-span-1 overflow-hidden shadow-sm relative h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1914585981467!2d67.1501772!3d24.925546800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339c3edce5987%3A0xe4827e1199713d2!2sAL-FATAH%20DENTAL%20CARE!5e0!3m2!1sen!2s!4v1761752577772!5m2!1sen!2s"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white rounded shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50">
                +
              </button>
              <button className="w-10 h-10 bg-white rounded shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50">
                −
              </button>
            </div>
          </div>
          <div className="bg-linear-to-br lg:col-span-1 from-teal-500 to-teal-600 rounded-lg p-8 text-white shadow-lg">
            <h2 className="text-4xl font-bold mb-2">
              Get in Touch → <span className="font-light">Office 1</span>
            </h2>
            <p className="text-teal-50 mb-8">
              Have questions or need an appointment? Our team at Al Fatah is
              here to help you every step of the way.
            </p>

            <div className="space-y-6">
              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    Everyday: 11 am - 7:30 pm(Sunday off)
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start  gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    House no 394, St. 2, Gulistan e Johar Block 9 Bakhtawar Goth
                    Block 9 A bakhtawar colony, Karachi
                  </p>
                  <p className="font-medium text-white">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section - Get in Touch and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Get in Touch Card */}
          <div className="bg-linear-to-br lg:col-span-1 from-teal-500 to-teal-600 rounded-lg p-8 text-white shadow-lg">
            <h2 className="text-4xl font-bold mb-2">
              Get in Touch → <span className="font-light">Office 2</span>
            </h2>
            <p className="text-teal-50 mb-8">
              Have questions or need an appointment? Our team at Al Fatah is
              here to help you every step of the way.
            </p>

            <div className="space-y-6">
              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    Everyday: 9:30 am - 9 pm(Sunday off)
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start  gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    Office # 2, Ali Center, near Masjid-e-Tayyaba, Block 10
                    Gulshan-e-Iqbal,
                  </p>
                  <p className="font-medium text-white">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg lg:col-span-1 overflow-hidden shadow-sm relative h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5957434914394!2d67.1004298!3d24.911767299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339d075033ca9%3A0x65ddaf07496a27ef!2s32-24%20Dental%20Clinic!5e0!3m2!1sen!2s!4v1761752349283!5m2!1sen!2s"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white rounded shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50">
                +
              </button>
              <button className="w-10 h-10 bg-white rounded shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50">
                −
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





