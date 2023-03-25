import socials from "@/lib/data/socialLinkData";
import { IconButton, Link } from "@chakra-ui/react";

const SocialLinks = ({ isDrawer }: { isDrawer: boolean }) => {
  return (
    <>
      {socials.map(({ name, link, icon }, index) => {
        return (
          <IconButton
            key={index}
            as={Link}
            href={link}
            referrerPolicy="strict-origin-when-cross-origin"
            aria-label={`Link to Shelly's ${name}`}
            icon={icon}
            variant="ghost"
            p={3.5}
            color={isDrawer ? "brand.light" : "brand.dark"}
            isExternal
          />
        );
      })}
    </>
  );
};

export default SocialLinks;
