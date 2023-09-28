import { loginURL } from "../spotify/auth";
import { Typography, Button } from "@mui/material";

const styles = {
    title: {
        padding: '20px',
        textAlign: 'center',
        fontSize: '60px'
    },
    text: {
        textAlign: 'center',
        fontSize: '24px',
        padding: '10px 15px'
    },
    start: {
        height: '50px',
        width: '150px',
        fontSize: '24px',
        padding: '10px',
    }
};

function Landing({ setPage }) {
    try{
        const params = document.location.href
        .split('#')[1].split('&');
        const paramObj = {};
        // Loop through the parameters and add them to the object
        params.forEach(param => {
        const [key, value] = param.split('=');
        paramObj[key] = value;
        });
        paramObj['access_token'] && setPage(1)
    }
    catch {}
  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant="h1" color="primary" sx={styles.title}>
        Blendify
      </Typography>
      <Typography sx={styles.text}>Unique Spotify playlists in an instant. <br /> Click below to get started</Typography>
      <Button
        onClick={() => {
        }}
        variant="contained"
        sx={styles.start}
        href={loginURL}
      >
        Start
      </Button>
    </div>
  );
}

export default Landing;
