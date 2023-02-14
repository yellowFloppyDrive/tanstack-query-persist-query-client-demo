import {QueryClient, QueryKey} from "@tanstack/react-query";
import axios from "axios";

const defaultQueryFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  const endpoint = queryKey[0];
  const { data } = await axios.get(
    `https://reqres.in/api${endpoint}?delay=5`
  );
  return data;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      cacheTime: Infinity
    },
  },
});

export default queryClient;