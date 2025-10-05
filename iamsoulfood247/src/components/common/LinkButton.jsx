import Button from "./Button";
import { Link } from "react-router-dom";

const LinkButton = ({to, name, border, isnavbutton, color, backgroundColor}) => {
  return (
    <Link to={to}>
      <Button
        name={name}
        border={border}
        isnavbutton={isnavbutton}
        color={color}
        backgroundColor={backgroundColor}
      />
    </Link>
  );
};

export default LinkButton;


