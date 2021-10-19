import React from 'react';
import GooglePlacesAutocomplete, { geocodeByPlaceId, geocodeByAddress } from 'react-google-places-autocomplete';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

const SearchBox = () => {
    const [values, setValue] = React.useState(null);
    const router = useRouter();
    const styling: any = {
        maxWidth: "500px",
        width: "100%",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%)",
    }
    const geocode = (value: any) => {
        if (values) {
            setValue(null);
        } else {
            setValue(value);
            router.push({
                pathname: '/detail',
                query: { name: value?.value?.structured_formatting?.main_text },
            })


        }
    }
    return (
        <Box className="adventure-section" style={styling} >
            <Box className="banner-heading">
                <h2>Find your next Keyak or Sup Adventure</h2>
            </Box>
            <GooglePlacesAutocomplete
                apiKey="AIzaSyB7zK2NBzkXIbwqYu0E4F4TBSvH6a8T3QI"
                selectProps={{
                    values,
                    onChange: (data: any) => geocode(data),
                    option: (provided: any) => ({
                        ...provided,
                        color: 'white',
                    }),
                }}
            />
            <Box className="serch-icon">
                <SearchIcon className="icon-serch" style={{ width: 50, height: 50, fill: "yellow" }} />
            </Box>
        </Box>
    )
}
export default SearchBox;