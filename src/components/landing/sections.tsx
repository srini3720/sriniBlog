import Link from "next/link";
import { ArrowRight, ArrowUpRight, GraduationCap, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { education, experience, profile, projects, skillGroups } from "./data";

function SectionHeading({ index, title, kicker }: { index: string; title: string; kicker?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-2 md:mb-14">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {index} / {kicker ?? title}
      </span>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border bg-secondary/60 px-2 py-0.5 font-mono text-xs text-secondary-foreground">
      {children}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="container py-20 md:py-28">
      <SectionHeading index="01" title="Engineering for education, at scale" kicker="About" />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a {profile.title} at {profile.company}, where I&apos;ve grown from intern to
            senior over four-plus years. I work with a team of talented developers building
            innovative, scalable solutions that empower learners and educators.
          </p>
          <p>
            My day-to-day spans <span className="text-foreground">Go</span>,{" "}
            <span className="text-foreground">Node.js</span>,{" "}
            <span className="text-foreground">AWS</span> and{" "}
            <span className="text-foreground">AI</span>: designing systems, shipping features,
            and keeping services healthy in production. I like fast-paced, collaborative teams
            and real-world problems, and I write about what I learn on the blog.
          </p>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
            <div className="space-y-1">
              <p className="font-semibold">{education.school}</p>
              <p className="text-sm text-muted-foreground">{education.degree}</p>
              <p className="text-sm text-muted-foreground">{education.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-y bg-muted/30">
      <div className="container py-20 md:py-28">
        <SectionHeading index="02" title="Experience" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xl font-semibold">{profile.company}</p>
            <p className="mt-1 text-sm text-muted-foreground">Full-time · since Mar 2022</p>
          </div>
          <ol className="relative space-y-10 border-l pl-8">
            {experience.map((job) => (
              <li key={job.role} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-background ${
                    job.current ? "bg-primary ring-4 ring-primary/20" : "bg-muted-foreground/40"
                  }`}
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                </div>
                <p className="mt-2 leading-relaxed text-muted-foreground">{job.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="container py-20 md:py-28">
      <SectionHeading index="03" title="Things I've built" kicker="Projects" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col justify-between rounded-xl border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 md:p-8"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
                <ArrowUpRight
                  className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{project.period}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-y bg-muted/30">
      <div className="container py-20 md:py-28">
        <SectionHeading index="04" title="Toolbox" kicker="Skills" />
        <div className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-background p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">{group.label}</p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Writing() {
  const posts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, 4);

  return (
    <section id="writing" className="container py-20 md:py-28">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading index="05" title="Latest writing" kicker="Blog" />
        <Link
          href="/blog"
          className={`mb-10 hidden md:mb-14 sm:inline-flex ${buttonVariants({ variant: "ghost" })}`}
        >
          All posts
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <ul className="divide-y border-y">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.metadata.category}/${post.slug}`}
              className="group grid gap-2 py-6 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-8"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {formatDate(post.metadata.publishedAt)}
              </span>
              <div>
                <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                  {post.metadata.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {post.metadata.summary}
                </p>
              </div>
              <span className="hidden md:block">
                <Tag>{post.metadata.category}</Tag>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/blog" className={`mt-6 w-full sm:hidden ${buttonVariants({ variant: "outline" })}`}>
        All posts
        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="container pb-10">
      <div className="relative overflow-hidden rounded-2xl border bg-card px-6 py-14 text-center md:px-12 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Let&apos;s build something.</h2>
          <p className="text-lg text-muted-foreground">
            Talking infrastructure, Go, AI products or an idea you want to ship? My calendar is open.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={profile.calendar}
              target="_blank"
              rel="noreferrer noopener"
              className={buttonVariants({ size: "lg" })}
            >
              Book a meeting
            </a>
            <a href={`mailto:${profile.email}`} className={buttonVariants({ size: "lg", variant: "outline" })}>
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
