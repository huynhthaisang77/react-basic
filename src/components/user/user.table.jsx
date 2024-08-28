import { Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../services/api.service";
import { useState, useEffect } from "react";

const UserTable = () => {
  const [dataUsers, setDataUser] = useState([]);

  useEffect(() => {
    console.log(">>> run useEffect 111");
    loadUser();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUser(res.data);
  };
  // loadUser();

  return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />;
};
export default UserTable;
