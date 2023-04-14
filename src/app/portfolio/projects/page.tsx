import { ProjectCard } from "@/components/project";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Projects",
  description: "Johnny Lin | Projects",
};

export default function Projects() {
  return (
    <div>
      <div className="mb-4">
        <ProjectCard
          image={
            <Image
              src={"/knl-portfolio.png"}
              alt={"Test"}
              width={2000}
              height={2000}
              className="w-full"
              priority
            />
          }
          title={"This Portfolio"}
          link={"https://github.com/darkliyznyanlin910/knl-portfolio"}
        >
          <div>
            On one fine day, I just realized I don't have a consolidated
            portfolio website. That's why I started working on this project
          </div>
        </ProjectCard>
      </div>
    </div>
  );
}
