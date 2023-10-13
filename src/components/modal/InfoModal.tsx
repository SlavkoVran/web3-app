import * as React from 'react'
import { useEffect, useState } from 'react';
import { CircularProgress, Typography, Fade, Modal, Box, Backdrop } from '@mui/material';
import { useFetch } from '../../context/FetchContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function TransitionsModal() {

  const { loading, error } = useFetch()
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (loading) {
      setOpen(loading)
    } else {
      setOpen(false)
    }
    if (error !== '') {
      setOpen(true)
    }
  }, [loading, error])

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CircularProgress />
            {
              <Typography sx={{ mt: 2 }}>
                {error ? error : 'Pleas wait...'}
              </Typography>
            }
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
