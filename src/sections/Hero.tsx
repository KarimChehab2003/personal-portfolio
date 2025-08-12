import { FaDownload } from "react-icons/fa6";
import profilePic from "../assets/ProfilePicFormal_cropped.png"
import { socialLinks } from "../constants";

function Hero() {
    return (
        <section id="home" className="min-h-screen h-full hero bg-gradient-to-br from-base-100 to-base-300">
            <div className="hero-content text-center">
                <div className="max-w-4xl">
                    <div className="avatar mb-8">
                        <div className="ring-primary ring-offset-base-100 w-52 rounded-full ring-2 ring-offset-2">
                            <img src={profilePic} alt="picture of me" />
                        </div>
                    </div>

                    {/* About Me */}
                    <h1 className="text-5xl font-bold mb-4">Karim Chehab</h1>
                    <h2 className="text-2xl text-primary font-semibold capitalize mb-4">frontend developer</h2>
                    <p className="text-lg mb-2">📍 Cairo, Egypt</p>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">I specialize in creating beautiful, responsive web applications with modern JavaScript frameworks and pixel-perfect designs with 2 years of hands-on.</p>

                    {/* Social LInks */}
                    <ul className="flex justify-center gap-4 mb-8">
                        {
                            socialLinks.map((social) => (
                                <a href={social.url} target="_blank" className="btn btn-primary btn-circle btn-outline">
                                    <social.icon className="text-xl" />
                                </a>
                            ))
                        }
                    </ul>

                    <a href="/personal-portfolio/resume.pdf" download="Karim_Chehab_Resume.pdf" className="btn btn-primary btn-lg">
                        <FaDownload />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;