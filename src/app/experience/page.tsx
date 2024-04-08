const experiences = [
    {
        title: ".NET Developer",
        company: "LG lugar de gente",
        date: "Jun 2023 - Present",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        skills: ["C#", ".NET", "ASP.NET MVC", "Azure DevOps", "Git", "Angular", "SQL Server"],
    },
    {
        title: ".NET Developer",
        company: "LG lugar de gente",
        date: "Jan 2022 - Jun 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        skills: ["C#", ".NET", "ASP.NET MVC", "TeamCity", "Tortoise SVN", "Angular", "SQL Server"],
    },
    {
        title: "Python Developer",
        company: "Tribunal Regional Eleitoral de Goiás",
        date: "Jul 2021 - Jan 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        skills: ["Python", "Django", "Docker", "Bootstrap", "PostgreSQL"],
    },
    {
        title: "IT Support",
        company: "Tribunal Regional Eleitoral de Goiás",
        date: "Aug 2019 - Jul 2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        skills: ["Helpdesk"],
    },
    {
        title: "IT Support",
        company: "CPPD - UFG",
        date: "Nov 2018 - Aug 2019",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        skills: ["Helpdesk"],
    },
];

export default function Page() {
    return (
        <section className={"max-w-4xl mx-auto px-4 py-8"}>
            <h1 className={"text-3xl font-semibold text-center text-[rgb(var(--experience-accent-rgb))] mb-10"}>Experience</h1>
            <div className={"space-y-6"}>
                {experiences.map((exp, index) => (
                    <div key={index} className={"bg-[rgb(var(--background-end-rgb))] bg-opacity-90 shadow-md rounded-lg p-6"}>
                        <div className={"flex flex-col md:flex-row md:items-center justify-between mb-4"}>
                            <h2 className={"text-xl font-semibold text-[rgb(var(--experience-accent-rgb))]"}>{exp.title}</h2>
                            <p className={"md:mb-0 text-[rgb(var(--experience-company-rgb))]"}>
                                <span className={"font-semibold"}>{exp.company}</span> - <span className={"text-[rgb(var(--experience-date-rgb))]"}>{exp.date}</span></p>
                        </div>
                        <p className={"text-[rgb(var(--experience-description-rgb))] mb-4"}>{exp.description}</p>
                        <div className={"flex flex-wrap gap-2"}>
                            {exp.skills.map((skill, i) => (
                                <span key={i} className={"text-sm bg-[rgb(var(--experience-soft-accent-rgb))] text-[rgb(var(--background-end-rgb))] px-3 py-1 rounded-full font-bold"}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}