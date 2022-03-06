import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routes } from './routes/routes.config';

const App: React.FC = () => (
  <Suspense fallback={null}>
    <Router>
      <Routes>
        {routes.map((routeProps, i) => (
          <Route key={i} path={routeProps.path} element={<routeProps.element />} />
        ))}
      </Routes>
    </Router>
  </Suspense>
);

export { App };
