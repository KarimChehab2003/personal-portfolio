import type { IconType } from "react-icons"

export type NavItem = {
    id: string,
    label: string,
}

export type SocialLink = {
    icon: IconType,
    url: string
}

export type Tech = {
    label: string,
    icon: IconType,
    color: string
}

export type Work = {
    date: string,
    company: string,
    role: string,
    description: string[]
}

export type ProjectItem = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    codeUrl?: string;
    liveDemoUrl?: string;
    video?: string;
};
