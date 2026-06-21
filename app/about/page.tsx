import Link from 'next/link'
import {
  Leaf,
  Shield,
  Users,
  Building2,
  Globe,
  Phone,
  Mail,
  CheckCircle2,
  Handshake,
  Target,
} from 'lucide-react'

const stats = [
  { number: '3+', label: 'Years of Service', icon: Leaf },
  { number: '10+', label: 'Happy Families', icon: Users },
  { number: '20+', label: 'Active Listings', icon: Building2 },
  { number: '15+', label: 'Cities Covered', icon: Target },
]

const values = [
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'Verified listings, clear documentation, and honest communication at every step.',
  },
  {
    icon: Handshake,
    title: 'Integrity First',
    description: 'Ethical guidance and responsible advisory for buyers, sellers, and investors.',
  },
  {
    icon: CheckCircle2,
    title: 'Customer Commitment',
    description: 'We prioritize practical support so every decision feels confident and secure.',
  },
]

const companies = [
  {
    name: 'CITIZEN LAND, PROPERTY & CONSTRUCTION Pvt Ltd',
    websiteLabel: 'citizenhousing.in',
    websiteUrl: 'https://citizenhousing.in',
    description: 'Real estate listings and property discovery platform across key Indian markets.',
  },
  {
    name: 'Citizen Grih Nirman (Sahkari) Samiti ltd',
    websiteLabel: 'citizenhousing.in',
    websiteUrl: 'https://citizenhousing.in',
    description: 'Cooperative housing initiative focused on affordable, community-led development.',
  },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_15%_20%,#6ee7b7_0,transparent_30%),radial-gradient(circle_at_85%_10%,#34d399_0,transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200/40 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-100">
              <Leaf className="h-4 w-4" />
              About Us
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
              Building Trust in Real Estate
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-emerald-100 md:text-xl">
              We help families and investors make better property decisions through verified listings,
              transparent guidance, and reliable support.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-emerald-200/30 bg-white/10 px-4 py-5 text-center backdrop-blur"
              >
                <item.icon className="mx-auto mb-2 h-6 w-6 text-emerald-200" />
                <p className="text-2xl font-bold md:text-3xl">{item.number}</p>
                <p className="mt-1 text-xs font-medium text-emerald-100 md:text-sm">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-emerald-950 md:text-4xl">Our Companies</h2>
            <p className="mt-3 text-base text-emerald-800 md:text-lg">
              Two connected organizations serving housing and property needs.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {companies.map((company) => (
              <article
                key={company.name}
                className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-[0_14px_30px_-22px_rgba(6,78,59,0.45)]"
              >
                <h3 className="text-xl font-extrabold text-emerald-950 md:text-2xl">{company.name}</h3>
                <p className="mt-3 text-emerald-800">{company.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2">
                  <Globe className="h-4 w-4 text-emerald-700" />
                  <span className="text-sm font-semibold text-emerald-800">Official Website:</span>
                  <Link
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    {company.websiteLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-200 bg-white p-8 md:p-10">
            <h2 className="text-3xl font-bold text-emerald-950 md:text-4xl">Our Core Values</h2>
            <p className="mt-3 text-emerald-800">
              The principles that guide every interaction with our customers and partners.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <article key={value.title} className="rounded-2xl bg-emerald-50 p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-700 text-white">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-800">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-800 to-green-800 px-6 py-10 text-white md:px-10">
            <h2 className="text-3xl font-extrabold md:text-4xl">Connect With Us</h2>
            <p className="mt-3 text-emerald-100">
              Reach out for listing support, consultations, and verified property guidance.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              <div className="inline-flex items-center gap-2 text-emerald-100">
                <Phone className="h-5 w-5" />
                <span className="font-semibold text-white">+91 9031007097</span>
              </div>
              <div className="inline-flex items-center gap-2 text-emerald-100">
                <Mail className="h-5 w-5" />
                <span className="font-semibold text-white">sales@citizenhousing.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
