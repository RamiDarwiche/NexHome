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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import SelectState from "./SelectState";
import validator from "validator";

const formSchema = z.object({
  fName: z.string().min(1, "First name is required"),
  lName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  zip: z.string().refine((zip) => validator.isPostalCode(zip, "US"), {
    message: "Must be a valid zip code",
  }),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  role: z.enum(["Agent", "Client"]),
  phone: z.string().refine((phone) => validator.isMobilePhone(phone, "en-US"), {
    message: "Must be a valid phone number",
  }),
});

type CreateNewAgentFormData = z.infer<typeof formSchema>;

type Props = {
  currentAgent: Agent;
  onSave: (userProfileData: CreateNewAgentFormData) => void;
  isLoading: boolean;
};

// this looks ugly fix it at some point, potentially use google maps platform for address validation

const CreateNewAgentProfileForm = ({ onSave }: Props) => {
  const form = useForm<CreateNewAgentFormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="m-6 p-5 w-3/4 md:w-1/2 space-y-4 rounded-lg md:p-10 shadow shadow-primary-uilight3 border border-primary-uilight3"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="fName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
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
                  <Input {...field} className="bg-white" />
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
                  <Input {...field} className="bg-white" />
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
                  <Input {...field} className="bg-white" />
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
                <SelectState field={field} />
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
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="min-w-60 flex-1 sm:ml-1 ">
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem className="hover:cursor-pointer" value="Agent">
                      Agent
                    </SelectItem>
                    <SelectItem className="hover:cursor-pointer" value="Client">
                      Client
                    </SelectItem>
                  </SelectContent>
                </Select>
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
                  <Input type="tel" {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="container flex flex-row justify-center">
          <Button
            type="submit"
            className="object-center bg-white shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
          >
            Create Profile
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateNewAgentProfileForm;
