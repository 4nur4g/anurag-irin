import { useState } from "react";
import { TextField, Button } from "@material-ui/core";

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

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                value={name}
                onChange={handleNameChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
            <Button type="button" variant="contained" color="secondary" onClick={handleClear}>
                Clear
            </Button>
        </form>
    );
}

export default UserInput;
