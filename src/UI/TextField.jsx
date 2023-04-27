import { makeStyles } from '@material-ui/core/styles';
import TextFieldMui from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiInputBase-root': {
            border: '1px solid black',
            borderRadius: 4,
            padding: '10px 12px',
            boxShadow: '0px 0px 0px 0px',
            height: '36.12px'
        },
        '& .MuiInput-root:hover': {
            borderColor: 'black',
        },
    },
}));

function TextField(props) {
    const classes = useStyles();

    return (
        <TextFieldMui className={classes.root} {...props}  InputProps={{
            disableUnderline: true,
        }} InputLabelProps={{ shrink: false }}/>
    );
}

export default TextField;
