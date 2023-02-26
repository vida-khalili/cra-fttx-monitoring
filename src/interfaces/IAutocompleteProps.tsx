import { AutocompleteProps } from "@mui/material";

export default interface IAutocompleteProps
  extends Omit<AutocompleteProps<any, any, any, any>, "renderInput"> {
  mode?: "light" | "normal";
  textFieldLabel?: string;
}
