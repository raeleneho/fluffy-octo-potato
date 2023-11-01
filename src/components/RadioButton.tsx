import { Box, HStack, Text, useRadio } from "@chakra-ui/react";
import { Role } from "../api/CustomerClient";

interface RadioButtonProps<Type> {
  // label?: string;
  checked: boolean;
  value: Type;
  children?: React.ReactElement | string;
  onChange?: (newValue: Type) => void;
}

export function RadioButton<Type extends string>(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const radio = getRadioProps();

  return (
    <Box as="label" display="block">
      <input {...input} />
      <Box
        {...radio}
        borderRadius="lg"
        p={3}
        _checked={{
          bg: "brandBlue.100",
          ".radio-inner": {
            background: "brandBlue.500",
          },
        }}
        _focus={{
          borderBlockColor: "brandBlue.500",
        }}
      >
        <HStack gap="12px">
          <Box
            width="20px"
            height="20px"
            p="2px"
            border="1px solid grey"
            backgroundColor="white"
            borderRadius="50%"
          >
            <Box
              className="radio-inner"
              width="100%"
              height="100%"
              p="2px"
              borderRadius="50%"
            ></Box>
          </Box>
          <Text textTransform="capitalize">{props.children}</Text>
        </HStack>
      </Box>
    </Box>
  );
}

export default RadioButton;
