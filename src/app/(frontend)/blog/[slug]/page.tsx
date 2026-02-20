import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { ArrowLeft } from "lucide-react";

// Static placeholder for blog posts - will be driven by Payload CMS
const posts: Record<string, { title: string; date: string; category: string; image: string; content: string[] }> = {
  "vaarta-2026-lineup-announced": {
    title: "Vaarta 2026 Lineup Announced",
    date: "January 15, 2026",
    category: "Vaarta",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
    content: [
      "We are thrilled to announce the featured authors and speakers for Vaarta 2026, our third annual literature festival celebrating India's rich storytelling traditions.",
      "This year's lineup includes National Book Award winner Priya Sharma, acclaimed poet Arjun Patel, literary critic Kavita Nair, and publisher Sameer Roy, among many other distinguished voices.",
      "The one-day festival will feature panel discussions, poetry readings, book launches, writing workshops, and intimate conversations with authors, all set against the stunning backdrop of the Chicago Cultural Center.",
      "Early bird registration is now open. Don't miss this celebration of Indian literature and storytelling.",
    ],
  },
  "prasang-designer-spotlight": {
    title: "Prasang Designer Spotlight: Emerging Talent",
    date: "January 10, 2026",
    category: "Prasang",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea41c795?w=1200&q=80",
    content: [
      "Prasang 2026 is dedicated to showcasing the next generation of Indian fashion designers who are redefining the intersection of tradition and modernity.",
      "This year, we are spotlighting five emerging designers whose work bridges heritage craftsmanship with contemporary aesthetics. From handloom reimagined to sustainable luxury, these designers represent the future of Indian fashion.",
      "Join us in July 2026 at the Navy Pier Grand Ballroom for an evening of stunning runway presentations, designer meet-and-greets, and a fashion networking mixer.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  return {
    title: post ? `${post.title} | Chicago Indian Arts` : "Blog | Chicago Indian Arts",
    description: post?.content[0] || "",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section className="pt-32 pb-24 px-6 lg:px-12 bg-cream min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-light mb-4 text-primary-dark">Post Not Found</h1>
          <Link href="/blog" className="text-accent-terracotta font-semibold">Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
        <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-12 pb-12 text-white w-full">
          <div className="text-xs tracking-[2px] uppercase text-accent-gold font-semibold mb-3">
            {post.category}
          </div>
          <h1 className="font-heading text-3xl lg:text-5xl font-light mb-3">{post.title}</h1>
          <div className="text-sm opacity-80">{post.date}</div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <FadeInSection className="max-w-[700px] mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-accent-terracotta font-semibold mb-10 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-text-light">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
