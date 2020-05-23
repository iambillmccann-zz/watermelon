// React imports
import React from "react";
import { Redirect } from "react-router-dom";

// My imports
import AppTabs from "../layout/AppTabs";
import { SessionContext, useSession } from "../../contexts/SessionContext";

const Dashboard = () => {
  const { session } = useSession(SessionContext);
  return (
    <container>{session.email ? <AppTabs /> : <Redirect to="/" n />}</container>
  );
};

export default Dashboard;
