import { SocialMediaLinks } from "@/components/socialMediaLinks";
import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <Image
          src={"/profilePicture.jpg"}
          alt={"Profile Picture"}
          width={250}
          height={250}
          className="max-w-sm rounded-lg shadow-2xl"
          priority
        />
        <div>
          <h1 className="text-4xl font-bold">
            Hi I{"'"}m <span className="text-success">Johnny Lin</span>,
          </h1>
          <p className="py-6">
            Recent graduate of Singapore Polytechnic. Motivated individual
            working toward Information Systems degree. Committed to developing
            career path and expanding work experience. Strong knowledge of
            Full-stack Web Development and Cybersecurity.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="btn btn-neutral">
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
            <button className="btn btn-success ml-3">
              <Link href={"/portfolio"}>Continue</Link>
            </button>
          </div>
          <div className="flex justify-center md:justify-start pt-3">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
