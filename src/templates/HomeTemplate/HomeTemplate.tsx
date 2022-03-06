import React from 'react';
import { Row } from 'antd';
import { Layout } from 'components/Layout/Layout';

interface HomeTemplateProps {
  search: React.ReactNode;
  exchangeRate: React.ReactNode;
  dateTime: React.ReactNode;
  tableCurrencies: React.ReactNode;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({
  search,
  exchangeRate,
  dateTime,
  tableCurrencies,
}) => (
  <Layout>
    <Row
      gutter={[16, 16]}
      justify='center'
      align='middle'
      style={{ marginBottom: '40px' }}
    >
      {search}
    </Row>
    <Row justify='center' style={{ marginBottom: '20px' }}>
      {exchangeRate}
    </Row>
    <Row justify='center' style={{ marginBottom: '20px' }}>
      {dateTime}
    </Row>
    <Row justify='center'>{tableCurrencies}</Row>
  </Layout>
);

export { HomeTemplate };
