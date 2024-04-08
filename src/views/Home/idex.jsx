import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/todo");
    }, 3000); // Thời gian chờ là 1000ms (1 giây)

    // Xóa timeout nếu component unmount trước khi timeout kết thúc
    return () => clearTimeout(timeoutId);
  }, [navigate]); // Chỉ gọi lại useEffect khi navigate thay đổi

  return <div>Home</div>;
}

export default Color(Home);
