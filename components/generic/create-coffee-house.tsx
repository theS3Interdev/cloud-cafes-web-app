"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Coffee } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/index";

/* create the form schema */
const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "The cloud coffee house must have a name." })
    .max(55),
  city: z
    .string()
    .min(1, { message: "The cloud coffee house must have a city." })
    .max(55),
});

export const CreateCoffeeHouse = () => {
  const [loading, setLoading] = useState(false);

  const title = "Create a Cloud Coffee House";

  const description = "Create the  desired cloud coffee house";

  /* define the form */
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      city: "",
    },
  });

  /* define the submit handler */
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      console.log(values);

      form.reset();

      toast.success("Cloud coffee house created.");
    } catch (error: any) {
      toast.error("An unknown error has occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Heading title={title} description={description} />

      <div className="flex items-center justify-between">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-5 w-full space-y-8"
          >
            <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Cloud coffee house name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Cloud coffee house city"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={loading} className="ml-auto" type="submit">
              <Coffee className="mr-2 h-4 w-4" />
              Create Cloud Coffee House
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
