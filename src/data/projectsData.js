import four from "../assets/svg/projects/four.svg";
import doctor from "../assets/svg/projects/doctor.svg";
import learning from "../assets/svg/projects/learning.svg";
import chatting from "../assets/svg/projects/chatting.svg";
import university from "../assets/svg/projects/University.svg";
export const projectsData = [
  {
    id: 1,
    projectName: "University Management",
    projectDesc: {
      projectDescription:
        "This project is a University Management System developed using a microservices architecture, allowing for modularity, scalability, and maintainability",
      Credential: "Admin Credential->",
      Admin: "UserID: A-00000,",
      Password: "Password: universityadmin123!@",
    },
    tags: ["NextJS", "PostgreSQL", "Microservices","Redis"],
    code: {
      frontEnd: "https://github.com/alfatcse/University-Management",
      backEnd: "https://github.com/alfatcse/Doctors-Portal-Server",
    },
    demo: "https://university-management-frontend-pdlf.onrender.com/",
    image: university,
  },
  {
    id: 2,
    projectName: "Doctor's Portal",
    projectDesc: {
      projectDescription:
        "A Project to manage the appointments of doctors and patients along with purchasing a service.",
      Credential: "Admin Credential->",
      Admin: "UserID:admin@a.com,",
      Password: "Password: Admin123#",
    },
    tags: ["React", "Express", "Stripe", "Firebase"],
    code: {
      frontEnd: "https://github.com/alfatcse/Doctor-Portal",
      backEnd: "https://github.com/alfatcse/Doctors-Portal-Server",
    },
    demo: "https://doctors-portal-4ref.onrender.com/",
    image: doctor,
  },
  {
    id: 3,
    projectName: "Chatting App",
    projectDesc: {
      projectDescription:
        "A real time chatting app where a user can register and chat with other registered users.",
    },
    tags: ["React", "Express", "Socket.io"],
    code: {
      frontEnd: "https://github.com/alfatcse/Chat-App",
      backEnd: "https://github.com/alfatcse/Chat-App-Server",
    },
    demo: "https://chat-app-client-egmb.onrender.com/",
    image: chatting,
  },
  {
    id: 4,
    projectName: "Learning Portal",
    projectDesc: {
      projectDescription:
        "This project is about online learning platform where one can register and watch video to learn.",
      Credential: "Admin Credential->",
      Admin: "UserID:admin@learnwithsumit.com,",
      Password: "Password: lws@123456",
    },
    tags: ["React", "Tailwind", "Redux"],
    code: {
      frontEnd: "https://github.com/alfatcse/Learning-Portal",
    },
    demo: "https://merry-axolotl-1561b0.netlify.app/",
    image: learning,
  },
  {
    id: 5,
    projectName: "Sell Now",
    projectDesc: {
      projectDescription:
        "A project closely related to E-Commerce Site.Where a user can buy and sell used Mobile Phone.",
      Credential: "Admin Credential->",
      Admin: "UserID:Admin123#",
      Password: "Password: Admin123#",
    },
    tags: ["React", "Tailwind", "Stripe", "Firebase"],
    code: {
      frontEnd: "https://github.com/alfatcse/Online-Shop-Client",
      backEnd: "https://github.com/alfatcse/Online-Shop-Server",
    },
    demo: "https://sell-now-b00ee.web.app/",
    image: four,
  },
];
