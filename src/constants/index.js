import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Research Intern",
      company_name: "Indian Institute of Technology",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2022 - August 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Phishing Project",
      description:
        "I built a web application that utilizes machine learning to unveil hidden phishing tactics in URLs and emails with impressive accuracy (96% for URLs and 99% for emails). My tool scrapes data to empower the model.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "BeautifulSoap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ayushshresth021/Phishing_project",
    },
    {
      name: "Suite Spot Hotel Management Web-app",
      description:
      "I led a team of 10 developers, using Agile Scrum practices, to craft a hotel management system featuring a dynamic search engine with filtering capabilities for location, price, and amenities. We deployed the application on Microsoft Azure Web Apps for seamless accessibility and optimal performance.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ayushshresth021/Suite-Spot",
    },
    {
      name: "Etsy Prototype",
      description:
      "I built a fully functional Etsy-inspired web prototype using the MERN stack, complete with features like adding items to carts, managing wishlists, and checking out. To ensure a seamless user experience, I optimized data fetching with GraphQL, resulting in faster page load times.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Graph QL",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ayushshresth021/Etsy-Clone",
    },

    {
      name: "Stack Overflow Prototype",
      description:
      "I developed a Stack Overflow simulation that mirrors its dynamic Q&A experience, allowing users to upvote/downvote answers, earn badges, and engage in threaded discussions. To ensure users find the knowledge they need, I implemented a powerful search API with multi-criteria filtering. Apache Kafka enables seamless real-time updates",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ayushshresth021/StackOverflow-Clone",
    },
    {
      name: "AutoGo Car Rental Web-app",
      description:
      " I developed a car rental website to handle reservations, interactive maps, and payment processing. Through thorough requirements gathering and analysis, I ensured the inclusion of key features like a rewarding loyalty system, automated invoice emailing, user feedback forms, and dynamic filtering options for a tailored user experience.",
      tags: [
        {
          name: "MySQL",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ayushshresth021/AutoGO-Project",
    },
    {
      name: "Path Finding Visualizer",
      description:
      "I developed an application that visually guides users through the shortest path on a 50x50 grid. To achieve this, I leveraged graph and minHeap data structures to implement Dijkstra's algorithm, and employed a modified version of Kruskal's algorithm to generate engaging mazes within the graph.",
      tags: [
        {
          name: "Pygame",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "TKinter",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ayushshresth021/Path-Finding-Visualizer",
    },
    {
      name: "Soccer Monk",
      description:
      "I built an interactive web application that uncovers insights within soccer player statistics, generating informative inter-correlation heat maps. To achieve this, I meticulously filtered and organized raw data from over 18,000 players, enabling the discovery of optimal positions and player combinations.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Seaborn",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ayushshresth021/Soccer-Monk",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };