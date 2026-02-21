import project1 from "../assets/web-portfolio.png";
import project2 from "../assets/project2.png";

const projects = [
  {
    id: "proj-1",
    title: "Personal Portfolio Website",
    description:
      "A responsive website portfolio built with React.js, showcasing my projects, skills, and contact information. It features smooth scrolling, a dark mode toggle, and a clean, creative, modern design.",
    technologies: ["React.js", "CSS3", "HTML5"],
    image: project1,
    repositoryLink: "https://github.com/ntando-masangu/FUTURE_FS_01",
    liveDemoLink: "https://ntando-masangu-portfolio.vercel.app/",
  },
  {
    id: "proj-2",
    title: "Mini CRM Leads System",
    description:
      "A full-stack CRM website built with React.js, Node.js, and MySQL. Easily add, update, delete, and track leads with a clean dashboard. Features include search and filter functionality, lead analytics, and secure admin login with JWT authentication.",
    technologies: ["React.js", "Node.js", "MySQL", "CSS3", "HTML5"],
    image: project2,
    repositoryLink: "https://github.com/ntando-masangu/FUTURE_FS_02",
  },
];
export default projects;
