import Button from "./components/common/Button";
import Input from "./components/common/Input";

function App() {
  return (
    <>
      <Button name='BUTTON' border={false} isnavbutton={false} />
      <Button name='BUTTON' border={false} isnavbutton />
      <Input />
    </>
  );
};

export default App;
