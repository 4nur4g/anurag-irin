import UserInput from "./UserInput.jsx";
import UserList from "./UserList.jsx";
import {useMediaQuery, Grid, List, ListItem} from '@material-ui/core';
import CustomCard from "./Components/CustomCard.jsx";

function App() {
    const isDesktop = useMediaQuery('(min-width:600px)');
    return (
        <>
            {isDesktop ? (
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CustomCard>
                            <UserInput/>
                        </CustomCard>
                    </Grid>
                    <Grid item xs={6}>
                        <CustomCard>
                            <UserList/>
                        </CustomCard>
                    </Grid>
                </Grid>
            ) : (
                <List>
                    <ListItem>
                        <CustomCard>
                            <UserInput/>
                        </CustomCard>
                    </ListItem>
                    <ListItem>
                        <CustomCard>
                            <UserList/>
                        </CustomCard>
                    </ListItem>
                </List>
            )}
        </>
    )
}

export default App
