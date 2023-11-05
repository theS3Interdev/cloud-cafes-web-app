import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DeleteButton } from "@/components/generic/delete-button";

import { Cafes } from "@/lib/utils/types";

export const DisplayCoffeeHouseList = ({ id, name, city }: Cafes) => {
  return (
    <Card className="my-4 w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <p className="text-accent-foreground">{city}</p>
        <DeleteButton id={id} />
      </CardContent>
    </Card>
  );
};
