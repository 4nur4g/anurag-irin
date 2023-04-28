import Card from '@mui/material/Card';

// eslint-disable-next-line react/prop-types
const CardList = ({ children }) => {
    return (
        <Card variant="outlined" sx={{ padding: 25, borderRadius: 20, boxShadow: "0px 0px 20px rgba(116, 188, 82, 0.2)" }}>
                {children}
        </Card>
    );
};

export default CardList;
