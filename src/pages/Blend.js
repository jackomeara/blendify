import { useEffect, useState } from "react";
import { getTokenFromURL } from "../spotify/auth";
import { TextField, Typography, Button, Avatar, IconButton } from "@mui/material";
import SpotifyWebApi from "spotify-web-api-js";
import AddSeed from "../components/AddSeed";
import SeedCard from "../components/SeedCard";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HelpDialog from "../components/HelpDialog";
import { useNavigate } from "react-router-dom";

const styles = {
  main: {
    width: "70vw",
    minHeight: "70vh",
    backgroundColor: 'white',
    margin: "10vh auto",
    borderRadius: "20px",
    padding: "40px 40px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  playlistName: {
    maxWidth: "400px",
    marginBottom: '15px'
  },
  seed: {
    fontSize: "20px",
  },
  newSeed: {
    maxWidth: "150px",
  },
  title: {
    fontSize: '40px',
    fontWeight: '500',
    lineHeight: '100%'
  }
};

function Blend() {
    const navigate = useNavigate();
  const spotify = new SpotifyWebApi();
  const [spotifyToken, setSpotifyToken] = useState();
  const [playlistName, setPlaylistName] = useState('');
  const [seeds, setSeeds] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [helpState, setHelpState] = useState(false);
  let queryData = {
    seed_artists: "",
    seed_genres: "",
    seed_tracks: "",
  }
  const [newSeedOpen, setNewSeedOpen] = useState(false);
  const [currentSeed, setCurrentSeed] = useState('')

  useEffect(() => {
    // add new seed
    currentSeed != '' && setSeeds([...seeds, currentSeed]);
  }, [currentSeed]);

  useEffect(() => {
    let { access_token } = getTokenFromURL();
    setSpotifyToken(access_token);
    window.token = access_token;
  }, []);

  useEffect(() => {
    if (spotifyToken) {
      spotify.setAccessToken(spotifyToken);
    }
  }, [spotifyToken]);

  const addSeed = () => {
    setNewSeedOpen(true);
  };

  const createPlaylist = () => {
    setErrorMsg('')
    if(playlistName.length == 0){
        setErrorMsg('You must enter a playlist name')
        return;
    }
    let query = {
        seed_artists: "",
        seed_genres: "",
        seed_tracks: "",
    }
    seeds.forEach(seed => {
        if(typeof seed == 'string'){
            query.seed_genres += seed+',';
        } else if('album' in seed){
            query.seed_tracks += seed.id+',';
        } else {
            query.seed_artists += seed.id+',';
        }
    spotify.getRecommendations(query)
    .then(data => {
        let songs = data.tracks.map(track => track.uri);
        spotify.getMe()
        .then(data => {
            spotify.createPlaylist(data.id, {name: playlistName})
            .then(data => {
                spotify.addTracksToPlaylist(data.id, songs)
                .then(data => {
                    console.log(data);
                    navigate('/success')
                })
            })
        })
    })
    });
  }

  return (
    <div style={styles.main}>
      <AddSeed
        open={newSeedOpen}
        handleClose={() => {
            setNewSeedOpen(false)
        }}
        spotify={spotify}
        setCurrentSeed={setCurrentSeed}
      ></AddSeed>
      <HelpDialog 
        open={helpState}
        handleClose={() => setHelpState(false)}
      />
      <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px'}}>
        <Typography variant="h1" color='primary' sx={styles.title}>Create Playlist</Typography>
        <Avatar sx={{bgcolor: 'white', border:'solid 1px grey'}}><IconButton onClick={() => setHelpState(true)}><QuestionMarkIcon /></IconButton></Avatar>
      </div>
      <TextField sx={styles.playlistName} value={playlistName} onChange={(event) => setPlaylistName(event.target.value)} label="Playlist Name"></TextField>
      {/* <TextField sx={{...styles.playlistName, maxWidth:'120px'}} label='No. Songs'></TextField> */}
      {seeds.map((seed) => {
        let name, type;
        typeof seed == 'string' ? name=seed : name=seed.name
        typeof seed == 'string' ? type='genre' : type='other'
        return (
          <SeedCard key={Math.random()} name={name} seeds={seeds} setSeeds={setSeeds} type={type}/>
        );
      })}
      {seeds.length < 5 && (
        <Button
          variant="outlined"
          sx={styles.newSeed}
          onClick={() => addSeed()}
        >
          Add New Seed
        </Button>
      )}
      <Button sx={{marginTop: '20px', maxWidth: '150px'}} variant='contained' onClick={() => {createPlaylist()}}>Create</Button>
        { errorMsg && <Typography color='error'>{errorMsg}</Typography>}
    </div>
  );
}

export default Blend;
