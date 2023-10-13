import React from 'react';
import { CardContent, CardMedia, Typography, Box, Card } from '@mui/material';
import placeholderImage from "../../assets/clipart2205004.png"
import { SingleCardI } from '../../types/Interface'

const SingleCard: React.FC<SingleCardI> = ({ nft }) => {

  const { name, image_url } = nft
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Card sx={{ width: '100%', maxWidth: 345, minHeight: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 200 }}
          image={image_url ? image_url : placeholderImage}
          title={name}
        />
      </Card>
    </Box>
  );
};

export default SingleCard;
