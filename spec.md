# Lakhwinder Enterprise

## Current State
New project with a default Caffeine scaffold. No custom pages or business logic exist yet.

## Requested Changes (Diff)

### Add
- **Hero Section**: Full-width banner with company name, tagline ("Crafting Excellence in Every Cut"), and two CTAs: "Get a Free Quote" (scrolls to contact) and "Join Our Team" (scrolls to careers).
- **About Us Section**: Company intro, 4 experienced carpenters, highlights of craftsmanship/reliability/quality.
- **Services Section**: Six service cards — Custom Furniture Making, Home Renovation & Woodwork, Cabinet & Wardrobe Installation, Door & Window Frames, Interior Wooden Fittings, Commercial Carpentry.
- **Why Choose Us Section**: Five strength cards — Quality Craftsmanship, Affordable Pricing, Timely Delivery, Experienced Team, Custom Designs.
- **Portfolio/Gallery Section**: Grid of 6 placeholder images from picsum.photos themed around wood/carpentry.
- **Careers / Join Our Team Section**: "We're Hiring!" banner, 3 open positions (Carpenter, Apprentice Carpenter, Site Supervisor), benefits list, application form (Name, Phone, Experience, Position dropdown, Submit).
- **Contact Section**: Contact form (Name, Phone, Email, Message, Submit), address/phone/email placeholder info, embedded map placeholder.
- **Footer**: Company name, quick links, social media icons (Font Awesome), copyright.
- **Navigation**: Sticky top nav with smooth-scroll links to all sections.
- **Backend APIs**: Store contact form submissions and job application submissions; retrieve them (admin use).

### Modify
- Replace default frontend scaffold with full business website.

### Remove
- Default placeholder content/pages.

## Implementation Plan
1. Generate Motoko backend with two entities: ContactInquiry (name, phone, email, message, timestamp) and JobApplication (name, phone, experience, position, timestamp). Expose submit and list functions for each.
2. Build full React frontend with all 8 sections using warm wood-tone design (browns, tans, cream, amber/orange accents), Playfair Display + Lato fonts, Font Awesome icons, responsive grid layout, hover effects, smooth scroll.
3. Wire contact form and careers application form to backend canister calls.
4. Deploy.
