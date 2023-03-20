import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

import { ModalContainer } from './elements';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #9000db',
  borderRadius: 2,
  boxShadow: 24,
};
const Modal = ({ onClose, isVisible, children, width, className }: any) => {
  return (
    <ModalContainer
      open={isVisible}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}>
      <Fade in={isVisible}>
        <Box sx={{ ...style, width: width }} className={className}>
          <div>{children}</div>
        </Box>
      </Fade>
    </ModalContainer>
  );
};

export default Modal;
