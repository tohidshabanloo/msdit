import { NextPage } from "next";
import MainLayout from "../views/layouts/mainLayout";
import DashboardTemplate from "../views/templates/dashboardTemplate";

const dashboard: NextPage = () => {
  return (
    <MainLayout>
      <DashboardTemplate />
    </MainLayout>
  );
};

export default dashboard;
