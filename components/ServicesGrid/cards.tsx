import { Link } from "@chakra-ui/next-js";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import servicesData from "./data.json";

const ServicesCards = () => {
  const cardSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <>
      {servicesData.map((service, index) => {
        return (
          <Card
            key={index}
            as={Link}
            role="group"
            size={cardSize}
            overflow="hidden"
            href="/services"
            aria-label={`Learn more about my ${service.title} service`}
          >
            <CardBody
              pos="relative"
              minH={{ base: 28, md: 36 }}
              filter="auto"
              _groupHover={{ brightness: "87.5%" }}
              _groupActive={{ brightness: "75%" }}
            >
              <Image
                src={service.img}
                alt=""
                sizes="(max-width: 480px) 80vw, 40vw"
                style={{ objectFit: "cover" }}
                fill
              />
            </CardBody>

            <CardFooter>
              <Text noOfLines={1} fontWeight="inherit">
                {service.title}
              </Text>

              {service.badge ? <Badge>{service.badge}</Badge> : null}
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export default ServicesCards;
