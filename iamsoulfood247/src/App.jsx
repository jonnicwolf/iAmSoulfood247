import React, { useState } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Concept from "./pages/Concept";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Container>
      <Navbar
        logo={"https://dl.dropboxusercontent.com/scl/fi/5761osx5w55gqeakjwjlw/iAmSoulfood247_logo.png?rlkey=hw7vcgy24mfj9712wdgu16oqf&st=qxjum5u0"}
        links={[
          { label: "Home", href: "#" },
          { label: "Menu", href: "#" },
          { label: "Meal Plans", href: "#" },
          { label: "How It Works", href: "#" },
          { label: "About Us", href: "#" },
          { label: "FAQ", href: "#" },
          { label: "Contact Us", href: "#" },
        ]}
        rightContent={[{ label: "Login" }, { label: "Sign Up" }]}
      />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
      </Routes>
      <Footer
        links={[
          { label: "Home", href: "#" },
          { label: "Menu", href: "#" },
          { label: "Meal Plans", href: "#" },
          { label: "How It Works", href: "#" },
          { label: "About Us", href: "#" },
          { label: "FAQ", href: "#" },
          { label: "Contact Us", href: "#" },
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
  gap: ${({ theme }) => theme.spacing.lg};
`;
