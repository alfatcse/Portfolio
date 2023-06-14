import four from "../assets/svg/projects/four.svg";
import doctor from "../assets/svg/projects/doctor.svg";
import learning from "../assets/svg/projects/learning.svg";
import chatting from "../assets/svg/projects/chatting.svg";
export const projectsData = [
  {
    id: 1,
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
      frontEnd: "https://github.com/alfatcse/Doctors-Portal",
      backEnd: "https://github.com/alfatcse/Doctors-Portal-Server",
    },
    demo: "https://doctors-portal-be73e.web.app/",
    image: doctor,
  },
  {
    id: 2,
    projectName: "Chatting App",
    projectDesc: {
      projectDescription:
        "A real time chatting app where a user can register and chat with other registered users.",
    },
    tags: ["React", "Express", "Socket.io"],
    code: {
      frontEnd: "https://github.com/alfatcse/Chat-App-Client",
      backEnd: "https://github.com/alfatcse/Chat-App-Server",
    },
    demo: "http://18.197.51.51:3000/",
    image: chatting,
  },
  {
    id: 3,
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
    id: 4,
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
