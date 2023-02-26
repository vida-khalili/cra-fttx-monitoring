import MuiAutocomplete from "@mui/material/Autocomplete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AutocompleteTextField from "./AutocompleteTextField";
import * as React from "react";
import IAutocompleteProps from "../../interfaces/IAutocompleteProps";
import AutocompletePopper from "./AutocompletePopper";

const Autocomplete = ({ textFieldLabel, ...rest }: IAutocompleteProps) => (
  <MuiAutocomplete
    fullWidth
    autoComplete
    size={"small"}
    includeInputInList
    PopperComponent={AutocompletePopper}
    popupIcon={
      <KeyboardArrowDownIcon
        sx={{
          fontSize: 20,
        }}
      />
    }
    renderInput={(params) => (
      <AutocompleteTextField {...params} label={textFieldLabel} />
    )}
    {...rest}
  />
);

export default Autocomplete;
