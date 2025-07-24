import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { clearAuth, loadAuth, setupAuthRefresh } from "./store/authSlice";
import Router from "./router/Router";
import Layout from "./layout/Layout";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const expiresAt = useSelector((state: RootState) => state.auth.expiresAt);

  useEffect(() => {
    dispatch(loadAuth());
  }, [dispatch]);

  useEffect(() => {
    setupAuthRefresh(dispatch, expiresAt);
    if (expiresAt && expiresAt < Date.now()) {
      dispatch(clearAuth());
    }
  }, [dispatch, expiresAt]);

  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
