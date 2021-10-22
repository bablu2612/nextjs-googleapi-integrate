import React from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

interface IProps {
    typeOfProducts: string[];
    amenities: string;
    text: string;
}

const ImageDetail: React.FC<IProps> = ({ typeOfProducts, amenities, text }) => {

    function getProductImages(imageName: string) {
        let imageUrl = "";
        if (imageName) {
            switch (imageName) {
                case "SUP":
                    imageUrl = "/paddle-board.png";
                    break;
                case "Kayak":
                    imageUrl = "/kayak.png";
                    break;
                case "Canoe":
                    imageUrl = "/canoe_icon_126895.png";
                    break;
                case "Boat":
                    imageUrl = "/boat.png";
                    break;
                default:
                    imageUrl = "/global.png";
                    break;
            }
            return <img src={`${imageUrl}`} width="50px" height="50px" />
        }
    }

    return (
        <>
            <Box className="image-details">
                <Box className="images_sections">
                    <div className="produkter">Produkter:</div>
                    {typeOfProducts?.map((value: string, index: number) => (
                        <div className="produkter" key={index + 1}>
                            {getProductImages(value)}
                            <div>{value}</div>
                        </div>
                    ))}
                </Box>
                <br />
                <p className="lorem">{text}</p>
                <Box className="belvam">
                    <span className="belvamlighter">Belvamligheter:</span>
                    {amenities?.split(',')?.map((value: string, index: number) => (
                        <Button className="button1" key={index + 1} >{value}</Button>
                    ))}

                </Box>
            </Box>
        </>
    )
}
export default ImageDetail;