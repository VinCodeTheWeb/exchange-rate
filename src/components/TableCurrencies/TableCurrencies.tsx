import React from 'react';
import { Typography, Table, Col } from 'antd';

interface TableCurrenciesProps {
  table: any;
}

const TableCurrencies: React.FC<TableCurrenciesProps> = ({ table }) => {
  const { Text } = Typography;

  const columns = [
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'rate',
    },
  ];

  return (
    <Col sm={8} xs={22}>
      <Text>Other currencies</Text>
      <Table columns={columns} dataSource={table} />
    </Col>
  );
};

export { TableCurrencies };
