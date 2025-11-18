# Personal Website - John Masopust V

A modern, data-driven portfolio website showcasing skills, experience, projects, and repositories with a professional dark theme.

## Key Features

- **Data-Driven Architecture**: Content separated from code - update by editing JSON files
- **63% Smaller HTML**: Reduced from 1,155 lines to 435 lines
- **Easy Content Updates**: No coding required - just edit JSON files
- **Fully Responsive**: Mobile-first design with breakpoints for all devices
- **Modular CSS**: 7 organized CSS files for easy maintenance
- **Modern JavaScript**: 11 ES6 modules with dynamic rendering
- **Dynamic Content**: All content loaded from JSON and rendered on page load
- **Project Filtering**: Filter and display projects by category
- **GitHub Integration**: Automatically fetch and display your repositories
- **Contact Form**: Integrated with Google Apps Script
- **Dark Theme**: Professional dark color scheme
- **CMS-Ready**: Architecture ready for headless CMS integration

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
│   │   ├── utils.js          # Utility functions
│   │   ├── sidebar.js        # Sidebar functionality
│   │   ├── filter.js         # Project filtering logic
│   │   ├── navigation.js     # Page navigation
│   │   ├── contact-form.js   # Form handling
│   │   ├── repositories.js   # GitHub API integration
│   │   ├── data-loader.js    # JSON data loading utility
│   │   ├── render-about.js   # About section renderer
│   │   ├── render-resume.js  # Resume section renderer
│   │   └── render-projects.js # Projects section renderer
│   │
│   ├── data/                  # Content (JSON files)
│   │   ├── about.json        # About page content (bio, services)
│   │   ├── resume.json       # Education, experience, skills, certifications
│   │   └── projects.json     # Projects and categories
│   │
│   ├── images/               # All images and icons
│   └── files/                # Downloadable files (resumes, PDFs)
│
├── projects/                  # Project detail pages
│   ├── finance.html
│   └── orizon.html
│
├── index.html                # Main homepage (435 lines)
├── index-old-backup.html     # Backup of old version (1,155 lines)
│
├── CNAME                     # Custom domain configuration
├── LICENSE                   # License file
│
├── README.md                 # This file
├── DATA_ARCHITECTURE.md      # Data-driven architecture documentation
```

---

## Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid, animations
- **JavaScript (ES6+)** - Modules, async/await, fetch API, dynamic rendering

### Libraries & APIs
- **Ionicons** - Icon library
- **Google Fonts** - Poppins font family
- **Google Apps Script** - Contact form backend
- **GitHub API** - Dynamic repository fetching

### Architecture
- **Data-Driven Design** - JSON-based content management
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

### Updating GitHub Username

Edit [assets/js/repositories.js](assets/js/repositories.js):
```javascript
const githubUsername = "your-github-username";
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

## Documentation

- **[README.md](README.md)** - This file (quick start guide)
- **[DATA_ARCHITECTURE.md](DATA_ARCHITECTURE.md)** - Detailed architecture documentation
- **[IMPROVEMENTS_SUMMARY.md](IMPROVEMENTS_SUMMARY.md)** - Complete improvements overview
- **[RESTRUCTURE_SUMMARY.md](RESTRUCTURE_SUMMARY.md)** - File reorganization details

---

## Future Enhancements

### Planned Features
- [ ] Blog section with markdown support
- [ ] Multi-language support (i18n)
- [ ] Admin dashboard for content editing
- [ ] Dark/Light theme toggle
- [ ] Animation improvements
- [ ] SEO optimization

### CMS Integration Ready
The architecture is ready for:
- Contentful
- Strapi
- Sanity.io
- Any headless CMS

---

## License

© 2025 John Masopust V. All rights reserved.

---

## Contact

**John Masopust V**

- Email: jjmasopust@gmail.com
- Phone: +1 (719) 551-8096
- Location: Grand Junction, Colorado, USA
