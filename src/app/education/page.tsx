const education = [
    {
        course: "Computer Science",
        university: "Universidade Federal de Goiás",
        description: "Bachelor's degree in computer science. During this time I was part of volunteer groups which gave me knowledge, networking and recognition from the university.",
    }
];

const licensesAndCertifications = [
    {
        name: "Problem Solving (Basic)",
        organization: "HackerRank",
    },
    {
        name: "Develop an ASP.NET Core web app that consumes an API",
        organization: "Microsoft",
    },
    {
        name: "Foundational C# with Microsoft",
        organization: "freeCodeCamp",
    },
    {
        name: "Formação Linguagem Go",
        organization: "Alura",
    },
    {
        name: "Formação Linguagem Rust",
        organization: "Alura",
    },
];

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-center text-[rgb(var(--experience-accent-rgb))] mb-10">Education</h1>
            {education.map((edu, index) => (
                <div key={index}
                     className="bg-[rgb(var(--background-end-rgb))] bg-opacity-90 shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-bold text-[rgb(var(--experience-accent-rgb))]">{edu.course}</h2>
                    <p className="font-semibold text-[rgb(var(--experience-company-rgb))]">{edu.university}</p>
                    <p className="text-[rgb(var(--experience-description-rgb))]">{edu.description}</p>
                </div>
            ))}

            <h2 className="text-2xl font-semibold text-center text-[rgb(var(--experience-accent-rgb))] mb-6">Licenses & Certifications</h2>
            {licensesAndCertifications.map((lic, index) => (
                <div key={index}
                     className="bg-[rgb(var(--background-end-rgb))] bg-opacity-90 shadow-md rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-bold text-[rgb(var(--experience-accent-rgb))]">{lic.name}</h3>
                    <p className="font-semibold text-[rgb(var(--experience-company-rgb))]">{lic.organization}</p>
                </div>
            ))}
        </div>
    );
}