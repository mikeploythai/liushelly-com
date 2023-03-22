import { Box, IconButton, Link } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const SocialLinks = ({ isDrawer }: { isDrawer: boolean }) => {
  const socials = [
    {
      name: "Instagram",
      link: "https://instagram.com/socialsbyshelly",
      icon: <FaInstagram />,
    },
    {
      name: "TikTok",
      link: "https://tiktok.com/@socialsbyshelly",
      icon: <FaTiktok />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/shelly-liu",
      icon: <FaLinkedin />,
    },
  ];

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
