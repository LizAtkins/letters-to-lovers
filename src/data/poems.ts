export interface Poem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  poemCount: number;
}

export const categories: Category[] = [
  {
    id: 'a-love-lost',
    title: 'I lost',
    description: 'Poems about love that slipped away',
    poemCount: 4,
  },
  {
    id: 'i-regret',
    title: 'I regret',
    description: 'Poems about love lost and opportunities missed',
    poemCount: 6,
  },
  {
    id: 'i-cant-have',
    title: "I can't have",
    description: 'Poems about unattainable love and longing',
    poemCount: 6,
  },
  {
    id: 'scarred-me',
    title: 'Scarred me',
    description: 'Poems about love that left wounds',
    poemCount: 6,
  },
  {
    id: 'understands',
    title: 'Understands',
    description: 'Poems about deep connection and understanding',
    poemCount: 3,
  },
];

export const poems: Poem[] = [
  // A love lost poems
  {
    id: 1,
    title: 'October\'s Last Illusion',
    excerpt: 'I braced myself for the unknown on that late October night...',
    content: `I braced myself
for the unknown
On that late October night
A drink in hand &
An empty heart to match`,
    category: 'a-love-lost',
  },
  {
    id: 2,
    title: 'Inconclusive',
    excerpt: 'Maybe there\'s not an answer and maybe I should just be okay...',
    content: `Maybe there's not an answer
And maybe
I should just be okay with the fact
That some questions
Are better left that way
That's what I tell myself, at least`,
    category: 'a-love-lost',
  },
  {
    id: 3,
    title: 'Familiar Patterns',
    excerpt: 'It\'s a strange feeling wanting to share something new...',
    content: `It's a strange feeling
Wanting to share something new
With someone you're indifferent towards
It was just a former routine
And that's all it was
If you're reading this, yes, that's really all it was.`,
    category: 'a-love-lost',
  },
  {
    id: 4,
    title: 'Melancholy Mahogany',
    excerpt: 'You were as tranquil as teal, a melancholy mahogany...',
    content: `You were as tranquil as teal, a melancholy mahogany, and cold as cobalt—
     eccentric like ebony, yet dark as coal-black.
     A healer draped in hunter green,
     adrift in an envious emerald sea.
     Sweet like sangria,
     but fleeting as iris bloom,
     and weak as wine.
     You wandered in shades of ash gray,
     and I became the brushstroke you never meant to make.`,
    category: 'a-love-lost',
  },

  // I regret poems
  {
    id: 5,
    title: 'Cognitive Dissonance',
    excerpt: 'I\'d like to make it clear that we can skip the chapter when you mansplained...',
    content: `I'd like to make it clear
That we can skip the chapter
When you mansplained
The meaning of
Cognitive dissonance
Who does that anyway?`,
    category: 'i-regret',
  },
  {
    id: 6,
    title: 'Phantasmagoria',
    excerpt: 'The white lies become any color you like in your kaleidoscope of deceit...',
    content: `The white lies
Become any color you like
In your kaleidoscope of deceit
But even the brightest colors
Can't mask your reflection.`,
    category: 'i-regret',
  },
  {
    id: 7,
    title: 'Black Hole',
    excerpt: 'You brought out what light was left of me only to steal it...',
    content: `You brought out
What light was left of me
Only to steal it
You destroyed it
Until it became unrecognizable`,
    category: 'i-regret',
  },
  {
    id: 8,
    title: 'The Catalyst',
    excerpt: 'I am not the catalyst to your chaos, I am the chapter of the book...',
    content: `I am not the catalyst to your chaos
I am the chapter of the book
You haphazardly read
And pretended to know about`,
    category: 'i-regret',
  },
  {
    id: 9,
    title: 'Touchstone',
    excerpt: 'You labeled yourself as the good guy, the gold standard I should trust...',
    content: `You labeled yourself
As the good guy
The gold standard
I should trust
Of course
A dull knife
is safer to hold
than a sharpened blade.
And at the time
You were the safest option
But that doesn't mean that
You were harmless.
You were just safer than
what life had handed me before.
That doesn't say much
The weapon you held
Made its impact slowly
So careful that
I never saw it coming. 
And you made sure of that.`,
    category: 'i-regret',
  },
  {
    id: 10,
    title: 'A Braver Me',
    excerpt: 'I don\'t miss it. In truth, I regret it— these last few years, at least...',
    content: `I don't miss it.
In truth, I regret it—
these last few years, at least.
What was I thinking?
—a braver me, from the future.`,
    category: 'i-regret',
  },

  // I can't have poems
  {
    id: 11,
    title: 'The love I can\'t have',
    excerpt: 'You moved like a perfect storm— near, but untouched...',
    content: `You moved like a perfect storm— near, but untouched. I was never in your path, yet somehow, I remember the air shifting.`,
    category: 'i-cant-have',
  },
  {
    id: 12,
    title: 'Unintended Consequences',
    excerpt: 'There are unintended consequences behind longing distractions...',
    content: `There are unintended consequences
Behind longing distractions
That are absolutely inevitable
I resist the diversion 
Yet defiance can't control
My mind's compulsive thoughts 
And your ever magnetic pull`,
    category: 'i-cant-have',
  },
  {
    id: 13,
    title: 'Sanctuary',
    excerpt: 'I\'m always uprooting myself, seeking refuge in the quiet sanctuary of my mind...',
    content: `I'm always uprooting myself, 
    Seeking refuge in the quiet sanctuary of my mind, 
    A place where peace blooms, untouched. 
    But I leave the safe haven behind,
     Not ready to face it in the light.
     I find solace only in the escape,
     Thriving in the fantasy of it all.`,
    category: 'i-cant-have',
  },
  {
    id: 14,
    title: 'Liminal',
    excerpt: 'I don\'t know what led me to believe you\'d one day see it as if inevitability were quietly conspiring...',
    content: `I don't know what led me
to believe you'd one day see it
as if inevitability
were quietly conspiring
to entwine our paths.
That we might evolve
not quite companions,
not entirely strangers,
but something liminal,
residing in the silence
between definition.
Though my instincts are
a wayward compass,
I remain linked
to a dreamscape
where the story of us
writes itself endlessly
a manuscript suspended
between the margins,
forever unwritten,
yet never erased.`,
    category: 'i-cant-have',
  },
  {
    id: 15,
    title: 'Forest Fire',
    excerpt: 'I crave the things that I believe will bring the most peace...',
    content: `I crave the things
That I believe will bring
The most peace
The morning stillness,
The forest trees
And you 
I beg for the end 
To the constant chaos 
And endlessly seek
The cure to this madness
Underneath the trees
I wait patiently
And watch the light of the moon 
As it lights the forest bed 
Just like the fire
You started in me 
And it burns endlessly`,
    category: 'i-cant-have',
  },
  {
    id: 16,
    title: 'Proximity',
    excerpt: 'I don\'t know what it was about you maybe it was your close proximity...',
    content: `I don't know what it was
About you
Maybe it was 
Your close proximity
Or the great distance
You were to me`,
    category: 'i-cant-have',
  },

  // Scarred me poems
  {
    id: 17,
    title: 'Laundry Day',
    excerpt: 'You know it\'s getting bad while you carefully fold each t-shirt...',
    content: `You know it's getting bad 
While you carefully fold each t-shirt
And realize
That there isn't a single one
He hasn't screamed at you in`,
    category: 'scarred-me',
  },
  {
    id: 18,
    title: 'Time Out',
    excerpt: 'I\'m running out of breath—will I make it out and get these writings down...',
    content: `I'm running out of breath— 
Will I make it out
And get these writings down
Before it's too late?
Every peaceful day
Is severed
By another push to the edge.
I'm afraid
There's not much time left.`,
    category: 'scarred-me',
  },
  {
    id: 19,
    title: 'Lull',
    excerpt: 'Momentary peace is a towering shield that protects me from the truth...',
    content: `Momentary peace
Is a towering shield
That protects me 
From the truth
As I lay with you 
Under this shelter of defense
My thoughts and fears 
Begin to drift away
Until I'm reminded
Of your sword that rests
In the corner of the room
It patiently waits 
To be sharpened once more
When will the battle come to an end?`,
    category: 'scarred-me',
  },
  {
    id: 20,
    title: 'The Sentence I Chose',
    excerpt: 'With him, I feel frozen—no sudden movements, every motion a mistake before it\'s made...',
    content: `With him, I feel frozen—
no sudden movements,
every motion a mistake
before it's made.
So I stay still,
tell myself it's safer
not to run.
But silence is a sentence,
stillness a decision
I keep making.
Not walking away
doesn't mean I've stayed
just that I haven't moved.
Is this the easier choice?
Or simply
the hardest one
to explain?`,
    category: 'scarred-me',
  },
  {
    id: 21,
    title: 'The Rollercoaster',
    excerpt: 'I\'m stuck in a loop, trapped on the back-and-forth rollercoaster he built...',
    content: `I'm stuck in a loop,
trapped on the back-and-forth rollercoaster
he built.
One moment
you worked so hard,
you've earned it.
The next
you don't deserve any of it.
He says he'd outshine me
with half the effort,
says my chances
aren't earned,
just handed out.
And still—I nod.
I shrink.
I thank him
for the sting.`,
    category: 'scarred-me',
  },
  {
    id: 22,
    title: 'Keeping Up Appearances',
    excerpt: 'It\'s difficult to explain, But everyone thinks "She has it together"...',
    content: `It's difficult to explain,
But everyone thinks
"She has it together"
Handling it all
With grace and charm,
Holding herself
In high regard.
But the woman they speak of
Never would've let him
Do the things he did.
Right?`,
    category: 'scarred-me',
  },

  // Understands poems
  {
    id: 23,
    title: 'Watercolor Portraits',
    excerpt: 'It\'s possible that my high expectations for the main character seem to leave me...',
    content: `It's possible that
My high expectations
For the main character
Seem to leave me
Rooting for the villain of the story

But I also know that
You can be painted carelessly
By so called artists
Who are unwilling to see
The many colors of your portrait`,
    category: 'understands',
  },
  {
    id: 24,
    title: 'The Game',
    excerpt: 'Am I cheering for the underdog, or just mastering the game...',
    content: `Am I cheering for the underdog, 
    Or just mastering the game— 
    Walking the line so neatly
     That everyone thinks
      I'm one of them,
       While I quietly take my place
        With the other side?`,
    category: 'understands',
  },
  {
    id: 25,
    title: 'Hustle',
    excerpt: '"Be a boss bitch," they said. But they didn\'t say you\'d forget how it feels...',
    content: `"Be a boss bitch," they said. 
    But they didn't say
     you'd forget how it feels
      to bathe in the sun,
       to nurture the earth.
They never warned me
 that chasing status
  might cost me stillness,
   that comfort could grow
    while my soul shrunk in silence.
While external luxuries grow,
 internal peace slowly withers
A silent trade for power
 in a world that forgets how to rest.`,
    category: 'understands',
  },
];

export const getPoemsByCategory = (categoryId: string): Poem[] => {
  return poems.filter(poem => poem.category === categoryId);
};

export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find(category => category.id === categoryId);
}; 