import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { lazy } from "react";
import HomePage from "../pages/Home";

const TweetsPage = lazy(() => import("../pages/Tweets"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users-tweets" element={<TweetsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
