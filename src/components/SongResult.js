import { Typography, Card, Button, IconButton, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";

const styles = {
  card: {
    flex: "0 0 calc(25% - 10px)",
    margin: "5px",
    boxShadow: 4,
    paddingTop: "10px",
    minHeight: "80px",
  },
  image: {
    height: "80%",
    width: "100%",
  },
  name: {
    flexGrow: 1,
    paddingLeft: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    width: "calc(100%-55px)",
  },
  artist: {
    width: "calc(100%-55px)",
    paddingLeft: "5px",
  },
  add: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  details: {
    position: "relative",
  },
};

const StyledCard = styled(Card)`
  flex: 0 0 calc(25% - 10px);
  margin: 5px;
  box-shadow: 4;

  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 10px);
    min-height: fit-content;
    margin-bottom: 10px;
  }
`;

function SongResult({ song, setCurrentSeed, handleClose }) {
  let name = song.name;
  let artist = song.artists[0].name;
  console.log(song);
  return (
    <StyledCard>
      <div style={styles.details}>
        <div>
          <Typography sx={styles.name}>{name}</Typography>
          <Typography sx={styles.artist}>{artist}</Typography>
        </div>
        <IconButton
          sx={styles.add}
          onClick={() => {
            setCurrentSeed(song);
            handleClose();
          }}
        >
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <AddIcon></AddIcon>
          </Avatar>
        </IconButton>
      </div>
    </StyledCard>
  );
}

export default SongResult;
