import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchBox = () => {
    const styling: any = {
        maxWidth: "500px",
        width: "100%",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%)",
    }
    
    return (
        <Box className="adventure-section" style={styling} >
            <Box className="banner-heading">
                <h2>Find your next Keyak or Sup Adventure</h2>
                </Box>
            <GooglePlacesAutocomplete
                apiKey="AIzaSyB7zK2NBzkXIbwqYu0E4F4TBSvH6a8T3QI"
                


            />
        </Box>
    )
}
export default SearchBox;