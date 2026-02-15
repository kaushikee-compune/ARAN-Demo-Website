import Image from "next/image";
import ScrollTrail from "@/components/ScrollTrail";

export default function Home() {
  return (
    <main className="relative bg-white text-gray-800 overflow-hidden">

      <ScrollTrail />

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            ARAN
          </div>

          {/* Menu */}
          <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-black transition">Home</a>
            <a href="#features" className="hover:text-black transition">Features</a>
            <a href="#" className="hover:text-black transition">About</a>
            <a href="#" className="hover:text-black transition">Contact</a>
          </nav>

          {/* CTA */}
          <a
            href="https://demo.yourdomain.com"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Demo
          </a>
        </div>
      </header>


      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 pt-32">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fadeUp">
          ARAN
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-600 animate-fadeUp delay-150">
          A Cloud-Based, ABDM-Compliant Healthcare Platform Designed for Clinics
          & Hospitals Across India.
        </p>
        <a
          href="#features"
          className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition animate-fadeUp delay-300"
        >
          Explore Features
        </a>
      </section>


      {/* FEATURES */}
      <section
        id="features"
        className="py-24 px-6 max-w-6xl mx-auto space-y-32 relative z-10"
      >
        {/* 1 Cloud */}
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeUp">
          <Image
            src="/images/cloud-saas.png"
            alt="Cloud Based SaaS"
            width={600}
            height={400}
            className="rounded-2xl hover:scale-105 transition duration-500"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Cloud-Based SaaS</h2>
            <p className="text-lg text-gray-600">
              Secure access to your hospital system anytime, anywhere — without
              complex installations or local servers.
            </p>
          </div>
        </div>

        {/* 2 ABDM FHIR */}
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeUp">
          <div className="md:order-2">
            <Image
              src="/images/abdm-fhir-male.png"
              alt="ABDM FHIR EMR"
              width={600}
              height={400}
              className="rounded-2xl hover:scale-105 transition duration-500"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              ABDM & FHIR-Compliant EMR
            </h2>
            <p className="text-lg text-gray-600">
              Structured electronic medical records built for India’s digital
              health ecosystem and future interoperability.
            </p>
          </div>
        </div>

        {/* 3 Multi Branch */}
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeUp">
          <Image
            src="/images/multi-branch-rba.png"
            alt="Multi Branch Role Based Access"
            width={600}
            height={400}
            className="rounded-2xl hover:scale-105 transition duration-500"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Multi-Branch with Role-Based Access
            </h2>
            <p className="text-lg text-gray-600">
              Manage multiple locations with controlled access for doctors,
              nurses, and administrative teams.
            </p>
          </div>
        </div>

        {/* 4 Scalable */}
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeUp">
          <div className="md:order-2">
            <Image
              src="/images/scalable-hospital.png"
              alt="Scalable Healthcare System"
              width={600}
              height={400}
              className="rounded-2xl hover:scale-105 transition duration-500"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Built for Clinics & Hospitals of Any Size
            </h2>
            <p className="text-lg text-gray-600">
              From single-doctor clinics to multi-speciality hospitals — ARAN
              scales with your growth.
            </p>
          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="py-32 text-center px-6 bg-gray-50 relative z-10">
        <h2 className="text-4xl font-semibold mb-6 animate-fadeUp">
          Experience ARAN in Action
        </h2>
        <p className="text-lg text-gray-600 mb-8 animate-fadeUp delay-150">
          See how ARAN simplifies healthcare operations and documentation.
        </p>
        <a
          href="https://demo.yourdomain.com"
          className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition animate-fadeUp delay-300"
        >
          View Live Demo
        </a>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-xl font-semibold mb-4">ARAN</h3>
            <p className="text-gray-400">
              A modern, structured healthcare platform built for India’s
              digital health future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">info@aranhealth.com</p>
            <p className="text-gray-400">India</p>
          </div>

        </div>

        <div className="text-center text-gray-500 mt-12 text-sm">
          © {new Date().getFullYear()} ARAN. All rights reserved.
        </div>
      </footer>

    </main>
  );
}