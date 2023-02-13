import styled from '@emotion/styled';

export const IconContainer = styled.div`
  .active {
    .icon-container {
      background-color: #475be8;
      border-radius: 0.5em;
      border: 1px solid #475be8;
      box-shadow: 2px 2px 4px #c5c5c5, -2px -2px 4px #ffffff;
    }
    .activeState {
      color: white;
    }
  }
  .inactive {
    .icon-container {
      border-radius: 0.5em;
      background: #fff;
      border: 1px solid #fff;
      box-shadow: 2px 2px 4px #c5c5c5, -2px -2px 4px #ffffff;
    }
    .activeState {
      color: black;
    }
  }
  .icon-container {
    padding: 0.5rem;
  }
  .activeState {
    vertical-align: middle;
  }
`;
