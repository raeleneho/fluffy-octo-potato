import { Box, HStack, Text, UseRadioProps, useRadio } from "@chakra-ui/react";

interface RadioButtonProps extends UseRadioProps {
  children?: React.ReactElement | string;
}

export function RadioButton(props: RadioButtonProps) {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const radio = getRadioProps();

  return (
    <Box
      as="label"
      display="block"
      data-testid={props.value?.replaceAll(" ", "")}
    >
      <input {...input} />
      <Box
        {...radio}
        borderRadius="lg"
        p={3}
        transition="background 0.3s"
        _checked={{
          bg: "brandBlue.100",
          ".radio-outer": {
            borderColor: "brandBlue.500",
          },
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
            className="radio-outer"
            width="20px"
            height="20px"
            p="3px"
            border="1px"
            borderColor="gray.200"
            borderRadius="50%"
            transition="border-color 0.3s"
          >
            <Box
              className="radio-inner"
              width="100%"
              height="100%"
              borderRadius="50%"
              transition="background 0.3s"
            ></Box>
          </Box>
          <Text textTransform="capitalize">{props.children}</Text>
        </HStack>
      </Box>
    </Box>
  );
}

export default RadioButton;
