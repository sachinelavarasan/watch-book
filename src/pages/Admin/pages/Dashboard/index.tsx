import React from 'react';
import Empty from '../../../../common/Empty';
import { SelectField } from '../../../../common/Select';
import SkeletonLoader from '../../../../common/SkeletonLoader';
import Table from '../../../../common/Table';
import { DashboardContainer } from './elements';

export const Dashboard = () => {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    [],
  );

  const columns: any = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    [],
  );
  let arr = [
    { label: 'hj', value: 'dd' },
    { label: 'hj', value: 'dd' },
    { label: 'hj', value: 'dd' },
  ];
  return (
    <DashboardContainer>
      <h1>DashBoard</h1>
      <SelectField
        id="select"
        label="Select"
        options={arr}
        autoWidth={false}
        multiple={false}
        native={false}
        placeholder="select"
      />
      <Table columns={columns} data={data} />
      <Empty
        title="No Employees Found !"
        subtitle="Looks likes there are no employees are added in your organisation"
      />
      <SkeletonLoader height="350px" width="100%" />
    </DashboardContainer>
  );
};
