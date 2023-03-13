import styled from '@emotion/styled';

export const IconContainer = styled.div`
  .active {
    .icon-container {
      border-radius: 0.5em;
      /* border: 1px solid #475be8; */
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(255, 255, 255, 0.3);
      background: linear-gradient(180deg, #ffffff, #ffffff);
    }
    .activeState {
      color: #9000db;
    }
  }
  .inactive {
    .icon-container {
      border-radius: 0.5em;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(255, 255, 255, 0.3);
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.22), rgba(255, 255, 255, 0.25));
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
