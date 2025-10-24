"use client";

import ContactSection from "@/components/ContactSection";
import HeroDark from "@/components/HeroDark";

export default function ImprintPage() {
  return (
    <>
      <HeroDark text="Imprint" />
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gray-100 shadow-sm rounded-lg p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Company Name */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Clinic Name
              </h2>
              <p className="text-sm text-gray-600">Al Fatah Dental Care</p>
            </div>

            {/* Authorized Representative */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Authorized Representative
              </h2>
              <p className="text-sm text-gray-600">AL FATAH Dental Care</p>
            </div>

            {/* Registered Address */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Registered Address
              </h2>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Gulistan-e-Johar, Near Dubai Palace</p>
                <p>Karachi, Pakistan</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Contact Information
              </h2>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Phone: 0335 2241333 | 0328 1310716</p>
                <p>Email: alfatahdentalcare@gmail.com</p>
                <p>Website: www.alfatahdentalcare.com</p>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Clinic Details
            </h2>
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                License / Registration Number: [Insert clinic registration
                number, if available]
              </p>
              <p>Operating Hours: 10:00 am – 7:00 pm (Sunday off)</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Disclaimer
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              The information provided on this website is intended for general
              informational purposes only and does not constitute medical
              advice. For personalized dental consultation or treatment, please
              schedule an appointment with our qualified dentists. While we
              strive to keep all information accurate and up to date, Al Fatah
              Dental Care makes no warranties about completeness or reliability.
            </p>
          </div>

          {/* Copyright Notice */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Copyright Notice
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              © {new Date().getFullYear()} Al Fatah Dental Care. All rights
              reserved. No part of this website, including text, images, or
              design elements, may be reproduced or distributed without prior
              written permission from Al Fatah Dental Care.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
