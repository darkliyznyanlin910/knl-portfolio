import { SocialMediaLinks } from "@/components/socialMediaLinks";
import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
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
          <div className="flex justify-center md:justify-start pt-3">
            <SocialMediaLinks />
            <button className="btn btn-neutral ml-3">
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
      </div>
    </div>
  );
}
