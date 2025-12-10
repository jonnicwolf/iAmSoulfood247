import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Concept from "./pages/Concept";
import Catering from "./pages/Catering";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Test from "./pages/Test";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Container>
      <Navbar
        logo={"https://iamsoulfood247.s3.us-east-2.amazonaws.com/iAmSoulfood247+(1)/iamsoulfood247-Logo.svg"}
      />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer
        links={[
          { label: "Home", href: "/" },
          { label: "Menu", href: "/concept" },
          { label: "Meal Plans", href: "/about" },
          { label: "Track Order", href: "/contact" },
        ]}
        copyright={"iAmSoulfood247"}
      />
    </Container>
  );
};

export default App;

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
