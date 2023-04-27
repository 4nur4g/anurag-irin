import { Card, CardContent } from "@material-ui/core";

// eslint-disable-next-line react/prop-types
const CustomCard = (props) => {
  return (
    <Card
      variant="outlined"
      style={{
        padding: 25,
        borderRadius: 20,
        minHeight: props.minHeight,
        minWidth: props.minWidth,
      }}
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

CustomCard.defaultProps = {
  minHeight: 100,
  minWidth: 100,
};

export default CustomCard;
