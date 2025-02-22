import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Rss } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#7303c0]  to-[#ec38bc] text-transparent bg-clip-text">
              Srinivasan
            </span>{" "}
            Shanmugam
          </h1>{" "}
        </main>
        <h2 className="inline text-4xl font-semibold">
          Software{" "}
          <span className="inline bg-gradient-to-r from-[#4e54c8]  to-[#1D2671] text-transparent bg-clip-text">
            Engineer
          </span>{" "}
        </h2>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          I architect software solutions and build scalable infrastructure used
          by over{" "}
          <span className="inline  font-bold bg-gradient-to-r from-[#7303c0]  to-[#ec38bc] text-transparent  bg-clip-text">
            45+ US universities
          </span>{" "}
          and{" "}
          <span className="inline font-bold bg-gradient-to-r from-[#4e54c8]  to-[#1D2671] text-transparent bg-clip-text">
            Millions of users.
          </span>{" "}
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            rel="noreferrer noopener"
            href="https://cal.com/srinivasan"
            target="_blank"
          >
            <Button className="w-full md:w-1/3">Book a Meeting</Button>
          </a>
          <a
            href="/blog"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Blog
            <Rss className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
