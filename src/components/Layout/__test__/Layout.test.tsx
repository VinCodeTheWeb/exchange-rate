import { render, screen, waitFor } from '@testing-library/react';

import { Layout } from '../Layout';

describe('<Layout />', () => {
  it('should render <Layout /> component', async () => {
    render(<Layout />);
    const layout = screen.getByRole('banner');

    await waitFor(() => expect(layout).toBeInTheDocument());
  });

  it('should render <Menu /> component', async () => {
    render(<Layout />);
    const menu = screen.getByRole('menu');

    await waitFor(() => expect(menu).toBeInTheDocument());
  });
});
