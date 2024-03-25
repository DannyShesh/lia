import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card  sx={{ maxWidth: 750, boxShadow: "4px 6px 18px #9999",  }}>
      <CardMedia
        sx={{ height: 350 }}
        image="/info.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Ronnies El-service
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Med snart 30 års erfarenhet inom elbranschen erbjuder jag dig en professionell service och montering inom elbranschen
        </Typography>
        <strong className="font-semibold text-gray-900 text-2xl">Elinstallationer</strong>  <br />
        <strong className="font-semibold text-gray-900 text-2xl">Felsökning</strong> <br />
        <strong className="font-semibold text-gray-900 text-2xl">Elplanering Elansvarig</strong> 
      </CardContent>
      
    </Card>
  );
}
