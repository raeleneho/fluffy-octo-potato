import { useQuery } from "@tanstack/react-query";
import { Role, fetchAllCustomers } from "../api/CustomerClient";
import { useState } from "react";
import { Container, Divider, Stack, Text } from "@chakra-ui/react";
import RadioButtons from "../components/RadioButtons";
import UserCard from "../components/UserCard";

function Customers() {
  const { data: customers } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      return fetchAllCustomers();
    },
  });

  const [selectedRole, setSelectedRole] = useState<Role>(Role.ADMIN);

  const filteredCustomers = customers?.filter(
    (customer) => customer.role === selectedRole
  );

  return (
    <>
      <Container p={6}>
        <Stack direction="column" spacing="6">
          {/* <Heading size="md">User Types</Heading> */}
          <Text fontSize="2xl">User Types</Text>

          <RadioButtons value={selectedRole} setValue={setSelectedRole} />
        </Stack>

        <Divider size="xl" my={6} orientation="horizontal" />
      </Container>
      <Container p={6}>
        <Stack direction="column" spacing="6">
          {/* <Heading size="md">User Types</Heading> */}
          <Text fontSize="2xl">Admin Users</Text>

          {filteredCustomers?.map((customer) => (
            <UserCard
              key={customer.id}
              name={customer.name}
              role={customer.role}
            />
          ))}
        </Stack>
        <Divider size="xl" my={6} orientation="horizontal" />
      </Container>
    </>
  );
}

export default Customers;
