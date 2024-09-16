import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";
  
  import project1 from "../assets/project1.jpg";
  import project2 from "../assets/project2.jpg";
  import project3 from "../assets/project3.jpg";
  import project4 from "../assets/project4.jpg";
  import project5 from "../assets/project5.jpg";
  import project6 from "../assets/project6.jpg";
  import project7 from "../assets/project7.jpg";
  import project8 from "../assets/project8.jpg";
  
  export const LINKS = [
    { id: "projects", name: "projects" },
    { id: "about", name: "about" },
    { id: "experience", name: "experience" },
    { id: "contact", name: "Contact" },
  ];
  
  export const MARQUEE_TEXT =
    "Photographer, Videographer, Model, Digital Artist, Writer, Fashion Designer, VR designer,  ";
  
  export const PROJECTS = [
    {
      id: 1,
      title: "Street PhotoGraphy",
      description:
        "Take a look at the beauty of our everyday streets through my lens.",
      imgSrc: project1,
      link: "https://example.com/ecommerce-website",
    },
    {
      id: 2,
      title: "Digital Art",
      description:
        "Each art piece takes a wonderful journey from my ming canvas, take a peek.",
      imgSrc: project2,
      link: "https://example.com/social-media-app",
    },
    {
      id: 3,
      title: "Videography",
      description:
        "Some scenes are just too wholesome to be captured in one frame.",
      imgSrc: project3,
      link: "https://example.com/portfolio-website",
    },
    {
      id: 4,
      title: "Concept Photography",
      description:
        "Not all art is drawn, some are captured.",
      imgSrc: project4,
      link: "https://example.com/blog-platform",
    },
    {
      id: 5,
      title: "Virtual Reality",
      description: "I believe VR is the next step in how we can experience art.",
      imgSrc: project5,
      link: "https://example.com/task-management-tool",
    },
    {
      id: 6,
      title: "Fashion Design",
      description:
        "I like to see art in everything, you can bet i see it ion fashion too.",
      imgSrc: project6,
      link: "https://example.com/online-learning-platform",
    },
    {
      id: 7,
      title: "My Books",
      description: "A lot of dreaming, Day & Night, might as well put them down on paper.",
      imgSrc: project7,
      link: "https://example.com/recipe-app",
    },
    {
      id: 8,
      title: "Modelling",
      description: "Simply put, I am Art, so feast your eyes.",
      imgSrc: project8,
      link: "https://example.com/fitness-tracker",
    },
  ];
  
  export const ABOUT =
    "With a deep passion for creativity, I find inspiration in the beauty of all artistic mediums. My work is driven by a desire to evoke emotion, tell compelling stories, and push creative boundaries. Whether capturing moments, designing immersive experiences, or crafting narratives, I approach each project with a spirit of exploration and innovation. For me, art is a way of life—constantly evolving and inspiring others to see the world from new perspectives.";
  
  export const EXPERIENCES = [
    {
      company: "Meta",
      role: "VR Designer",
      year: "12/2023 - Present",
      description:
        "As a VR designer at Meta, I had the opportunity to work on cutting-edge immersive experiences that pushed the boundaries of virtual reality. Collaborating with a dynamic team, I helped design and develop interactive environments, focusing on user engagement and innovative storytelling. My time at Meta allowed me to refine my skills in creating seamless, immersive experiences that blend creativity with technology.",
    },
    {
      company: "Frelancer",
      role: "Everything",
      year: "01/2020 - 11/2023",
      description:
        "As a freelancer, I’ve had the opportunity to work across various creative fields, collaborating with clients from diverse industries to bring their visions to life. This experience has honed my adaptability, creativity, and ability to deliver unique, impactful work tailored to each project’s needs.",
    },
  ];
  
  export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://x.com/",
      icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/",
      icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
    },
  ];
  
  export const CONTACT = {
    text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
    email: "hi@john.fauyer.me",
    phone: "+(221 - 7674567092)",
  };
  