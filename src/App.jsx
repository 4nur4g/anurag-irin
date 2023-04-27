import UserInput from "./UserInput.jsx";
import UserList from "./UserList.jsx";
import { useMediaQuery, Grid, List, ListItem } from "@material-ui/core";
import CustomCard from "./UI/CustomCard.jsx";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    // Add this line to set the background to multiple gradients
    background:
      "radial-gradient(51.63% 51.63% at 50% 48.37%, rgba(157, 167, 255, 0.368968) 0%, rgba(157, 167, 255, 0.117404) 77.46%, rgba(157, 167, 255, 0) 100%)," +
      "linear-gradient(111.57deg, #FFEA31 -34.92%, rgba(255, 234, 49, 0) 85.47%)," +
      "linear-gradient(111.57deg, #A4FF31 -34.92%, rgba(164, 255, 49, 0.560847) 19.68%, rgba(164, 255, 49, 0.259259) 57.18%, rgba(164, 255, 49, 0) 89.42%)",
    height: "100vh",
  },
  backdropFilter: "blur(5px)",

  untilmenu: {
    marginTop: "160px",
  },
}));

function App() {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  const [formDataList, setFormDataList] = useState([]);

  function handleFormSubmit(data) {
    setFormDataList([...formDataList, data]);
  }

  useEffect(() => {
    // log the formDataList to the console
    console.log(formDataList);
  }, [formDataList]); // only run when formDataList changes

  return (
    <>
      {isDesktop ? (
        <Grid container spacing={5} className={classes.root}>
          <Grid item className={classes.untilmenu}>
            <CustomCard>
              <UserInput onFormSubmit={handleFormSubmit} />
            </CustomCard>
          </Grid>
          <Grid item className={classes.untilmenu}>
            <CustomCard>
              <UserList userData={formDataList} />
            </CustomCard>
          </Grid>
        </Grid>
      ) : (
        <List>
          <ListItem>
            <CustomCard>
              <UserInput onFormSubmit={handleFormSubmit} />
            </CustomCard>
          </ListItem>
          <ListItem>
            <CustomCard>
              <UserList userData={formDataList} />
            </CustomCard>
          </ListItem>
        </List>
      )}
    </>
  );
}

export default App;
