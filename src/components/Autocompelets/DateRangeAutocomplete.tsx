import Autocomplete from "./Autocomplete";
import IAutocompleteProps from "../../interfaces/IAutocompleteProps";
import * as React from "react";

const DateRangeAutocomplete = (props: IAutocompleteProps) => (
  <Autocomplete
    textFieldLabel={"دوره‌های زمانی"}
    getOptionLabel={(option) => option.title}
    isOptionEqualToValue={(option, value) => option.title === value.title}
    {...props}
  />
);

export default DateRangeAutocomplete;
