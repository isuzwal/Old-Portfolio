
import Project from "../Section/Project"

interface Project{
    name:string,
    description:string,
    githublink:string,
    livelink:string,
    img:string,
    IsComplete:string,
    techStack:string[];
}

const ProjectList:Record<string,Project>={
project0:{
name:"Daily Planner",
IsComplete:"Running",
description:`DailyPlanner is a web application designed to streamline task management with a single click. 
It generates a concise summary of users' task lists and allows interactive chat with the generated summary. 
Additionally, users can stay motivated by earning rewards for maintaining focus during 45-minute study sessions.`,
githublink:"https://github.com/ujjwal2061/Daliy-Planner",
livelink:"https://daliy-palnner.vercel.app/",
img:"Project0.png",
techStack:["React","Firebase","Tailwind ","Redux","Gemini API"]
},
project1:{
    name:"Homy",
    IsComplete:"Running",
    description:`Homy is a MERN-based web application that simplifies the process of finding and renting accommodations, similar to Airbnb. 
    Built with MongoDB, Express.js, React.js, and Node.js, it features secure authentication using JWT (JSON Web Token). 
    Users can seamlessly list, browse, and book properties—all without relying on third-party services like Firebase or Cloudinary.`,
    githublink:"https://github.com/ujjwal2061/Booking-App",
    livelink:"https://hoomy.vercel.app",
    img:"Project1.png",
    techStack:["React","Node.Js","Tailwind","Express","MongoDB","Cloudinary"]
},
project2:{
    name:'Writly',
    IsComplete:"Running",
    description: "Built Writly, a complete social media application, to gain practical experience with CRUD operations and effectively design and consume RESTful APIs. The project focuses on real-world functionality like user interaction, post management, and dynamic content rendering.",
    githublink:"https://github.com/ujjwal2061/Pen-Post",
    livelink:"https://writly-dot.vercel.app",
    img:"Project2.png",
    techStack:["React","Node.Js","Tailwind","Express","MongoDB","Cloudinary","Zustand"]
},
project4:{
    name:"Newly.io",
    IsComplete:"Running",
  description: "A modern landing page crafted with smooth, eye-catching animations for an enhanced user experience. Built using powerful tools like Next.js, Tailwind CSS, and Motion, it blends clean UI with performance.",
    livelink:"https://newly-io.vercel.app/",
    githublink:"",
    img:"Project4.png",
    techStack:["Next.js","Tailwind","Motion","Aceternity UI","Type Script"]

}
}
export const allproject:Project[]=Object.values(ProjectList).slice(4)
export const project:Project[]=Object.values(ProjectList)
