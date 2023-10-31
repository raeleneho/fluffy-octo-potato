import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../helpers/CapitalizeFirstLetter";

interface UserCardProps {
  name: string;
  role: string;
}

function UserCard({ name, role }: UserCardProps) {
  const extractFirstName = (fullName: string) => fullName.split(" ")[0];

  return (
    <HStack spacing={4}>
      <Avatar
        borderRadius="md"
        color="blue.400"
        backgroundColor={"blue.50"}
        name={extractFirstName(name)}
      />
      <Box>
        <Text fontSize="xl">{name}</Text>
        <Text fontSize="md" color="gray.500">
          {capitalizeFirstLetter(role)}
        </Text>
      </Box>
    </HStack>
  );
}

export default UserCard;
