import styled from '@emotion/styled';

export const TableContainer = styled.div`
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 8px;
    thead > tr {
      outline: #9000b9 solid 2px;
      border-radius: 5px;
      box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.25);
      background-color: #ffffff;
    }
    th {
      color: black;
      font-weight: bold;
      text-align: left;
      padding: 1.5rem 12px;
    }
    td {
      padding: 14px 12px;
    }

    tbody > tr {
      outline: #d9d8d8 solid 1px;
      border-radius: 5px;
      box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.15);
      background-color: #ffffff;
    }
  }
  .pagination {
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 5px;
    border: 2px solid #9000b9;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.25);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background-color: #fff;
      outline: 0;
      border: 1px solid #8d8d8d;
      border-radius: 5px;
      padding: 6px 10px;
      font-weight: 600;
      font-size: 14px;
      color: #000000;
      margin-right: 4px;

      :disabled {
        color: #c0b9b9;
        background: #c0b9b921;
      }
    }
  }
`;
