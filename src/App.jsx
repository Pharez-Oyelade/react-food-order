import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import Feature from "./Components/Feature/Feature";
import Description from "./Components/Description/Description";
import Order from "./Components/Order/Order";
import About from "./Components/About/About";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import Choice from "./Components/Choice/Choice";
import Newsletter from "./Components/Newsletter/Newsletter";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Navigation />
        <Hero />
      </div>
      <Feature />
      <Description />
      <About />
      <Order />
      <Menu />
      <Choice />
      <Newsletter />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
