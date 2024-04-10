import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
import logo from "../../assets/images/562px-Sentinels_at_the_VCT_2023_LOCKIN_São_Paulo.jpg"; //import anh vao
function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/todo");
    }, 100000000); // Thời gian chờ là 1000ms (1 giây)

    // Xóa timeout nếu component unmount trước khi timeout kết thúc
    return () => clearTimeout(timeoutId);
  }); // Chỉ gọi lại useEffect khi navigate thay đổi

  return (
    <div>
      <div>Home</div>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Color(Home);
