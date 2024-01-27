import styled from '@emotion/styled';

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 4rem;
  width: fit-content;
  /* background: rgb(199 199 199 / 5%); */

  [class*='status'] {
    background-color: #fff;
  }
  .status-1,
  .status-2,
  .status-3 {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }

  .status-1 {
    background-color: #00a411;
  }
  .status-2 {
    background-color: #cf0404;
  }
  .status-3 {
    background-color: #c49800;
  }

  [class*='label'] {
    font-weight: 500;
    font-size: 0.75rem;
    color: #fff;
    letter-spacing: 0.2px;
  }

  .label-1 {
    color: #00a411;
  }
  .label-2 {
    color: #cf0404;
  }
  .label-3 {
    color: #c49800;
  }
`;
