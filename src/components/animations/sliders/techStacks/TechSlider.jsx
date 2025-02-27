"use client"

import SlideCards from "./SlideCards";
import ScrollVelocity from "./Tech";

const techStack = [
  "react",
  "nodejs",
  "mongo",
  "nextjs",
  "tailwind",
  "postgresql",
  "mysql",
  "prisma",
  "typescript",
  "javascript",
  "python",
  "c",
  "nestjs",
  "expressjs",
  "redux",
  "tailwind",
  "mui",
  "shadcn",
  "graphql",
  "git",
  "github",
  "gitlab",
  "figma",
  "vscode",
  "html",
  "css",
  "vercel",
  "jira",
  "bash",
  "terminal",
  "linux",
  "docker",
  "nginx",
  "openai",
  "cloudComputing",
  "firebase",
  "aws",
  "nextAuth",
];

export default function TechSlider() {
  return (
    <div className="w-screen px-4 py-8 font-nunito">
      <ScrollVelocity
        velocity={100}
        className="min-w-[50%] px-2"
        scrollerClassName="gap-4"
        numCopies={8}
        parallaxClassName="w-full"
      >
        {techStack.map((tech, index) => (
          <SlideCards key={index} text={tech} />
        ))}
      </ScrollVelocity>
    </div>
  );
}