import Butter from "buttercms";

interface Props {
  author: Butter.Author;
}

export default function AuthorCard({ author }: Props) {
  return (
    <a>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      By {author.first_name} {author.last_name}
    </a>
  );
}
