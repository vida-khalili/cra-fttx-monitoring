import Autocomplete from "./Autocomplete";
import IAutocompleteProps from "../../interfaces/IAutocompleteProps";
import * as React from "react";

const OperatorAutocomplete = (props: IAutocompleteProps) => (
  <Autocomplete
    textFieldLabel={"اپراتور"}
    getOptionLabel={(option) => option.title}
    isOptionEqualToValue={(option, value) => option.title === value.title}
    {...props}
  />
);

export default OperatorAutocomplete;
