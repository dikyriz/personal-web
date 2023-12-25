import hero from "../assets/images/new_hero.png";
import { Image, Box, Container, Flex, Text, Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container as={"section"} maxW={"full"} px={{ base: 0 }}>
      <Box position={"relative"}>
        <Box as="article" position={"relative"}>
          <Image
            objectFit={"cover"}
            height={{ base: "300px", md: "full" }}
            width={"100%"}
            src={hero}
          />
          <Box
            position={"absolute"}
            color={"white"}
            top={{ md: "190px", base: "80px" }}
            left={{ md: 14, base: 0 }}
            maxW={{ md: "600px", base: "200px" }}
          >
            <Text fontSize={{ md: "58px", base: "16px" }} fontWeight={"bold"}>
              Build your own wall of sound.
            </Text>
            <Text textAlign={"justify"} fontSize={{ md: "16px", base: "10px" }}>
              Winners aren’t made overnight. Over 50 years of sound and design
              expertise has been distilled into each and every Marshall speaker,
              bringing that big stage presence home for your listening
              enjoyment.
            </Text>
            <Box mt={{ md: 8, base: 4 }}>
              <Button fontSize={{ md: "16px", base: "10px" }}>
                View All Product
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          as="article"
          position={"absolute"}
          bottom={0}
          right={0}
          left={0}
          backgroundColor={"white"}
        >
          <Flex
            alignItems={"center"}
            py={{ md: 8, base: 2 }}
            justifyContent={"space-evenly"}
          >
            <Box>
              <Image
                src="https://sin1.contabostorage.com/10162138889b4438bab811ecee1a60ce:magner-prod/asset/collaborate/B-logo.svg"
                alt="partner"
                width={{ md: "70px", base: "20px" }}
                height={{ md: "60px", base: "20px" }}
              />
            </Box>
            <Box>
              <Image
                src="https://sin1.contabostorage.com/10162138889b4438bab811ecee1a60ce:magner-prod/asset/collaborate/ISO.svg"
                alt="partner"
                height={{ md: "60px", base: "20px" }}
              />
            </Box>
            <Box>
              <Image
                src="https://sin1.contabostorage.com/10162138889b4438bab811ecee1a60ce:magner-prod/asset/collaborate/apli.svg"
                alt="partner"
                height={{ md: "60px", base: "20px" }}
              />
            </Box>
            <Box>
              <Image
                src="https://sin1.contabostorage.com/10162138889b4438bab811ecee1a60ce:magner-prod/asset/collaborate/kadinda-ja-tim.webp"
                alt="partner"
                height={{ md: "60px", base: "20px" }}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
