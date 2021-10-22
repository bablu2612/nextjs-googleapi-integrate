
import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';

interface Iprops {
    handleChange: (address: string) => void;
    handleSelect: (address: string) => void;
    state: { addresses: string };
    onSearchClick: () => void;
    siteSearchData: any;
}

const LocationSearchInput: React.FC<Iprops> = ({ handleChange, handleSelect, onSearchClick, state, siteSearchData }) => {
    return (
        <>
            <div className="serch-section-btn">
                <PlacesAutocomplete
                    value={state?.addresses}
                    onChange={handleChange}
                    onSelect={handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {

                        return (
                            <div>
                                <input
                                    {...getInputProps({
                                        placeholder: 'Search Places ...',
                                        className: 'location-search-input',
                                    })}
                                />
                                <div className="autocomplete-dropdown-container">
                                    {/* {loading && <div>Loading...</div>} */}
                                    <ul>
                                        {suggestions?.length > 0 &&
                                            <>
                                                <li> Locations:</li>
                                                {
                                                    suggestions.map((suggestion: any, index: number) => {
                                                        console.log("suggestion", suggestion);
                                                        const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                                        const style = suggestion.active
                                                            ? {
                                                                backgroundColor: '#fafafa', cursor: 'pointer'
                                                            }
                                                            : {
                                                                backgroundColor: '#ffffff', cursor: 'pointer'
                                                            };
                                                        return (
                                                            <li {...getSuggestionItemProps(suggestion, { className, style })} key={index + 1}>
                                                                <span><img src="/placeholder.png" width="15px" height="15px" /></span><span>{suggestion.description}</span>
                                                            </li>

                                                        );
                                                    })
                                                }
                                                <li className="club">Club:</li>
                                                {siteSearchData?.map((data: { name: string }, index: number) => (

                                                    <li className="suggestion-item" role="option" style={{ backgroundColor: "rgb(255, 255, 255)", cursor: "pointer" }} id="PlacesAutocomplete__suggestion-ChIJIQBpAG2ahYAR_6128GcTUEo" onClick={() => alert("hello")} key={index + 1}>
                                                        <span><img src="/home.png" width="15px" height="15px" /></span><span>{data?.name}</span>
                                                    </li>

                                                ))}

                                            </>
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                    }
                </PlacesAutocomplete >
                <IconButton onClick={() => onSearchClick()}> <Search /></IconButton>
            </div>

        </>
    );
}

export default LocationSearchInput;