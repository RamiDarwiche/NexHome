import { useForm } from "react-hook-form";
import { Agent } from "@/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SelectState from "./SelectState";
import validator from "validator";
import { useEffect, useState } from "react";

// repeated for now for fast refresh?
const formSchema = z.object({
  email: z.string(),
  fName: z.string().min(1, "First name is required"),
  lName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  zip: z.string().refine((zip) => validator.isPostalCode(zip, "US"), {
    message: "Must be a valid zip code",
  }),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  phone: z.string().refine((phone) => validator.isMobilePhone(phone, "en-US"), {
    message: "Must be a valid phone number",
  }),
});

type EditAgentFormData = z.infer<typeof formSchema>;

type Props = {
  currentAgent: Agent;
  onSave: (userProfileData: EditAgentFormData) => void;
  isLoading: boolean;
  isSuccess: boolean;
};

// this looks ugly fix it at some point, potentially use google maps platform for address validation

const EditAgentProfileForm = ({ currentAgent, isSuccess, onSave }: Props) => {
  const form = useForm<EditAgentFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentAgent,
  });

  // Used to enable all fields after edit profile option selected
  const [editing, setEditing] = useState(false);
  // Used to reset fields to default values if no valid updates are made
  const [resetEdits, setResetEdits] = useState(false);

  // Prepopulate profile field and reset upon cancelling edits
  useEffect(() => {
    form.reset(currentAgent);
    if (resetEdits) {
      form.reset(currentAgent);
    }
  }, [currentAgent, form, resetEdits]);

  return (
    <Form {...form}>
      <form
        // On form submit invoke MyAgentApi to save changes to DB
        onSubmit={form.handleSubmit(onSave)}
        className="m-auto mb-2 p-5 w-3/4 md:w-full space-y-4 rounded-lg md:p-10 shadow shadow-primary-uilight3 border border-primary-uilight3"
      >
        <div>
          <h1 className="text-2xl text-primary-bdlight2 font-semibold">
            {currentAgent.fName}'s Profile
          </h1>
          <h2 className="text-secondary-sdlight1">Edit your profile</h2>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="fName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  {editing ? (
                    <Input {...field} className="bg-white" />
                  ) : (
                    <Input {...field} className="bg-white" disabled />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  {editing ? (
                    <Input {...field} className="bg-white" />
                  ) : (
                    <Input {...field} className="bg-white" disabled />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-medium">Address</FormLabel>
                <FormControl>
                  {editing ? (
                    <Input {...field} className="bg-white" />
                  ) : (
                    <Input {...field} className="bg-white" disabled />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-medium">City</FormLabel>
                <FormControl>
                  {editing ? (
                    <Input {...field} className="bg-white" />
                  ) : (
                    <Input {...field} className="bg-white" disabled />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>State</FormLabel>
                {editing ? (
                  <SelectState field={field} disabled={false} />
                ) : (
                  <SelectState field={field} disabled={true} />
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-center">
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-20 sm:mr-1 ">
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  {editing ? (
                    <Input {...field} className="bg-white" />
                  ) : (
                    <Input {...field} className="bg-white" disabled />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="min-w-60 flex-1">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  {editing ? (
                    <Input {...field} className="bg-white" />
                  ) : (
                    <Input {...field} className="bg-white" disabled />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="container flex flex-row justify-center gap-x-3">
          {/* Edit profile button, enable edits on click and reset edits on cancellation */}
          <Button
            type="button"
            onClick={() => {
              setEditing(!editing);
              setResetEdits(!resetEdits);
            }}
            className="mt-5 object-center bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
          >
            Edit Profile
          </Button>
          {editing ? (
            <Button
              type="submit"
              onClick={() => {
                // Only set editing to false if profile successfully updated
                if (isSuccess) {
                  setEditing(false);
                }
              }}
              className="mt-5 object-center bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
            >
              Update Profile
            </Button>
          ) : (
            // Update Profile is hidden until editing enabled
            <Button
              type="submit"
              className="mt-5 hidden object-center bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
            >
              Update Profile
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default EditAgentProfileForm;
