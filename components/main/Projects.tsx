import React from "react";
import ProjectCard from "../sub/ProjectCard";

const designProjects = [
  {
    src: "/Ecommerce website templates.jpg",
    title: "Modern Next.js Ecommerce Website",
    description:
      "A sleek and modern ecommerce website built with Next.js, featuring responsive design and optimized performance.",
  },
  {
    src: "/Wellness Tracker.jpg",
    title: "A UI/UX Design for a Health and Wellness App",
    description:
      "A design concept for a health and wellness app, focusing on user-friendly interfaces and engaging visuals.",
  },
  {
    src: "/Nike UI Inspiration.jpg",
    title: "Nike UI Inspired UI/UX Design",
    description:
      "A Nike-inspired UI/UX design showcasing innovative layouts and immersive user experiences.",
  },
  {
    src: "/Plant Shop Website.jpg",
    title: "Plant Shop Website Themed Website",
    description:
      "A themed website for a plant shop, featuring a clean and green aesthetic with user-friendly navigation.",
  },
  {
    src: "/Luxury Car Detailing Landing Page.jpg",
    title: "Luxury Car Detailing Landing Page",
    description:
      "A high-end landing page design for a luxury car detailing service, emphasizing elegance and professionalism.",
  },
  {
    src: "/Zen Vita.jpg",
    title: "Yoga App Themed Website",
    description:
      "A calming and serene website design for a yoga app, promoting mindfulness and wellness.",
  },
  {
    src: "/Eden Rose Wedding Photographer.jpg",
    title: "Brand Identity for a Wedding Photographer",
    description:
      "A visually appealing brand identity design for a wedding photographer, highlighting elegance and romance.",
  },
  {
    src: "/Fashion E-commerce.jpg",
    title: "E-commerce Landing Page",
    description:
      "A stylish and modern landing page design for a fashion e-commerce platform.",
  },
  {
    src: "/Agency Website Template.jpg",
    title: "Agency Website Template",
    description:
      "A professional and versatile website template designed for creative agencies.",
  },
  {
    src: "/Fashion website.jpg",
    title: "Fashion Website Themed Website",
    description:
      "A chic and trendy website design tailored for the fashion industry.",
  },
  {
    src: "/Travel website.jpg",
    title: "Travel Website Themed Website",
    description:
      "A vibrant and adventurous website design for travel enthusiasts and agencies.",
  },
  {
    src: "/AI-based SaaS Website Template.jpg",
    title: "AI-based SaaS Website Template",
    description:
      "A cutting-edge website template for AI-based SaaS products, focusing on innovation and technology.",
  },
  {
    src: "/Project GameX.jpg",
    title: "Project GameX Themed Website",
    description:
      "A dynamic and engaging website design for a gaming project, featuring immersive visuals.",
  },
  {
    src: "/Solar comapny.jpg",
    title: "Landing Page for Solar Company",
    description:
      "A clean and eco-friendly landing page design for a solar energy company.",
  },
  {
    src: "/Skincare (Organic) Ecommerce Web.jpg",
    title: "Skincare (Organic) Ecommerce Web UI Landing Design",
    description:
      "A natural and organic-themed landing page design for a skincare e-commerce platform.",
  },
  {
    src: "/CECOMSA.jpg",
    title: "Equipment Shop",
    description:
      "A functional and user-friendly website design for an equipment shop, focusing on accessibility and clarity.",
  },

  
];

const githubRepos = [
  {
    name: "Iphone-store-clone",
    url: "https://github.com/KuyaMecky/Iphone-store-clone",
    img: "/iphone-clone.jpg",
    description: "An Apple-inspired ecommerce UI built with Next.js, featuring responsive layouts and animations."
  },
  {
    name: "Nova",
    url: "https://github.com/KuyaMecky/Nova",
    img: "/nova.jpg",
    description: "A modern agency landing page with scroll-triggered animations and a minimal UI design."
  },
  {
    name: "82-Lottery-Themes",
    url: "https://github.com/KuyaMecky/82-Lottery-Themes",
    img: "/lottery-themes.png",
    description: "Custom WordPress themes made for lottery-style platforms with optimized UX and color themes."
  },
  {
    name: "Bran-wave",
    url: "https://github.com/KuyaMecky/Bran-wave",
    img: "/bran-wave.jpg",
    description: "A branding-focused landing page with smooth transitions and vibrant gradients."
  },
  {
    name: "LetoPea-V2.0",
    url: "https://github.com/KuyaMecky/LetoPea-V2.0",
    img: "/letopea-v2.png",
    description: "Second version of the LetoPea Using Deep and Machine Learnings UI kit – upgraded components and enhanced mobile responsiveness."
  },
  {
    name: "Attendance-system-v1",
    url: "https://github.com/KuyaMecky/Attendance-management-system-v1",
    img: "/attendance-v1.jpeg",
    description: "Basic attendance management system using PHP and MySQL, ideal for small institutions."
  },
  {
    name: "Attendance-system-v2",
    url: "https://github.com/KuyaMecky/Attendance-management-system-v2",
    img: "/attendance-v2.png",
    description: "Improved version with role-based access, better UI, and attendance reporting features."
  },
  {
    name: "R2N-Training-Center",
    url: "https://github.com/KuyaMecky/R2N-Training-Center",
    img: "/r2n-training.png",
    description: "Website for a training center with class listings, inquiry forms, and responsive design."
  },
  {
    name: "Ecom-prod-ready",
    url: "https://github.com/KuyaMecky/Ecom-prod-ready",
    img: "/ecom-prod.png",
    description: "A production-ready ecommerce boilerplate built with Next.js, Tailwind, and headless CMS."
  },
  {
    name: "Corporate-Starter",
    url: "https://github.com/KuyaMecky/nextjs-corporate-starter",
    img: "/corporate-starter.png",
    description: "Corporate business website starter template with clean layout and reusable components."
  },
  {
    name: "Huly Platform",
    url: "https://github.com/KuyaMecky/platform",
    img: "/Huly-Platformr.png",
    description: "The Huly Platform is a robust framework designed to accelerate the development of business applications"
  },
  {
    name: "Social-media",
    url: "https://github.com/KuyaMecky/Social-media",
    img: "/Social-media.png",
    description: "a sample social media platform using react and postgresql"
  },
  
];


const liveSites = [
  {
    name: "CyberStack Solutions",
    url: "https://cyberstacksolutions.com/",
    img: "/cyberstack.png",
    description: "IT solutions and cybersecurity services with a modern and professional landing page."
  },
  {
    name: "Page365 Philippines",
    url: "https://www.page365.ph/",
    img: "/page365.png",
    description: "E-commerce chat and order management system for sellers in the Philippines."
  },
  {
    name: "Casino Marriott",
    url: "https://casinomarriott.blog/",
    img: "/casinomarriott.png",
    description: "Gaming and entertainment blog with a focus on casino news and updates."
  },
];

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>

      {/* Design Projects */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
        {designProjects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
        {/* 👇 This is the button to GitHub profile */}
  <div className="flex justify-center mt-8">
    <a
      href="https://www.linkedin.com/in/michael-tallada-6b316697/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-6 rounded-full transition duration-200"
    >
      Contact me for more projects (500+)
    </a>
  </div>

      <div className="w-full px-10 mt-20">
  <h2 className="text-2xl font-semibold text-gray-200 mb-6">
    GitHub Repositories
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {githubRepos.map((repo, index) => (
      <a
        key={index}
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 border border-gray-700 rounded-xl hover:border-cyan-400 transition duration-200 overflow-hidden"
      >
        <img src={repo.img} alt={repo.name} className="w-full h-60 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{repo.name}</h3>
          <p className="text-sm text-gray-400">{repo.description}</p>
        </div>
      </a>
    ))}
  </div>


  {/* 👇 This is the button to GitHub profile */}
  <div className="flex justify-center mt-8">
    <a
      href="https://github.com/KuyaMecky"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-6 rounded-full transition duration-200"
    >
      View More on GitHub
    </a>
  </div>
</div>


<div className="w-full px-10 mt-20">
  <h2 className="text-2xl font-semibold text-gray-200 mb-6">
    Live Websites
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {liveSites.map((site, index) => (
      <a
        key={index}
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 border border-gray-700 rounded-xl hover:border-green-400 transition duration-200 overflow-hidden"
      >
        <img src={site.img} alt={site.name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{site.name}</h3>
          <p className="text-sm text-gray-400">{site.description}</p>
        </div>
      </a>
    ))}
  </div>
  {/* Live Websites - Redirect Button */}

  <div className="flex justify-center mt-8">
    <a
      href="https://www.linkedin.com/in/michael-tallada-6b316697/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-6 rounded-full transition duration-200"
    >
      Contact me for more projects (80+)
    </a>
  </div>

</div>

    </div>
  );
};

export default Projects;
