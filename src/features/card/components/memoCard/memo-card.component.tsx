import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

type Props={
 cardQuestion: string,
 cardResponse: string,
}

const MemoCard = (props: Props): JSX.Element => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cardQuestion}
          </Typography>
          <Button>suivant</Button>
          <Button>Je connais</Button>
          <Button>Je connais pas</Button>
          <Typography variant="body2" color="text.secondary">
           {props.cardResponse}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MemoCard;
