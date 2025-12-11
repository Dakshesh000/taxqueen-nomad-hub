# Tax Queen Website - Project Documentation

## Overview
A modern, image-heavy website for Tax Queen - a taxation firm specializing in helping Digital Nomads with US Tax Obligations.

## Brand Guidelines

### Design Style
- **Modern & Bold** + **Warm & Approachable**
- Professional yet friendly aesthetic
- Image-heavy layouts with lifestyle photography

### Target Audience (ICP)
- Digital Nomads with US Tax Obligations
- Remote workers living abroad
- Location-independent professionals

### Color Palette
> To be updated with actual brand colors

```
Primary: [TBD] - Main brand color
Secondary: [TBD] - Supporting color
Accent: [TBD] - Call-to-action, highlights
```

### Typography
> To be updated with brand fonts

```
Headings: [TBD]
Body: [TBD]
```

---

## Project Structure

```
src/
├── config/
│   ├── brand.ts          # Brand configuration (colors, logos, contact info)
│   └── README.md         # This file
├── components/
│   ├── layout/           # Navbar, Footer, Layout wrapper
│   └── sections/         # Page sections (Hero, About, Services, etc.)
├── pages/
│   └── Index.tsx         # Home page
└── assets/               # Images, icons (when uploaded)
```

---

## Sections Checklist

| Section       | Status      | Content Needed |
|---------------|-------------|----------------|
| Hero          | 🟡 Scaffold | Headline, subtext, CTA, hero image |
| About         | 🟡 Scaffold | Story, founder photo, mission |
| Services      | 🟡 Scaffold | Service list, descriptions, icons |
| Process       | 🟡 Scaffold | Step-by-step workflow |
| Testimonials  | 🟡 Scaffold | Client quotes, photos, names |
| FAQ           | 🟡 Scaffold | Common questions & answers |
| Contact       | 🟡 Scaffold | Form fields, booking link |

---

## Backend Requirements

1. **Contact/Inquiry Forms**
   - Name, email, message fields
   - Store submissions in Supabase
   
2. **Booking/Scheduling**
   - Calendly embed or custom booking
   - Integration with contact form

---

## Image Guidelines

- **Style**: Lifestyle photography, digital nomad vibes
- **Subjects**: People working remotely, travel locations, laptops in scenic places
- **Format**: WebP preferred, fallback to JPG
- **Sizes**: Provide 1x and 2x for retina displays

---

## Development Notes

- All colors use Tailwind semantic tokens from `index.css`
- Mobile-first responsive design
- Smooth scroll animations
- Accessibility-first approach
