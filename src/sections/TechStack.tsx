import { techStack } from "../constants";

function TechStack() {
    return (
        <section id="tech-stack" className="flex flex-col justify-center items-center py-20 bg-base-200 px-4">
            <h2 className="text-4xl font-bold capitalize mb-16">my tech stack</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl">
                {
                    techStack.map((tech) => (
                        <li key={tech.label} className="flex flex-col justify-center items-center p-6 bg-base-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow space-y-2">
                            <tech.icon size={50} color={tech.color !== "transparent" ? tech.color : undefined} />
                            <span className="text-center">{tech.label}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

export default TechStack;