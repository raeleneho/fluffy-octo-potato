import { Flex, Center } from "@chakra-ui/react";

interface BottomBorderContainerProps {
  title: string;
  borderColor?: string;
}

function BottomBorderContainer({ title }: BottomBorderContainerProps) {
  return (
    <Flex color="white">
      <Center w="100px" bg="green.500">
        {title}
      </Center>
    </Flex>
  );
}

export default BottomBorderContainer;
