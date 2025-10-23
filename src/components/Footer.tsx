import { Facebook, Twitter, Linkedin, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      {/* Consultation Banner */}
      <div className="bg-zinc-800 px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              Schedule Your Appointment Today at{" "}
              <span className="font-normal">Al Fatah Dental Care</span>
            </h2>
          </div>
          <Button className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold px-6 py-2 rounded-sm whitespace-nowrap">
            Book Now →
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-2xl font-bold">
                <span className="text-teal-500">AL</span>
                <br />
                <span>FATAH</span>
                <span className="text-teal-500 ml-1">✓</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Al Fatah Dental Care is one of Karachi’s leading clinics,
              providing expert, gentle, and compassionate dental treatments for
              all ages.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Business Address */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-white mb-4">Clinic Location</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Gulistan e Johar, Near Dubai Palace, Karachi, Pakistan
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>alfatahdentalcare@gmail.com</p>
                <p>0335 2241333 | 0328 1310716</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Dental Implants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Zirconia Crowns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  PFM Crowns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Removable Dentures
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Whitening / Scaling & Polishing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  Braces / Invisible Aligners
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated by subscribing to our newsletter for dental tips and
              clinic news
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 rounded-l-sm rounded-r-none"
              />
              <Button className="bg-teal-500 hover:bg-teal-600 text-slate-900 rounded-l-none rounded-r-sm px-4">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8"></div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>Copyright © 2025 Al Fatah Dental Care. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-500 transition-colors">
              Imprint
            </a>
            <a href="#" className="hover:text-teal-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-500 transition-colors">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-teal-500 transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
