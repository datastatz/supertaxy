'use client';

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { HelpCircle } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white bg-opacity-70 backdrop-blur-md shadow-md p-4 flex items-center justify-between relative">
      {/* Left: Logo and Title */}
      <div className="flex items-center space-x-3 z-10">
        <Image
          src="/tax-logo.png"
          alt="TaxList Logo"
          width={40}
          height={40}
        />
        <span className="text-2xl font-semibold text-gray-800 font-poppins">Super Taxy</span>
      </div>

      {/* Center: Spinning Globe */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-0">
        <Image
          src="/Globe.gif"
          alt="Spinning Globe"
          width={60}
          height={60}
          unoptimized
          className="pointer-events-none select-none"
        />
      </div>

      {/* Right: Info and Link */}
      <div className="flex items-center space-x-6 z-10">
        {/* Info icon */}
        <button onClick={() => setIsOpen(true)} className="text-gray-600 hover:text-gray-900">
          <HelpCircle size={24} />
        </button>

        {/* TechMellouk link */}
        <a
          href="https://x.com/techMellouk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline text-blue-600 hover:text-blue-800"
        >
          made by TechMellouk
        </a>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-sm w-full bg-white rounded-xl p-6 shadow-lg">
            <Dialog.Title className="text-lg font-bold">Disclaimer</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-600">
              The tax data provided on this site may change over time. We aim to update it annually to reflect the most accurate information. Next update: <strong>September 1st</strong>.
            </Dialog.Description>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
