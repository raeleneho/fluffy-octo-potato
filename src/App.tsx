import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./library/QueryClient";
import Customers from "./pages/Customers";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ChakraProvider theme={theme}>
        <Customers />
      </ChakraProvider>
    </QueryClientProvider>
  );
};
