import { NextPage } from "next";
import MainLayout from "../views/layouts/mainLayout";
import AddUserTemplate from "../views/templates/addUserTemplate";
import AdminTemplate from "../views/templates/adminTemplate";
import UserTemplate from "../views/templates/userTemplate";

const Message: NextPage = () => {
  return (
    <MainLayout>
      <>
        <h1>AddUser</h1>
        <AddUserTemplate />
        <hr />

        <h1>Admin</h1>
        <AdminTemplate />
        <hr />

        <h1>User</h1>
        <UserTemplate />
      </>
    </MainLayout>
  );
};

export default Message;
