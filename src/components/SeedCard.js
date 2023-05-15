import { Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
    main: {
        width: '80%',
        backgroundColor: '#b0f5d4',
        minHeight: '6vh',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        borderRadius: '10px',
        marginBottom: '10px',
    },
    text: {
        flexGrow: 1,
        fontSize: '20px'
    },
}

function SeedCard({name, seeds, setSeeds, type}) {
    const handleDelete = () => {
        console.log('deleting')
        if(type == 'genre'){
            let newSeeds = seeds;
            setSeeds(newSeeds.filter(seed => seed != name));
        } else {
            let newSeeds = seeds;
            setSeeds(newSeeds.filter(seed => (!('name' in seed) || seed.name != name)))
        }
    }
    return ( 
    <div style={styles.main}>
        <Typography sx={styles.text}>
            {name}
        </Typography>
        <IconButton onClick={() => handleDelete()}>
            <DeleteIcon color="error"/>
        </IconButton>
    </div> 
    );
}

export default SeedCard;