import Navbar from "./Navbar";
import Landing from "./Landing";
import Footer from "./Footer"
export default function Mainpage() {
  return (
    <>
      <div>
        <Navbar title="Textutils" About="About" />
        <Landing />
        <Footer/>
      </div>
    </>
  );
}
