import styled from '@emotion/styled';

export const TableContainer = styled.div`
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    thead > tr {
      outline: #2e1220 solid 0.0625rem;
      border-radius: 0.25rem;
      box-shadow: 0rem 0rem 0.1875rem 0.125rem rgba(0, 0, 0, 0.25);
      background-color: #2e1220;
    }
    th {
      color: #ffffff;
      font-size: 0.875rem;
      font-weight: 600;
      text-align: left;
      padding: 0.65rem 1.5rem;
    }
    td {
      font-size: 0.75rem;
      padding: 0.375rem 1.5rem;
      color: #f3f3f3;
    }

    tbody > tr {
      outline: #1f0b16 solid 0.0625rem;
      border-radius: 0.1875rem;
      box-shadow: 0rem 0rem 0.125rem 0.0625rem rgba(0, 0, 0, 0.15);
      background-color: #1f0b16;
    }
  }
  .pagination {
    background-color: #2e1220;
    border-radius: 0.1875rem;
    padding: 0.65rem 1.5rem;
    /* border: 0.0625rem solid #aaaaaa; */
    /* box-shadow: 0rem 0rem 0.1875rem 0.125rem rgba(0, 0, 0, 0.25); */
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      outline: 0;
      border: 0.0625rem solid rgba(0, 0, 0, 0.23);
      border-radius: 0.1875rem;
      font-weight: 400;
      padding: 0.375rem;
      font-size: 0.875rem;
      color: #a9a9a9;
      margin-right: 0.25rem;

      color: #a9a9a9;
      background: #1f0b16;

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
    background: #1f0b16;
    color: #a9a9a9;
    border: 1px solid #2e1322 !important;
    outline: 1px solid #2e1322 !important;
  }
`;
