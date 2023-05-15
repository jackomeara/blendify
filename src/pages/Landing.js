import { loginURL } from "../spotify/auth";
import { Typography, Button } from "@mui/material";

const styles = {};

function Landing() {
  return (
    <div>
      <Typography variant="h1" color="primary" sx={styles.title}>
        Blendify
      </Typography>
      <Typography>Unique playlists in an instant</Typography>
      <Button href={loginURL} variant="contained" sx={styles.start}>
        Start
      </Button>
    </div>
  );
}

export default Landing;
