import Container from "@/components/Container";
import PopularPosts from "@/components/home/popular-posts";
import TopCatogories from "@/components/home/top-categories";
import CardCategory from "@/components/CardCategory";
import Link from "next/link";
import { getBlogPosts } from "./utils";
import { MainNav } from "@/components/main-nav";
import { Navbar } from "@/components/Navbar";
export default function Home() {
    const posts = getBlogPosts()
  return (
     <>
    <Container>
      <main className="flex flex-col items-start justify-between md:flex-row mt-3 p-10 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                href={`/blog/${post.metadata.category}/${post.slug}`}
                key={post.slug}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4 mt-5 md:mt-5">TOP CATEGORIES</h1>
            <TopCatogories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">POPULAR POSTS</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
     </>
  );
}
