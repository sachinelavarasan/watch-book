import React from 'react';
import { usePagination, useTable } from 'react-table';
import { TableContainer } from './elements';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import FormControl from '@mui/material/FormControl/FormControl';
import { useTheme } from '@emotion/react';

// eslint-disable-next-line react/prop-types
function Tables({ columns = [], data = [] }: any) {
  const theme: any = useTheme();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  }: any = useTable(
    {
      columns,
      data,
    },
    usePagination,
  );

  return (
    <TableContainer>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup}
              style={theme.tableHeadStyle}>
              {headerGroup.headers.map((column: any) => (
                <th key={column.Header} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} style={theme.tableBodyRowStyle}>
                {row.cells.map((cell: any) => {
                  return (
                    <td key={cell.value} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <div>
          <span className="page-text" style={theme.paginationText}>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
        </div>
        <div className="flex items-center">
          <FormControl
            sx={{ marginRight: '4px', outline: 0 }}
            size="small"
            style={theme.paginationStyle}>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={pageSize}
              className="page-count-select"
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <MenuItem key={pageSize} value={pageSize}>
                  {pageSize}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <button
            style={theme.paginationStyle}
            className="page-prev ml-4"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button
            style={theme.paginationStyle}
            className="page-prev"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}>
            {'< '}Prev
          </button>{' '}
          <button
            style={theme.paginationStyle}
            className="page-next"
            onClick={() => nextPage()}
            disabled={!canNextPage}>
            {'> '}Next
          </button>{' '}
          <button
            style={theme.paginationStyle}
            className="page-next"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
        </div>
      </div>
    </TableContainer>
  );
}

export default Tables;
