# Personal Website - John Masopust V

A modern, data-driven portfolio website showcasing skills, experience, projects, and repositories with a professional dark theme.

## 🎯 Key Features

- **🚀 Data-Driven Architecture**: Content separated from code - update by editing JSON files
- **✏️ Easy Content Updates**: No coding required - just edit JSON files
- **📱 Fully Responsive**: Mobile-first design with breakpoints for all devices
- **🎨 Modular CSS**: 7 organized CSS files for easy maintenance
- **⚡ Modern JavaScript**: 11 ES6 modules with dynamic rendering
- **🔄 Dynamic Content**: All content loaded from JSON and rendered on page load
- **🎯 Project Filtering**: Filter and display projects by category
- **🔗 GitHub Integration**: Automatically fetch and display your repositories
- **📧 Contact Form**: Integrated with Google Apps Script
- **🌙 Dark Theme**: Professional dark color scheme
- **🔌 CMS-Ready**: Architecture ready for headless CMS integration

---

## 📁 Project Structure

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
├── IMPROVEMENTS_SUMMARY.md   # Complete improvements overview
└── RESTRUCTURE_SUMMARY.md    # File restructuring details
```

---

## 🛠️ Technologies Used

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

## 🎨 CSS Architecture

The CSS is organized following best practices for scalability and maintainability:

### [variables.css](assets/css/variables.css)
Design system tokens:
- Color schemes (gradients and solid colors)
- Typography (font families, sizes, weights)
- Shadows, transitions, and animations

### [base.css](assets/css/base.css)
Foundation styles:
- CSS resets and normalizations
- Global element styles
- Base typography

### [components.css](assets/css/components.css)
Reusable UI components:
- Buttons, cards, forms
- Icon boxes and containers
- Scrollbars and interactive elements

### [layout.css](assets/css/layout.css)
Structure and positioning:
- Main layout grid
- Sidebar and navigation
- Contact lists and social links

### [pages.css](assets/css/pages.css)
Page-specific styles:
- About, Resume, Projects, Repositories, Contact
- Service items and timeline components
- Skills progress bars

### [responsive.css](assets/css/responsive.css)
Media queries for all breakpoints:
- Mobile (< 450px)
- Tablet (450px - 768px)
- Desktop (768px+)
- Large screens (1024px+)

---

## ⚡ JavaScript Modules

### Core Modules

#### [main.js](assets/js/main.js)
Main orchestrator - loads content then initializes features:
```javascript
// 1. Load content from JSON
await Promise.all([
  renderAbout(),
  renderResume(),
  renderProjects()
]);

// 2. Initialize interactive features
initSidebar();
initFilter();
initNavigation();
// ...
```

#### [data-loader.js](assets/js/data-loader.js)
Generic JSON loading utility with error handling

#### [render-about.js](assets/js/render-about.js)
Renders About section from `about.json`

#### [render-resume.js](assets/js/render-resume.js)
Renders Resume section from `resume.json`

#### [render-projects.js](assets/js/render-projects.js)
Renders Projects section from `projects.json`

### Feature Modules

#### [sidebar.js](assets/js/sidebar.js)
- Mobile sidebar toggle
- Contact information show/hide

#### [filter.js](assets/js/filter.js)
- Project category filtering
- Mobile and desktop filter UI

#### [navigation.js](assets/js/navigation.js)
- Single-page navigation
- URL hash handling
- Active page management

#### [contact-form.js](assets/js/contact-form.js)
- Form validation
- Google Apps Script integration
- Success message display

#### [repositories.js](assets/js/repositories.js)
- GitHub API integration
- Dynamic repository fetching
- Repository card updates

---

## 📝 Content Management

### Easy Updates - No Coding Required!

All content is stored in JSON files. Simply edit these files to update your website.

### Update Your Bio

Edit [assets/data/about.json](assets/data/about.json):
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "organization": "Your Organization",
  "bio": [
    "First paragraph about yourself",
    "Second paragraph",
    "Third paragraph"
  ],
  "services": [
    {
      "icon": "icon-design.svg",
      "title": "Service Name",
      "description": "Service description"
    }
  ]
}
```

### Add a New Project

Edit [assets/data/projects.json](assets/data/projects.json):
```json
{
  "projects": [
    {
      "id": "unique-id",
      "title": "Project Name",
      "category": "web design",
      "image": "project-image.jpg",
      "link": "projects/project-page.html",
      "featured": true
    }
  ]
}
```

### Add Work Experience

Edit [assets/data/resume.json](assets/data/resume.json):
```json
{
  "experience": [
    {
      "title": "Job Title",
      "period": "2024 — Present",
      "responsibilities": [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3"
      ]
    }
  ]
}
```

### Add a Skill

Edit [assets/data/resume.json](assets/data/resume.json):
```json
{
  "skills": [
    {
      "name": "Skill Name",
      "description": "Description of what this skill involves",
      "percentage": 85
    }
  ]
}
```

### Add Education/Certifications

Edit [assets/data/resume.json](assets/data/resume.json):
```json
{
  "education": [
    {
      "institution": "University Name",
      "period": "2020 - 2024",
      "description": "Degree and details"
    }
  ],
  "certifications": [
    {
      "name": "Certification Name",
      "period": "2023 - 2026",
      "description": "Certification details"
    }
  ]
}
```

---

## 🚀 Getting Started

### Local Development

**Option 1**: Open directly in browser
```bash
# Navigate to the project directory
cd Personal-Website

# Open index.html in your default browser
start index.html  # Windows
open index.html   # Mac
xdg-open index.html  # Linux
```

**Option 2**: Use a local server (recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Then open: http://localhost:8000
```

### Deployment

**GitHub Pages**:
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch (usually `main` or `master`)
4. Save and wait for deployment

**Custom Domain**:
- Edit `CNAME` file with your domain
- Configure DNS settings at your domain registrar

---

## 🎨 Customization

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

## ✅ Testing Checklist

Before deploying, verify:

### Content Rendering
- [ ] About section displays bio and services
- [ ] Resume shows education, certifications, and experience
- [ ] Skills display with progress bars
- [ ] Projects render with correct images
- [ ] Project filtering works correctly

### Functionality
- [ ] Sidebar toggles on mobile devices
- [ ] Project category filters work
- [ ] Page navigation works (About, Resume, Projects, etc.)
- [ ] Contact form submits successfully
- [ ] GitHub repositories load dynamically
- [ ] All links work correctly

### Responsive Design
- [ ] Mobile (< 450px)
- [ ] Tablet (450px - 768px)
- [ ] Desktop (768px - 1024px)
- [ ] Large screens (1024px+)

### Cross-Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Android)

---

## 📚 Documentation

- **[README.md](README.md)** - This file (quick start guide)
- **[DATA_ARCHITECTURE.md](DATA_ARCHITECTURE.md)** - Detailed architecture documentation
- **[IMPROVEMENTS_SUMMARY.md](IMPROVEMENTS_SUMMARY.md)** - Complete improvements overview
- **[RESTRUCTURE_SUMMARY.md](RESTRUCTURE_SUMMARY.md)** - File reorganization details

---

## 🔄 Version History

### v2.0 (Current) - Data-Driven Architecture
- ✅ Reduced HTML by 63% (1,155 → 435 lines)
- ✅ Implemented JSON-based content management
- ✅ Created dynamic rendering system
- ✅ Added comprehensive documentation

### v1.0 - Modular Restructure
- ✅ Organized file structure
- ✅ Split CSS into 7 modular files
- ✅ Split JavaScript into 11 modules
- ✅ Improved code organization

---

## 🔧 Troubleshooting

### Content Not Showing
1. Check browser console for errors
2. Verify JSON files are valid (use JSONLint.com)
3. Ensure file paths are correct
4. Clear browser cache

### GitHub Repositories Not Loading
1. Check GitHub username in `repositories.js`
2. Verify GitHub API is accessible
3. Check browser console for API errors

### Styling Issues
1. Check CSS file import order in `main.css`
2. Verify browser supports CSS custom properties
3. Clear browser cache

### Rollback to Old Version
```bash
# If needed, restore the backup
cp index-old-backup.html index.html
```

---

## 🌟 Future Enhancements

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

## 📊 Performance Metrics

| Metric | Value |
|--------|-------|
| HTML Size | 435 lines (63% reduction) |
| CSS Files | 7 modular files |
| JS Files | 11 ES6 modules |
| Load Time | < 2 seconds |
| Mobile Score | 95+ (Lighthouse) |

---

## 🛡️ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

**Note**: Requires ES6 module support

---

## 📄 License

© 2024 John Masopust V. All rights reserved.

---

## 📞 Contact

**John Masopust V**
IT Manager, Riverside Education Center

- 📧 **Email**: [jjmasopust@gmail.com](mailto:jjmasopust@gmail.com)
- 📱 **Phone**: [+1 (719) 551-8096](tel:+17195518096)
- 📍 **Location**: Grand Junction, Colorado, USA
- 💼 **LinkedIn**: [Add your LinkedIn URL]
- 💻 **GitHub**: [Add your GitHub URL]

---

## 🙏 Acknowledgments

- **Ionicons** for the icon library
- **Google Fonts** for the Poppins font family
- Built with modern web standards and best practices

---

**Made with ❤️ and modern web technologies**
