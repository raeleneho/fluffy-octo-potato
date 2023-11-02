import { useQuery } from "@tanstack/react-query";
import { Role, fetchAllCustomers } from "../api/CustomerClient";
import { ReactNode, useMemo, useState } from "react";
import {
  Container,
  Divider,
  Stack,
  Text,
  VStack,
  useRadioGroup,
} from "@chakra-ui/react";

import UserCard from "../components/UserCard/UserCard";
import RadioButton from "../components/RadioButton/RadioButton";

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
    defaultValue: selectedRole,
    onChange: handleChange,
  });

  const group = getRootProps();

  const radioButtons = (
    <VStack {...group} alignItems="stretch">
      {rolesList.map((item) => (
        <RadioButton key={item} {...getRadioProps({ value: item })}>
          {item.toLowerCase()}
        </RadioButton>
      ))}
    </VStack>
  );

  const customerByRole = useMemo(() => {
    const mapping: Record<Role, ReactNode[]> = {
      [Role.ADMIN]: [],
      [Role.MANAGER]: [],
    };

    customers?.forEach((customer) => {
      mapping[customer.role].push(
        <UserCard key={customer.id} name={customer.name} role={customer.role} />
      );
    });
    return mapping;
  }, [customers]);

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

          {radioButtons}
        </Stack>

        <Divider
          pt={10}
          borderBottom="2px"
          borderColor="brandGray.100"
          orientation="horizontal"
        />
      </Container>
      <Container pt={6}>
        <Stack direction="column" spacing="6">
          <Text fontSize="2xl">Admin Users</Text>

          {customerByRole[selectedRole]}
        </Stack>
        <Divider
          size="xl"
          py={6}
          borderBottom="2px"
          borderColor="brandGray.100"
          orientation="horizontal"
        />
      </Container>
    </>
  );
}

export default Customers;
