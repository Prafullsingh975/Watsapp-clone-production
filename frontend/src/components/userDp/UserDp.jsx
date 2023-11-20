import React from "react";
import "./style.scss";
import { UserInfoState } from "../../context/UserInfoContext";

const UserDp = ({ dpImg }) => {
  const { userInfo } = UserInfoState();
  return (
    <>
      <div className="userDp">
        <img src={`/api/user/show-dp/${dpImg}`} alt="UserDP" />
      </div>
    </>
  );
};

export default UserDp;
