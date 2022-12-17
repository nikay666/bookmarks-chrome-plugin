import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { theme } from "../../theme";
import { SEARCH_MACHINES } from "./constants";
import { SearchMachineTypes } from "./types";
import { openSearchValueInWindow } from "./helpers";

const { palette, spacing } = theme;

const SEARCH_INPUT_WIDTH = 800;

const StyledInput = styled(InputBase)({
  borderRadius: spacing(6),
  border: `1px solid ${palette.grey[700]}`,
  padding: `${spacing(1)} ${spacing(4)}`,
  width: SEARCH_INPUT_WIDTH,
});

interface Props {
  className?: string;
  searchMachine?: SearchMachineTypes;
}

const SearchInput: React.FC<Props> = ({
  className,
  searchMachine = SearchMachineTypes.google,
}) => {
  const [value, setValue] = useState("");
  const currentSearchMachine = SEARCH_MACHINES[searchMachine];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openSearchValueInWindow(currentSearchMachine, value);
  };

  return (
    <form onSubmit={submitHandler} className={className}>
      <StyledInput
        {...{
          id: "search",
          type: "search",
          value,
          onChange: handleChange,

          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                {...{
                  cursor: "pointer",
                  style: {
                    color: theme.palette.grey[700],
                  },
                  onClick: () =>
                    openSearchValueInWindow(currentSearchMachine, value),
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchInput;
