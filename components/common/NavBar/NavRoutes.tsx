import routes from "@/lib/data/navRouteData";
import { Link } from "@chakra-ui/next-js";
import { Button, ListItem } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { FaAngleDoubleRight } from "react-icons/fa";

const NavRoutes = ({
  size,
  onClose,
}: {
  size: string;
  onClose?: () => void;
}) => {
  const path = usePathname();

  const RouteButton = ({
    name,
    isDrawer,
  }: {
    name: string;
    isDrawer?: Boolean;
  }) => {
    return (
      <Button
        as={Link}
        href={`/${name}`}
        aria-label={`Link to the ${name} page`}
        size={size}
        rightIcon={isDrawer && <FaAngleDoubleRight />}
        onClick={() => {
          if (path === `/${name}`) {
            onClose?.();
            window.scrollTo(0, 0);
          }
        }}
      >
        {name}
      </Button>
    );
  };

  return (
    <>
      {routes.map(({ name }, index) => {
        return onClose ? (
          <RouteButton key={index} name={name} isDrawer={true} />
        ) : (
          <ListItem key={index}>
            <RouteButton name={name} />
          </ListItem>
        );
      })}
    </>
  );
};

export default NavRoutes;
