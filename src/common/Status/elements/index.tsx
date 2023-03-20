import styled from '@emotion/styled';

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  .status-1,
  .status-2,
  .status-3 {
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
  }
  .status-1 {
    background-color: #00b96b;
  }
  .status-2 {
    background-color: #f21623;
  }
  .status-3 {
    background-color: #f5fa00;
  }
  .label {
    font-weight: 400;
    font-size: 1rem;
    color: #000000;
    margin-left: 0.5rem;
  }
`;
