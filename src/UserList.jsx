/* eslint-disable react/prop-types */
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const dummyUsers = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
  { id: 3, name: "Bob Smith", email: "bob.smith@example.com" },
  { id: 4, name: "Alice Johnson", email: "alice.johnson@example.com" },
];

// eslint-disable-next-line react/prop-types
const UserList = (props) => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(props.userData);
  });

  const selected = (e) => {
    console.log("selected", e);
    props.handleDelete(e);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== e.id)); // filter out the deleted user
  };

  return (
    <div className={classes.root}>
      <List style={{ width: "100%" }}>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText
              primary={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "0.5rem" }}>{user.name}</span>
                  <span style={{ color: "#999", marginRight: "3.5rem" }}>
                    {user.email}
                  </span>
                </div>
              }
              primaryTypographyProps={{ noWrap: true }}
            />
            <IconButton
              aria-label="edit"
              onClick={(props) => props.handleEdit(user.id)}
            >
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => selected(user.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserList;
