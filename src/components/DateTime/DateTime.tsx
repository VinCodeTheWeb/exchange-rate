import React from 'react';
import { Col, Typography } from 'antd';
import moment from 'moment';

interface DateTimeProps {
  timestamp: number;
}

const DateTime: React.FC<DateTimeProps> = ({ timestamp }) => {
  const { Text } = Typography;

  return (
    <Col span={24} style={{ textAlign: 'center' }}>
      <Text>As of: {moment.unix(timestamp).format('MMMM Do YYYY, h:mm')}</Text>
    </Col>
  );
};

export { DateTime };
