# ByteFlow Ltd

**Engineering Digital Success.**

ByteFlow Ltd is a creative and technology company based in Kigali, Rwanda. We help businesses and individuals bring ideas to life through graphic design, branding, web development, photography, and videography.

The ByteFlow website introduces the company, explains its services, showcases selected projects and video reels, shares practical digital insights, and makes it easy for prospective clients to start a conversation.

**Live website:** [byte-flow-ltd.vercel.app](https://byte-flow-ltd.vercel.app/)  
**GitHub repository:** [AlineHub-tech/ByteFlow-Ltd](https://github.com/AlineHub-tech/ByteFlow-Ltd)

---

## What the website includes

- **Home** — introduces ByteFlow, its creative and technology services, selected reels, and project inquiry links.
- **Services** — explains graphic design and branding, web development, photography and videography, and digital creative solutions.
- **Our work** — presents selected project examples and seven video reels. Reels play directly on the website, with a link to ByteFlow on Instagram.
- **Our team** — introduces the people and roles behind ByteFlow.
- **About** — shares the company story, mission, vision, and values.
- **Insights** — publishes articles about websites, branding, SEO, media, and related digital topics.
- **Contact** — provides project inquiry fields, email contact, social links, and a WhatsApp conversation option.
- **Mobile navigation and quick help** — provides a responsive navigation drawer and a floating ByteFlow contact panel.

## The team

| Name | Role |
| --- | --- |
| Umugwaneza Aline | Founder & Graphic Designer |
| Mutijima Yves | Creative Social Media Manager |
| Mugisha Blaise | Lead Developer |
| Kwitonda Price | Business Development |

## Design and experience

The site uses ByteFlow’s established green brand identity with a clean, editorial layout, responsive navigation, real project imagery, compact reel previews, subtle card interactions, and accessible motion preferences. The layout adapts to desktop, tablet, and mobile screens.

## Technology

- [React](https://react.dev/) and [React Router](https://reactrouter.com/) for the interface and page navigation
- [Vite](https://vite.dev/) for local development and production builds
- [Lucide React](https://lucide.dev/) for interface icons
- Native CSS for page layouts, responsive styling, and animations
- [EmailJS](https://www.emailjs.com/) for contact form email delivery
- Local image and MP4 assets for team portraits, project examples, and reels

## Run locally

### Requirements

- Node.js (LTS recommended)
- npm

### Install and start

```bash
git clone https://github.com/AlineHub-tech/ByteFlow-Ltd.git
cd ByteFlow-Ltd
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

### Quality checks

```bash
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project structure

```text
src/
├── assets/       # Logo, team portraits, project images, and video reels
├── components/   # Navbar, footer, and floating quick-help actions
├── data/         # Blog article content
├── pages/        # Home, services, portfolio, team, about, blog, and contact pages
└── styles/       # Shared design system and page/component styles
```

## Updating content

- **Team profiles:** update the member details and image imports in `src/pages/Team.jsx`.
- **Services:** update the service descriptions and included offerings in `src/pages/Services.jsx`.
- **Project gallery and reels:** update the project and reel lists in `src/pages/Portfolio.jsx`. Add image or video files to `src/assets/` and import them in that file. Reel captions currently identify the clips by number rather than describing specific video contents.
- **Homepage reel previews:** update the selected reel list in `src/pages/Home.jsx`.
- **Blog articles:** update the article data in `src/data/blogData.jsx`.
- **Contact details and social accounts:** update the relevant links in `src/components/Footer.jsx`, `src/components/FloatingActions.jsx`, and `src/pages/Contact.jsx`.

## Portfolio management note

The portfolio is currently maintained as content in the React application; there is no admin dashboard, CMS, or database-backed upload system yet. Adding or removing work requires updating the project or reel list and deploying the site. A CMS can be integrated separately if direct content management is needed.

## Contact ByteFlow

- **Email:** [byteflowltd9@gmail.com](mailto:byteflowltd9@gmail.com)
- **WhatsApp:** [+250 796 023 452](https://wa.me/250796023452)
- **Location:** Kigali, Rwanda
- **Instagram:** [@byteflow_ltd](https://www.instagram.com/byteflow_ltd)
- **Facebook:** [ByteFlow Ltd](https://www.facebook.com/profile.php?id=61588130300960)
- **LinkedIn:** [A Better-T Solutions](https://www.linkedin.com/company/a-better-t-solutions/)

---

© ByteFlow Ltd. Creative design. Powerful technology. Meaningful experiences.
