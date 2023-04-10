import servicesData from "@/lib/data/servicesData";
import {
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import InfoModal from "../pages/services/InfoModal";

const CardList = ({
  maxColumns,
  servicesPage,
}: {
  maxColumns: number;
  servicesPage?: Boolean;
}) => {
  const [id, setId] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cardSize = useBreakpointValue({ base: "sm", md: "md" });
  const cardData = servicesPage
    ? servicesData.filter((data) => data.title !== "social media management")
    : servicesData.filter(({}, index) => index <= 2);

  return (
    <SimpleGrid columns={{ base: 1, md: maxColumns }} gap={4} w="full">
      {cardData.map((service, index) => {
        return (
          <Card
            key={index}
            role="group"
            aria-label={`Page to Shelly's ${service.title} service`}
            size={cardSize}
            variant={servicesPage ? "interactive-secondary" : "interactive"}
            overflow="hidden"
            onClick={() => {
              setId(index);
              onOpen();
            }}
            _hover={{ cursor: "pointer" }}
          >
            <CardBody pos="relative">
              <Image
                src={service.img}
                alt=""
                quality={50}
                sizes="(max-width: 480px) 60vw, 40vw"
                style={{ objectFit: "cover" }}
                fill
              />
            </CardBody>

            <CardFooter>
              <Text noOfLines={1} fontWeight="inherit">
                {service.title}
              </Text>
            </CardFooter>

            {index === id && (
              <InfoModal service={service} isOpen={isOpen} onClose={onClose} />
            )}
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default CardList;
