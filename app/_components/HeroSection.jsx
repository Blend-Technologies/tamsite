import Link from "next/link";


const HeroSection = ({imgSrc, headline, theme = "lightpink"}) => {
  return (
    <section className="hero">
    <div className="hero__background">
<img src={imgSrc || "/assets/HeroHome.png"} alt="" />
</div>
<div className={`hero__headline hero__headline--${theme}`}>
{headline}
</div>
<button className={`btn btn--small btn--${theme}`}>
    <Link href="/events">Book Now</Link>
</button>
<img 
className={`hero__logo hero__logo--${theme}`}
src="/assets/tamlogo.svg"/>
    </section>
  );
};

export default HeroSection;