import React, { useState } from 'react'
import { Box } from '@mui/material'
import CardList from '../components/card/CardList'
import InfoModal from '../components/modal/InfoModal'
import ReactPaginate from 'react-paginate'
import { useFetch } from '../context/FetchContext'

const Home: React.FC = () => {

  const { data, countsNfts } = useFetch()
  const [pageNumber, setPageNumber] = useState(0)

  //pagination
  const nftsPerPage: number = 5
  const pagesVisited: number = pageNumber * nftsPerPage
  const displayNfts = data.slice(pagesVisited, pagesVisited + nftsPerPage)
  const pageCount = Math.ceil(countsNfts / nftsPerPage)

  const changePage = ({ selected }: any) => {
    setPageNumber(selected)
  }

  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
      <CardList nftsData={displayNfts} />
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousClassName={'previousBttn'}
        nextLinkClassName={"nextBttn"}
        disabledClassName={'paginationDIsabled'}
        activeClassName={'paginationActive'}
      />
      <InfoModal></InfoModal>
    </Box>
  );
};

export default Home;
