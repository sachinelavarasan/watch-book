import styled from '@emotion/styled';

export const ProfileModalContainer = styled.div`
  .modal-container {
    display: flex;
    flex-direction: column;
  }

  .profile-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer {
    padding: 1.25rem 1.5rem;
  }
  .css-tlc64q-MuiPaper-root-MuiDialog-paper {
    overflow-y: unset !important;
  }
  @media only screen and (max-device-width: 480px) {
    /* .box {
      width: 80%;
      display: flex;
      flex-direction: column;
    } */
  }
  .dialog-content {
    display: flex;
    /* align-items: center;
    justify-content: center; */
    flex-direction: column;
    /* .user-details {
      width: 45%;
    }
    .organisation-details {
      width: 55%;
    } */
  }
`;

export const ProfileModalFooterContainer = styled.div`
  .footer {
    padding: 0.5rem 1.5rem;
  }
`;
