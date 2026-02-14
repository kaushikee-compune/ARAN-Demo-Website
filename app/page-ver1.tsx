import Image from "next/image";
import ScrollTrail from "@/components/ScrollTrail";

export default function Home() {
  return (
    <main className="relative bg-white text-gray-800 overflow-hidden">
      <ScrollTrail />

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          ARAN
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-600">
          A Cloud-Based, ABDM-Compliant Healthcare Platform Designed for Clinics
          & Hospitals Across India.
        </p>
        <a
          href="#features"
          className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
        >
          Explore Features
        </a>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="py-24 px-6 max-w-6xl mx-auto space-y-32"
      >
        {/* 1 Cloud */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/cloud-saas.png"
            alt="Cloud Based SaaS"
            width={600}
            height={400}
            className="rounded-2xl"
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <Image
              src="/images/abdm-fhir-male.png"
              alt="ABDM FHIR EMR"
              width={600}
              height={400}
              className="rounded-2xl"
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/multi-branch-rba.png"
            alt="Multi Branch Role Based Access"
            width={600}
            height={400}
            className="rounded-2xl"
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <Image
              src="/images/scalable-hospital.png"
              alt="Scalable Healthcare System"
              width={600}
              height={400}
              className="rounded-2xl"
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
      <section className="py-32 text-center px-6 bg-gray-50">
        <h2 className="text-4xl font-semibold mb-6">
          Experience ARAN in Action
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          See how ARAN simplifies healthcare operations and documentation.
        </p>
        <a
          href="https://demo.yourdomain.com"
          className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
        >
          View Live Demo
        </a>
      </section>
    </main>
  );
}
