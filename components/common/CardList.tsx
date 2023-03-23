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

interface DataProps {
  title: string;
  slug: string;
  img: string;
  badge?: string;
}

const CardList = ({ data }: { data: Array<DataProps> }) => {
  const cardSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <>
      {data.map((service, index) => {
        return (
          <Card
            key={index}
            as={Link}
            role="group"
            href="/services"
            aria-label={`Page to Shelly's ${service.title} service`}
            size={cardSize}
            variant="interactive"
            overflow="hidden"
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

              {service.badge ? <Badge>{service.badge}</Badge> : null}
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export default CardList;
