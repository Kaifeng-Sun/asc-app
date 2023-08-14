import { useSession } from "next-auth/react";
import React from "react";
import useSWR from "swr";

function index() {
    const { data: session } = useSession()
//   const fetcher = async (...args: Parameters<typeof fetch>): Promise<any> => {
//     const response = await fetch(...args);
//     const data = await response.json();
//     return data;
//   };

//   const { data, mutate, error, isLoading } = useSWR(
//     `https://jsonplaceholder.typicode.com/posts`,
//     fetcher
//   );

  console.log(session);

  return <div>dashboard</div>;
}

export default index;
