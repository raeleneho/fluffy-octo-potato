import { useQuery } from "@tanstack/react-query";
import { Role, fetchAllCustomers } from "../api/CustomerClient";
import { useState } from "react";
import {
  Container,
  Divider,
  HStack,
  RadioGroup,
  Stack,
  Text,
  VStack,
  useRadioGroup,
} from "@chakra-ui/react";

import UserCard from "../components/UserCard";
import RadioButton from "../components/RadioButton";

function Customers() {
  const {
    data: customers,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      return fetchAllCustomers();
    },
  });

  const [selectedRole, setSelectedRole] = useState<Role>(Role.ADMIN);

  const handleChange = (value: Role) => {
    setSelectedRole(value);
  };

  const rolesList = [Role.ADMIN, Role.MANAGER];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "currentRole",
    defaultValue: Role.ADMIN,
    onChange: handleChange,
  });

  const group = getRootProps();
  const radios = (
    <VStack {...group} alignItems="stretch">
      {rolesList.map((item) => (
        <RadioButton key={item} {...getRadioProps({ value: item })}>
          {item.toLowerCase()}
        </RadioButton>
      ))}
    </VStack>
  );

  const filteredCustomers = customers?.filter(
    (customer) => customer.role === selectedRole
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Container pt={6}>
        <Stack direction="column" spacing="6">
          <Text fontSize="2xl">User Types</Text>

          {radios}
        </Stack>

        <Divider
          size="xl"
          pt={10}
          borderColor="brandGray.100"
          orientation="horizontal"
        />
      </Container>
      <Container pt={6}>
        <Stack direction="column" spacing="6">
          <Text fontSize="2xl">Admin Users</Text>

          {filteredCustomers?.map((customer) => (
            <UserCard
              key={customer.id}
              name={customer.name}
              role={customer.role}
            />
          ))}
        </Stack>
        <Divider
          size="xl"
          py={6}
          borderColor="brandGray.100"
          orientation="horizontal"
        />
      </Container>
    </>
  );
}

export default Customers;
