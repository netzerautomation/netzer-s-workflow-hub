import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Netzer Paul Tonogbanua | Workflow & AI Automation Specialist",
      },
      {
        name: "description",
        content:
          "AI Workflow Automation Specialist with hands-on experience building automation workflows using Make.com, n8n, Zapier, AI, APIs, and webhooks. Based in South Cotabato, Philippines. Available for freelance automation projects.",
      },
      {
        property: "og:title",
        content:
          "Netzer Paul Tonogbanua | Workflow & AI Automation Specialist",
      },
      {
        property: "og:description",
        content:
          "AI Workflow Automation Specialist with hands-on experience building automation workflows using Make.com, n8n, Zapier, AI, APIs, and webhooks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Netzer Paul Tonogbanua | Workflow & AI Automation Specialist",
      },
      {
        name: "twitter:description",
        content:
          "AI Workflow Automation Specialist with hands-on experience building automation workflows using Make.com, n8n, Zapier, AI, APIs, and webhooks.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main id="top" className="bg-background">
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 glass border-b border-white/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-sm font-extrabold tracking-tight text-foreground"
        >
          <span className="spectrum-edge inline-block size-6 rounded-full bg-gradient-to-br from-spectrum-1/60 via-spectrum-2/50 to-spectrum-3/60" />
          <span className="font-mono text-xs text-muted">N</span>
          <span className="font-display text-sm font-extrabold">
            Netzer Tonogbanua
          </span>
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-xs text-muted md:flex">
          <a
            href="#services"
            className="transition-colors hover:text-foreground"
          >
            Services
          </a>
          <a
            href="#experience"
            className="transition-colors hover:text-foreground"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-foreground px-4 py-2 font-mono text-xs text-background ring-1 ring-black/5 transition-colors hover:bg-foreground/90"
        >
          Hire →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-24">
      <div
        className="fade-up font-mono text-xs uppercase tracking-[0.2em] text-muted"
        style={{ animationDelay: "0s" }}
      >
        AI Automation · Portfolio · 2026
      </div>
      <h1
        className="fade-up mt-6 max-w-[22ch] font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.02] tracking-tight text-balance text-foreground"
        style={{ animationDelay: "0.05s" }}
      >
        Workflow &amp; AI Automation
        <br />
        <span className="text-muted">for teams that ship.</span>
      </h1>
      <p
        className="fade-up mt-8 max-w-[52ch] text-lg text-pretty text-foreground/80"
        style={{ animationDelay: "0.12s" }}
      >
        I design, build, and maintain production automation across Make.com,
        n8n, and Zapier — wiring AI agents, APIs, and webhooks into systems that
        quietly do the manual work your team should not be doing.
      </p>
      <div
        className="fade-up mt-10 flex flex-wrap items-center gap-4"
        style={{ animationDelay: "0.18s" }}
      >
        <a
          href="#contact"
          className="rounded-md bg-foreground px-5 py-3 font-mono text-xs text-background ring-1 ring-black/5 transition-colors hover:bg-foreground/90"
        >
          Start a conversation
        </a>
        <a
          href="#projects"
          className="glass spectrum-edge rounded-md px-5 py-3 font-mono text-xs text-foreground ring-1 ring-black/5 transition-colors hover:bg-white/90"
        >
          View recent work
        </a>
      </div>
      <div
        className="fade-up mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-border md:grid-cols-4"
        style={{ animationDelay: "0.24s" }}
      >
        <div className="bg-surface p-5">
          <div className="font-mono text-xs text-muted">01</div>
          <div className="mt-2 font-display text-2xl font-bold text-foreground">
            2019
          </div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
            BS IT
          </div>
        </div>
        <div className="bg-surface p-5">
          <div className="font-mono text-xs text-muted">02</div>
          <div className="mt-2 font-display text-2xl font-bold text-foreground">
            2
          </div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
            Certifications
          </div>
        </div>
        <div className="bg-surface p-5">
          <div className="font-mono text-xs text-muted">03</div>
          <div className="mt-2 font-display text-2xl font-bold text-foreground">
            3
          </div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
            Automation platforms
          </div>
        </div>
        <div className="bg-surface p-5">
          <div className="font-mono text-xs text-muted">04</div>
          <div className="mt-2 font-display text-2xl font-bold text-foreground">
            PH
          </div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
            Remote · Global
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      id: "(a.1)",
      title: "AI Agents & Prompts",
      description:
        "Structured prompt systems, LLM orchestration, and agent design for classification, extraction, and summarization tasks.",
    },
    {
      id: "(a.2)",
      title: "Workflow Automation",
      description:
        "Production workflows across Make.com, n8n, and Zapier with proper error handling, retries, and monitoring.",
    },
    {
      id: "(a.3)",
      title: "APIs & Webhooks",
      description:
        "REST integrations, HTTP request design, and webhook pipelines that keep systems talking reliably.",
    },
    {
      id: "(a.4)",
      title: "Data Pipelines",
      description:
        "JSON mapping, transformation, and validation across Sheets, Drive, and custom stores.",
    },
    {
      id: "(a.5)",
      title: "Business Ops",
      description:
        "CRM, email, lead generation, and customer support automation mapped to how your org actually runs.",
    },
    {
      id: "(a.6)",
      title: "GSpace Systems",
      description:
        "Sheets, Gmail, Forms, Drive, and Calendar wired into coherent, auditable operations.",
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-baseline justify-between">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            (a) Services
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance text-foreground md:text-4xl">
            What I build
          </h2>
        </div>
        <div className="hidden font-mono text-xs text-muted md:block">
          06 disciplines
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="glass spectrum-edge group rounded-xl p-6 ring-1 ring-black/5 transition-colors hover:bg-white/95"
          >
            <div className="font-mono text-[11px] uppercase tracking-wide text-muted">
              {service.id}
            </div>
            <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-foreground">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-foreground/75">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-baseline justify-between">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            (b) Experience
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance text-foreground md:text-4xl">
            Where I&apos;ve worked
          </h2>
        </div>
        <div className="hidden font-mono text-xs text-muted md:block">
          2015 — present
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-spectrum-1/50 via-spectrum-2/50 to-spectrum-3/50 md:translate-x-[160px]" />
        <div className="space-y-8">
          <div className="grid grid-cols-[16px_1fr] items-start gap-4 md:grid-cols-[180px_16px_1fr]">
            <div className="pt-1 font-mono text-xs text-muted">
              2025
              <br />
              <span className="text-foreground/60">— 2026</span>
            </div>
            <div className="relative hidden md:block">
              <span className="spectrum-edge absolute left-1/2 top-2 size-3 -translate-x-1/2 rounded-full bg-spectrum-1" />
            </div>
            <div className="glass spectrum-edge rounded-xl p-6 ring-1 ring-black/5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                  Customer Service Specialist
                </h3>
                <span className="font-mono text-xs text-muted">
                  Master NNTD Corp · E-commerce
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-pretty text-foreground/75">
                <li className="flex gap-3">
                  <span className="mt-0.5 font-mono text-xs text-accent">→</span>
                  Managed high-volume customer email — shipping, missing items,
                  refunds, and order issues.
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 font-mono text-xs text-accent">→</span>
                  Provided product guidance and troubleshooting across checkout
                  and manual invoicing.
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 font-mono text-xs text-accent">→</span>
                  Investigated operational and financial discrepancies;
                  coordinated with fulfillment.
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 font-mono text-xs text-accent">→</span>
                  Used structured problem-solving to surface recurring process
                  issues.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-[16px_1fr] items-start gap-4 md:grid-cols-[180px_16px_1fr]">
            <div className="pt-1 font-mono text-xs text-muted">
              2015
              <br />
              <span className="text-foreground/60">— 2019</span>
            </div>
            <div className="relative hidden md:block">
              <span className="spectrum-edge absolute left-1/2 top-2 size-3 -translate-x-1/2 rounded-full bg-spectrum-2" />
            </div>
            <div className="glass spectrum-edge rounded-xl p-6 ring-1 ring-black/5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                  BS Information Technology
                </h3>
                <span className="font-mono text-xs text-muted">
                  Mindanao Polytechnic College
                </span>
              </div>
              <p className="mt-4 text-sm text-pretty text-foreground/75">
                Foundational training in systems, data, and software — the
                substrate for everything I automate today.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="glass spectrum-edge flex items-center justify-between rounded-xl p-5 ring-1 ring-black/5">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wide text-muted">
              Certification
            </div>
            <div className="mt-1 font-display text-base font-bold text-foreground">
              Zapier Certified Expert
            </div>
          </div>
          <span className="font-mono text-xs text-accent">✓</span>
        </div>
        <div className="glass spectrum-edge flex items-center justify-between rounded-xl p-5 ring-1 ring-black/5">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wide text-muted">
              Certification
            </div>
            <div className="mt-1 font-display text-base font-bold text-foreground">
              Make Advance Certification
            </div>
          </div>
          <span className="font-mono text-xs text-accent">✓</span>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      case: "Case 01",
      status: "Live",
      title: "Feedback Intelligence Pipeline",
      description:
        "A personal AI system that ingests customer feedback from multiple sources, then auto-categorizes by type, topic, sentiment, urgency, and summary for monthly trend reporting.",
      tags: ["n8n", "LLM", "Sheets"],
      gradient: "from-spectrum-1/10 via-spectrum-2/10 to-spectrum-3/10",
    },
    {
      case: "Case 02",
      status: "Shipping",
      title: "Order Ops Automation",
      description:
        "E-commerce back-office workflow reconciling order discrepancies, auto-drafting customer responses, and syncing fulfillment state across Sheets and email.",
      tags: ["Make.com", "Gmail", "JSON"],
      gradient: "from-spectrum-3/10 via-spectrum-1/10 to-spectrum-2/10",
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-baseline justify-between">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            (c) Selected work
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance text-foreground md:text-4xl">
            Project highlights
          </h2>
        </div>
        <div className="hidden font-mono text-xs text-muted md:block">
          Representative systems
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.case}
            className="glass spectrum-edge group overflow-hidden rounded-xl ring-1 ring-black/5 transition-colors hover:bg-white/95"
          >
            <div
              className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${project.gradient}`}
            >
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted/70">
                  Project visual
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  {project.case}
                </div>
                <div className="font-mono text-[11px] text-accent">
                  {project.status}
                </div>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pretty text-foreground/75">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-accent-soft px-2 py-1 font-mono text-[11px] text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="glass spectrum-edge relative overflow-hidden rounded-2xl p-10 ring-1 ring-black/5 md:p-14">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          (d) Contact
        </div>
        <h2 className="mt-4 max-w-[18ch] font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-balance text-foreground md:text-5xl">
          Have a workflow that should not be manual?
        </h2>
        <p className="mt-6 max-w-[46ch] text-pretty text-foreground/80">
          I take on a small number of automation engagements per quarter. If
          you&apos;re in South Cotabato, the Philippines — or anywhere — and want
          to talk through scope, I read every message.
        </p>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          <a
            href="mailto:netzer.it@gmail.com"
            className="flex items-center justify-between rounded-lg bg-background/60 p-4 ring-1 ring-black/5 transition-colors hover:bg-background"
          >
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wide text-muted">
                Email
              </div>
              <div className="mt-1 font-display text-base font-semibold text-foreground">
                netzer.it@gmail.com
              </div>
            </div>
            <span className="font-mono text-xs text-foreground/60">→</span>
          </a>
          <a
            href="tel:+639386946310"
            className="flex items-center justify-between rounded-lg bg-background/60 p-4 ring-1 ring-black/5 transition-colors hover:bg-background"
          >
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wide text-muted">
                Phone
              </div>
              <div className="mt-1 font-display text-base font-semibold text-foreground">
                +63 938 694 6310
              </div>
            </div>
            <span className="font-mono text-xs text-foreground/60">→</span>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01f45cc516bc831fdd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg bg-background/60 p-4 ring-1 ring-black/5 transition-colors hover:bg-background"
          >
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wide text-muted">
                Upwork
              </div>
              <div className="mt-1 font-display text-base font-semibold text-foreground">
                View Upwork profile
              </div>
            </div>
            <span className="font-mono text-xs text-foreground/60">↗</span>
          </a>
          <a
            href="https://www.onlinejobs.ph/jobseekers/info/2695411"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg bg-background/60 p-4 ring-1 ring-black/5 transition-colors hover:bg-background"
          >
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wide text-muted">
                Onlinejobs.ph
              </div>
              <div className="mt-1 font-display text-base font-semibold text-foreground">
                View Onlinejobs.ph profile
              </div>
            </div>
            <span className="font-mono text-xs text-foreground/60">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center">
        <div className="font-mono text-xs text-muted">
          © 2026 Netzer Paul Tonogbanua · South Cotabato, PH
        </div>
        <div className="font-mono text-xs text-muted">
          Built as a working portfolio · EN / FIL
        </div>
      </div>
    </footer>
  );
}
