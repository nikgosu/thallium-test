import React, {FC} from 'react';
import {Box, Modal} from "@mui/material";
import classes from "./MyModal.module.css";

interface Props {
  open: boolean
  handleClose: () => void
  imageUrl: string
}

const MyModal:FC<Props> = ({open, handleClose, imageUrl}: Props) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modal}>
        <img src={imageUrl} alt="not found"/>
      </Box>
    </Modal>
  );
};

export default MyModal;