import { Avatar, Box, HStack, Text } from "@chakra-ui/react";

interface UserCardProps {
  name: string;
  role: string;
}

function UserCard({ name, role }: UserCardProps) {
  const extractFirstInitial = (fullName: string) => fullName.split(" ")[0];

  const capitalizeFirstLetter = (word: string) =>
    word.charAt(0) + word.slice(1).toLowerCase();

  return (
    <HStack spacing={4} data-test-id="user-card">
      <Avatar
        borderRadius="md"
        color="brandBlue.500"
        backgroundColor="brandBlue.100"
        name={extractFirstInitial(name)}
        sx={{
          width: "40px",
          height: "40px",
        }}
      />
      <Box>
        <Text fontSize="lg">{name}</Text>
        <Text fontSize="sm" color="brandGray.400">
          {capitalizeFirstLetter(role)}
        </Text>
      </Box>
    </HStack>
  );
}

export default UserCard;
