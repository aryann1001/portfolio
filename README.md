# AI/ML Portfolio Website 🚀

A modern, production-ready portfolio website template designed for AI/ML engineers and data scientists. Built with React + Vite for optimal performance and easy deployment.

![Portfolio Preview](https://via.placeholder.com/1200x600/667eea/ffffff?text=AI/ML+Portfolio)

## ✨ Features

- 🎨 **Modern AI/ML Themed Design** - Professional gradient effects and animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast loading
- 🎯 **Easy Configuration** - Single JSON file to manage all content
- 🚀 **Multiple Deployment Options** - Deploy to Vercel, Netlify, or GitHub Pages for FREE
- 💼 **Complete Sections** - Hero, About, Skills, Projects, Experience, Contact
- 🔄 **Seamless Project Management** - Add projects by just updating the config file
- 🌐 **SEO Friendly** - Optimized for search engines
- ✉️ **Contact Form** - Integrated mailto functionality

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ParticlesBackground.jsx
│   ├── data/
│   │   └── portfolio-config.json  # ⭐ EDIT THIS FILE!
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json              # Vercel deployment config
├── netlify.toml             # Netlify deployment config
└── .github/workflows/
    └── deploy.yml           # GitHub Pages deployment
```

## 🎯 Quick Start

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Customize Your Portfolio

Edit the **`src/data/portfolio-config.json`** file with your information:

\`\`\`json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "AI/ML Engineer",
    "email": "your.email@example.com",
    "phone": "+1 234 567 8900",
    "location": "City, Country",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "bio": "Your bio here..."
  },
  "skills": {
    "Category Name": ["Skill 1", "Skill 2", "Skill 3"]
  },
  "projects": [
    {
      "id": 1,
      "name": "Project Name",
      "description": "Project description",
      "technologies": ["Tech1", "Tech2"],
      "github": "https://github.com/username/project",
      "demo": "https://demo-link.com",
      "image": "https://image-url.com",
      "featured": true
    }
  ],
  "experience": [...],
  "education": [...]
}
\`\`\`

### 3. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:5173` to see your portfolio!

### 4. Build for Production

\`\`\`bash
npm run build
\`\`\`

## 🔄 Adding New Projects (The Easy Way!)

To add a new project, simply add a new object to the `projects` array in `portfolio-config.json`:

\`\`\`json
{
  "id": 4,
  "name": "Your New Project",
  "description": "Brief description of what this project does",
  "technologies": ["React", "TensorFlow", "Python"],
  "github": "https://github.com/yourusername/new-project",
  "demo": "https://demo-link.com",
  "image": "https://your-image-url.com/project.jpg",
  "featured": true
}
\`\`\`

That's it! The project will automatically appear on your website. No need to touch any code! 🎉

## 🚀 FREE Deployment Options

### Option 1: Vercel (Recommended - Easiest!)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

**Done! Your site is live!** ✨

Vercel will automatically:
- Build your site
- Provide a free `.vercel.app` domain
- Auto-deploy on every git push
- Provide free SSL certificate

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Click "Deploy"

**That's it!** Your site will be live with a `.netlify.app` domain.

### Option 3: GitHub Pages

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" section
4. Under "Source", select "GitHub Actions"
5. The workflow is already configured! Just push to `main` branch

Your site will be available at: `https://yourusername.github.io/repository-name`

**Note:** For GitHub Pages, update `vite.config.js`:

\`\`\`javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // Add this line
})
\`\`\`

## 📝 Customization Guide

### Changing Colors

Edit CSS variables in `src/index.css`:

\`\`\`css
:root {
  --primary-color: #6366f1;     /* Main brand color */
  --secondary-color: #8b5cf6;   /* Secondary color */
  --accent-color: #ec4899;      /* Accent color */
  --bg-dark: #0f172a;           /* Background color */
  --bg-darker: #020617;         /* Darker background */
}
\`\`\`

### Adding Custom Images

1. Add images to `public/` folder
2. Reference them in `portfolio-config.json`:

\`\`\`json
"image": "/your-image.jpg"
\`\`\`

Or use external URLs:

\`\`\`json
"image": "https://your-cdn.com/image.jpg"
\`\`\`

### Adding More Skills Categories

Just add a new key-value pair in the `skills` object:

\`\`\`json
"skills": {
  "Machine Learning": ["TensorFlow", "PyTorch"],
  "New Category": ["Skill 1", "Skill 2", "Skill 3"]
}
\`\`\`

## 🎨 Using Custom Domain (Free!)

### On Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as shown

### On Netlify:
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration steps

## 🔧 Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Icons:** React Icons
- **Styling:** Pure CSS (No frameworks needed!)
- **Deployment:** Vercel / Netlify / GitHub Pages

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### Build fails on deployment?

Make sure all dependencies are in `dependencies` not `devDependencies`:

\`\`\`bash
npm install react react-dom react-icons --save
\`\`\`

### Images not showing?

- Use absolute URLs (https://...)
- Or place images in `public/` folder and reference as `/image.jpg`

### Particles background causing performance issues?

You can disable it by removing `<ParticlesBackground />` from `App.jsx`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 💡 Tips

1. **Update regularly:** Keep your projects and experience up to date
2. **Use high-quality images:** Good project images make a huge difference
3. **Keep descriptions concise:** Brief, impactful descriptions work best
4. **Test responsiveness:** Check how your site looks on mobile
5. **Add analytics:** Use Vercel Analytics or Google Analytics to track visitors

## 🌟 Show Your Support

If you find this template helpful, please give it a ⭐ on GitHub!

## 📞 Support

If you have questions or run into issues:
1. Check the troubleshooting section above
2. Open an issue on GitHub
3. Check Vercel/Netlify documentation

---

**Made with ❤️ for AI/ML Engineers**

Happy Building! 🚀
