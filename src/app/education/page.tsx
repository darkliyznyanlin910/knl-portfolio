import { Timeline } from "@/components/timeline";
import { TimelineCard } from "@/components/timelineCard";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Education",
  description: "Johnny Lin | Education",
};

export default function Education() {
  return (
    <Timeline
      props={[
        {
          element: (
            <TimelineCard
              icon={
                <Image
                  src={"/education/SMU.png"}
                  alt={"CWSS"}
                  width={40}
                  height={40}
                  style={{ height: "auto", width: "auto" }}
                />
              }
              title={`Bachelor of Science (Information Systems)`}
              subtitle={"Singapore Management University"}
              link={"https://computing.smu.edu.sg/bsc-information-systems"}
              timeline={"Aug 2023 - Present"}
            >
              <ul className="w-full space-y-1 list-disc list-inside">
                <li>
                  <span className="text-success">
                    SMU .Hack, Technology Executive
                  </span>{" "}
                  - Part of a diverse team to organizes workshops, coding
                  bootcamps and annual hackathons.
                </li>
                <li>
                  <span className="text-success">
                    SMU Ellipsis, Technology Director
                  </span>{" "}
                  - Leading a team of technology executives, organizing
                  workshops, coding bootcamps and taking part in external
                  projects.
                </li>
                <li>
                  Received{" "}
                  <span className="text-success">
                    ASEAN Undergraduate Scholarship
                  </span>
                  .
                </li>
              </ul>
            </TimelineCard>
          ),
          type: "education",
        },
        {
          element: (
            <TimelineCard
              icon={
                <Image
                  src={"/education/NUS.png"}
                  alt={"NUS"}
                  width={24}
                  height={24}
                  style={{ height: "auto", width: "auto" }}
                />
              }
              title={"SP-NUS Collaboration Program"}
              subtitle={"National University of Singapore"}
              link={
                "https://www.sp.edu.sg/engineering-cluster/eee/news/eee/get-a-head-start-in-university-life-while-studying-for-an-eee-diploma-in-sp-join-the-sp-nus-collaboration-and-sp-sutd-pathway-programmes"
              }
              timeline={"Aug 2022 - Nov 2022"}
            >
              <ul className="w-full space-y-1 list-disc list-inside">
                <li>Selected to join SP-NUS CP</li>
                <li>
                  Completed Diploma course in{" "}
                  <span className="text-success">5 semesters</span>
                </li>
                <li>
                  Completed{" "}
                  <span className="text-success">
                    3 modules from NUS to get exemption
                  </span>{" "}
                  during my full-time degree
                </li>
              </ul>
            </TimelineCard>
          ),
          type: "education",
        },
        {
          element: (
            <TimelineCard
              icon={
                <Image
                  src={"/education/sp.ico"}
                  alt={"SP"}
                  width={24}
                  height={24}
                  style={{ height: "auto", width: "auto" }}
                />
              }
              title={"Diploma in Computer Engineering"}
              subtitle={"Singapore Polytechnic"}
              link={"https://sp.edu.sg/"}
              timeline={"Apr 2020 - Mar 2023"}
            >
              <ul className="w-full space-y-1 list-disc list-inside">
                <li>
                  Gained experience for IT security management systems (
                  <span className="text-success">
                    SIEM, Cyber Threat Intelligence Platforms
                  </span>
                  ) through hands-on practical lessons.
                </li>
                <li>
                  Elected into{" "}
                  <span className="text-success">Publicity Department</span> for
                  Singapore Polytechnic International Students' Club (SPISC) in
                  2021.
                </li>
                <li>
                  <span className="text-success">
                    Organized multiple student bonding events
                  </span>{" "}
                  for SPISC in AY2020/2021 and AY2021/2022
                </li>
                <li>
                  <span className="text-success">Chairperson</span> in
                  collaborating with Temasek Polytechnic International Students'
                  Group and organized an inter-poly bonding event for 200
                  participants.
                </li>
              </ul>
            </TimelineCard>
          ),
          type: "education",
        },
      ]}
    />
  );
}
