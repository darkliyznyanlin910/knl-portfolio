import PostsPreview from "@/components/postPreview";
import { TagsMenu } from "@/components/tagsMenu";
import { butter } from "@/utils/buttercms";
import type { Metadata } from "next/types";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tag = await butter.tag.retrieve(params.slug);
  return { title: `Blog | ${tag.data?.data.name}` };
}

async function getPosts(slug: string) {
  const posts = await butter.post.list({ tag_slug: slug });
  return posts.data?.data;
}

async function getAllTags() {
  const tags = await butter.tag.list();
  return tags.data?.data;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const posts = await getPosts(params.slug);
  const tags = await getAllTags();
  return (
    <>
      <div>
        {!posts || !tags ? (
          <div>No tags found.</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <TagsMenu tags={tags} />
            <div className="col-span-3">
              {!!!posts ? (
                <div>No Posts found.</div>
              ) : (
                <>
                  {posts?.map((post, index) => (
                    <div
                      key={index}
                      className={index !== posts.length - 1 ? "mb-4" : ""}
                    >
                      <PostsPreview
                        key={index}
                        post={post}
                        tagFilter={params.slug}
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
