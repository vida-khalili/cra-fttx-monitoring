import Autocomplete from "./Autocomplete";
import IAutocompleteProps from "../../interfaces/IAutocompleteProps";
import * as React from "react";

const ProvinceAutocomplete = (props: IAutocompleteProps) => (
  <Autocomplete
    textFieldLabel={"استان"}
    getOptionLabel={(option) => option.title}
    isOptionEqualToValue={(option, value) => option.title === value.title}
    {...props}
  />
);

export default ProvinceAutocomplete;
