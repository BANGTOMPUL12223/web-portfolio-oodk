import Navbar from "@/app/components/navbar";
import Main from "./main";
import AboutMe from "./aboutMe";
import MyJourney from "./myJourney";
import MySkills from "./mySkills";
import ContactMe from "./contactMe";

export default function Home() {
  return (
    <Navbar>
      <Main />
      <AboutMe />
      <MyJourney />
      <MySkills />
      <ContactMe />
    </Navbar>
  );
}
