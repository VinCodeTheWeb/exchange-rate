import { render, screen } from '@testing-library/react';
import moment from 'moment';

import { DateTime } from '../DateTime';

describe('<DateTime />', () => {
  const timestamp = 1646576223;
  it('shound render without crashing', () => {
    render(<DateTime timestamp={timestamp} />);

    const date = moment.unix(timestamp).format('MMMM Do YYYY, h:mm');

    const asOfText = screen.getByText(/As of/i);

    const dateText = screen.getByText(/March 6th 2022, 3:17/i);

    expect(asOfText).toBeInTheDocument();
    expect(dateText).toBeInTheDocument();

    expect(dateText).toHaveTextContent(date);
  });
});
