import styled from '@emotion/styled';

export const TableContainer = styled.div`
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    thead > tr {
      outline: #9000b9 solid 0.0625rem;
      border-radius: 0.25rem;
      box-shadow: 0rem 0rem 0.1875rem 0.125rem rgba(0, 0, 0, 0.25);
      background-color: #ffffff;
    }
    th {
      color: black;
      font-size: 0.75rem;
      font-weight: bold;
      text-align: left;
      padding: 0.5rem 1.5rem;
    }
    td {
      font-size: 0.75rem;
      padding: 0.375rem 1.5rem;
    }

    tbody > tr {
      outline: #d9d8d8 solid 0.0625rem;
      border-radius: 0.1875rem;
      box-shadow: 0rem 0rem 0.125rem 0.0625rem rgba(0, 0, 0, 0.15);
      background-color: #ffffff;
    }
  }
  .pagination {
    background-color: #ffffff;
    border-radius: 0.1875rem;
    /* border: 0.0625rem solid #aaaaaa; */
    /* box-shadow: 0rem 0rem 0.1875rem 0.125rem rgba(0, 0, 0, 0.25); */
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background-color: #fff;
      outline: 0;
      border: 0.0625rem solid rgba(0, 0, 0, 0.23);
      border-radius: 0.1875rem;
      font-weight: 400;
      padding: 0.375rem;
      font-size: 0.875rem;
      color: #000000;
      margin-right: 0.25rem;

      :disabled {
        color: #c0b9b9;
        background: #c0b9b921;
      }
    }
  }
  .page-text {
    font-size: 0.875rem;
  }
  .page-count-select > div {
    padding: 0.25rem;
    font-size: 0.875rem;
  }
`;
