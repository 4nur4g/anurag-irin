import UserInput from "./UserInput.jsx";
import UserList from "./UserList.jsx";
import {useMediaQuery, Grid, List, ListItem} from "@material-ui/core";
import CustomCard from "./UI/CustomCard.jsx";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        // Add this line to set the background to multiple gradients
        background:
            "radial-gradient(51.63% 51.63% at 50% 48.37%, rgba(157, 167, 255, 0.368968) 0%, rgba(157, 167, 255, 0.117404) 77.46%, rgba(157, 167, 255, 0) 100%)," +
            "linear-gradient(111.57deg, #FFEA31 -34.92%, rgba(255, 234, 49, 0) 85.47%)," +
            "linear-gradient(111.57deg, #A4FF31 -34.92%, rgba(164, 255, 49, 0.560847) 19.68%, rgba(164, 255, 49, 0.259259) 57.18%, rgba(164, 255, 49, 0) 89.42%)",
        height: "125vh",
    },
    backdropFilter: "blur(5px)",

    untilmenu: {
        marginTop: "160px",
    },
}));

function App() {

    function Notify(text) {
        toast(text, { autoClose: 2000 });
    }

    const isDesktop = useMediaQuery("(min-width:600px)");
    const classes = useStyles();

    const [formDataList, setFormDataList] = useState([]);
    const [selectedEdit, setSelectedEdit] = useState(null)
    const [fromSelected, setFromSelected] = useState(false)

    function handleFormSubmit(data) {
        if (!fromSelected) {
            Notify("User details have been saved")
            setFormDataList([...formDataList, data])

        }

        if (fromSelected) {
            Notify("User details have been updated")
            formEdit(data)
            setFromSelected(false)
        }
    }

    useEffect(() => {
        // log the formDataList to the console
        console.log(formDataList);
    }, [formDataList]); // only run when formDataList changes


    function formEdit(obj) {
        // Make a copy of the list
        var newList = [...formDataList];
        // Loop through the copy
        for (var i = 0; i < newList.length; i++) {
            // If the id matches, replace the object and break the loop
            if (newList[i].id === obj.id) {
                newList[i] = obj;
                break;
            }
        }
        // Set the list to the modified copy using the setting function
        setFormDataList(newList);
    }

    const handleDelete = (id) => {
        console.log("inside handledelete", id);
        // Loop through the list
        for (let i = 0; i < formDataList.length; i++) {
            // Check if the current object has the same id as the given id
            if (formDataList[i].id === id) {
                // Delete the object from the list using splice method
                formDataList.splice(i, 1);
                // Break the loop
                break;
            }
        }
    };

    return (
        <>
            <ToastContainer/>
            {isDesktop ? (
                <Grid container spacing={5} className={classes.root}>
                    <Grid item className={classes.untilmenu}>
                        <CustomCard>
                            <UserInput onFormSubmit={handleFormSubmit} selectedEdit={selectedEdit}
                                       fromSelected={fromSelected}/>
                        </CustomCard>
                    </Grid>
                    <Grid item className={classes.untilmenu}>
                        <CustomCard minHeight={310} minWidth={439}>
                            <UserList userData={formDataList} handleDelete={handleDelete}
                                      setSelectedEdit={setSelectedEdit} setFromSelected={setFromSelected}/>
                        </CustomCard>
                    </Grid>
                </Grid>
            ) : (
                <List>
                    <ListItem>
                        <CustomCard>
                            <UserInput onFormSubmit={handleFormSubmit} selectedEdit={selectedEdit}/>
                        </CustomCard>
                    </ListItem>
                    <ListItem>
                        <CustomCard>
                            <UserList userData={formDataList} setSelectedEdit={setSelectedEdit}/>
                        </CustomCard>
                    </ListItem>
                </List>
            )}
        </>
    );
}

export default App;
