import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import * as React from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';



export default function NFTCard(props) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

let mydate = new Date(props.nft.txnDate);
let formatedDate = moment(mydate, "YYYY-MM-DD hh:mm:ss a");
        // let actualDate = formatedDate.format('llll')
        // let actualDate = formatedDate.fromNow();
let actualDate = formatedDate.format("d MMM YYYY HH:mm")



  return (
    <Card sx={{ maxWidth: 345 , margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
        subheader= { actualDate}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://gateway.pinata.cloud/ipfs/QmTd7Pve8RYARjjpK5p9daJi36p2PGKvaS1GNbYKsxW2TU"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>

        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" aria-labelledby ="chickck">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
     
    </Card>
  );
}
