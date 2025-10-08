# 🎨 Modern Portfolio Website

A beautiful, responsive portfolio website built with React, Tailwind CSS, and Lucide Icons.

## ✨ Features

- **Modern Design**: Glassmorphism effects, gradient backgrounds, and smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Scrolling**: Navigate seamlessly between sections
- **Interactive Projects**: Click on projects to view details in a modal
- **Contact Form**: Functional contact form with validation
- **Animated Elements**: Floating shapes, fade-in effects, and hover animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 🎯 Customization

### Update Personal Information

Edit `src/components/Portfolio.jsx` to customize:

1. **Profile Image**: Replace the Unsplash URL (line ~391) with your own image
2. **Name & Title**: Update "Alex Johnson" and "Full Stack Developer" (lines ~398-403)
3. **Social Links**: Update GitHub, LinkedIn, and email links (lines ~414-422)
4. **About Section**: Modify the experience and passion descriptions (lines ~444-468)
5. **Skills**: Update the skills array with your own skills and levels (lines ~129-136)
6. **Projects**: Replace the fake projects with your real projects (lines ~18-85)

### Change Colors

The portfolio uses a purple-pink gradient theme. To change colors:

1. Update gradient classes in the JSX (search for `from-purple-600 to-pink-600`)
2. Modify Tailwind colors in `tailwind.config.js`

### Add More Sections

You can add new sections by:
1. Creating a new section with an `id` attribute
2. Adding a navigation button in the nav bar
3. Implementing smooth scrolling in the `scrollToSection` function

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 🛠️ Technologies Used

- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **React Scripts**: Build tooling

## 📱 Sections

1. **Hero**: Introduction with profile image and call-to-action
2. **About**: Experience and passion cards
3. **Skills**: Animated skill bars showing proficiency levels
4. **Projects**: Grid of featured projects with modal details
5. **Contact**: Contact form with validation
6. **Footer**: Social links and copyright

## 🎨 Customization Tips

### Change Profile Image
Replace the Unsplash URL with your own image URL or use a local image:
```jsx
<img src="/path/to/your/image.jpg" alt="Profile" />
```

### Update Projects
Replace the `fakeProjects` array with your real projects:
```javascript
const realProjects = [
  {
    id: '1',
    name: 'Your Project Name',
    description: 'Project description...',
    language: 'React',
    html_url: 'https://github.com/yourusername/project',
    stargazers_count: 0,
    forks_count: 0,
    color: 'from-blue-500 to-cyan-500'
  }
];
```

### Connect Real Contact Form
To make the contact form functional, integrate with:
- **EmailJS**: For sending emails directly from the browser
- **Formspree**: Simple form backend
- **Your own API**: Create a backend endpoint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 💡 Support

If you have any questions or need help, feel free to reach out!

---

**Built with ❤️ using React and Tailwind CSS**
# Portfolio_Site
