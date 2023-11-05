"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { Cafes } from "@/lib/utils/types";

import { DisplayCoffeeHouseList } from "./display-coffee-house-list";

export const DisplayCoffeeHouse = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["cafes"],
    queryFn: async () => {
      const { data } = await axios.get("/api/cafes/fetch");
      return data as Cafes[];
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>An unknown error has occured.</span>;
  }

  return (
    <div className="mx-auto">
      {data.map((cafe) => (
        <DisplayCoffeeHouseList
          key={cafe.id}
          id={cafe.id}
          name={cafe.name}
          city={cafe.city}
        />
      ))}
    </div>
  );
};
