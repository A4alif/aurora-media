import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();

  const hangdleSubmit = (e) => { 
    e.preventDefault();

    if(searchTerm){
        navigate(`/search/${searchTerm}`);

        setSearchTerm('');
    }

   }
  return (
    <>
      <Paper
        component="form"
        onSubmit={hangdleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          type="text"
          className="search-bar"
          placeholder="Search ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px', color:'red'}}>
            <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
