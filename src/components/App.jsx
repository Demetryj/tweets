import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home/Home';
import TweetsPage from '../pages/Tweets/Tweets';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users-tweets" element={<TweetsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
