"use client";

import axios from "axios";
import { Trash2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { Cafes } from "@/lib/utils/types";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
      <Table>
        <TableCaption>
          A list of the recent cloud cafe houses on file.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="p-5 text-left">Name</TableHead>
            <TableHead className="p-5 text-left">City</TableHead>
            <TableHead className="p-5 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((cafe) => (
            <TableRow key={cafe.id}>
              <TableCell className="p-5 text-left">{cafe.name}</TableCell>
              <TableCell className="p-5 text-left">{cafe.city}</TableCell>
              <TableCell className="content-center p-5 text-center">
                <Button variant="destructive" className="mt-3 w-full">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
