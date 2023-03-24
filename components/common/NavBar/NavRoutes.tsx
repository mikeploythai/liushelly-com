import routes from "@/lib/data/navRouteData";
import { Link } from "@chakra-ui/next-js";
import { Button, ListItem } from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";

const NavRoutes = ({
  size,
  onClose,
}: {
  size: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      {routes.map(({ name }, index) => {
        return onClose ? (
          <Button
            key={index}
            as={Link}
            href={`/${name}`}
            aria-label={`Link to the ${name} page`}
            size={size}
            rightIcon={<FaAngleDoubleRight />}
            onClick={onClose}
          >
            {name}
          </Button>
        ) : (
          <ListItem key={index}>
            <Button
              as={Link}
              href={`/${name}`}
              aria-label={`Link to the ${name} page`}
              size={size}
            >
              {name}
            </Button>
          </ListItem>
        );
      })}
    </>
  );
};

export default NavRoutes;
