import socials from "@/lib/data/socialLinkData";
import { Box, IconButton, Link } from "@chakra-ui/react";

const SocialLinks = ({ isDrawer }: { isDrawer: boolean }) => {
  return (
    <>
      {socials.map(({ name, link, icon }, index) => {
        return (
          <Box key={index} as="li">
            <IconButton
              as={Link}
              href={link}
              referrerPolicy="strict-origin-when-cross-origin"
              icon={icon}
              aria-label={`Link to Shelly's ${name}`}
              variant="ghost"
              p={3.5}
              color={isDrawer ? "brand.light" : "brand.dark"}
              isExternal
            />
          </Box>
        );
      })}
    </>
  );
};

export default SocialLinks;
