import React, { useState, useEffect } from 'react';

const Localtime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Localtime;
