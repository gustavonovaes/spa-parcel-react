import React from "react";
import styled from "styled-components";

import SortedTable from "./SortedTable";

const columns = [
  {
    Header: 'Name',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
    ],
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
      },
    ],
  }
];

const data = makeData(20);

function Simple() {
  return <Style>
    <SortedTable
      columns={columns}
      data={data}
    />
  </Style>;
}

const Style = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;

    thead {
      tr { 
        th {
          background: white;
          position: sticky;
          top: 0;
          z-index: 10;
        }
      }
    }

    th,
    td {
      margin: 0;
      border: 1px solid #dbdbdb;
      border-width: 0 0 1px;
      padding: .5em .75em;
      vertical-align: top;

    }
  }
`;

function makeData(len) {
  return [...Array(len)].map(d => {
    const statusChance = Math.random()
    return {
      firstName: 'Gustavo',
      lastName: 'Novaes',
      age: Math.floor(Math.random() * 30),
      visits: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100),
      status:
        statusChance > 0.66
          ? 'relationship'
          : statusChance > 0.33
            ? 'complicated'
            : 'single',
    };
  })
}

export default Simple;