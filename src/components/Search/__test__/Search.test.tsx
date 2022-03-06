import { render, screen, fireEvent } from '@testing-library/react';

import { Search } from '../Search';

describe('<Search />', () => {
  let props = {
    defaultCurrencieOption1: 'EUR',
    defaultCurrencieOption2: 'USD',
    supportedCurrenciesOptions: {
      EUR: 'Euro',
      USD: 'United States Dollar',
      AED: 'United Arab Emirates Dirham',
    },
    onSearchIconClick: jest.fn(),
    onChangeAmount: jest.fn(),
    onChangeOption1: jest.fn(),
    onChangeOption2: jest.fn(),
  };

  it('should render Search without crashing', () => {
    render(<Search {...props} />);
    const selects = screen.getAllByRole('combobox');
    const searchIcon = screen.queryByRole('img');

    expect(selects[0] && selects[1]).toBeInTheDocument();
    expect(searchIcon).not.toBeInTheDocument();
  });

  it('should have 2 Select Input', () => {
    render(<Search {...props} />);
    const selects = screen.getAllByRole('combobox');

    expect(selects).toHaveLength(2);
  });

  it('should have EUR as default option 1', () => {
    render(<Search {...props} />);

    const option1 = screen.getByTitle(/EUR - Euro/);

    expect(option1).toHaveTextContent('EUR - Euro');
  });

  it('should have USD as default option 2', () => {
    render(<Search {...props} />);

    const option2 = screen.getByTitle(/USD - United States Dollar/);

    expect(option2).toHaveTextContent('USD - United States Dollar');
  });

  it('should have AED as default option 3', () => {
    props = {
      ...props,
      defaultCurrencieOption2: 'AED',
    };

    render(<Search {...props} />);

    const selects = screen.getAllByRole('combobox');

    fireEvent.click(selects[1]);

    const option2 = screen.getByTitle(/AED - United Arab Emirates Dirham/);

    fireEvent.click(option2);

    expect(option2).toHaveTextContent('AED - United Arab Emirates Dirham');
  });
});
