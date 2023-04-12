import { Timeline } from "@/components/timeline";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Education",
  description: "Johnny Lin | Education",
};

export default function Education() {
  return (
    <>
      <Timeline
        props={[
          { element: <div>Test1</div>, type: "work" },
          { element: <div>Test2</div>, type: "star" },
        ]}
      />
    </>
  );
}
