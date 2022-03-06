import React from 'react';
import { Row, Col, Typography } from 'antd';

interface ExchangeRateProps {
  currency: string;
  totalAmount: string;
  currentExchangeRate: string;
}

const ExchangeRate: React.FC<ExchangeRateProps> = ({
  currency,
  totalAmount,
  currentExchangeRate,
}) => {
  const { Text } = Typography;

  return (
    <Col span={22}>
      <Row justify='center'>
        <Col sm={3} xs={12}>
          <Text type='secondary'>{`Total Amount in ${currency}`}</Text>
        </Col>
        <Col sm={3} xs={12}>
          <Text type='secondary'>Currency Exchange Rate</Text>
        </Col>
      </Row>

      <Row justify='center'>
        <Col sm={3} xs={12}>
          <Text style={{ fontSize: '20px' }}>{totalAmount}</Text>
        </Col>
        <Col sm={3} xs={12}>
          <Text style={{ fontSize: '20px' }}>{currentExchangeRate}</Text>
        </Col>
      </Row>
    </Col>
  );
};

export { ExchangeRate };
