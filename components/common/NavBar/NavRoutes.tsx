import { Link } from "@chakra-ui/next-js";
import { Button } from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";

export interface NavRouteProps {
  size: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavRoutes = ({ size, onClose }: NavRouteProps) => {
  const routes = [
    { name: "about" },
    { name: "services" },
    { name: "work" },
    { name: "contact" },
  ];

  return (
    <>
      {routes.map(({ name }, index) => {
        return (
          <Button
            key={index}
            as={Link}
            href={`/${name}`}
            aria-label={`Link to the ${name} page`}
            size={size}
            rightIcon={onClose ? <FaAngleDoubleRight /> : undefined}
            onClick={onClose}
          >
            {name}
          </Button>
        );
      })}
    </>
  );
};

export default NavRoutes;
