# 📝 CONTENT UPDATE GUIDE

This guide shows you exactly how to update your portfolio content. Everything is controlled from ONE file: `src/data/portfolio-config.json`

---

## 🎯 The Magic File

**File Location:** `src/data/portfolio-config.json`

This single file controls:
- ✅ Personal Information
- ✅ Skills
- ✅ Projects
- ✅ Work Experience
- ✅ Education

---

## 👤 Updating Personal Information

\`\`\`json
{
  "personalInfo": {
    "name": "Your Full Name",              // Your name displayed everywhere
    "title": "AI/ML Engineer",             // Your job title
    "email": "your.email@example.com",     // Contact email
    "phone": "+1 234 567 8900",           // Phone number
    "location": "San Francisco, USA",      // Your location
    "github": "https://github.com/you",    // GitHub profile URL
    "linkedin": "https://linkedin.com/in/you", // LinkedIn URL
    "website": "https://yoursite.com",     // Personal website (optional)
    "bio": "Write your bio here..."        // Short introduction
  }
}
\`\`\`

---

## 🛠️ Adding/Updating Skills

Skills are organized by categories. Add or modify categories as needed:

\`\`\`json
{
  "skills": {
    "Machine Learning": [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn"
    ],
    "Programming": [
      "Python",
      "JavaScript",
      "C++"
    ],
    "Add Your Category": [
      "Skill 1",
      "Skill 2"
    ]
  }
}
\`\`\`

### Tips:
- Keep 4-6 categories
- 3-6 skills per category works best
- Use industry-standard names

---

## 🚀 Adding a New Project (Most Common!)

### Example: Adding a New Project

\`\`\`json
{
  "projects": [
    {
      "id": 1,                                    // Unique number
      "name": "Sentiment Analysis Tool",          // Project name
      "description": "Built an NLP model that analyzes tweet sentiment with 94% accuracy using BERT transformers",  // What it does
      "technologies": ["Python", "BERT", "Flask", "Docker"],  // Tech stack
      "github": "https://github.com/you/project", // GitHub link
      "demo": "https://demo.example.com",        // Live demo (optional)
      "image": "https://your-image-url.com/pic.jpg", // Project image
      "featured": true                            // Show on featured filter?
    }
  ]
}
\`\`\`

### Project Image Options:

**Option 1: Use a URL**
\`\`\`json
"image": "https://imgur.com/your-image.jpg"
\`\`\`

**Option 2: Use placeholder (temporary)**
\`\`\`json
"image": "https://via.placeholder.com/600x400"
\`\`\`

**Option 3: Add to public folder**
1. Put image in `public/images/` folder
2. Reference it:
\`\`\`json
"image": "/images/my-project.jpg"
\`\`\`

### Pro Tips for Projects:
- ✅ Keep descriptions under 150 characters
- ✅ Use action verbs (Built, Developed, Created)
- ✅ Highlight impact/results (95% accuracy, 1M users)
- ✅ List 3-5 technologies max
- ✅ Set `"featured": true` for your best 3-4 projects

---

## 💼 Updating Work Experience

\`\`\`json
{
  "experience": [
    {
      "company": "Tech Company Inc",
      "position": "Senior ML Engineer",
      "duration": "2022 - Present",
      "description": "Led development of recommendation systems serving 5M+ users"
    },
    {
      "company": "Startup Name",
      "position": "ML Engineer",
      "duration": "2020 - 2022",
      "description": "Developed computer vision models for autonomous vehicles"
    }
  ]
}
\`\`\`

### Tips:
- List most recent first
- Keep descriptions to 1-2 lines
- Focus on impact and technologies

---

## 🎓 Updating Education

\`\`\`json
{
  "education": [
    {
      "degree": "Master of Science in Computer Science",
      "institution": "Stanford University",
      "year": "2020",
      "description": "Specialized in Machine Learning and AI"
    }
  ]
}
\`\`\`

---

## 🔄 Complete Workflow to Update

### 1. Edit the Config File
Open `src/data/portfolio-config.json` and make your changes

### 2. Test Locally (Optional but Recommended)
\`\`\`bash
npm run dev
\`\`\`
Visit `http://localhost:5173` to preview changes

### 3. Commit and Push
\`\`\`bash
git add src/data/portfolio-config.json
git commit -m "Updated projects"
git push
\`\`\`

### 4. Automatic Deployment! 🎉
- **Vercel/Netlify:** Auto-deploys in 1-2 minutes
- **GitHub Pages:** Auto-deploys in 3-5 minutes

---

## 📋 Full Example Config

Here's a complete example with one of each:

\`\`\`json
{
  "personalInfo": {
    "name": "Jane Doe",
    "title": "AI/ML Engineer",
    "email": "jane.doe@email.com",
    "phone": "+1 555 123 4567",
    "location": "Seattle, WA",
    "github": "https://github.com/janedoe",
    "linkedin": "https://linkedin.com/in/janedoe",
    "website": "https://janedoe.dev",
    "bio": "Passionate AI engineer with 5 years of experience building production ML systems. Specialized in NLP and computer vision."
  },
  "skills": {
    "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn"],
    "Programming": ["Python", "JavaScript", "SQL"]
  },
  "projects": [
    {
      "id": 1,
      "name": "Image Classifier",
      "description": "CNN-based classifier with 98% accuracy on CIFAR-10",
      "technologies": ["PyTorch", "Python", "Docker"],
      "github": "https://github.com/janedoe/image-classifier",
      "demo": "https://demo.example.com",
      "image": "https://via.placeholder.com/600x400",
      "featured": true
    }
  ],
  "experience": [
    {
      "company": "TechCorp",
      "position": "Senior ML Engineer",
      "duration": "2021 - Present",
      "description": "Leading ML infrastructure development"
    }
  ],
  "education": [
    {
      "degree": "MS in Computer Science",
      "institution": "MIT",
      "year": "2021",
      "description": "Focus on Machine Learning"
    }
  ]
}
\`\`\`

---

## ⚠️ Common Mistakes to Avoid

### ❌ DON'T:
- Forget commas between items
- Use single quotes (use double quotes: `"text"`)
- Include trailing commas on last items
- Break JSON syntax

### ✅ DO:
- Use a JSON validator if unsure
- Keep IDs sequential (1, 2, 3...)
- Test locally before pushing
- Back up your config before major changes

---

## 🛠️ JSON Validation

Before pushing, validate your JSON:
1. Visit [jsonlint.com](https://jsonlint.com)
2. Paste your config
3. Click "Validate JSON"
4. Fix any errors shown

Or use VS Code's built-in JSON validation (it highlights errors automatically!)

---

## 💡 Quick Examples

### Add a Quick Project:
\`\`\`json
{
  "id": 4,
  "name": "ChatBot",
  "description": "AI chatbot using GPT-3 API",
  "technologies": ["Python", "OpenAI", "FastAPI"],
  "github": "https://github.com/you/chatbot",
  "demo": "",
  "image": "https://via.placeholder.com/600x400",
  "featured": false
}
\`\`\`

### Add a New Skill Category:
\`\`\`json
"Cloud Platforms": ["AWS", "Azure", "GCP"]
\`\`\`

### Update Your Bio:
\`\`\`json
"bio": "Your new bio text here. Keep it concise and impactful!"
\`\`\`

---

## 🎯 Checklist Before Deploying

- [ ] All URLs are valid (start with https://)
- [ ] All IDs are unique
- [ ] JSON syntax is valid
- [ ] No placeholder text remains (unless intentional)
- [ ] Tested locally with `npm run dev`
- [ ] Email and links are correct

---

## 🚀 You're Ready!

Now you know how to update your entire portfolio from one simple file. No coding required! Just edit the JSON, commit, and push. Your changes will be live in minutes! ⚡

---

**Need help?** Check the README.md or open an issue on GitHub.
