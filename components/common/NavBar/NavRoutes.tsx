import routes from "@/lib/data/navRouteData";
import { Link } from "@chakra-ui/next-js";
import { Button, ListItem } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const NavRoutes = ({
  size,
  onClose,
}: {
  size: string;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [loading, setLoading] = useState(Array(routes.length).fill(false));
  const path = usePathname();

  const handleLoading = (index: number) => {
    const updatedArray = loading.map((v, i) => {
      if (i === index) return !v;
      else return v;
    });

    setLoading(updatedArray);
  };

  const RouteButton = ({
    index,
    name,
    isDrawer,
  }: {
    index: number;
    name: string;
    isDrawer?: Boolean;
  }) => {
    return (
      <Button
        as={Link}
        href={`/${name}`}
        aria-label={`Link to the ${name} page`}
        size={size}
        rightIcon={isDrawer ? <FaAngleDoubleRight /> : undefined}
        loadingText={isDrawer ? name : undefined}
        isLoading={loading[index]}
        spinnerPlacement="end"
        onClick={(e) => {
          if (path !== `/${name}`) handleLoading(index);
          else {
            onClose?.(e);
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
          <RouteButton key={index} index={index} name={name} isDrawer={true} />
        ) : (
          <ListItem key={index}>
            <RouteButton index={index} name={name} />
          </ListItem>
        );
      })}
    </>
  );
};

export default NavRoutes;
