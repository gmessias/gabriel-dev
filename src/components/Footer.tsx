import SocialMediaNav from "@/components/SocialMediaNav";

const Footer = () => {
    return (
        <footer className={"text-xs p-5 mt-8"}>
            <div className={"max-w-4xl mx-auto text-center space-y-2"}>
                <SocialMediaNav/>
                <p>{new Date().getFullYear()} © Gabriel Messias Pacheco</p>
                <p>This project is licensed under the MIT License. Feel free to use it as a template!</p>
                <p>Developed using Next.js and TailwindCSS</p>
            </div>
        </footer>
    );
}

export default Footer;