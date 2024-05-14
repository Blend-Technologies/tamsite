import Link from "next/link";

const Header = () => {
    const  navItems = [
        {
            display: "About Me",
            slug: "",
        },
        {
            display: "My Hobbies",
            slug: "hobbies",
        },
        {
            display: "My Blog",
            slug: "blog",
        },
    ];
    return (
        <header className="header">
            <img className="header_logo" src = "/assets/tamlogo.svg" alt=""/>
            <ul className="header__nav">
            {navItems.map((item) => (
                <li key={item.slug}>
                    <Link href={`/${item.slug}`}>
                        <h4>{item.display}</h4>
                    </Link>
                </li>
            ))}
                
            </ul>
            <Link href="/events">
                <button className="btn btn--black btn--small">
                Book a Consultation Now
                </button>
            </Link>
        </header>
    )
}

export default Header;