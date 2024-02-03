import styled from '@emotion/styled';

export const TableContainer = styled.div`
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    thead > tr {
      outline-width: 0.0625rem;
      outline-style: solid;
      border-radius: 0.25rem;
      box-shadow: 0rem 0rem 0.1875rem 0.125rem rgba(0, 0, 0, 0.25);
    }
    th {
      font-size: 0.875rem;
      font-weight: 600;
      text-align: left;
      padding: 0.65rem 1.5rem;
    }
    td {
      font-size: 0.75rem;
      padding: 0.375rem 1.5rem;
    }

    tbody > tr {
      outline-width: 0.0625rem;
      outline-style: solid;
      border-radius: 0.1875rem;
      box-shadow: 0rem 0rem 0.125rem 0.0625rem rgba(0, 0, 0, 0.15);
      cursor: pointer;
      :hover {
        background-color: ${({ theme }: any) =>
          theme.tableBodyRowStyle.hoverBackgroundColor} !important;
      }
    }
  }
  .pagination {
    border-radius: 0.1875rem;
    padding: 0.65rem 1.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      outline: 0;
      border-radius: 0.1875rem;
      font-weight: 400;
      padding: 0.375rem;
      font-size: 0.875rem;
      margin-right: 0.25rem;
      border-width: 0.0625rem;
      border-style: solid;

      :disabled {
        opacity: 0.7;
      }
    }
  }
  .page-text {
    font-size: 0.875rem;
    color: #a9a9a9;
  }
  .page-count-select > div {
    padding: 0.25rem;
    font-size: 0.875rem;
  }
`;
