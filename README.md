# Letters to Lovers

A soft, romantic, and interactive poetry website. Built with React, TypeScript, Vite, and Tailwind CSS.

---

## ✨ About

**Letters to Lovers** is a digital poetry collection exploring the many faces of love—from the tender to the tumultuous, the remembered to the regretted. The site features:
- A coquette-inspired pastel palette
- Category-based navigation ("A love that...")
- Beautiful, consistent poem cards
- A daily featured poem
- A "Surprise Me" random poem feature
- Modern, mobile-friendly UI/UX

---

## 🎨 Color Palette

- **Pink:** `#ffb0d9` 
- **Light Pink:** `#f9c9e2`
- **Cream:** `#f9f8f2`
- **Blue:** `#b0cfff`
- **Lavender:** `#c9dcf9`
- **Rose:** `#C26D8C`

---

## 🚀 Features

- **Category Navigation:**
  - I lost
  - I regret
  - I can't have
  - Scarred me
  - Understands
- **Home Page:**
  - Hero with handwritten title and soft background
  - Category grid with pastel borders and shadows
  - "Surprise Me" card for a random poem
  - Daily featured poem (changes every day)
- **Category Pages:**
  - Uniform poem cards with hover effects
  - Consistent border and shadow styling
- **Contact Page:**
  - Formspree-powered contact form with loading, success, and error states
  - Response time info with blue background
- **About Page:**
  - Collection and author info
  - Author photo
- **Footer:**
  - Light pink background, black text
  - LinkedIn and GitHub icons
- **Buttons:**
  - Blue for primary actions, pink for secondary
  - Rounded, bold, and on-theme
- **Fully Responsive:**
  - Looks great on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS (custom coquette palette)
- **Routing:** React Router DOM
- **Build Tool:** Vite
- **Forms:** Formspree
- **Fonts:** Cormorant Garamond (serif), Lato (sans), Abril Fatface (handwriting)

---

## 📁 Project Structure

```
src/
  components/
    Navigation/      # Navigation bar
    Layout/          # Main layout and footer
    PoemCard/        # Poem card component
    CategoryFilter/  # (if used)
  pages/
    Home/            # Home page
    Category/        # Category pages
    About/           # About page
    Contact/         # Contact page
  data/              # Poem/category data
  utils/             # Helper functions
```

---

## 🚦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd poems-website
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

**Build for production:**
```bash
npm run build
```

---

## 📝 Customization

- **Add/Edit Poems:**
  - Update poem data in `src/data/poems.ts`
- **Change Categories:**
  - Edit the categories array in the same file
- **Adjust Colors:**
  - Update `tailwind.config.js` for palette tweaks
- **Update Author Info:**
  - Edit the About page content and photo

---

*Letters to Lovers* — Where every poem is a letter to the heart.
