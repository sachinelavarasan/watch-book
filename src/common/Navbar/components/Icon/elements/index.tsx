import styled from '@emotion/styled';

export const IconContainer = styled.div`
  .active {
    .icon-container {
      border-radius: 0.5em;
      /* border: 1px solid #475be8; */
      /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(255, 255, 255, 0.3); */
      background: #ffffff;
    }
    .activeState {
      color: #2a0017;
    }
  }
  .inactive {
    .icon-container {
    }
    .activeState {
      color: white;
    }
  }
  .icon-container {
    padding: 0.3rem;
  }
  .activeState {
    vertical-align: middle;
  }
`;
