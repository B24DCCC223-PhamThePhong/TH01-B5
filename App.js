import React, { useState, useEffect } from "react";
import "./App.css";

function TimeDisplay({ time }) {
  return <h2>{time}</h2>;
}

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // cleanup khi component unmount
  }, []);

  return (
    <div className="clock-container">
      <h3>Bài 5: Đồng hồ</h3>
      <p><b>Tạo component hiển thị giờ hiện tại. Cập nhật mỗi giây (dùng setInterval).  
      Tách phần hiển thị thời gian thành component con.</b></p>
      <TimeDisplay time={time} />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Clock />
    </div>
  );
}

export default App;
