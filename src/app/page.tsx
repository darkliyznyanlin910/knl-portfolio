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
      <div>
        <Image
          src={"/profilePicture.jpeg"}
          alt={"Profile Picture"}
          width={2000}
          height={2000}
          className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-md mx-auto"
          priority
        />
      </div>
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
          invite you to check out my resume in PDF form. You can explore other
          sections in my website, and don't forget to download my resume to see
          what I can offer. Thank you!
        </p>
        <div className="flex justify-center md:justify-start">
          <SocialMediaLinks />
          <Link
            href={
              "https://knl-personal.s3.ap-southeast-1.amazonaws.com/KaungNyanLin_Resume.pdf"
            }
            className="btn btn-outline ml-3 btn-sm hover:btn-success"
            target="_blank"
          >
            <FaDownload className="mr-3" />
            My Resume
          </Link>
        </div>
      </div>
      <div className="w-full grid md:hidden grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="col-span-1 sm:col-span-2">
          <h3 className="mt-2 text-2xl font-bold text-success tracking-tight md:text-3xl lg:text-4xl">
            Other Sections
          </h3>
        </div>
        <Link href={"/projects"} className="btn hover:btn-success btn-sm">
          <FaLaptopCode size={24} className="mr-2" />
          Projects
        </Link>
        <Link href={"/education"} className="btn hover:btn-success btn-sm">
          <FaCertificate size={24} className="mr-2" />
          Education
        </Link>
        <Link href={"/experience"} className="btn hover:btn-success btn-sm">
          <FaBriefcase size={24} className="mr-2" />
          Experience
        </Link>
        <Link href={"/blogs"} className="btn hover:btn-success btn-sm">
          <FaNewspaper size={24} className="mr-2" />
          Blogs
        </Link>
      </div>
    </div>
  );
}
