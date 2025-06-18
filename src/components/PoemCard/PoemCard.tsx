interface PoemCardProps {
  title: string;
  excerpt: string;
  onClick: () => void;
}

const PoemCard = ({ title, excerpt, onClick }: PoemCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border-2 border-coquette-lightpink shadow-[4px_4px_0px_0px_rgba(249,201,226,1)] hover:shadow-[6px_6px_0px_0px_rgba(249,201,226,1)] transition-all duration-200 cursor-pointer p-6 rounded-lg h-48 flex flex-col"
    >
      <h3 className="text-xl font-cormorant font-semibold text-coquette-dark mb-2">
        {title}
      </h3>
      <p className="text-coquette-gray mb-3 font-lato flex-1 line-clamp-3">
        {excerpt}
      </p>
      <button className="text-pink-700 font-medium text-sm hover:text-pink-800 transition-colors duration-200 mt-auto text-left">
        Read Poem →
      </button>
    </div>
  );
};

export default PoemCard; 