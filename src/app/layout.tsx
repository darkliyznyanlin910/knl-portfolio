"use client";

import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

import Link from "next/link";
import {
  FaBars,
  FaLaptopCode,
  FaCertificate,
  FaNewspaper,
  FaBriefcase,
  FaInfo,
} from "react-icons/fa";

import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentPath = usePathname();
  const directory = currentPath.split("/").filter(Boolean);
  return (
    <html lang="en" data-theme="dark">
      <body>
        <div className="drawer shadow-md">
          <input
            id="my-drawer-3"
            type="checkbox"
            className="drawer-toggle"
            checked={sidebarOpen}
            onChange={() => setSidebarOpen(!sidebarOpen)}
          />
          <div className="drawer-content flex flex-col min-h-screen">
            {/* <!-- Navbar --> */}
            <div
              className="w-full navbar bg-base-300 sticky top-0"
              style={{ zIndex: 10000 }}
            >
              <div className="flex-none md:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <FaBars size={20} />
                </label>
              </div>
              <div className="flex-1 px-2 mx-2 text-success font-bold text-xl">
                <Link href={"/"}>Johnny Lin</Link>
              </div>
              <div className="flex-none hidden md:block">
                <ul className="menu menu-horizontal">
                  {/* <!-- Navbar menu content here --> */}
                  <li>
                    <Link href={"/projects"} className="text-success">
                      <FaLaptopCode size={30} />
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href={"/education"} className="text-success">
                      <FaCertificate size={30} />
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link href={"/experience"} className="text-success">
                      <FaBriefcase size={30} />
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link href={"/blogs"} className="text-success">
                      <FaNewspaper size={30} />
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Page content here --> */}
            <main className="mt-4 flex px-4 flex-grow">
              <div className="container mx-auto w-full md:w-3/4 lg:w-2/3 mb-4">
                {directory.length > 0 && (
                  <div className="text-md breadcrumbs mb-2">
                    <ul>
                      <li>
                        <Link href={"/"}>Home</Link>
                      </li>
                      {directory.map((path, index) => {
                        const prevPaths = directory.slice(0, index);
                        const combinedPath =
                          prevPaths.join("/") +
                          (prevPaths.length > 0 ? "/" : "") +
                          path;

                        if (path === "tags") {
                          return <Fragment key={index}></Fragment>;
                        }

                        return (
                          <li key={index}>
                            {index == directory.length - 1 ? (
                              <span>
                                {path.slice(0, 1).toUpperCase() + path.slice(1)}
                              </span>
                            ) : (
                              <Link href={combinedPath}>
                                {path.slice(0, 1).toUpperCase() + path.slice(1)}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {children}
              </div>
            </main>
            <footer className="footer p-4 bg-base-300">
              <div className="w-full items-center flex justify-between">
                <p>Copyright © 2023 Johnny Lin</p>
                <button className="btn btn-sm btn-outline" type="button">
                  <Link href={"/techUsed"} className="inline-flex items-center">
                    <FaInfo className="mr-3" /> Tech Used
                  </Link>
                </button>
              </div>
            </footer>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100">
              <li>
                <Link
                  href={""}
                  className="text-success font-bold text-xl mt-3"
                  onClick={() => {
                    setSidebarOpen(false);
                  }}
                >
                  Johnny Lin
                </Link>
              </li>
              <div className="divider"></div>
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link
                  href={"/projects"}
                  className="text-success"
                  onClick={() => {
                    setSidebarOpen(false);
                  }}
                >
                  <FaLaptopCode size={30} /> Projects
                </Link>
              </li>
              <li>
                <Link
                  href={"/education"}
                  className="text-success"
                  onClick={() => {
                    setSidebarOpen(false);
                  }}
                >
                  <FaCertificate size={30} /> Education
                </Link>
              </li>
              <li>
                <Link
                  href={"/experience"}
                  className="text-success"
                  onClick={() => {
                    setSidebarOpen(false);
                  }}
                >
                  <FaBriefcase size={30} /> Experience
                </Link>
              </li>
              <li>
                <Link
                  href={"/blogs"}
                  className="text-success"
                  onClick={() => {
                    setSidebarOpen(false);
                  }}
                >
                  <FaNewspaper size={30} /> Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </body>
      <Analytics />
    </html>
  );
}
