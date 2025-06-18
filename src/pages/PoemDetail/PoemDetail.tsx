import { useParams, Link } from 'react-router-dom';
import { poems, getCategoryById } from '../../data/poems';

const PoemDetail = () => {
  const { poemId } = useParams<{ poemId: string }>();
  
  const poem = poems.find(p => p.id === parseInt(poemId || '0'));
  
  if (!poem) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-serif font-semibold text-coquette-text mb-4">
          Poem Not Found
        </h1>
        <p className="text-coquette-text-light mb-8">
          The poem you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    );
  }

  const category = getCategoryById(poem.category);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link 
          to={`/category/${poem.category}`}
          className="text-coquette-text-light hover:text-coquette-text transition-colors duration-200 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to {category?.title}</span>
        </Link>
      </div>

      {/* Poem Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-coquette-text mb-4">
          {poem.title}
        </h1>
        <p className="text-coquette-text-light">
          From "{category?.title}"
        </p>
      </div>

      {/* Poem Content */}
      <div className="bg-coquette-card-bg border border-coquette-card-border rounded-xl p-8 border-b-4 border-r-4 border-b-coquette-text/20 border-r-coquette-text/20 shadow-lg">
        <div className="prose prose-lg max-w-none">
          <div className="text-coquette-text-light leading-relaxed whitespace-pre-line text-lg">
            {poem.content}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8">
        <Link to={`/category/${poem.category}`} className="btn-secondary">
          ← Back to Category
        </Link>
        <Link to="/" className="btn-primary">
          Browse All Poems
        </Link>
      </div>
    </div>
  );
};

export default PoemDetail; 