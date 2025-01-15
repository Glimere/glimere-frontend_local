import { NextPage } from "next";
import { useState } from "react";
import { useShippingAddressStore } from "@/store/shippingStore";
import { useJwt } from "@/hooks/useJwt";
import CustomDialog from "@/components/user/CustomDialog";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useOrderStore from "@/store/orderStore";
import { ShippingAddress } from "@/types";

const formSchema = z.object({
  location_name: z
    .string()
    .min(2, { message: "Location name must be at least 2 characters long" })
    .max(50, { message: "Location name must not exceed 50 characters" }),
  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters long" })
    .max(100, { message: "Address must not exceed 100 characters" }),
  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long" })
    .max(50, { message: "City must not exceed 50 characters" }),
  state: z
    .string()
    .min(2, { message: "State must be at least 2 characters long" })
    .max(50, { message: "State must not exceed 50 characters" }),
  postalCode: z
    .string()
    .regex(/^[A-Za-z0-9\- ]{3,10}$/, { message: "Invalid postal code format" })
    .min(3, { message: "Postal code must be at least 3 characters long" })
    .max(10, { message: "Postal code must not exceed 10 characters" }),
  country: z
    .string()
    .min(2, { message: "Country must be at least 2 characters long" })
    .max(50, { message: "Country must not exceed 50 characters" }),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Invalid phone number format (e.g., +123456789)",
    })
    .min(7, { message: "Phone number must be at least 7 digits" })
    .max(15, { message: "Phone number must not exceed 15 digits" }),
});

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ShippingAddModal: NextPage<Props> = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentEditId, setCurrentEditId] = useState<string | null>(null);

  const jwt = useJwt();
  const { addAddress, updateAddress } = useShippingAddressStore();
  const { setShippingAddress } = useOrderStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location_name: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      phoneNumber: "",
    },
  });

  const { handleSubmit, reset, setValue } = form;

  const clearForm = () => {
    reset({
      location_name: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      phoneNumber: "",
    });
    setCurrentEditId(null);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (jwt) {
      addAddress(values, jwt);
    } else {
      console.error("JWT token is null");
    }

    clearForm();
  };

  const handleCreateClick = () => {
    clearForm();
    setIsEditMode(false);
  };

  const renderFormFields = () => (
    <>
      {[
        "location_name",
        "address",
        "city",
        "state",
        "postalCode",
        "country",
        "phoneNumber",
      ].map((fieldName) => (
        <FormField
          key={fieldName}
          control={form.control}
          name={fieldName as keyof z.infer<typeof formSchema>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {fieldName
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())
                  .replace(/\b(?:postal|phone)(?=\s)/, (match) =>
                    match.toUpperCase()
                  )}
              </FormLabel>
              <FormControl>
                <Input id={fieldName} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </>
  );

  return (
    <>
      <CustomDialog trigger={<div onClick={handleCreateClick}>{children}</div>}>
        <DialogHeader>
          <DialogTitle>Add New Address</DialogTitle>
          <DialogDescription>
            Add a new shipping address to your account.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[20px]"
          >
            <div className="grid grid-cols-2 gap-[10px]">
              {renderFormFields()}
            </div>

            <DialogFooter>
              <Button type="submit">Save New Address</Button>
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </CustomDialog>
    </>
  );
};

export default ShippingAddModal;
