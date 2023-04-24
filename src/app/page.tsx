import { SocialMediaLinks } from "@/components/socialMediaLinks";
import Image from "next/image";
import Link from "next/link";
import {
  FaBriefcase,
  FaCertificate,
  FaDownload,
  FaLaptopCode,
  FaNewspaper,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex-col md:flex-row-reverse">
      <Image
        src={"/profilePicture.jpg"}
        alt={"Profile Picture"}
        width={250}
        height={250}
        className="max-w-sm rounded-lg shadow-2xl"
        priority
      />
      <div className="pt-6">
        <h1 className="text-4xl font-bold">
          Hi I{"'"}m <span className="text-success">Johnny Lin</span>,
        </h1>
        <p className="py-6">
          Thank you for visiting my portfolio website! As a recent graduate of
          Singapore Polytechnic with a passion for Information Systems, I have a
          strong foundation in Full-stack Web Development and Cybersecurity, and
          am committed to expanding my skillset and achieving success in the
          industry. To learn more about my qualifications and experience, I
          invite you to check out my resume in PDF form. Click the 'Continue'
          button below to explore my website, and don't forget to download my
          resume to see what I can offer. Thank you!
        </p>
        <div className="flex justify-center md:justify-start">
          <SocialMediaLinks />
          <button className="btn btn-outline ml-3 btn-sm hover:btn-success">
            <Link
              href={
                "https://knl-personal.s3.ap-southeast-1.amazonaws.com/Kaung_NyanLin_Resume.pdf"
              }
              className="inline-flex"
              target="_blank"
            >
              <FaDownload className="mr-3" />
              My Resume
            </Link>
          </button>
        </div>
      </div>
      <div className="w-full grid md:hidden grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-2">
        <div className="col-span-1 sm:col-span-2">
          <h3 className="mt-2 text-2xl font-bold text-success tracking-tight md:text-3xl lg:text-4xl">
            Other Sections
          </h3>
        </div>
        <button className="btn hover:btn-success btn-sm">
          <Link href={"/projects"} className="inline-flex items-center">
            <FaLaptopCode size={24} className="mr-2" />
            Projects
          </Link>
        </button>
        <button className="btn hover:btn-success btn-sm">
          <Link href={"/education"} className="inline-flex items-center">
            <FaCertificate size={24} className="mr-2" />
            Education
          </Link>
        </button>
        <button className="btn hover:btn-success btn-sm">
          <Link href={"/experience"} className="inline-flex items-center">
            <FaBriefcase size={24} className="mr-2" />
            Experience
          </Link>
        </button>
        <button className="btn hover:btn-success btn-sm">
          <Link href={"/blogs"} className="inline-flex items-center">
            <FaNewspaper size={24} className="mr-2" />
            Blogs
          </Link>
        </button>
      </div>
    </div>
  );
}
