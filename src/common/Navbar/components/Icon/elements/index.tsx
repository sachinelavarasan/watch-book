import styled from '@emotion/styled';

export const IconContainer = styled.div`
  .active {
    .icon-container {
      border-radius: 0.5em;
      background: ${({ theme }: any) => theme.sideNavbarStyle.iconContainerActive.backgroundColor};
    }
    .activeState {
      color: #fff;
    }
  }
  .inactive {
    .icon-container {
    }
    .activeState {
      color: ${({ theme }: any) => theme.sideNavbarStyle.iconStyle.color};
    }
  }
  .icon-container {
    padding: 0.3rem;
  }
  .activeState {
    vertical-align: middle;
  }
`;
