import {
  Dialog,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import ArtistResult from "./ArtistResult";
import { genres } from "../genres";
import SongResult from "./SongResult";

const styles = {
  popup: {
    padding: "15px",
  },
  mainDiv: {
    display: "flex",
    paddingTop: "20px",
    flexDirection: "column",
    gap: "10px",
    alignContent: "center",
  },
  title: {
    margin: "auto",
    fontSize: "24px",
  },
  inputItem: {
    maxWidth: "250px",
    margin: "auto",
  },
  searchButton: {
    maxWidth: "100px",
    margin: "auto",
  },
  resultsDiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

function AddSeed({ open, handleClose, spotify, setCurrentSeed }) {
  const [type, setType] = useState("artist");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [genre, setGenre] = useState('acoustic')

  const handleSearch = () => {
    spotify
      .search(search, [type])
      .then((data) => {
        setResults(data[type + "s"].items);
        console.log(data[type + "s"].items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      sx={styles.popup}
      open={open}
      onClose={handleClose}
    >
      <div style={styles.mainDiv}>
        <Typography sx={styles.title}>New Seed</Typography>
        <Select
          sx={styles.inputItem}
          value={type}
          onChange={(event) => {
            setType(event.target.value);
            setResults([])
        }}
        >
          <MenuItem value="artist">Artist</MenuItem>
          <MenuItem value="track">Song</MenuItem>
          <MenuItem value="genre">Genre</MenuItem>
        </Select>
        {type == "genre" ? (
          <Select sx={styles.inputItem} value="genre" onChange={(event) => {setCurrentSeed(event.target.value); handleClose()}}>
            {genres.map((genre) => {
              return (
                <MenuItem key={genre} value={genre}>
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </MenuItem>
              );
            })}
          </Select>
        ) : (
          <TextField
            sx={styles.inputItem}
            label="Search"
            onChange={(event) => setSearch(event.target.value)}
          ></TextField>
        )}
        <Button
          sx={styles.searchButton}
          onClick={() => handleSearch()}
          variant="contained"
        >
          Search
        </Button>
        <div style={styles.resultsDiv}>
          {results.map((result) => {
            return ("images" in result) ? (
              <ArtistResult
                artist={result}
                setCurrentSeed={setCurrentSeed}
                handleClose={handleClose}
              />
            ) : (
              <SongResult song={result} setCurrentSeed={setCurrentSeed} handleClose={handleClose}/>
            );
          })}
        </div>
      </div>
    </Dialog>
  );
}

export default AddSeed;
