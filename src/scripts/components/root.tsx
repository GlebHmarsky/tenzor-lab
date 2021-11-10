import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Profiles from '../features/page-profiles';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Navigate to="/profiles" />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="404" element={<>{`404 Страница не найдена :(`}</>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
