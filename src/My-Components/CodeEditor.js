import React from 'react';

const ImageWithContent = () => {
  return (
    <>
    <div style={{ position: 'relative', width: '100%' }}>
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        alt="Mindtrail"
        style={{ width: '100%' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        <h2 className='hide'>Html Learning</h2>
        <p className='hide'>HTML is a markup language used for structuring and presenting content on the web. It consists of elements enclosed in tags to define the structure and formatting of the content.</p>
      </div>
    </div>
     <div style={{ position: 'relative', width: '100%' }}>
     <img
       src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
       alt="Mindtrail"
       style={{ width: '100%', marginTop: '10px' }}
     />
     <div
       style={{
         position: 'absolute',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
         padding: '10px',
         color: 'white',
         borderRadius: '5px',
       }}
     >
       <h2 className='hide'>Css Learning</h2>
       <p className='hide'>CSS stands for 'Cascading Style Sheets.' It is a stylesheet language used for describing the presentation and visual appearance of a document written in HTML or XML. CSS is responsible for controlling the layout, colors, fonts, spacing, and other visual aspects of web pages.</p>
     </div>
   </div>
    <div style={{ position: 'relative', width: '100%' }}>
    <img
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
      alt="Mindtrail"
      style={{ width: '100%', marginTop: '10px'  }}
    />
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        color: 'white',
        borderRadius: '5px',
      }}
    >
      <h2 className='hide'>Javascript</h2>
      <p className='hide'>JS stands for 'JavaScript.' It is a high-level programming language primarily used for web development but also applicable to other areas such as server-side scripting, game development, and desktop applications.</p>
    </div>
  </div>
  </>
  );
};

export default ImageWithContent;

