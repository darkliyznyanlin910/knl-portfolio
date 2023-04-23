import { TimelineCard } from "@/components/timelineCard";
import type { Metadata } from "next/types";
import Image from "next/image";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Johnny Lin | Experience",
};

export default function Experience() {
  return (
    <Timeline
      props={[
        {
          element: (
            <TimelineCard
              icon={
                <Image
                  src={"/experience/mysfit.png"}
                  alt={"CWSS"}
                  width={24}
                  height={24}
                  style={{ height: "auto", width: "auto" }}
                />
              }
              title={"Full Stack Developer, CTO"}
              subtitle={"Mysfit Pte. Ltd."}
              link={"https://dev.mysfitygn.com"}
              timeline={"Dec 2022 - Present"}
            >
              <ul className="max-w-md space-y-1 list-disc list-inside">
                <li>
                  Planned website architecture, frontend - Next.js, backend -
                  NodeJS with Typescript, API - TRPC.
                </li>
                <li>Reviewed code, debugged problems, and corrected issues.</li>
                <li>Coordinated 2 developers as team lead.</li>
                <li>
                  Participated in requirements gathering to solidify
                  prerequisites and determine best technical solution to meet
                  business needs.
                </li>
                <li>
                  Used NodeJS, Prisma ORM and SQL/No-SQL to develop and manage
                  databases.
                </li>
                <li>
                  Coordinated efficient, large-scale and automated software
                  deployments by setting up CI/CD pipelines.
                </li>
              </ul>
            </TimelineCard>
          ),
          type: "work",
        },
        {
          element: (
            <TimelineCard
              icon={
                <Image
                  src={"/education/sp.ico"}
                  alt={"CWSS"}
                  width={24}
                  height={24}
                  style={{ height: "auto", width: "auto" }}
                />
              }
              title={"Internship Student"}
              subtitle={
                "Autonomous Electric Vehicle Project @ Singapore Polytechnic"
              }
              link={
                "https://www.sp.edu.sg/engineering-cluster/eee/sp-engineering-show/engineering-show-2023/5g-aiot-lorawan-sensor-network-for-smart-and-sustainable-campus"
              }
              timeline={"Mar 2022 - Aug 2022"}
            >
              <ul className="max-w-md space-y-1 list-disc list-inside">
                <li>Achieved Distinction for this internship project.</li>
                <li>
                  Consulted with supervisors and initiated project goals and
                  timeline.
                </li>
                <li>
                  Volunteered as team leader for team of 7 internship students.
                </li>
                <li>
                  Served as a point of contact person for my department to
                  supervisors.
                </li>
                <li>
                  Improved autonomous navigation system to be more reliable.
                </li>
                <li>Improved object detection algorithm.</li>
                <li>
                  Implemented private LAN network in SP campus to test remote
                  operating system of Autonomous Vehicle.
                </li>
                <li>
                  Implemented secured API and website for users to book
                  Autonomous Vehicle.
                </li>
                <li>
                  Developed better and more optimized 3D mapping software.
                </li>
                <li>
                  Collaborated with other departments to develop a centralized
                  system architecture.
                </li>
              </ul>
            </TimelineCard>
          ),
          type: "work",
        },
      ]}
    />
  );
}
