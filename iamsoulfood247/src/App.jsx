import Button from "./components/common/Button";
function App() {
  return (
    <>
      <Button name='BUTTON' border={false} isNavButton={false}/>
      <Button name='BUTTON' border={false} isNavButton />
    </>
  );
};

export default App;
