import PostsPreview from "@/components/postPreview";
import { butter } from "@/utils/buttercms";

async function getPostList() {
  const posts = await butter.post.list();
  return posts.data?.data;
}

export default async function Blog() {
  const posts = await getPostList();
  return (
    <>
      {!posts?.length && <div>No blog posts found.</div>}
      {posts?.map((post, index) => (
        <PostsPreview key={index} post={post} tagFilter={undefined} />
      ))}
    </>
  );
}
