import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Role } from "../api/CustomerClient";

interface RadioButtonsProps {
  value: Role;
  setValue: (value: Role) => void;
}

export function RadioButtons({ value, setValue }: RadioButtonsProps) {
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="column" spacing="4">
        <Box
          borderRadius="md"
          p="2"
          backgroundColor={value === Role.ADMIN ? "#EBF8FF" : ""}
        >
          <Radio value={Role.ADMIN}>{Role.ADMIN}</Radio>
        </Box>

        <Box
          borderRadius="md"
          p="2"
          backgroundColor={value === Role.MANAGER ? "#EBF8FF" : ""}
        >
          <Radio value={Role.MANAGER}>{Role.MANAGER}</Radio>
        </Box>
      </Stack>
    </RadioGroup>
  );
}

export default RadioButtons;
