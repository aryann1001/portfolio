# 🎉 Getting Started

Welcome! This guide will help you set up and customize your AI/ML portfolio website in just a few minutes.

## 📋 Prerequisites

- Node.js 16+ installed ([Download here](https://nodejs.org/))
- A code editor (VS Code recommended)
- Git installed
- A GitHub account

---

## ⚡ Quick Setup (5 Minutes)

### Step 1: Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Step 2: Customize Your Content

Open `src/data/portfolio-config.json` and update:

1. **Personal Info** (Lines 2-12)
   - Your name, email, phone
   - GitHub and LinkedIn URLs
   - Your bio

2. **Skills** (Lines 13-20)
   - Add your technical skills
   - Organize by categories

3. **Projects** (Lines 21-50)
   - Add your projects
   - Include GitHub links and demos

4. **Experience & Education** (Lines 51-70)
   - Add your work history
   - Add your degrees

### Step 3: Run Locally

\`\`\`bash
npm run dev
\`\`\`

Visit: `http://localhost:5173`

### Step 4: Deploy for FREE!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy to Vercel:**
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Click Deploy
5. Done! 🎉

---

## 📁 Important Files

| File | Purpose | Should You Edit? |
|------|---------|------------------|
| `src/data/portfolio-config.json` | **Your content** | ✅ YES - Edit this! |
| `README.md` | Documentation | ℹ️ Optional |
| `src/components/*.jsx` | React components | ⚠️ Only if you know React |
| `src/components/*.css` | Styling | ⚠️ For advanced customization |
| `package.json` | Dependencies | ❌ Don't edit unless needed |

---

## 🎨 Customization Levels

### Level 1: Content Only (Easiest)
**What:** Update text, links, and project info
**How:** Edit `portfolio-config.json`
**Skills:** None required!
**Time:** 15 minutes

### Level 2: Styling
**What:** Change colors, fonts, spacing
**How:** Edit CSS files in `src/components/`
**Skills:** Basic CSS
**Time:** 30 minutes

### Level 3: Components
**What:** Add new sections, modify layout
**How:** Edit React components
**Skills:** React knowledge
**Time:** 1-2 hours

---

## 🎯 Your First Edits

### 1. Update Your Name

In `portfolio-config.json`:
\`\`\`json
"name": "Your Actual Name"
\`\`\`

### 2. Add Your Email

\`\`\`json
"email": "youremail@gmail.com"
\`\`\`

### 3. Add Your First Project

\`\`\`json
{
  "id": 1,
  "name": "My Awesome Project",
  "description": "What your project does",
  "technologies": ["Python", "TensorFlow"],
  "github": "https://github.com/you/project",
  "demo": "",
  "image": "https://via.placeholder.com/600x400",
  "featured": true
}
\`\`\`

### 4. Save and Check

Run `npm run dev` and visit `http://localhost:5173` to see changes!

---

## 🔄 Development Workflow

1. Make changes to `portfolio-config.json`
2. Save the file
3. Check browser (it auto-refreshes!)
4. Repeat until happy
5. Commit and push to GitHub
6. Automatic deployment! ✨

---

## 📚 Documentation Links

- **Content Updates:** [CONTENT-GUIDE.md](CONTENT-GUIDE.md) - How to update projects, skills, etc.
- **Deployment:** [DEPLOYMENT.md](DEPLOYMENT.md) - Deploy to Vercel, Netlify, or GitHub Pages
- **Main Docs:** [README.md](README.md) - Complete documentation

---

## 🆘 Need Help?

### The site won't start?

\`\`\`bash
# Try deleting node_modules and reinstalling
rm -rf node_modules package-lock.json
npm install
npm run dev
\`\`\`

### JSON errors?

- Check for missing commas
- Make sure all quotes are double quotes: `"text"`
- Use [jsonlint.com](https://jsonlint.com) to validate

### Images not showing?

Use full URLs like: `https://via.placeholder.com/600x400`

---

## ✅ Checklist

Before deploying, make sure:

- [ ] Updated personal info (name, email, links)
- [ ] Added your real projects (at least 3)
- [ ] Updated skills section
- [ ] Added work experience
- [ ] Tested locally (`npm run dev`)
- [ ] All links work
- [ ] Images load properly
- [ ] Committed to GitHub

---

## 🚀 Next Steps

After setup:

1. ✅ Deploy to Vercel (2 minutes)
2. ✅ Share your portfolio URL
3. ✅ Add to your resume
4. ✅ Update LinkedIn
5. ✅ Keep adding new projects!

---

## 💡 Pro Tips

1. **Start Simple:** Update content first, customize design later
2. **Test Often:** Run `npm run dev` frequently to check changes
3. **Commit Frequently:** Save your progress with git commits
4. **Use Placeholders:** Use placeholder images initially, replace later
5. **Keep Learning:** Check out the other guide files for more details

---

## 🎉 You're All Set!

Your portfolio is ready to showcase your AI/ML expertise to the world!

**Questions?** Check the [README.md](README.md) or open an issue.

**Happy Building!** 🚀

---

### Quick Commands Reference

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Commit changes
git add .
git commit -m "Updated portfolio"
git push
\`\`\`
