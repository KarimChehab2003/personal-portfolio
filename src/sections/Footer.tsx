import { socialLinks } from "../constants";

function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center p-10 bg-base-200 space-y-8">
            <div className="text-center space-y-2">
                <p className="font-bold text-lg">Karim Chehab</p>
                <p>Frontend Developer building things that (hopefully) don't break</p>
                <p>Copyright &copy; 2025 - All rights reserved</p>
            </div>
            <ul className="flex justify-center gap-4 mb-8">
                {
                    socialLinks.map((social) => (
                        <a href={social.url} target="_blank" className="btn btn-primary btn-circle btn-outline">
                            <social.icon className="text-xl" />
                        </a>
                    ))
                }
            </ul>
        </footer>
    );
}

export default Footer;