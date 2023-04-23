import AuthorCard from "@/components/authorCard";
import HumanDate from "@/components/humanDate";
import { butter } from "@/utils/buttercms";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next/types";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  return { title: post?.seo_title, description: post?.summary };
}

async function getPost(slug: string) {
  const post = await butter.post.retrieve(slug);
  return post.data?.data;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return (
    <>
      {!!!post ? (
        <h1>Post Not Found</h1>
      ) : (
        <div>
          <div>
            <h2 className="text-3xl font-semibold pb-4">{post.title}</h2>
            <div className="flex flex-wrap justify-between">
              {/* First two components */}
              <div className="sm:w-auto pb-4">
                <AuthorCard author={post.author} />
              </div>
              <div className="sm:w-auto">
                <HumanDate dateString={post.published as unknown as string} />
              </div>

              {/* Third component */}
              <div className="sm:max-w-[50%] lg:w-auto pb-4">
                {post.tags.map((tag) => (
                  <div className="badge badge-outline mr-2" key={tag.slug}>
                    <Link href={`/blogs/tags/${tag.slug}`}>{tag.name}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <figure>
            {post.featured_image && (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "0",
                  paddingBottom: "43.75%",
                }}
              >
                <Image
                  src={post.featured_image}
                  alt={post.featured_image_alt}
                  fill
                  priority
                />
              </div>
            )}
          </figure>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.body! }}
          ></div>
        </div>
      )}
    </>
  );
}
