import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#000000",
        borderRadius: "100px",
        border: 0,
        color: 'white',
        height: "44px",
        padding: '0 28px',
        '&:hover': {
            background: '#000000',
            boxShadow: '0px 0px 0px 0px'
        },
        boxShadow: '0px 0px 0px 0px',
        textTransform: 'capitalize'
    },
}));

function Button(props) {
    const classes = useStyles();
    return (
        <MuiButton className={classes.root} {...props}>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </MuiButton>
    );
}
export default Button;
