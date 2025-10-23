"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ContactFormDialog } from "./GetInTouch";


// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] rounded-lg bg-cyan-950 border-border z-50">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="text-white font-bold text-lg">AL FATAH</div>
//           <div className="text-white font-light text-lg">Dental Care</div>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
//           <Link
//             href="#"
//             className="text-white hover:text-teal-500 transition-colors text-sm"
//           >
//             Home
//           </Link>
//           <Link
//             href="#"
//             className="text-white hover:text-teal-500 transition-colors text-sm"
//           >
//             About
//           </Link>
//           <Link
//             href="#"
//             className="text-white hover:text-teal-500 transition-colors text-sm"
//           >
//             Services
//           </Link>
//           <Link
//             href="#"
//             className="text-white hover:text-teal-500 transition-colors text-sm"
//           >
//             Blog
//           </Link>
//           <Link
//             href="#"
//             className="text-white hover:text-teal-500 transition-colors text-sm"
//           >
//             Contact
//           </Link>
//           <button className="bg-accent text-black-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors">
//             Get in Touch
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </nav>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-primary border-b border-border">
//           <div className="px-4 py-4 space-y-4">
//             <Link
//               href="#"
//               className="block text-white hover:text-teal-500 transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               href="#"
//               className="block text-white hover:text-teal-500 transition-colors"
//             >
//               About
//             </Link>
//             <Link
//               href="#"
//               className="block text-white hover:text-teal-500 transition-colors"
//             >
//               Services
//             </Link>
//             <Link
//               href="#"
//               className="block text-white hover:text-teal-500 transition-colors"
//             >
//               Blog
//             </Link>
//             <Link
//               href="#"
//               className="block text-white hover:text-teal-500 transition-colors"
//             >
//               Contact
//             </Link>
//             <button className="w-full bg-accent text-black-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors">
//               Get in Touch
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }





export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] rounded-lg bg-cyan-950 border-border z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-white font-bold text-lg">AL FATAH</div>
            <div className="text-white font-light text-lg">Dental Care</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-white hover:text-teal-500 transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-teal-500 transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-teal-500 transition-colors text-sm"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-teal-500 transition-colors text-sm"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white hover:text-teal-500 transition-colors text-sm"
            >
              Contact
            </a>
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-teal-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-cyan-950 border-t border-cyan-900">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#"
                className="block text-white hover:text-teal-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-white hover:text-teal-500 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="block text-white hover:text-teal-500 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-white hover:text-teal-500 transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-white hover:text-teal-500 transition-colors"
              >
                Contact
              </a>
              <button 
                onClick={() => {
                  setShowContactForm(true);
                  setIsOpen(false);
                }}
                className="w-full bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition-colors"

              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </header>

      <ContactFormDialog open={showContactForm} onOpenChange={setShowContactForm} />
    </>
  );
}

