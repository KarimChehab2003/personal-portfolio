import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

function Contact() {
    return (
        <section id="contact" className="flex flex-col justify-center items-center py-20 bg-base-100 px-4 text-center">
            <h2 className="text-4xl font-bold capitalize mb-8">let's work together</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">I'm always interested in new opportunities and exciting projects. Let's connect and create something amazing!</p>
            <div className="flex justify-center gap-4">
                <a href="mailto:karimchehab2018@gmail.com" className="btn btn-primary btn-lg">
                    <FaEnvelope className="mr-2" />
                    Get In Touch
                </a>
                <a href="https://www.linkedin.com/in/karim-chehab-75a0b5318/" className="btn btn-outline btn-lg">
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                </a>
            </div>
        </section>
    );
}

export default Contact;