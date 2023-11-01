import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./library/QueryClient";
import Customers from "./pages/Customers";

const theme = extendTheme({
  colors: {
    brandBlue: {
      100: "#e8f2fb",
      500: "#0370ce",
    },
    brandGray: {
      100: "#eaeef4",
      400: "#868583",
    },
  },
});

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
