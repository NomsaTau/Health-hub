import { useState, useMemo } from 'react';
import Hero from '../components/Hero.jsx';
import BlogCard from '../components/BlogCard.jsx';
import CTA from '../components/CTA.jsx';
import { blogPosts, blogCategories } from '../data/blog.js';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return blogPosts;
    return blogPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Hero
        variant="inner"
        eyebrow="HealthHub Blog"
        title="Insights from the workplace medical frontline"
        description="Practical writing on occupational health, executive wellness, regulatory change, and what we are seeing across the South African workforce."
      />

      <section className="section-padding bg-white">
        <div className="container-section">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-soft'
                    : 'bg-pink text-dark/70 hover:bg-peach'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-dark/60">
              No posts in this category yet. Check back soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  image={post.image}
                  href={`/blog/${post.slug}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA
        eyebrow="Stay informed"
        title="Get our quarterly newsletter"
        description="A short, practical roundup of what changed in occupational health and what we recommend doing about it."
        primaryCta={{ to: '/contact', label: 'Subscribe' }}
      />
    </>
  );
}
