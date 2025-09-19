import Button from "./components/common/Button";
import Input from "./components/common/Input";
import Text from "./components/common/Text";

function App() {
  return (
    <>
      <Button name='BUTTON' border={false} isnavbutton={false} />
      <Button name='BUTTON' border={false} isnavbutton />
      <Input />
      <Text content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
    </>
  );
};

export default App;
