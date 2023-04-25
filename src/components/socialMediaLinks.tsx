import Link from "next/link";
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function SocialMediaLinks() {
  return (
    <>
      <Link
        href={"https://www.linkedin.com/in/kaung-nyan-lin/"}
        className="btn btn-circle hover:btn-success btn-sm"
        target="_blank"
      >
        <FaLinkedin size={20} />
      </Link>
      <Link
        href={"https://github.com/darkliyznyanlin910"}
        target="_blank"
        className="btn btn-circle ml-3 hover:btn-success btn-sm"
      >
        <FaGithub size={20} />
      </Link>
      <Link
        href={"mailto:darkliyznyanlin910@gmail.com"}
        target="_blank"
        className="btn btn-circle ml-3 hover:btn-success btn-sm"
      >
        <FaEnvelope size={20} />
      </Link>
    </>
  );
}
