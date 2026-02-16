import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

export const metadata: Metadata = {
  title: "Blog & News | Chicago Indian Arts",
  description: "Latest news, articles, and stories from Chicago Indian Arts.",
};

const posts = [
  {
    slug: "vaarta-2026-lineup-announced",
    title: "Vaarta 2026 Lineup Announced",
    excerpt: "We're thrilled to announce the featured authors and speakers for our upcoming literature festival.",
    date: "January 15, 2026",
    category: "Vaarta",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
  },
  {
    slug: "prasang-designer-spotlight",
    title: "Prasang Designer Spotlight: Emerging Talent",
    excerpt: "Meet the up-and-coming designers who will showcase their collections at Prasang 2026.",
    date: "January 10, 2026",
    category: "Prasang",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea41c795?w=600&q=80",
  },
  {
    slug: "varnam-conservation-partnership",
    title: "Varnam Partners with Wildlife Conservation Society",
    excerpt: "A new partnership that will bring wildlife conservation talks and exhibitions to our photography program.",
    date: "December 20, 2025",
    category: "Varnam",
    image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=600&q=80",
  },
  {
    slug: "community-impact-report-2025",
    title: "2025 Community Impact Report",
    excerpt: "Looking back at a year of cultural celebration: the numbers, stories, and moments that defined 2025.",
    date: "December 1, 2025",
    category: "Community",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 px-6 lg:px-12 bg-cream">
        <FadeInSection className="max-w-[1200px] mx-auto text-center">
          <SectionTag>Stories</SectionTag>
          <h1 className="font-heading text-4xl lg:text-[4.5rem] font-light mb-6 text-primary-dark">
            Blog &amp; News
          </h1>
          <p className="text-lg text-text-light max-w-[700px] mx-auto">
            Stories, updates, and insights from the world of Chicago Indian Arts.
          </p>
        </FadeInSection>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <FadeInSection key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative h-[250px] overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="text-xs tracking-[2px] uppercase text-accent-gold font-semibold mb-2">
                  {post.category}
                </div>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-primary-dark group-hover:text-accent-terracotta transition-colors">
                  {post.title}
                </h2>
                <p className="text-text-light text-sm leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                <div className="text-xs text-text-light">{post.date}</div>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </section>
    </>
  );
}
