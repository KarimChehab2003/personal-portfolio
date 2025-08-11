import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../constants";

const techColors: Record<string, string> = {
    react: "bg-[#61DAFB] text-black",       // React cyan
    tailwindcss: "bg-[#06B6D4] text-white", // Tailwind cyan
    firebase: "bg-[#FFCA28] text-black", // Firestore yellow
    javascript: "bg-[#F7DF1E] text-black",  // JavaScript yellow
    typescript: "bg-[#3178C6] text-white",  // TypeScript blue
    zustand: "bg-[#FF6B00] text-white",     // Zustand orange
    "react query": "bg-[#FF4154] text-white",  // React Query pink/red
};


function Projects() {
    return (
        <section id="projects" className="flex flex-col justify-center items-center py-20 bg-base-200 px-4">
            <h2 className="text-4xl font-bold capitalize mb-16">Featured Projects</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {
                    projects.map((project) => (
                        <li key={project.title} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                            <figure className="aspect-video">
                                {
                                    project.video ? (
                                        <iframe
                                            src={project.video}
                                            title={project.title}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <img src={project.image} alt={project.title} className="w-full h-full" />
                                    )
                                }
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-primary text-xl">{project.title}</h2>
                                <p className="py-4 text-lg">{project.description}</p>
                                <ul className="flex flex-wrap gap-2 mb-4">
                                    {
                                        project.technologies.map((tech) => (
                                            <li key={tech} className={`badge badge-sm font-medium ${techColors[tech.toLowerCase()] || "bg-gray-500 text-white"}`}>
                                                {tech}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="card-actions justify-end">
                                    {
                                        project.codeUrl && (
                                            <a href={project.codeUrl} target="_blank" className="btn btn-outline btn-sm">
                                                <FaGithub className="mr-1" /> Code
                                            </a>
                                        )
                                    }
                                    {
                                        project.liveDemoUrl && (
                                            <a href={project.liveDemoUrl} target="_blank" className="btn btn-secondary btn-sm">
                                                <FaExternalLinkAlt className="mr-1" />
                                                Live Demo
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

export default Projects;