import React, { useState } from "react";

import Button from "./components/common/Button";
import Input from "./components/common/Input";
import Text from "./components/common/Text";
import Checkbox from "./components/common/Checkbox";
import Card from "./components/layout/Card";
import Modal from "./components/layout/Modal";
import Navbar from "./components/layout/Navbar";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <Navbar
        logo={"./src/assets/iAmSoulfood247_logo.png"}
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
      {/* <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        >hello</Modal>
      <Card>
        <Button name='BUTTON' border={false} isnavbutton={false} />
        <Button name='BUTTON' border={false} isnavbutton />
        <Input />
        <Text content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <Checkbox
          id="terms"
          label="Testing Checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          error={!isChecked ? "You must accept to continue" : ""}
          />
      </Card> */}
    </>
  );
};

export default App;
