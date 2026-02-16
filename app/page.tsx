// import Image from "next/image";
// import ScrollTrail from "@/components/ScrollTrail";

// export default function Home() {
//   return (
//     <main className="relative bg-white text-gray-800 overflow-hidden">
//       <ScrollTrail />

//       {/* ================= NAVBAR ================= */}
//       <header className="fixed top-0 left-0 w-full bg-white/100 backdrop-blur-md z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           {/* ARAN Logo */}
//           <Image
//             src="/images/aran-logo-red.svg"
//             alt="ARAN Logo"
//             width={160}
//             height={50}
//             className="h-10 w-auto"
//           />

//           <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
//             <a href="#" className="hover:text-black transition">
//               Home
//             </a>
//             <a href="#features" className="hover:text-black transition">
//               Features
//             </a>
//             <a href="#" className="hover:text-black transition">
//               About
//             </a>
//             <a href="#" className="hover:text-black transition">
//               Contact
//             </a>
//           </nav>

//           <a
//             href="https://demo.yourdomain.com"
//             className="bg-[#000a50] text-white px-5 py-2 rounded-lg hover:bg-[#2582a1] transition"
//           >
//             Demo
//           </a>
//         </div>
//       </header>

//       {/* ================= HERO ================= */}
//       <section className="relative bg-[#000a50] text-white pt-32 pb-28 px-6 text-center overflow-hidden">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
//             ARAN
//           </h1>

//           <p className="text-lg md:text-2xl text-white/90">
//             A Cloud-Based, ABDM-Compliant Healthcare Platform Designed for
//             Clinics & Hospitals Across India...
//           </p>
//         </div>

//         {/* Curved Bottom Shape */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//           <svg
//             className="relative block w-full h-[90px]"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//           >
//             <path
//               fill="#ffffff"
//               d="M0,200 Q720,80 1440,200 L1440,320 L0,320 Z"
//             />
//           </svg>
//         </div>
//       </section>

//       {/* ================= TRUST & COMPLIANCE SECTION ================= */}
//       <section className="py-20 px-6 bg-gray-50 text-center">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-semibold mb-6">
//             Trusted, Compliant & Secure by Design
//           </h2>

//           <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
//             Built to meet India’s national digital health standards and global
//             interoperability frameworks.
//           </p>

//           {/* Logos Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
//             <div className="flex flex-col items-center space-y-4">
//               <div className="h-24 flex items-center justify-center">
//                 <Image
//                   src="/images/logo/NHA-logo.jpg"
//                   alt="NHA Approved"
//                   width={220}
//                   height={120}
//                   className="max-h-full w-auto object-contain"
//                 />
//               </div>
//               <span className="text-sm font-medium text-gray-700">
//                 NHA Approved
//               </span>
//             </div>

//             <div className="flex flex-col items-center space-y-4">
//               <Image
//                 src="/images/logo/ABDM-logo.png"
//                 alt="ABDM Compliant"
//                 width={140}
//                 height={80}
//                 className="h-16 w-auto object-contain"
//               />
//               <span className="text-sm font-medium text-gray-700">
//                 ABDM Compliant
//               </span>
//             </div>

//             <div className="flex flex-col items-center space-y-4">
//               <Image
//                 src="/images/logo/fhir.png"
//                 alt="FHIR Compliant"
//                 width={140}
//                 height={80}
//                 className="h-16 w-auto object-contain"
//               />
//               <span className="text-sm font-medium text-gray-700">
//                 FHIR Compliant
//               </span>
//             </div>

//             <div className="flex flex-col items-center space-y-4">
//               <Image
//                 src="/images/logo/azure.png"
//                 alt="Securely Hosted in Azure"
//                 width={140}
//                 height={80}
//                 className="h-16 w-auto object-contain"
//               />
//               <span className="text-sm font-medium text-gray-700">
//                 Securely Hosted on Microsoft Azure
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= FEATURES ================= */}
//       {/* Explore Button Section */}
//       <section className="pb-16 text-center">
//         <a
//           id="trail-start"
//           href="#features"
//           className="inline-block bg-[#000a50] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#2582a1] transition"
//         >
//           Explore Features
//         </a>
//       </section>
//       <section
//         id="features"
//         className="py-24 px-6 max-w-6xl mx-auto space-y-32 relative z-10"
//       >
//         {/* 1 Cloud */}
//         <div
//           id="trail-start"
//           className="grid md:grid-cols-2 gap-12 items-center"
//         >
//           <Image
//             src="/images/ver2/cloud-saas-blue.jpg"
//             alt="Cloud Based SaaS"
//             width={1000}
//             height={800}
//             className="rounded-2xl hover:scale-105 transition duration-500"
//           />
//           <div>
//             <h2 className="text-3xl font-semibold mb-4">Cloud-Based SaaS</h2>
//             <p className="text-lg text-gray-600">
//               Secure access to your hospital system anytime, anywhere — without
//               complex installations or local servers.
//             </p>
//           </div>
//         </div>

//         {/* 2 ABDM FHIR */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="md:order-2">
//             <Image
//               src="/images/abdm-fhir-male-org.jpg"
//               alt="ABDM FHIR EMR"
//               width={600}
//               height={400}
//               className="rounded-2xl hover:scale-105 transition duration-500"
//             />
//           </div>
//           <div>
//             <h2 className="text-3xl font-semibold mb-4">
//               ABDM & FHIR-Compliant EMR
//             </h2>
//             <p className="text-lg text-gray-600">
//               Structured electronic medical records built for India’s digital
//               health ecosystem and future interoperability.
//             </p>
//           </div>
//         </div>

//         {/* 3 Indian Drug Codes + SNOMED CT */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <Image
//             src="/images/ver2/snomed-cdci-blue.jpg"
//             alt="Indian Drug Codes and SNOMED CT Integration"
//             width={1000}
//             height={800}
//             className="rounded-2xl hover:scale-105 transition duration-500"
//           />
//           <div>
//             <h2 className="text-3xl font-semibold mb-4">
//               Indian Drug Codes + SNOMED CT Integration
//             </h2>
//             <p className="text-lg text-gray-600">
//               Standardized prescriptions powered by Common Drug Codes for India
//               (CDCI) provided under MoHFW EHR standards, integrated with SNOMED
//               CT® global clinical terminology — ensuring structured, compliant,
//               and interoperable health records across systems.
//             </p>
//           </div>
//         </div>

//         {/* 4 Multi Branch */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="md:order-2">
//             <Image
//               src="/images/multi-branch-rba-org.jpg"
//               alt="Multi Branch Role Based Access"
//               width={600}
//               height={400}
//               className="rounded-2xl hover:scale-105 transition duration-500"
//             />
//           </div>
//           <div>
//             <h2 className="text-3xl font-semibold mb-4">
//               Multi-Branch with Role-Based Access
//             </h2>
//             <p className="text-lg text-gray-600">
//               Manage multiple locations with controlled access for doctors,
//               nurses, and administrative teams.
//             </p>
//           </div>
//         </div>

//         {/* 5 Scalable */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <Image
//             src="/images/ver2/scalable-hosp-blue.jpg"
//             alt="Scalable Healthcare System"
//             width={600}
//             height={400}
//             className="rounded-2xl hover:scale-105 transition duration-500"
//           />
//           <div>
//             <h2 className="text-3xl font-semibold mb-4">
//               Built for Clinics & Hospitals of Any Size
//             </h2>
//             <p className="text-lg text-gray-600">
//               From single-doctor clinics to multi-speciality hospitals — ARAN
//               scales with your growth.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="bg-black text-white py-16 px-6 mt-32">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-gray-400">
//             © {new Date().getFullYear()} ARAN. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </main>
//   );
// }

"use client";

//import { useState } from "react";
import Image from "next/image";
// import ScrollTrail from "@/components/ScrollTrail";

export default function Home() {
  //const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative bg-white text-gray-800 overflow-hidden">
      {/* <ScrollTrail /> */}

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          {/* Logo + Text */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/aran-logo-blu.png"
              alt="ARAN Logo"
              width={160}
              height={50}
              className="h-9 w-auto"
            />
           
          </div>

          {/* Demo Button (Visible on all devices) */}
          <a
            href="https://www.hims.aran.care"
            className="bg-[#000a50] text-white px-4 md:px-6 py-2 rounded-lg text-sm md:text-base hover:bg-[#2582a1] transition"
          >
            Demo
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative bg-[#000a50] text-white pt-24 md:pt-32 pb-20 md:pb-28 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight">
            ARAN
          </h1>
          <p className="text-base md:text-2xl text-white/90 mb-8"> Healthcare Management Information System </p>
          <p className="text-base md:text-2xl text-white/90 mb-8">
            
            A Cloud-Based, ABDM-Compliant Healthcare Platform Designed for
            Clinics & Hospitals Across India.
          </p>

          {/* Explore Button */}
          <a
            href="#features"
            className="inline-block bg-white text-[#000a50] px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Explore Features
          </a>
        </div>

        {/* Semi Circular Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[80px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,220 Q720,100 1440,220 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="py-16 md:py-20 px-6 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Trusted, Compliant & Secure by Design
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Built to meet India’s national digital health standards and global
            interoperability frameworks.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {[
              { src: "/images/logo/NHA-logo.png", label: "NHA Approved" },
              { src: "/images/logo/ABDM-logo.png", label: "ABDM Compliant" },
              { src: "/images/logo/fhir.png", label: "FHIR Compliant" },
              {
                src: "/images/logo/snomed.png",
                label: "Integrated with Snomed CT and CDCI",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={160}
                  height={80}
                  className="h-14 md:h-16 w-auto object-contain"
                />
                <span className="text-sm font-medium text-gray-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="py-16 md:py-24 px-6 max-w-6xl mx-auto space-y-20 md:space-y-32"
      >
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Image
            src="/images/ver2/cloud-saas-blue.jpg"
            alt="Cloud Based SaaS"
            width={1000}
            height={800}
            className="w-full h-auto rounded-2xl"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Cloud-Based SaaS
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Secure access to your hospital system anytime, anywhere — without
              complex installations or local servers.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:order-2">
            <Image
              src="/images/abdm-fhir-male-org.jpg"
              alt="ABDM FHIR EMR"
              width={1000}
              height={800}
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              ABDM & FHIR-Compliant EMR
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Structured electronic medical records built for India’s digital
              health ecosystem and future interoperability.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Image
            src="/images/ver2/snomed-cdci-blue.jpg"
            alt="CDCI + SNOMED CT"
            width={1000}
            height={800}
            className="w-full h-auto rounded-2xl"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              CDCI + SNOMED CT Integration
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Standardized prescriptions powered by Common Drug Codes for India
              (CDCI) integrated with SNOMED CT®.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:order-2">
            <Image
              src="/images/multi-branch-rba-org.jpg"
              alt="Multi Branch"
              width={1000}
              height={800}
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Multi-Branch with Role-Based Access
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Manage multiple locations with controlled access.
            </p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Image
            src="/images/ver2/scalable-hosp-blue.jpg"
            alt="Scalable"
            width={1000}
            height={800}
            className="w-full h-auto rounded-2xl"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Built for Clinics & Hospitals of Any Size
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              From single-doctor clinics to multi-speciality hospitals — ARAN
              scales with your growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-gray-300">
            <a
              href="https://aran.care"
              target="_blank"
              className="hover:text-white transition"
            >
              About Us
            </a>

            <a
              href="https://aran.care/blogs/"
              target="_blank"
              className="hover:text-white transition"
            >
              Blogs
            </a>

            <a
              href="https://aran.care/contact/"
              target="_blank"
              className="hover:text-white transition"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} ARAN HIMS. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
