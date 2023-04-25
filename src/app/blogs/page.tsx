import PostsPreview from "@/components/postPreview";
import { butter } from "@/utils/buttercms";

async function getPostList() {
  const posts = await butter.post.list();
  return posts.data?.data;
}

export const revalidate = 60;

export default async function Blog() {
  const posts = await getPostList();
  return (
    <>
      {!posts?.length && <div>No blog posts found.</div>}
      {posts?.map((post, index) => (
        <div key={index} className={index !== posts.length - 1 ? "mb-4" : ""}>
          <PostsPreview post={post} />
        </div>
      ))}
    </>
  );
}
