# Personal Website - John Masopust V

A modern, headless CMS-powered portfolio website showcasing skills, experience, and projects with a professional dark theme.

## Key Features

- **Headless CMS**: Powered by Strapi CMS hosted on Railway
- **Easy Content Management**: Update content via Strapi admin panel - no code changes needed
- **Fully Responsive**: Mobile-first design with breakpoints for all devices
- **Modular CSS**: 7 organized CSS files for easy maintenance
- **Modern JavaScript**: ES6 modules with dynamic API data fetching
- **Project Filtering**: Filter and display projects by category
- **GitHub Integration**: Automatically fetch and display repositories
- **Contact Form**: Integrated with Google Apps Script
- **Dark Theme**: Professional dark color scheme

---

## Project Structure

```
Personal-Website/
├── assets/
│   ├── css/                   # Modular CSS files
│   │   ├── main.css           # Entry point (imports all modules)
│   │   ├── variables.css      # Design system (colors, typography, shadows)
│   │   ├── base.css          # Base styles and resets
│   │   ├── components.css    # Reusable UI components
│   │   ├── layout.css        # Layout structure (sidebar, navbar)
│   │   ├── pages.css         # Page-specific styles
│   │   └── responsive.css    # Media queries for all breakpoints
│   │
│   ├── js/                    # Modular JavaScript
│   │   ├── main.js           # Entry point and orchestrator
│   │   ├── data-loader.js    # Strapi API data fetching
│   │   ├── render-about.js   # About section renderer
│   │   ├── render-resume.js  # Resume section renderer
│   │   ├── render-projects.js # Projects section renderer
│   │   ├── repositories.js   # GitHub API integration
│   │   ├── contact-form.js   # Form handling
│   │   ├── filter.js         # Project filtering logic
│   │   ├── navigation.js     # Page navigation
│   │   ├── sidebar.js        # Sidebar functionality
│   │   └── utils.js          # Utility functions
│   │
│   ├── data/                  # Legacy JSON files (backup)
│   ├── images/               # All images and icons
│   └── files/                # Downloadable files (resumes, PDFs)
│
├── projects/                  # Project detail pages
│
├── config.js                 # Strapi API configuration
├── index.html                # Main homepage
├── CNAME                     # Custom domain configuration
├── LICENSE                   # License file
└── README.md                 # This file
```

---

## Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid, animations
- **JavaScript (ES6+)** - Modules, async/await, fetch API, dynamic rendering

### Backend
- **Strapi CMS v5** - Headless content management
- **PostgreSQL** - Database (Railway)
- **Railway** - Cloud hosting platform

### Libraries & APIs
- **Ionicons** - Icon library
- **Google Fonts** - Poppins font family
- **Google Apps Script** - Contact form backend
- **GitHub API** - Dynamic repository fetching

### Architecture
- **Headless CMS** - Strapi API backend with frontend separation
- **Component-Based** - Modular, reusable components
- **Mobile-First** - Responsive design approach

---

## Customization

### Changing Colors

Edit [assets/css/variables.css](assets/css/variables.css):
```css
:root {
  --orange-yellow-crayola: hsl(45, 100%, 72%);  /* Primary color */
  --smoky-black: hsl(0, 0%, 7%);                /* Background */
  --white-2: hsl(0, 0%, 98%);                   /* Text color */
  /* ...more colors */
}
```

### Modifying Contact Form

Update the Google Apps Script URL in [assets/js/contact-form.js](assets/js/contact-form.js):
```javascript
const response = await fetch("YOUR_APPS_SCRIPT_URL", {
  method: "POST",
  body: new URLSearchParams(formData)
});
```

---

## Content Management

Edit your website content through the Strapi admin panel:
- **Admin URL**: https://strapibackend-production-b824.up.railway.app/admin
- Update About, Resume, and Projects without touching code
- Changes reflect immediately on the live site

---

## License

© 2025 John Masopust V. All rights reserved.

---

## Contact

**John Masopust V**

- Email: jjmasopust@gmail.com
- Phone: +1 (719) 551-8096
- Location: Grand Junction, Colorado, USA
