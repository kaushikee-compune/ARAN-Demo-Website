import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden py-28 px-6 text-center">
        {/* Soft Background Shapes */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>

        <div className="relative max-w-6xl mx-auto">
          {/* Hook Text */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#191970]">
            Healthcare, Structured for the Future
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            A cloud-native, ABDM-compliant healthcare platform designed for
            clinics and hospitals across India.
          </p>

          {/* CTAs */}
          <div className="flex justify-center gap-4 mb-16">
            <a
              href="#"
              className="bg-[#191970] text-white px-8 py-3 rounded-lg text-lg hover:opacity-90 transition"
            >
              View Demo
            </a>

            <a
              href="#"
              className="border border-[#191970] text-[#191970] px-8 py-3 rounded-lg text-lg hover:bg-[#191970] hover:text-white transition"
            >
              Learn More
            </a>
          </div>

          {/* Central Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/hero-illustration.png"
              alt="ARAN Healthcare Platform"
              width={900}
              height={600}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 text-center">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
            <Image
              src="/images/cloud-saas-icon.png"
              alt="ABDM FHIR EMR"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="font-semibold text-[#191970] text-lg">
                Cloud Based SaaS
              </h3>
            </div>
          </div>

          {/* Feature 2 */}
           <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
            <Image
              src="/images/abdm-fhir-icon.png"
              alt="ABDM FHIR EMR"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="font-semibold text-[#191970] text-lg">
                ABDM + FHIR – EMR
              </h3>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="h-16 flex items-center justify-center mb-6 text-gray-400">
              Icon Placeholder
            </div>
            <h3 className="font-semibold text-[#191970]">Multi-Branch + RBA</h3>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="h-16 flex items-center justify-center mb-6 text-gray-400">
              Icon Placeholder
            </div>
            <h3 className="font-semibold text-[#191970]">
              Scalable for Any Size
            </h3>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="h-16 flex items-center justify-center mb-6 text-gray-400">
              Icon Placeholder
            </div>
            <h3 className="font-semibold text-[#191970]">
              Drug Codes + SNOMED CT
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
