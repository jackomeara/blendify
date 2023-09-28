import { loginURL } from "./spotify/auth";
import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Landing from './pages/Landing';
import Blend from './pages/Blend';
import Success from './pages/Success';

const styles = {
  app: {
    margin: '10vh 0 0 10vw'
  },
}

function App() {
  const [page, setPage] = useState(0);
  const pages = [<Landing setPage={setPage} /> , <Blend setPage={setPage} /> , <Success setPage={setPage} /> ];
  return (
    pages[page]
    )
}

export default App;
