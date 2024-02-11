import Navbar from "@/app/components/navbar";
import Main from "./main";
import AboutMe from "./aboutMe";
import MyJourney from "./myJourney";
import MySkills from "./mySkills";

export default function Home() {
  return (
    <Navbar>
      <Main />
      <AboutMe />
      <MyJourney />
      <MySkills />
    </Navbar>
  );
}
