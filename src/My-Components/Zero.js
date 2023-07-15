import React, { useState, useEffect } from "react";

const Zero = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text = "Dear Learner, Best of luck in your programing journery !";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setDisplayText("");
        currentIndex = 0;
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img
        src="https://images.theconversation.com/files/490334/original/file-20221018-4769-ep7hqv.gif?ixlib=rb-1.1.0&rect=0%2C29%2C1797%2C898&q=45&auto=format&w=668&h=324&fit=crop"
        alt="this is indtrail properties"
        style={{ width: '100%' }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-100%, -60%)', textAlign: 'center' }}>
        {/* <h2 style={{ color: '#fff' }}><i>Dear Learners,</i></h2> */}
           <p className="autowrite-text" style={{ color: '#fff' }}>&nbsp;{displayText}</p>
      </div>
    </div>
  );
};

export default Zero;
