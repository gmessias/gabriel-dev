interface TagColorProps {
    children: React.ReactNode;
}

const TagColor: React.FC<TagColorProps> = ({ children }) => {
    return (
        <span className={"text-[rgb(var(--soft-accent-rgb))]"}>
            {children}
        </span>
    );
}

export default TagColor