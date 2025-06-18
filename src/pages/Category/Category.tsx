import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getPoemsByCategory, getCategoryById } from '../../data/poems';
import PoemCard from '../../components/PoemCard/PoemCard';

const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [expandedPoemId, setExpandedPoemId] = useState<number | null>(null);

  if (!categoryId) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-serif font-semibold text-coquette-text mb-4">
          Category Not Found
        </h1>
        <p className="text-coquette-text-light mb-8">
          The category you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    );
  }

  const category = getCategoryById(categoryId);
  const poems = getPoemsByCategory(categoryId);

  if (!category) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-serif font-semibold text-coquette-text mb-4">
          Category Not Found
        </h1>
        <p className="text-coquette-text-light mb-8">
          The category you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    );
  }

  const handlePoemClick = (poemId: number) => {
    setExpandedPoemId(expandedPoemId === poemId ? null : poemId);
  };

  const getPageTitle = (categoryTitle: string) => {
    if (categoryTitle === 'I lost') {
      return 'A love that I lost';
    }
    if (categoryTitle === "I can't have") {
      return "A love that I can't have";
    }
    if (categoryTitle === 'I regret') {
      return 'A love that I regret';
    }
    return `A love that ${categoryTitle.toLowerCase()}`;
  };

  return (
    <div className="space-y-8">
      {/* Category Header */}
      <div className="text-center pt-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-coquette-text mb-4">
          {getPageTitle(category.title)}
        </h1>
        <p className="text-xl text-coquette-text-light max-w-2xl mx-auto">
          {category.description}
        </p>
      </div>

      {/* Poems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {poems.map((poem) => (
          <div key={poem.id} className="space-y-4">
            <PoemCard
              key={poem.id}
              title={poem.title}
              excerpt={poem.excerpt}
              onClick={() => handlePoemClick(poem.id)}
            />
            
            {/* Expanded Poem Content */}
            {expandedPoemId === poem.id && (
              <div className="bg-coquette-card-bg border border-coquette-card-border rounded-xl p-6 border-b-4 border-r-4 border-b-coquette-text/20 border-r-coquette-text/20 shadow-lg animate-fade-in relative">
                <button
                  onClick={() => setExpandedPoemId(null)}
                  className="absolute top-4 right-4 text-coquette-text-light hover:text-coquette-text transition-colors duration-200 text-xl font-bold"
                >
                  ×
                </button>
                <div className="prose prose-lg max-w-none">
                  <div className="text-coquette-text-light leading-relaxed whitespace-pre-line text-lg">
                    {poem.content}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Back to Categories */}
      <div className="text-center pt-8">
        <Link to="/" className="btn-secondary">
          ← Back to All Categories
        </Link>
      </div>
    </div>
  );
};

export default Category; 