import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { profile, stats } from "./landing/data";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_0%,#000_40%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-80 w-[36rem] rounded-full bg-primary/20 blur-3xl"
      />

      <div className="container relative grid grid-cols-1 gap-12 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div className="min-w-0 space-y-8">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Now: {profile.title} at {profile.company}
          </a>

          <div className="space-y-4">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
              {profile.title}
            </p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I design and run scalable infrastructure, Go services and AI-powered
              products for the education sector, used by{" "}
              <span className="font-semibold text-foreground">45+ US universities</span>{" "}
              and{" "}
              <span className="font-semibold text-foreground">millions of users</span>.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.calendar}
              target="_blank"
              rel="noreferrer noopener"
              className={buttonVariants({ size: "lg" })}
            >
              <CalendarDays className="mr-2 h-4 w-4" aria-hidden="true" />
              Book a meeting
            </a>
            <a href="/blog" className={buttonVariants({ size: "lg", variant: "outline" })}>
              Read the blog
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <GitHubLogoIcon className="h-4 w-4" aria-hidden="true" />
              srini3720
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <LinkedInLogoIcon className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Terminal-style profile card */}
        <div className="min-w-0 rounded-xl border bg-card/80 font-mono text-sm shadow-2xl shadow-primary/5 backdrop-blur">
          <div className="flex items-center gap-2 border-b px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-2 text-xs text-muted-foreground">~/srini/whoami.go</span>
          </div>
          <pre className="overflow-x-auto p-5 leading-7">
            <code>
              <span className="text-muted-foreground">{"// currently"}</span>
              {"\n"}
              <span className="text-primary">engineer</span>
              {" := Engineer{\n"}
              {"  Role:     "}
              <span className="text-amber-600 dark:text-amber-400">&quot;Senior SWE&quot;</span>
              {",\n"}
              {"  Company:  "}
              <span className="text-amber-600 dark:text-amber-400">&quot;OntoBorn&quot;</span>
              {",\n"}
              {"  Stack:    []string{"}
              <span className="text-amber-600 dark:text-amber-400">&quot;Go&quot;</span>
              {", "}
              <span className="text-amber-600 dark:text-amber-400">&quot;AWS&quot;</span>
              {", "}
              <span className="text-amber-600 dark:text-amber-400">&quot;AI&quot;</span>
              {"},\n"}
              {"  Building: "}
              <span className="text-amber-600 dark:text-amber-400">&quot;StockTrio&quot;</span>
              {",\n"}
              {"  OpenTo:   "}
              <span className="text-primary">true</span>
              {",\n}"}
            </code>
          </pre>
        </div>
      </div>

      <div className="container relative pb-16">
        <dl className="grid divide-y rounded-xl border bg-background/60 backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-1 p-6">
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="text-3xl font-bold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
