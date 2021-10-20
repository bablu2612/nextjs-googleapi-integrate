
import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { getLocation } from '../../Redux/Actions/siteLocation';
import { connect } from 'react-redux';
import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';

interface IProps {
    siteLocationApi: (lat: number, lng: number) => void;
    value: any
}

const LocationSearchInput: React.FC<IProps> = (props) => {

    const router = useRouter();
    const [state, setState] = React.useState<any>({ addresses: "" });

    const handleChange = (address: string) => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                props?.siteLocationApi(latLng?.lat, latLng?.lng);
            })
            .catch(error => console.error('Error', error));
        setState({ addresses: address });
    };

    const handleSelect = (address: string) => {
        setState({ addresses: address });
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                props?.siteLocationApi(latLng?.lat, latLng?.lng);
            })
            .catch(error => console.error('Error', error));
    };

    const onSearchClick = () => {
        if (state?.addresses !== "") {
            router.push({ pathname: "/detail", query: { name: state?.addresses } })
        }
    }
    return (
        <>
         <div className="serch-section-btn"> 
            <PlacesAutocomplete
                value={state?.addresses}
                onChange={handleChange}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
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
                                        {props?.value?.[0]?.typeOfProducts?.map((data: string, index: number) => (
                                            <li className="suggestion-item" onClick={() => console.log('hello jnaab')} key={index + 1} style={{
                                                backgroundColor: '#fafafa', cursor: 'pointer'
                                            }}><span><img src="/home.png" width="15px" height="15px" /></span><span>{data}</span></li>
                                        ))}

                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                )
                }
            </PlacesAutocomplete >
                      <IconButton onClick={() => onSearchClick()}> <Search /></IconButton>
            </div>

        </>
    );
}
const mapStateToProps = (state: any) => ({
    value: state?.siteLocationData?.siteLocationData,
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    siteLocationApi: bindActionCreators(getLocation, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(LocationSearchInput);