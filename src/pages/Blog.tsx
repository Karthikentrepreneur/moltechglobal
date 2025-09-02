import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title:
      "The Future of Biodiesel: Transforming Waste Cooking Oil into Clean Energy",
    excerpt:
      "Discover how advanced processing technologies are revolutionizing the conversion of used cooking oil into high-quality biodiesel feedstocks, creating a more sustainable energy future.",
    image:
      "https://images.unsplash.com/photo-1497436072909-f5e4be49cb84?w=800&h=400&fit=crop",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Sustainability",
    author: "Dr. Sarah Chen",
  };

  const blogPosts = [
    {
      title: "Circular Economy in Action: Palm Oil Waste to Valuable Products",
      excerpt:
        "Learn how Moltech transforms palm oil processing waste into high-value fatty acids and soap noodles, demonstrating the power of circular economy principles.",
      image:
        "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600&h=300&fit=crop",
      date: "January 10, 2024",
      readTime: "6 min read",
      category: "Innovation",
      author: "Michael Rodriguez",
    },
    {
      title: "ISCC Certification: Ensuring Sustainability in Global Supply Chains",
      excerpt:
        "Understanding the importance of ISCC certification in verifying sustainable sourcing and production practices across international markets.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop",
      date: "January 5, 2024",
      readTime: "5 min read",
      category: "Certification",
      author: "Emma Thompson",
    },
    {
      title: "Feed Additives Innovation: Optimizing Animal Nutrition Naturally",
      excerpt:
        "Explore our latest developments in natural feed additives that improve animal health while reducing environmental impact in livestock production.",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=300&fit=crop",
      date: "December 28, 2023",
      readTime: "7 min read",
      category: "Agriculture",
      author: "Dr. James Wilson",
    },
  ];

  const categories = [
    "All",
    "Sustainability",
    "Innovation",
    "Technology",
    "Business",
    "Agriculture",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Insights & Innovation
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest developments in sustainable
              bio-based products, industry insights, and Moltech's journey
              toward a circular economy.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-500">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      By {featuredPost.author}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  cat === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      By {post.author}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
