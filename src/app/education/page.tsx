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
                  src={"/education/NUS.png"}
                  alt={"CWSS"}
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
              <ul className="max-w-md space-y-1 list-disc list-inside">
                <li>Selected to join SP-NUS CP</li>
                <li>Completed Diploma course in 5 semesters</li>
                <li>
                  Completed 3 modules from NUS to get exemption during my
                  full-time degree
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
                  alt={"CWSS"}
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
              <ul className="max-w-md space-y-1 list-disc list-inside">
                <li>
                  Gained experience for IT security management systems (SIEM,
                  Cyber Threat Intelligence Platforms) through hands-on
                  practical lessons.
                </li>
                <li>
                  Elected into Publicity Department for Singapore Polytechnic
                  International Students' Club (SPISC) in 2021.
                </li>
                <li>
                  Organized multiple student bonding events for SPISC in
                  AY2020/2021 and AY2021/2022
                </li>
                <li>
                  Chairperson in collaborating with Temasek Polytechnic
                  International Students' Group and organized a inter-poly
                  bonding event for 200 participants.
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
                  src={"/education/commonwealth-secondary-school.jpg"}
                  alt={"CWSS"}
                  width={24}
                  height={24}
                  style={{ height: "auto", width: "auto" }}
                />
              }
              title={"GCE O-Levels"}
              subtitle={"Commonwealth Secondary School"}
              link={"https://www.commonwealthsec.moe.edu.sg/"}
              timeline={"Jan 2018 - Nov 2019"}
            >
              <ul className="max-w-md space-y-1 list-disc list-inside">
                <li>Attended CWSS with full scholarship in Singapore.</li>
                <li>Elected as a class Chairperson for Secondary 3.</li>
                <li>
                  Organized class bonding sessions once in one term (3 months).
                </li>
                <li>
                  Participated as right-wing striker in School Soccer Team.
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
