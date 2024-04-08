interface TagColorProps {
    children: React.ReactNode;
}

const TagColor: React.FC<TagColorProps> = ({ children }) => {
    return (
        <span className={"text-[rgb(var(--experience-company-rgb))]"}>
            {children}
        </span>
    );
}

export default TagColor