import { useQuery } from "@tanstack/react-query";
import { HttpClient } from "../../utils/HttpClient";

export const  useUniversites = () => {
  const query = useQuery({
    queryKey: ["univeristesList"],
    queryFn: () =>
      HttpClient.get("/search?country=United%20Arab%20Emirates")
        .then((res) => res?.data)
        .catch((err) => err),
    enabled: !localStorage.getItem("universities"),
  });

  return { ...query };
};
