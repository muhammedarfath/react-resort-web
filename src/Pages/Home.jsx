import React from "react";
import Banner from '../components/Banner/Banner'
import Sectionone from '../components/Sections/Sectionone'
import Sectiontwo from "../components/Sections/Sectiontwo";
import SectionThree from "../components/Sections/SectionThree";
import SectionFour from "../components/Sections/SectionFour";
import SectionFive from "../components/Sections/SectionFive";
import Footer from "../components/Sections/Footer";
import SectionAdd from "../components/Sections/SectionAdd";



function Home() {
  return (
    <div>
      <Banner />
      <Sectionone />
      <SectionAdd/>
      <Sectiontwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default Home;
