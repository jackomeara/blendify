import { Typography, Card, Button, IconButton, Avatar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import logo from '../images/logo.png'
import styled from "styled-components";

const styles = {
    card: {
        flex: '0 0 calc(25% - 10px)',
        margin: '5px',
        boxShadow: 4,
      },
    image: {
        height: '80%',
        width: '100%',
    },
    details: {
        display: 'flex',
        alignItems: 'center',
        height: '16%'
    },
    name: {
        flexGrow: 1,
        paddingLeft: '5px',
        fontSize: '16px',
        fontWeight: 'bold'
    },

}

const StyledCard = styled(Card)`
    flex: 0 0 calc(25% - 10px);
    margin: 5px;
    box-shadow: 4;

    @media (max-width: 768px) {
        flex: 0 0 calc(100% - 10px);
        min-height: fit-content;
    }
`;

const StyledName = styled(Typography)`
    flex-grow: 1;
    padding-left: 5px;
    font-size: 16px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

function ArtistResult({artist, setCurrentSeed, handleClose}) {
    let image;
    artist.images.length > 0 ? image = artist.images[0].url : image = logo
    return ( 
        <StyledCard>
            <img 
                style={styles.image}
                src={image}
            />
            <div style={styles.details}>
                <StyledName>
                    {artist.name}
                </StyledName>
                <IconButton onClick={() => {setCurrentSeed(artist); handleClose()}}>
                    <Avatar sx={{bgcolor:'primary.main'}}>
                        <AddIcon></AddIcon>
                    </Avatar>
                </IconButton>
            </div>
        </StyledCard>
     );
}

export default ArtistResult;