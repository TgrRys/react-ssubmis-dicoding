import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingBar from "react-redux-loading-bar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Navigation from "./components/organisms/Navigation";
import { asyncPreloadProcess } from "./redux/isPreload/action";
import { asyncUnsetAuthUser } from "./redux/auth/action";
import LeaderboardPage from "./pages/LeaderboardPage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  const { auth = null, isPreload = false } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => dispatch(asyncUnsetAuthUser());

  if (isPreload) {
    return null;
  }

  return (
    <>
      <header>
        <Navigation authUser={auth} signOut={onSignOut} />
      </header>
      <LoadingBar />
      <main className="app-container">
        <Routes>
          <Route path="/signIn" element={<LoginPage />} />
          <Route path="/signUp" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboards" element={<LeaderboardPage />} />
          <Route path="/thread" element={<CreatePage />} />
          <Route path="/thread/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
