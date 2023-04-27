import { Card, CardContent } from '@material-ui/core';

// eslint-disable-next-line react/prop-types
const CardList = ({ children }) => {
    return (
        <Card variant="outlined" style={{ padding: 25, borderRadius: 20 }}>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
};

export default CardList;
