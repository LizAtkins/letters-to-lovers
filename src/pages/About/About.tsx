import aboutPhoto from '../../assets/about_photo.jpeg';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-coquette-text mb-6">
          About Letters to Lovers
        </h1>
        <p className="text-xl text-coquette-text-light leading-relaxed">
          A collection of poems that explore the many dimensions of love—its beauty, 
          its pain, its complexity, and its power to transform us.
        </p>
      </section>

      {/* About the Collection */}
      <section className="bg-coquette-card-bg border border-coquette-card-border rounded-xl p-8">
        <h2 className="text-2xl font-serif font-semibold text-coquette-text mb-6">
          The Collection
        </h2>
        <div className="prose prose-lg max-w-none text-coquette-text-light">
          <p className="mb-4">
            "Letters to Lovers" is organized around five central themes that capture 
            the different ways love manifests in our lives. Each category represents 
            a different facet of the heart's capacity to love, lose, and learn.
          </p>
          <p className="mb-4">
            These poems were written over several years, capturing moments of 
            vulnerability, joy, heartbreak, and growth. They are letters to lovers 
            past, present, and future—to the ones who got away, the ones who stayed, 
            and the ones we're still waiting to meet.
          </p>
          <p>
            Whether you're in the midst of love, healing from loss, or simply 
            curious about the human heart, these poems offer a mirror to reflect 
            your own experiences and emotions.
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      <section>
        <h2 className="text-2xl font-serif font-semibold text-coquette-text mb-6">
          The Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-serif font-semibold text-coquette-text mb-3">
              I lost
            </h3>
            <p className="text-coquette-text-light">
              Poems about love that slipped away, relationships that ended, and 
              the bittersweet memories of what once was.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-serif font-semibold text-coquette-text mb-3">
              I regret
            </h3>
            <p className="text-coquette-text-light">
              Poems about missed opportunities, words left unsaid, and the weight 
              of choices that changed everything.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-serif font-semibold text-coquette-text mb-3">
              I can't have
            </h3>
            <p className="text-coquette-text-light">
              Poems about unattainable love, impossible circumstances, and the 
              ache of wanting what we cannot possess.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-serif font-semibold text-coquette-text mb-3">
              Scarred me
            </h3>
            <p className="text-coquette-text-light">
              Poems about love that left wounds, lessons learned through pain, 
              and the scars that shape who we become.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-serif font-semibold text-coquette-text mb-3">
              Understands
            </h3>
            <p className="text-coquette-text-light">
              Poems about deep connection, soul recognition, and the rare love 
              that truly sees and accepts us.
            </p>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="bg-coquette-card-bg border border-coquette-card-border rounded-xl p-8">
        <h2 className="text-2xl font-serif font-semibold text-coquette-text mb-6">
          About the Author
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <img 
              src={aboutPhoto} 
              alt="Author portrait" 
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl shadow-lg border-4 border-white"
            />
          </div>
          <div className="flex-1 prose prose-lg max-w-none text-coquette-text-light">
            <p className="mb-4">
              These poems are born from a lifetime of loving, losing, and learning. 
              They are the result of countless nights spent writing in my notes app (aka my emotional archive).
            </p>
            <p className="mb-4">
              Writing has always been a way to process emotions, to make sense of 
              the chaos of the heart, and to find beauty in both joy and sorrow. 
              These poems are offered as a testament to the power of vulnerability 
              and the healing that comes from sharing our stories.
            </p>
            <p>
              Thank you for reading, for feeling, and for allowing these words to 
              find a home in your heart.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 