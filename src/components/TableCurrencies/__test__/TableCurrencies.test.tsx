import { render, screen } from '@testing-library/react';

import { TableCurrencies } from '../TableCurrencies';

import { buildTableCurrencies } from 'utils/buildTableCurrencies';

describe('<TableCurrencies />', () => {
  const rates = {
    EUR: 1,
    USD: 1.09,
    AED: 4.472405,
  };

  beforeEach(() => {
    let mock = () => {};
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: any) => {
        return {
          matches: false,
          media: query,
          onchange: null,
          addListener: mock, // deprecated
          removeListener: mock, // deprecated
          addEventListener: mock,
          removeEventListener: mock,
          dispatchEvent: mock,
        };
      },
    });
  });

  it('should render without crashing', () => {
    render(<TableCurrencies table={buildTableCurrencies(rates)} />);

    const table = screen.getByRole('table');

    expect(table).toBeInTheDocument();
  });
});
