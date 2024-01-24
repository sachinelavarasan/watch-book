import styled from '@emotion/styled';

export const EmployeesContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }: any) => theme.custom.backgroundColor};
  h1 {
    margin: 0;
  }
  .modal-footer {
    display: flex;
    justify-content: flex-end;
  }
`;
