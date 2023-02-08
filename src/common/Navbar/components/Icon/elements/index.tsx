import styled from '@emotion/styled';

export const IconContainer = styled.div`
  .active {
    .icon-container {
      background-color: white;
      border-radius: 0.25rem;
      opacity: 0.8;
    }
    .activeState {
      color: black;
    }
  }
  .inactive {
    .icon-container {
      background-color: transparent;
    }
    .activeState {
      color: white;
    }
  }
  .icon-container {
    padding: 0.325rem;
  }
  .activeState {
    vertical-align: middle;
  }
`;
