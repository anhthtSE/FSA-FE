import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
// import { useState } from "react";

// const top100Films = [
//   { label: "The Shawshank Redemption", year: 1994 },
//   { label: "The Godfather", year: 1972 },
//   { label: "The Godfather: Part II", year: 1974 },
//   { label: "The Dark Knight", year: 2008 },
//   { label: "12 Angry Men", year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: "Pulp Fiction", year: 1994 },
// ];

const InputSearch = () => {
  // const [textInput, setTextInput] = useState<string>("");

  //handle change
  // const handleChangeInput = (value: string) => {
  //   // setTextInput(value);
  // };

  // const getData = async () => {};

  return (
    <>
      <TextField
        variant="outlined"
        placeholder="Search by ..."
        // onChange={(e) => handleChangeInput(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default InputSearch;
