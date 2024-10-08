import { ControllerRenderProps } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { FormControl } from "../../ui/form";

type Props = {
  disabled: boolean;
  field: ControllerRenderProps<
    {
      state: string;
      email: string;
      fName: string;
      lName: string;
      address: string;
      zip: string;
      city: string;
      role: "Agent" | "Client";
      phone: string;
    },
    "state"
  >;
};

const SelectState = ({ field, disabled }: Props) => {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <Select
      onValueChange={field.onChange}
      defaultValue={field.value}
      disabled={disabled}
    >
      <FormControl>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
      </FormControl>

      <SelectContent>
        {states.map((state) => (
          <SelectItem
            key={state}
            className="hover:cursor-pointer"
            value={state}
          >
            {state}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectState;
