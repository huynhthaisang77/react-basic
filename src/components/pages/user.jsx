import UserForm from "../user/user.form";
import UserTable from "../user/user.table";
import { fetchAllUserAPI } from "../services/api.service";
import { useState, useEffect } from "react";

const UserPage = () => {
  const [dataUsers, setDataUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUser(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} />
    </div>
  );
};
export default UserPage;
