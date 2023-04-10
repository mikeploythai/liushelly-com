import { InfoModalProps } from "@/lib/types/infoModalProps";
import {
  Box,
  Button,
  Heading,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaAngleDoubleRight, FaTimes } from "react-icons/fa";
import Inclusions from "./SocialMediaManagement/Inclusions";

const InfoModal = ({ service, isOpen, onClose }: InfoModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      size={{ base: "full", sm: "2xl" }}
    >
      <ModalOverlay />

      <ModalContent
        m={{ base: 0, sm: "1rem 1.5rem 1.5rem 1rem" }}
        bgColor="brand.dark"
        border={{
          base: "none",
          sm: "1px solid var(--chakra-colors-brand-light)",
        }}
        borderRadius="none"
        shadow=".5rem .5rem 0 var(--chakra-colors-brand-light)"
      >
        <ModalHeader
          pos={{ base: "sticky", sm: "relative" }}
          top={0}
          display="flex"
          justifyContent="end"
          p={0}
          bgColor="brand.dark"
          borderBottom="1px solid var(--chakra-colors-brand-light)"
          zIndex="sticky"
        >
          <IconButton
            icon={<FaTimes />}
            aria-label="Close navigation menu"
            variant="secondary"
            size="lg"
            p={4}
            onClick={onClose}
          />
        </ModalHeader>

        <ModalBody as={VStack} spacing={4} p={4}>
          <Box
            pos="relative"
            w="full"
            h="3xs"
            border="1px solid var(--chakra-colors-brand-light)"
          >
            <Image
              src={service.img}
              alt=""
              quality={50}
              sizes="(max-width: 480px) 60vw, 40vw"
              style={{ objectFit: "cover" }}
              fill
            />
          </Box>

          <VStack align="start" w="full">
            <Heading size="lg" variant="secondary" textTransform="capitalize">
              {service.title === "social media management" && (
                <u>DONE FOR YOU</u>
              )}{" "}
              {service.title}
            </Heading>

            <Text fontSize="sm" variant="secondary" whiteSpace="pre-line">
              {service.description}
            </Text>
          </VStack>

          {service.title === "social media management" && (
            <Inclusions isModal={true} />
          )}
        </ModalBody>

        <ModalFooter p="0 1rem 1rem">
          <Button
            as={Link}
            href={service.url}
            referrerPolicy="strict-origin-when-cross-origin"
            size="sm"
            variant="secondary"
            rightIcon={<FaAngleDoubleRight />}
            w="full"
            isExternal
          >
            {service.cta}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InfoModal;
