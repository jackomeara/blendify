import { Button, Typography } from "@mui/material";
import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 40px;
    text-align: center
`;
const StyledBody = styled.p`
    font-size: 20px;
    text-align: center;
`
function Success({setPage}) {
  return (
    <div style={{    width: "70vw",
    minHeight: "70vh",
    backgroundColor: 'white',
    margin: "10vh auto",
    borderRadius: "20px",
    padding: "40px 40px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",}}>
      <StyledTitle variant="h1">Success!</StyledTitle>
      <StyledBody>
        Go to Spotify to listen to your new playlist, or create another below.
      </StyledBody>
      <Button sx={{maxWidth: '150px', textAlign: 'center', margin: '20px auto'}} variant="contained" onClick={() => setPage(1)}>New</Button>

    </div>
  );
}

export default Success;
