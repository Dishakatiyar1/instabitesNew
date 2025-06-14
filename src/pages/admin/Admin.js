import React from "react";
import "./admin.css";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteUser } from "../../redux/slices/userslice";
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
  const dispatch = useDispatch();

  const register_data = useSelector((state) => state.userslice.userdata);

  return register_data?.length === 0 ? (
    <h1 className="datanot-found">No Userdata found</h1>
  ) : (
    <div className="container">
      <table className="admin-table">
        <thead className="admin-thead">
          <tr>
            <th className="admin-th">No.</th>
            <th className="admin-th">Name</th>
            <th className="admin-th">Email</th>
            <th className="admin-th"></th>
          </tr>
        </thead>
        <tbody className="admin-tbody" data-testid="user-login-list">
          {register_data?.map((user, index) => {
            return (
              <tr key={user?.id}>
                <td className="admin-td">{index + 1}</td>
                <td className="admin-td">{user?.name}</td>
                <td className="admin-td">{user?.email}</td>
                <td className="admin-td">
                  <DeleteOutlined
                    className="delete-user"
                    data-testid="delete-user-btn"
                    onClick={() => dispatch(deleteUser(user))}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
