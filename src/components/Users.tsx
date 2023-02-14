import {AxiosError} from "axios";
import UserPage from "../types/UserPage";
import {useQuery} from "@tanstack/react-query";

export default function Users () {
  const { isLoading, isError, data, error } = useQuery<UserPage, AxiosError>({
    queryKey: ["/users"],
    retry: 3,
  });

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (isError) {
    return <p>Error: {error?.message}</p>
  }

  return (
    <ul>
      {data?.data.map((user: any) => (
        <li key={user.id}>
          <img src={user.avatar}/> {user.first_name} {user.last_name} ({user.email})
        </li>
      ))}
    </ul>
  );
}