import Main from "./Pages/Home/home";
import About from "./Pages/About_us/about_us";
import Services from "./Pages/Services/services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";

interface HomeProps {
  NavTab: string;
}

const Home: React.FC<HomeProps> = ({ NavTab }) => {
  return (
    <div>
      {NavTab === "home" && (
        <div>
          {" "}
          <Main />{" "}
        </div>
      )}
      {NavTab === "about" && (
        <div>
          {" "}
          <About />{" "}
        </div>
      )}
      {NavTab === "services" && (
        <div>
          {" "}
          <Services />{" "}
        </div>
      )}
      {NavTab === "portfolio" && (
        <div>
          {" "}
          <Portfolio />{" "}
        </div>
      )}
      {NavTab === "contact" && (
        <div>
          {" "}
          <Contact />{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
