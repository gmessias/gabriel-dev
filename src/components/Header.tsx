import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <nav>
            <ul className={"flex justify-center space-x-4 md:space-x-6 lg:space-x-8 py-4"}>
                <li>
                    <Link className={"text-white hover-accent transition duration-300"} href={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={"text-white hover-accent transition duration-300"} href={"/experience"}>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link className={"text-white hover-accent transition duration-300"} href={"/education"}>
                        Education
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;