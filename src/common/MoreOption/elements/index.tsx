import styled from '@emotion/styled';

export const MenuContainer = styled.div`
  .icon-button {
    padding: 0.3rem;
    max-width: 1.875rem;
    max-height: 1.875rem;
    :hover,
    &.is-open {
      /* background: rgba(144, 0, 185, 0.24); */
      background-color: rgb(212 212 212 / 24%);
      /* border-radius: 0.2rem; */
    }

    /* .css-78trlr-MuiButtonBase-root-MuiIconButton-root:hover */
  }
`;

export const DropdownContainer = styled.div`
  padding: 0 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
