import styled from '@emotion/styled';

export const IconContainer = styled.div`
  .active {
    .icon-container {
      background-color: #475be8;
      border-radius: 0.5em;
      /* border: 1px solid #475be8; */
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(255, 255, 255, 0.3);
      background: linear-gradient(180deg, rgba(7, 23, 141, 1), rgba(55, 77, 240, 0.8));
    }
    .activeState {
      color: white;
    }
  }
  .inactive {
    .icon-container {
      border-radius: 0.5em;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(255, 255, 255, 0.3);
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.22), rgba(255, 255, 255, 0.25));
    }
    .activeState {
      color: black;
    }
  }
  .icon-container {
    padding: 0.3rem;
  }
  .activeState {
    vertical-align: middle;
  }
`;
