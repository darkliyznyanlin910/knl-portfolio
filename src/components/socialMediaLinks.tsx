import Link from "next/link";
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function SocialMediaLinks() {
  return (
    <>
      <button className="btn btn-circle hover:btn-success">
        <Link
          href={"https://www.linkedin.com/in/kaung-nyan-lin/"}
          target="_blank"
        >
          <FaLinkedin size={25} />
        </Link>
      </button>
      <button className="btn btn-circle ml-3 hover:btn-success">
        <Link href={"https://github.com/darkliyznyanlin910"} target="_blank">
          <FaGithub size={25} />
        </Link>
      </button>
      <button className="btn btn-circle ml-3 hover:btn-success">
        <Link href={"mailto:darkliyznyanlin910@gmail.com"} target="_blank">
          <FaEnvelope size={25} />
        </Link>
      </button>
    </>
  );
}
