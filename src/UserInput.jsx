import {useState} from "react";
import TextField from "./UI/TextField.jsx";
import Button from "./UI/Button.jsx"
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 514
    }, fields: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContents: 'center'
    }, button1: {
        marginLeft: "24px"
    }, button2: {
        marginLeft: "33px"
    }
}));

function UserInput() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // do something with name and email
        console.log("Name: ", name);
        console.log("Email: ", email);
    };

    const handleClear = () => {
        setName("");
        setEmail("");
    };

    const classes = useStyles();

    return (<form onSubmit={handleSubmit} className={classes.root}>
        <Box className={classes.fields}>
            <Typography sx={{mr: 2, display: 'inline-block', width: '119px'}}>Test</Typography>
            <TextField
                value={name}
                onChange={handleNameChange}
                fullWidth
                margin="normal"
            />
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Typography sx={{mr: 2, display: 'inline-block', width: '119px'}}>Email</Typography>
            <TextField
                // label="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                margin="normal"

            />
        </Box>
        <Box sx={{marginTop: "103.88px"}}>
            <Button type="submit" variant="contained" color="primary" style={{marginLeft: 24}}>
                Submit
            </Button>
            <Button type="button" variant="contained" color="secondary" onClick={handleClear}
                    style={{marginLeft: 33}}
            >
                Clear
            </Button>
        </Box>
    </form>);
}

export default UserInput;
