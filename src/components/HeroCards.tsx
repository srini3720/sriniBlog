import { Badge } from "./ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Linkedin, Globe } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import GolangImage from "./assets/GolangImage.svg";
import ReactImage from "./assets/reactIcon.svg";
import JavascriptImage from "./assets/javascriptIcon.svg";
import NextJSImage from "./assets/NextJSIcon.svg";
import AwsImage from "./assets/awsIcon.svg";
import DockerImage from "./assets/DockerIcon.svg";
import MysqlIcon from "./assets/MysqlIcon.svg";
import CICDIcon from "./assets/CICDIcon.svg";
import Image from "next/image";
import sriniIcon from "./assets/srini.jpeg"

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
     <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Stock Trend
            <a
              rel="noreferrer noopener"
              href="https://stocktrend.net"
              target="_blank"
            >
              <Badge variant="secondary" className="text-sm text-primary">
                Stocktrend.net
              </Badge>
              </a>
          </CardTitle>
          <CardDescription className="pt-2">
            Discover seamless{" "}
            <span className="inline font-bold text-accent-foreground bg-clip-text">
              Stock Market Insights
            </span>
          </CardDescription>
          <a
            rel="noreferrer noopener"
            href="https://stocktrend.net"
            target="_blank"
            className={`w-full border ${buttonVariants({
              variant: "secondary",
            })}`}
          >
            <Globe className="mr-2 w-5 h-5" />
            Visit Site
          </a>
        </CardHeader>
      </Card>
     

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <Image
            src={sriniIcon}
            alt="user avatar"
            width={100}
            height={100}
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Srinivasan Shanmugam</CardTitle>
          <CardDescription className="font-normal text-primary">
            Software Engineer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            I enjoy coding and problem-solving. I’ve created{" "}
            <span className="inline cursor-pointer text-primary  font-bold bg-clip-text">
              <a
                rel="noreferrer noopener"
                href="https://app.stocktrend.net"
                target="_blank"
              >
               Stocktrend.net
              </a>
            </span>{" "}
            and{" "}
            <span className="inline cursor-pointer font-bold text-primary bg-clip-text">
              <a
                rel="noreferrer noopener"

                href="https://11auth.com"
                target="_blank"
              >
                11auth.com
              </a>
            </span>{" "}
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/srini3720"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/srini3720"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/srini3720"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Skills
            <Badge variant="secondary" className="text-sm text-primary">
              Full Stack
            </Badge>
          </CardTitle>

          <CardDescription className="pt-2">
            Over{" "}
            <span className="inline  font-bold text-accent-foreground  bg-clip-text">
              5+ years
            </span>{" "}
            of software development experience.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="w-full">
            <a
              rel="noreferrer noopener"
              href="https://github.com/srini3720"
              target="_blank"
              className={`w-full border ${buttonVariants({
                variant: "secondary",
              })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a>
          </div>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex space-x-10 w-full">
          <div className="space-y-5">
            <span className="flex">
              <Image src={GolangImage} alt="GolangIcon" className="w-8 object-contain" />
              <h3 className="ml-2 mt-1">Go Lang</h3>
            </span>
            <span className="flex">
              <Image src={ReactImage} alt="reactIcon" className="w-8 object-contain" />
              <h3 className="ml-2 mt-1">React</h3>
            </span>
            <span className="flex">
              <Image src={JavascriptImage} alt="JsIcon" className="w-8 object-contain" />
              <h3 className="ml-2 mt-1">JS</h3>
            </span>
            <span className="flex">
              <Image src={NextJSImage} alt="NextIcon" className="w-8 object-contain" />
              <h3 className="ml-2 mt-1">Next JS</h3>
            </span>
          </div>
          <div className="space-y-5">
            <span className="flex">
              <Image src={AwsImage} alt="AwsIcon" className="w-8 object-contain" />
              <h3 className="ml-2 mt-1">AWS</h3>
            </span>
            <span className="flex">
              <Image src={DockerImage} alt="DockerIcon" className="w-8 object-contain" />
              <h3 className="ml-2 mt-1">Docker</h3>
            </span>
            <span className="flex">
              <Image src={MysqlIcon} alt="mysqlIcon" className="w-8 object-contain" />
              <h3 className="ml-2 mt-1">MYSQL</h3>
            </span>
            <span className="flex">
              <Image src={CICDIcon} alt="CiIcon" className="w-8 object-contain" />
              <h3 className="ml-2 mt-1">CI/CD</h3>
            </span>
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            11Auth
            <a
              rel="noreferrer noopener"
              href="https://11auth.com"
              target="_blank"
            >
              <Badge variant="secondary" className="text-sm text-primary">
                11Auth.com
              </Badge>
            </a>
          </CardTitle>

          <CardDescription className="pt-2">
            Supply Chain Product Verification with Real-time Tracking and{" "}
            <span className="inline  font-bold text-accent-foreground  bg-clip-text">
              Blockchain Transparency
            </span>
          </CardDescription>
          <a
            rel="noreferrer noopener"
            href="https://11auth.com"
            target="_blank"
            className={`w-full border ${buttonVariants({
              variant: "secondary",
            })}`}
          >
            <Globe className="mr-2 w-5 h-5" />
            Visit Site
          </a>
        </CardHeader>
      </Card>
    </div>
  );
};
