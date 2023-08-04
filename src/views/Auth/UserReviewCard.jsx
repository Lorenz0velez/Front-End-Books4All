import { AiFillStar } from 'react-icons/ai';
import { Card, CardHeader, CardContent, Typography, CardMedia } from "@mui/material";

const UserReviewCard = ({ body, rating, user_name, book}) => {
    return (
        <Card>
        <CardHeader title={book.title} />
        <CardContent>
          <Typography variant="h6" color="textSecondary">
            Rating: {rating}
            <AiFillStar color='#ffc107' style={{ marginBottom: 3, marginLeft: 5 }} />
          </Typography>
          <Typography variant="body1" component="p">
            {body}
          </Typography>
          <CardMedia
            style={{ height: 200, width: 150, margin: 'auto', marginTop: 20 }}
            image={book.image}
            title={book.title}
          />
        </CardContent>
      </Card>
    )
}

// Reserva sabado
// 1 Escon
// 2 Verce
// 3 Enzo
// 4 Nahuel
// 5 Melli -->> jugo 80
// 6 Juani
// 7 Mono -->> jugo 80
// 8 Jena
// 9 Luchi
// 10 Lolo
// 11 Tirri
// 12 Lalo -->> jugo 80
// 13 Roson
// 14 Toto -->> no esta
// 15 Chino F -->> no esta
// 16 Rossi
// 17 Martin 
// 18 Diego M
// 19 Galmes
// 20 Igna G
// 21 Nacho Barrionuevo
// 22 Garzon
// 23 Simon

export default UserReviewCard;