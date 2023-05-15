import { loginURL } from "./spotify/auth";
import { Typography, Button } from "@mui/material";

const styles = {
  app: {
    margin: '10vh 0 0 10vw'
  },
}

function App() {
  return (
    <div className="App" style={styles.app}>
      <Typography variant="h1" color='primary' sx={styles.title} >Blendify</Typography>
      <Typography>Create a </Typography>
      <Button href={loginURL} variant="contained" sx={styles.start} >Start</Button>
    </div>
  );
}

export default App;
