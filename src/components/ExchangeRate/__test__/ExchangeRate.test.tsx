import { render, screen } from '@testing-library/react';

import { ExchangeRate } from '../ExchangeRate';

describe('<ExchangeRate />', () => {
  const props = {
    currency: 'EUR',
    totalAmount: '1',
    currentExchangeRate: '1.09',
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

  it('shound render without crashing', () => {
    render(<ExchangeRate {...props} />);

    const totalAmountText = screen.getByText(/total amount in eur/i);
    const currencyExchangeRateText = screen.getByText(/currency exchange rate/i);

    expect(totalAmountText).toBeInTheDocument();
    expect(currencyExchangeRateText).toBeInTheDocument();
  });
});
