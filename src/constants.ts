import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiTypescript, SiReactquery, SiReacthookform, SiTailwindcss, SiVite, SiCanva } from "react-icons/si";
import type { NavItem, ProjectItem, SocialLink, Tech, Work } from "./types";
import type { IconType } from "react-icons";
import { IoLogoFirebase } from "react-icons/io5";
import zustandLogo from "./assets/zustand.svg"
import daisyUILogo from "./assets/daisyUI.svg"

import inventoryManagerImage from "./assets/projectImages/inventoryManager.png"
import coderaWebsiteImage from "./assets/projectImages/coderaWebsite.png"
import coderaWebsitePreview from "./assets/projectImages/coderaPreview.mp4"
import shopEaseImage from "./assets/projectImages/e-commerceImage.png";
import reactQueryProjectsImage from "./assets/projectImages/reactQueryProjects.png"
import zustandProjectsImage from "./assets/projectImages/zustandPracticeProjects.png"

export const navbarLinks: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "work-experience", label: "Work Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
];

export const socialLinks: SocialLink[] = [
    {
        icon: FaGithub,
        url: "https://github.com/KarimChehab2003"
    },
    {
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/karim-chehab-75a0b5318/"
    },
    {
        icon: FaInstagram,
        url: "https://www.instagram.com/karim_chehab1/"
    },
    {
        icon: FaEnvelope,
        url: "mailto:karimchehab2018@gmail.com"
    }
]

const ZustandIcon: IconType = (props) =>
    React.createElement("img", {
        src: zustandLogo,
        alt: "Zustand",
        width: props.size,
        height: props.size,
        style: { display: "inline-block" },
    });

const daisyUIIcon: IconType = (props) =>
    React.createElement("img", {
        src: daisyUILogo,
        alt: "daisyUI",
        width: props.size,
        height: props.size,
        style: { display: "inline-block" },
    });

export const techStack: Tech[] = [
    { label: "React", icon: FaReact, color: "#61DAFB" },
    { label: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { label: "React Query", icon: SiReactquery, color: "#FF4154" },
    { label: "Zustand", icon: ZustandIcon, color: "transparent" },
    { label: "Firebase", icon: IoLogoFirebase, color: "#FFCA28" },
    { label: "React Hook Form", icon: SiReacthookform, color: "#EC5990" },
    { label: "daisyUI", icon: daisyUIIcon, color: "transparent" },
    { label: "Node.js", icon: FaNodeJs, color: "#339933" },
    { label: "Vite", icon: SiVite, color: "#646CFF" },
    { label: "Canva", icon: SiCanva, color: "#00C4CC" },
];

export const workExperience: Work[] = [
    {
        company: "Codera",
        role: "Frontend Developer (task-based)",
        date: "Jul 2025 - Present",
        description: ["Developing responsive React components with TailwindCSS.", "Implementing UI improvements and bug fixes.", "Collaborating remotely on focused deliverables."]
    },
    {
        company: "UneeqInterns",
        role: "Web Developer Intern",
        date: "May 2025",
        description: ["Built and deployed three projects: an e-commerce platform, authentication system, and payment gateway integration using mock/test APIs."]
    }
]


export const projects: ProjectItem[] = [
    {
        title: "Inventory Manager",
        description: "Allows users to efficiently manage products, track stock levels, and perform CRUD operations with real-time updates.",
        image: inventoryManagerImage,
        technologies: ["React", "Typescript", "TailwindCSS", "React Query", "Zustand", "Firebase"],
        codeUrl: "https://github.com/KarimChehab2003/inventory-manager",
        liveDemoUrl: "https://karimchehab2003.github.io/inventory-manager/",
    },
    {
        title: "Codera Website",
        description: "Responsive company website built to improve brand visibility and user experience",
        image: coderaWebsiteImage,
        technologies: ["React", "Typescript", "TailwindCSS"],
        video: coderaWebsitePreview
    },
    {
        title: "ShopEase",
        description: "A sleek and responsive e-commerce that allows users to browse products, add items to a shopping cart, and proceed to checkout.",
        image: shopEaseImage,
        technologies: ["React", "Javascript", "TailwindCSS"],
        codeUrl: "https://github.com/KarimChehab2003/E-commerce-website-UneeqIntern",
        liveDemoUrl: "https://karimchehab2003.github.io/E-commerce-website-UneeqIntern/"
    },
    {
        title: "React Query Practice Projects",
        description: "A modular React project comprising 6 apps, each focusing on a core React Query pattern.",
        image: reactQueryProjectsImage,
        technologies: ["React", "Typescript", "TailwindCSS", "React Query"],
        codeUrl: "https://github.com/KarimChehab2003/react-query-projects",
        liveDemoUrl: "https://karimchehab2003.github.io/react-query-projects/#/feedback-board"
    },
    {
        title: "Zustand Practice Projects",
        description: "A collection of 3 React apps showcasing global state management using Zustand.",
        image: zustandProjectsImage,
        technologies: ["React", "Typescript", "TailwindCSS", "React Query", "Zustand"],
        codeUrl: "https://github.com/KarimChehab2003/zustand-practice-projects",
        liveDemoUrl: "https://karimchehab2003.github.io/zustand-practice-projects/#/theme-toggler"
    },
]

export const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "myPastelDark",
    "myDarkTheme"
];