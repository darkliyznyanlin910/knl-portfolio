import HumanDate from "@/components/humanDate";
import { TechUsedCard } from "@/components/techUsed";
import { env } from "@/env.mjs";
import { ListDeploymentsResponse } from "@/types/listDeployments";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next/types";
import {
  FaBriefcase,
  FaCertificate,
  FaCircle,
  FaLaptopCode,
  FaNewspaper,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Technologies Used",
  description: "Johnny Lin | Portfolio",
};

async function getVercelDeploymentDetail() {
  const result = await fetch(
    "https://api.vercel.com/v6/deployments?limit=1&projectId=prj_wBV8zyAJdJJZ55IbdMCW9XRqRTKC&target=production",
    {
      headers: {
        Authorization: `Bearer ${env.VERCEL_TOKEN}`,
      },
      method: "get",
      cache: "no-cache",
    }
  );
  const data = (await result.json()) as ListDeploymentsResponse;
  return data.deployments.at(0);
}
export default async function Home() {
  const latestDeployment = await getVercelDeploymentDetail();
  function getStateColor(state: string) {
    switch (state) {
      case "READY":
        return "success";
      case "ERROR":
      case "CANCELED":
        return "red-600";
      case "BUILDING":
      case "INITIALIZING":
      case "QUEUED":
      default:
        return "warning";
    }
  }
  return (
    <div>
      <div className="mb-8 md:text-center">
        <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
          <span className="text-success">Technologies</span> Used in this
          Website
        </h3>
      </div>
      <div className="space-y-6 sm:grid sm:grid-flow-row sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 lg:gap-x-8">
        <TechUsedCard
          icon={
            <Image
              src={"/techUsed/vercel.ico"}
              alt={"Vercel"}
              height={24}
              width={24}
            />
          }
          title={"Deployed with Vercel"}
          link={"https://vercel.com/"}
        >
          {!!latestDeployment ? (
            <div>
              <p className="mb-2">Latest Deployment</p>
              <p
                className={`text-sm text-${getStateColor(
                  latestDeployment?.state!
                )} mb-2 inline-flex`}
              >
                <FaCircle className="mr-2 self-center" />
                {latestDeployment?.state}
              </p>
              <p className="text-sm mb-2">
                Commit Message - {latestDeployment?.meta?.githubCommitMessage!}
              </p>
              <p className="text-sm mb-2">
                Created at{" "}
                <HumanDate
                  dateString={new Date(
                    latestDeployment?.createdAt!
                  ).toISOString()}
                />
              </p>
              {latestDeployment?.creator.username && (
                <p className="text-sm">
                  Created by {latestDeployment?.creator.username}
                </p>
              )}
            </div>
          ) : (
            <div className="text-center text-lg font-medium text-red-600">
              API Data Not Available
            </div>
          )}
        </TechUsedCard>
        <TechUsedCard
          icon={
            <Image
              src={"/techUsed/next.svg"}
              alt={"Next.js"}
              height={24}
              width={24}
            />
          }
          title={"Next.js"}
          link={"https://nextjs.org/"}
        >
          <div>
            Next.js is by far the best solution for full-stack web development.
            Currently using beta{" "}
            <span className="text-success">App Router</span>,{" "}
            <span className="text-success">React Server Components</span> &{" "}
            <span className="text-success">SEO optimisation</span>.
          </div>
        </TechUsedCard>
        <TechUsedCard
          icon={
            <Image
              src={"/techUsed/typescript.svg"}
              alt={"Typescript"}
              height={24}
              width={24}
            />
          }
          title={"Typescript"}
          link={"https://www.typescriptlang.org/"}
        >
          <div>
            I believe Typescript helped me to be a better web developer. The{" "}
            <span className="text-success">strictness</span> of Typescript leads
            to <span className="text-success">smoother building</span>.
          </div>
        </TechUsedCard>
        <TechUsedCard
          icon={
            <Image
              src={"/techUsed/butter-w.png"}
              alt={"ButterCMS"}
              height={24}
              width={24}
            />
          }
          title={"ButterCMS"}
          link={"https://buttercms.com"}
        >
          <div>
            ButterCMS has one of the best docs in headless-cms. Its{" "}
            <span className="text-success">ease to integrate</span> and{" "}
            <span className="text-success">customizability</span> are the main
            reason I chose to build my blog on top of it.
          </div>
        </TechUsedCard>
        <TechUsedCard
          icon={
            <Image
              src={"/techUsed/tailwind.svg"}
              alt={"Tailwind"}
              height={24}
              width={24}
            />
          }
          title={"Tailwind"}
          link={"https://tailwindcss.com/"}
        >
          <div className="text-2xl font-semibold">
            What{"'"}s not to like about{" "}
            <span className="text-success">Tailwind</span>?
          </div>
        </TechUsedCard>
        <TechUsedCard
          icon={
            <Image
              src={"/techUsed/daisyUI.ico"}
              alt={"DaisyUI"}
              height={24}
              width={24}
            />
          }
          title={"DaisyUI"}
          link={"https://daisyui.com/"}
        >
          <div>
            DaisyUI combines a lot of tailwind classNames to create new
            classNames. This helped me in{" "}
            <span className="text-success">
              coming up with frontend UI in a short time
            </span>
            .
          </div>
        </TechUsedCard>
      </div>
    </div>
  );
}
