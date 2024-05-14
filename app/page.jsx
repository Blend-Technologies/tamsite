import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";

export default function Home() {
  const heroHeadline = (
    <>
      <h1>Tam's</h1>
<h1>World</h1>
    </>
  );
  const infoBlockData = {
headline:"My Hobbies",
text: (
<p className="copy">
  Text for My Hobbies
</p>),
button:(
<button className="btn btn--small btn--lightpink">Book Now</button>
),
reversed: false,
  };
  return (
    <main >
    <HeroSection headline = {heroHeadline}/>
    <InfoBlock data = {infoBlockData}/>
    <InfoBlock data = {{... infoBlockData, reversed: true}}/> 
    </main>
  );
}
