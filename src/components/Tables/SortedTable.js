import React from "react";
import { useTable, useSortBy } from 'react-table';

function SortedTable({ columns, data}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data
  }, useSortBy);

  const theadRows = headerGroups.map(headerGroup => (
    <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(column => (
        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
          {column.render('Header')}

          <span>
            {column.isSorted
              ? column.isSortedDesc
                ? ' 🔽'
                : ' 🔼'
              : ''}
          </span>
        </th>
      ))}
    </tr>
  ));

  const tbodyRows = rows.map((row, i) => (
    prepareRow(row) || <tr {...row.getRowProps()}>
      {row.cells.map(cell => (
        <td {...cell.getCellProps()}>
          {cell.render('Cell')}
        </td>
      ))}
    </tr>
  ));

  return <table {...getTableProps()}>
    <thead>
      {theadRows}
    </thead>
    <tbody {...getTableBodyProps()}>
      {tbodyRows}
    </tbody>
  </table>;
}

export default SortedTable;