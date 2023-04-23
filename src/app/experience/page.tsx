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
                  Planned website architecture, frontend -{" "}
                  <span className="text-success">Next.js</span>, backend -
                  <span className="text-success">NodeJS with Typescript</span>,
                  API - <span className="text-success">TRPC</span>.
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
                  deployments by setting up{" "}
                  <span className="text-success">CI/CD pipelines</span>.
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
                <li>
                  <span className="text-success">Achieved Distinction</span> for
                  this internship project.
                </li>
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
                  <span className="text-success">
                    Improved autonomous navigation system
                  </span>{" "}
                  and{" "}
                  <span className="text-success">
                    object detection algorithm
                  </span>{" "}
                  to be more reliable.
                </li>
                <li>
                  Implemented private LAN network in SP campus to test remote
                  operating system of Autonomous Vehicle.
                </li>
                <li>
                  Implemented <span className="text-success">secured API</span>{" "}
                  and <span className="text-success">website</span> for users to
                  book Autonomous Vehicle.
                </li>
                <li>
                  Developed <span className="text-success">better</span> and{" "}
                  <span className="text-success">more optimized</span> 3D
                  mapping software.
                </li>
                <li>
                  Collaborated with other departments to develop a centralized
                  <span className="text-success">system architecture</span>.
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
