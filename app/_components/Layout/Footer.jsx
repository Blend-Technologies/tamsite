import Link from "next/link";
const Footer = ()=>{
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

const policies = [
{
    display: "Imprint",
    slug: "/imprint"
},
{
    display: "Terms and Conditions",
    slug:"/toc"
},
{
    display: "Data Protection",
    slug:"/data-protection"
}
];
return(
    <footer className="footer">
        <nav className="footer__nav">
        <img className="footer__logo" src="/assets/tamlogo.svg" alt=""/>
        <ul className="footer__links">
        {navItems.map((item) =>(
            <li key={item.slug}>
                    <Link href={item.slug}>
                        <h4>{item.display}</h4>
                    </Link>
                </li>
               
       )) }
       </ul>
    </nav>
    <div className="footer__policies">
<ul className="footer__policies-nav">
{policies.map((policy) =>(
            <li key={policy.slug}>
                    <Link href={policy.slug}>
                        <h5>{policy.display}</h5>
                    </Link>
                </li>
               
       )) }   
</ul>
<p className="copy">Powered By Blend Technologies</p>
    </div>   
    </footer>
);
};

export default Footer;