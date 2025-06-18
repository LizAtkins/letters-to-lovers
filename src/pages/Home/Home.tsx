import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { categories, poems, getCategoryById } from '../../data/poems';
import type { Poem } from '../../data/poems';

const Home = () => {
  const [randomPoem, setRandomPoem] = useState<(Poem & { categoryTitle: string }) | null>(null);
  const [showRandomPoem, setShowRandomPoem] = useState(false);

  // Generate daily featured poem based on current date
  const dailyFeaturedPoem = useMemo(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const poemIndex = dayOfYear % poems.length;
    const poem = poems[poemIndex];
    const category = getCategoryById(poem.category);
    return { ...poem, categoryTitle: category?.title || '' };
  }, []);

  const generateRandomPoem = () => {
    const randomIndex = Math.floor(Math.random() * poems.length);
    const poem = poems[randomIndex];
    const category = getCategoryById(poem.category);
    setRandomPoem({ ...poem, categoryTitle: category?.title || '' });
    setShowRandomPoem(true);
  };

  const closeRandomPoem = () => {
    setShowRandomPoem(false);
    setRandomPoem(null);
  };

  return (
    <div className="space-y-8 bg-coquette-cream min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-8 relative">
        {/* Content */}
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="bg-white/90 backdrop-blur-sm border border-coquette-pink rounded-2xl shadow-2xl p-12 relative overflow-hidden">
            {/* Removed Decorative Elements */}
            
            <h1 className="text-4xl md:text-7xl font-handwriting text-coquette-text mb-8 leading-tight">
              Letters to Lovers
            </h1>
            <p className="text-base md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-light">
              A collection of poems exploring the many faces of love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Link 
                to="/category/a-love-lost" 
                className="bg-coquette-blue text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:bg-coquette-blue focus:bg-coquette-blue focus:ring-2 focus:ring-coquette-blue/40 transform hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg min-w-[140px] min-h-[44px]"
              >
                Start Reading
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent text-coquette-blue px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 border-2 border-coquette-blue focus:ring-2 focus:ring-coquette-blue/40 transform hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg min-w-[140px] min-h-[44px]"
              >
                About the Collection
              </Link>
            </div>
            
            {/* Subtle Stats */}
            <div className="flex justify-center items-center gap-8 mt-12 pt-8 border-t border-coquette-lightpink">
              <div className="text-center">
                <div className="text-2xl font-bold text-coquette-pink">{poems.length}</div>
                <div className="text-sm text-gray-600">Poems</div>
              </div>
              <div className="w-px h-8 bg-coquette-lightpink"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coquette-pink">{categories.length}</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-coquette-text mb-8 text-center">
          A love that...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group block"
            >
              <div className={
                `bg-white rounded-lg p-4 md:p-6 min-h-[8rem] h-full flex flex-col transition-all duration-200 cursor-pointer border-2 border-coquette-lightpink shadow-[4px_4px_0px_0px_rgba(249,201,226,1)] hover:shadow-[6px_6px_0px_0px_rgba(249,201,226,1)]`
              }>
                <div className="text-coquette-text">
                  <h3 className="text-base md:text-xl font-serif font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm md:text-base text-coquette-text-light mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-coquette-text-light text-sm">
                      {category.poemCount} poems
                    </span>
                    <svg
                      className="w-5 h-5 text-coquette-text-light group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* Random Poem Card */}
          <button
            onClick={generateRandomPoem}
            className="card h-full bg-white rounded-xl p-8 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            style={{ textAlign: 'left' }}
          >
            <div>
              <h3 className="text-base md:text-xl font-serif font-semibold text-coquette-text mb-2 flex items-center gap-2">
                Surprise Me
                <span role="img" aria-label="sparkles">✨</span>
              </h3>
              <p className="text-sm md:text-base text-coquette-text-light mb-4">
                Not sure where to start? Let fate pick a poem for you.
              </p>
            </div>
            <span className="text-coquette-blue font-semibold mt-2 text-base md:text-lg">Random Poem →</span>
          </button>
        </div>
      </section>

      {/* Featured Poem */}
      <section className="bg-coquette-card-bg border border-coquette-card-border rounded-xl p-6 md:p-8 border-b-4 border-r-4 border-b-coquette-text/20 border-r-coquette-text/20 shadow-lg mt-16">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-coquette-text mb-6">
          Poem of the Day
        </h2>
        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-serif font-medium text-coquette-text mb-4">
            {dailyFeaturedPoem.title}
          </h3>
          <div className="text-coquette-text-light leading-relaxed whitespace-pre-line">
            {dailyFeaturedPoem.content}
          </div>
          <p className="mt-4 text-coquette-text-light text-sm italic">
            — From "{dailyFeaturedPoem.categoryTitle}"
          </p>
        </div>
      </section>

      {/* Random Poem Modal */}
      {showRandomPoem && randomPoem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-coquette-card-bg border border-coquette-card-border rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border-b-4 border-r-4 border-b-coquette-text/20 border-r-coquette-text/20 shadow-lg relative">
            <button
              onClick={closeRandomPoem}
              className="absolute top-4 right-4 text-coquette-text-light hover:text-coquette-text transition-colors duration-200 text-xl font-bold"
            >
              ×
            </button>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-serif font-medium text-coquette-text mb-4">
                {randomPoem.title}
              </h3>
              <div className="text-coquette-text-light leading-relaxed whitespace-pre-line text-lg mb-6">
                {randomPoem.content}
              </div>
              <p className="text-coquette-text-light text-sm italic">
                — From "{randomPoem.categoryTitle}"
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <button
                onClick={generateRandomPoem}
                className="bg-coquette-blue hover:bg-coquette-blue/90 text-white px-6 py-2 rounded-md font-semibold transition-all duration-200 shadow-sm"
              >
                Another Surprise
              </button>
              <Link
                to={`/category/${randomPoem.category}`}
                onClick={closeRandomPoem}
                className="bg-coquette-lightpink text-pink-700 border border-pink-600 hover:bg-coquette-lightpink/80 px-6 py-2 rounded-md font-semibold transition-all duration-200 shadow-sm"
              >
                More Like This
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 