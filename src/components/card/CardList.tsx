import React from 'react'
import SingleCard from './SingleCard'
import { CardListI } from '../../types/Interface'
import { Grid } from '@mui/material'

const CardList: React.FC<CardListI> = ({ nftsData }) => {

    return (
        <Grid container spacing={4} justifyContent="center" height={'100%'} mt={5}>
            {nftsData.map((nft: any, key: number) =>
                <Grid key={key} item xs={12} md>
                    <SingleCard
                        nft={nft}
                    />
                </Grid>
            )}
        </Grid>
    );
};

export default CardList;
