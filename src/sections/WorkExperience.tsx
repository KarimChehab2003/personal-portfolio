import { workExperience } from "../constants";

function WorkExperience() {
    return (
        <section id="work-experience" className="flex flex-col justify-center items-center py-20 bg-base-100 px-4">
            <h2 className="text-4xl font-bold capitalize mb-16">Work Experience</h2>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-6xl">
                {
                    workExperience.map((work, idx) => (
                        <li key={work.company}>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5 text-primary"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className={`${idx % 2 !== 0 ? "timeline-end" : "timeline-start md:text-end"} mb-10 `}>
                                <time className="font-mono italic text-primary">{work.date}</time>
                                <p className="text-lg font-extrabold">{work.role}</p>
                                <p className="text-base font-semibold text-secondary">{work.company}</p>
                                <ul className="mt-2">
                                    {
                                        work.description.map((desc, idx) => (
                                            <li key={idx}>{desc}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <hr className="bg-primary" />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

export default WorkExperience;