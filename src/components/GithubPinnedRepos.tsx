'use client'

import React, { useEffect, useState } from "react";

interface Repo {
    name: string;
    description: string | null;
    language: string | null;
    html_url: string;
}

interface Props{
    username: string;
}

const GithubPinnedRepos: React.FC<Props> = ({ username }) => {
    const [repos, setRepos] = useState<Repo[]>([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const targetRepos = new Set(['controle-horas', 'Discord_BOT_PXG', 'NewspaperBot']);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos?type=public&sort=created`)
            .then(response => response.json())
            .then((data: any[]) => {
                const filteredRepos = data
                    .filter(repo => targetRepos.has(repo.name))
                    .map(repo => ({
                        name: repo.name,
                        description: repo.description,
                        language: repo.language,
                        html_url: repo.html_url,
                    }));
                setRepos(filteredRepos);
            })
            .catch(error => console.error('Error fetching information from repositories:', error));
    }, [username, targetRepos]);

    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}>
            {repos.map((repo, index) => (
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={index}
                   className={"bg-[rgb(var(--background-end-rgb))] border border-[rgb(var(--soft-accent-rgb))] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 block"}>
                    <h3 className={"text-lg font-semibold text-[rgb(var(--soft-accent-rgb))] mb-2"}>
                        {repo.name}
                    </h3>
                    <p className={"text-sm text-[rgb(var(--foreground-rgb))]"}>
                        {repo.description ?? 'No description'}
                    </p>
                    <span className={"inline-block bg-[rgb(var(--soft-accent-rgb))] text-[rgb(var(--background-end-rgb))] rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2 mt-2"}>
                        {repo.language ?? 'Language not specified'}
                    </span>
                </a>
            ))}
        </div>
    );
}

export default GithubPinnedRepos;