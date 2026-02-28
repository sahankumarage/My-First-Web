---
description: Remake the landing page for a specific topic
---

This workflow completely redesigns the current landing page (`src/app/page.tsx`) to fit a new topic provided by the user (e.g., "farm shop", "tech startup", "yoga studio"), immediately updating the site with corresponding layout, colors, copy, and images. 

1. **Understand the Topic**: Ask the user for the topic or read the topic if they already provided it in their prompt.
2. **Update the CSS (Optional)**: If not already present, ensure `src/app/globals.css` contains the `.animate-gradient` and `.animate-fade-in-up` utility classes, so that the new template feels lively.
3. **Rewrite `page.tsx`**: Completely rewrite `src/app/page.tsx` with a tailored design for the specified topic.
    - **Color Palette & Typography**: Choose a complimentary, beautiful color palette mapped to standard Tailwind colors (e.g., green/emerald for farms, blue/cyan for tech, rose/pink for beauty) and incorporate them aggressively into the background gradient and accents. Use `bg-linear-to-br`.
    - **Animations**: Include `animate-gradient` on the outer `div` wrapping the page. Use `.animate-fade-in-up` on major elements to stagger their entry.
    - **Copy and Sections**: Write professional, convincing, and highly-styled sections including a Navigation Bar, a Hero section, a Features/Products 3-column section, an "About" or "Why Choose Us" section, and a full Footer.
    - **Internet Stock Images**: **Do NOT use image generation tools.** They take too long. Instead, use `next/image` to fetch stock placeholder images dynamically utilizing `loremflickr`. Since it is a Next.js app, make sure to add the `unoptimized` flag inside the `Image` component. Example:
          - `<Image src="https://loremflickr.com/1200/1500/{topic1},{topic2}/all" fill alt="Hero Image" className="object-cover" unoptimized priority />`
4. **Final Polish**: Ensure no placeholder text (like "lorem ipsum") is left behind. Verify that your gradients use proper Tailwind v4 classes and all links have hover states. Run `npm run build` or mention that the site has been successfully templated for the new topic!
