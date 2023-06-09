import Image from "next/image";
import Link from "next/link";
import { Butter } from "buttercms";
import AuthorCard from "./authorCard";
import HumanDate from "./humanDate";

interface Props {
  post: Butter.Post;
  tagFilter?: string;
}

export default function PostsPreview({ post, tagFilter }: Props) {
  return (
    <div className="card card-compact md:card-side bg-base-100 shadow-xl mx-auto">
      <figure className="w-full md:w-1/3">
        {post.featured_image && (
          <Image
            src={post.featured_image}
            alt={post.featured_image_alt}
            width={400}
            height={400}
            priority
          />
        )}
      </figure>
      <div className="card-body md:w-2/3">
        <h2 className="card-title text-success">
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </h2>
        <HumanDate dateString={post.published as unknown as string} />
        <div dangerouslySetInnerHTML={{ __html: post.summary }}></div>
        <div className="flex flex-wrap">
          {post.tags.map((tag) => (
            <div
              className={`badge m-1 ${
                tagFilter === tag.slug ? "badge-success" : "badge-outline"
              }`}
              key={tag.slug}
            >
              <Link href={`/blogs/tags/${tag.slug}`}>{tag.name}</Link>
            </div>
          ))}
        </div>
        <div className="card-actions justify-between">
          <div className="my-auto">
            <AuthorCard author={post.author} />
          </div>
          <div>
            <Link href={`/blogs/${post.slug}`} className="btn btn-neutral">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
