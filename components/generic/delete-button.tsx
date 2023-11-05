import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";

import { Cafes } from "@/lib/utils/types";

export const DeleteButton = ({ id }: Cafes) => {
  const queryClient = useQueryClient();

  /* define the mutation */
  const { mutate: deleteCafe, isPending: deleteCafePending } = useMutation({
    mutationFn: async () => await axios.post("/api/cafes/delete", { id: id }),
    onSuccess: () => {
      toast.success("Cloud coffee house deleted.");

      queryClient.invalidateQueries({ queryKey: ["cafes"] });
    },
    onError: (error) => {
      toast.error(`The following error has occurred: ${error.message}`);
    },
  });

  return (
    <>
      <Button
        variant="destructive"
        disabled={deleteCafePending}
        onClick={() => deleteCafe}
      >
        <Trash2 className="mr-2 h-4 w-4" />
        Delete
      </Button>
    </>
  );
};
