import { Link } from "@chakra-ui/next-js";
import { Box, Button } from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";

interface RouteProps {
  size: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavRoutes = ({ size, onClose }: RouteProps) => {
  const routes = [
    { name: "services" },
    { name: "shop" },
    { name: "about" },
    { name: "contact" },
  ];

  return (
    <>
      {routes.map(({ name }, index) => {
        return (
          <Box key={index} as="li">
            <Button
              as={Link}
              href={`/${name}`}
              aria-label={`Link to the ${name} page`}
              size={size}
              rightIcon={onClose ? <FaAngleDoubleRight /> : undefined}
              onClick={onClose}
            >
              {name}
            </Button>
          </Box>
        );
      })}
    </>
  );
};

export default NavRoutes;
