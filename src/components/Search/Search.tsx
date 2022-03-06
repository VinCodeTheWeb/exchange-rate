import React, { useState } from 'react';
import { Input, Col, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Symbols } from 'api/exchange-rate-types';

import { buildSuportedCurrencies } from 'utils/buildSupportedCurrencies';

interface SearchProps {
  disableInput?: boolean;
  defaultCurrencieOption1: string;
  defaultCurrencieOption2: string;
  supportedCurrenciesOptions: Symbols;
  onSearchIconClick: (searchAmount: string) => void;
  onChangeAmount: (e: string) => void;
  onChangeOption1: (value: string) => void;
  onChangeOption2: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({
  disableInput = true,
  defaultCurrencieOption1,
  defaultCurrencieOption2,
  supportedCurrenciesOptions,
  onSearchIconClick,
  onChangeAmount,
  onChangeOption1,
  onChangeOption2,
}) => {
  const [searchAmount, setSearchAmount] = useState<string>('');
  const { Option } = Select;

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchAmount(value);
    onChangeAmount(value);
  };
  return (
    <>
      {!disableInput && (
        <Col sm={{ span: 4 }} xs={24}>
          <Input
            type='number'
            value={searchAmount}
            onChange={handleChangeAmount}
            placeholder='Amount'
          />
        </Col>
      )}

      <Col sm={4} xs={24}>
        <Input.Group compact>
          <Select
            style={{ width: '100%' }}
            defaultValue={defaultCurrencieOption1}
            onChange={(value: string) => onChangeOption1(value)}
          >
            {buildSuportedCurrencies(supportedCurrenciesOptions)
              .filter(
                (currencie) =>
                  Object.keys(currencie).toString() === defaultCurrencieOption1
              )
              .map((currencie, i) => (
                <Option key={i} value={`${Object.keys(currencie)}`}>{`${Object.keys(
                  currencie
                )} - ${Object.values(currencie)}`}</Option>
              ))}
          </Select>
        </Input.Group>
      </Col>

      <Col sm={4} xs={24}>
        <Input.Group compact>
          <Select
            style={{ width: '100%' }}
            defaultValue={defaultCurrencieOption2}
            onChange={(value: string) => onChangeOption2(value)}
          >
            {buildSuportedCurrencies(supportedCurrenciesOptions).map((currencie, i) => (
              <Option key={i} value={`${Object.keys(currencie)}`}>{`${Object.keys(
                currencie
              )} - ${Object.values(currencie)}`}</Option>
            ))}
          </Select>
        </Input.Group>
      </Col>

      {!disableInput && (
        <Col sm={4} xs={24}>
          <SearchOutlined
            onClick={() => onSearchIconClick(searchAmount)}
            style={{ fontSize: '20px' }}
          />
        </Col>
      )}
    </>
  );
};

export { Search };
