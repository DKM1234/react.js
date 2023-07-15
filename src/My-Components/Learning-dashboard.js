// import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Nav from 'react-bootstrap/Nav';
// import Table from 'react-bootstrap/Table';
// import { Container } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import '../App.css';

// function VideoPlayer({ videoSrc, downloadLink }) {
//   const [videoVisible, setVideoVisible] = useState(false);

//   const handleVideoClick = () => {
//     setVideoVisible(true);
//   };

//   const handleCloseClick = () => {
//     setVideoVisible(false);
//   };

//   return (
//     <Container>
//       {videoVisible ? (
//         <div className="video-container">
//           <video className="centered-video" controls>
//             <source src={videoSrc} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div className="close-icon" onClick={handleCloseClick}>
//             <FontAwesomeIcon icon={faTimes} style={{ color: 'red', position: 'absolute', cursor: 'pointer' }} />
//           </div>
//         </div>
//       ) : (
//         <button onClick={handleVideoClick} className="video-link" style={{ textDecoration: 'none', border: 'none', background: 'none', cursor: 'pointer', color: 'blue' }}>
//           Click to view
//         </button>
//       )}
//     </Container>
//   );
// }

// function Learningdashboard() {
//   const [activeTab, setActiveTab] = useState('html');

//   const handleTabChange = (eventKey) => {
//     setActiveTab(eventKey);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'html':
//         return (
//           <div className='container'>
//             <h2 style={{ color: 'blue' }}>HTML Learning</h2>
//             <h5 style={{ color: 'green' }}>HTML stands for HyperText Markup Language</h5>
//             <Table className='container my-4 border border-primary'>
//               <thead>
//                 <tr>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>S.No</th>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Topic Name</th>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>View Link</th>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Download Link</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* ..........one........ */}
//                 <tr>
//                   <td>1</td>
//                   <td>Introduction</td>
//                   <td>
//                     <VideoPlayer
//                       videoSrc="https://drive.google.com/uc?export=download&id=1WywwMhtHKR_CZ4w5lUf8kK57k5_OCVxP"
//                     />
//                   </td>
//                   <td>
//                     <a href='https://drive.google.com/uc?export=download&id=1WywwMhtHKR_CZ4w5lUf8kK57k5_OCVxP' style={{ textDecoration: 'none' }} download>Download</a>
//                   </td>
//                 </tr>

//                 {/* .......two........ */}
//                 <tr>
//                   <td>2</td>
//                   <td>Understandanding of technologies</td>
//                   <td>
//                     <VideoPlayer
//                       videoSrc="https://drive.google.com/uc?export=download&id=1Tcx6jodd_bdzJRY9D1b0byWKpfiSc66P"
//                     />
//                   </td>
//                   <td>
//                     <a href='https://drive.google.com/uc?export=download&id=1Tcx6jodd_bdzJRY9D1b0byWKpfiSc66P' style={{ textDecoration: 'none' }} download>Download</a>
//                   </td>
//                 </tr>
//                 {/* Add more videos here */}
//               </tbody>
//             </Table>
//           </div>
//         );
//       case 'css':
//         return (
//           <div className='container'>
//             <h2 style={{ color: 'blue' }}>CSS Learning</h2>
//             <h5 style={{ color: 'green' }}>CSS stands for Cascading Style Sheets and is a styling language used to describe the presentation and layout of HTML documents.</h5>
//             <Table className='container my-4 border border-primary'>
//               <thead>
//                 <tr>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>S.No</th>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Topic Name</th>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>View Link</th>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Download Link</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Add CSS content here */}
//               </tbody>
//             </Table>
//           </div>
//         );
//       case 'javascript':
//         return (
//           <div className='container'>
//             <h2 style={{ color: 'blue' }}>JavaScript Learning</h2>
//             <h5 style={{ color: 'green' }}>JavaScript is a high-level programming language that enables interactive and dynamic functionality on web pages.</h5>
//             <Table className='container my-4 border border-primary'>
//               <thead>
//                 <tr>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>S.No</th>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Topic Name</th>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>View Link</th>
//                   <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Download Link</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Add JavaScript content here */}
//               </tbody>
//             </Table>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Card>
//       <Card.Header>
//         <Nav variant="tabs" defaultActiveKey="html" onSelect={handleTabChange}>
//           <Nav.Item>
//             <Nav.Link eventKey="html">Learn HTML</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="css">Learn CSS</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="javascript">Learn JavaScript</Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Card.Header>
//       <Card.Body>
//         <Card.Title style={{ color: 'green' }}>Mindtrail Technologies Pvt Ltd</Card.Title>
//         <Card.Text>
//           {renderContent()}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Learningdashboard;


import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function VideoPlayer({ videoSrc, downloadLink }) {
  const [videoVisible, setVideoVisible] = useState(false);

  const handleVideoClick = () => {
    setVideoVisible(true);
  };

  const handleCloseClick = () => {
    setVideoVisible(false);
  };

  return (
    <Container>
      {videoVisible ? (
        <div className="video-container">
          <video className="centered-video" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="close-icon" onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faTimes} style={{ color: 'red', position: 'absolute', cursor: 'pointer' }} />
          </div>
        </div>
      ) : (
        <button onClick={handleVideoClick} className="video-link" style={{ textDecoration: 'none', border: 'none', background: 'none', cursor: 'pointer', color: 'blue' }}>
          Click to view
        </button>
      )}
    </Container>
  );
}

function Learningdashboard() {
  const [activeTab, setActiveTab] = useState('html');

  const handleTabChange = (eventKey) => {
    setActiveTab(eventKey);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'html':
        return (
          <div className='container'>
            <h2 style={{ color: 'blue' }}>HTML Learning</h2>
            <h5 style={{ color: 'green' }}>HTML stands for HyperText Markup Language</h5>
            <Table className='container my-4 border border-primary'>
              <thead>
                <tr>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>S.No</th>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Topic Name</th>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>View Link</th>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Download Link</th>
                </tr>
              </thead>
              <tbody>
                {/* ..........one........ */}
                <tr>
                  <td>1</td>
                  <td>Introduction</td>
                  <td>
                    <VideoPlayer
                      videoSrc="https://drive.google.com/uc?export=download&id=1WywwMhtHKR_CZ4w5lUf8kK57k5_OCVxP"
                    />
                  </td>
                  <td>
                    <a href='https://drive.google.com/uc?export=download&id=1WywwMhtHKR_CZ4w5lUf8kK57k5_OCVxP' style={{ textDecoration: 'none' }} download>Download</a>
                  </td>
                </tr>

                {/* .......two........ */}
                <tr>
                  <td>2</td>
                  <td>Understanding of technologies</td>
                  <td>
                    <VideoPlayer
                      videoSrc="https://drive.google.com/uc?export=download&id=1Tcx6jodd_bdzJRY9D1b0byWKpfiSc66P"
                    />
                  </td>
                  <td>
                    <a href='https://drive.google.com/uc?export=download&id=1Tcx6jodd_bdzJRY9D1b0byWKpfiSc66P' style={{ textDecoration: 'none' }} download>Download</a>
                  </td>
                </tr>
                {/* Add more videos here */}
              </tbody>
            </Table>
          </div>
        );
      case 'css':
        return (
          <div className='container'>
            <h2 style={{ color: 'blue' }}>CSS Learning</h2>
            <h5 style={{ color: 'green' }}>CSS stands for Cascading Style Sheets and is a styling language used to describe the presentation and layout of HTML documents.</h5>
            <Table className='container my-4 border border-primary'>
              <thead>
                <tr>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>S.No</th>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Topic Name</th>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>View Link</th>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Download Link</th>
                </tr>
              </thead>
              <tbody>
                {/* Add CSS content here */}
              </tbody>
            </Table>
          </div>
        );
      case 'javascript':
        return (
          <div className='container'>
            <h2 style={{ color: 'blue' }}>JavaScript Learning</h2>
            <h5 style={{ color: 'green' }}>JavaScript is a high-level programming language that enables interactive and dynamic functionality on web pages.</h5>
            <Table className='container my-4 border border-primary'>
              <thead>
                <tr>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>S.No</th>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Topic Name</th>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>View Link</th>
                  <th style={{ backgroundColor: '#0ea90e', color: '#fff' }}>Download Link</th>
                </tr>
              </thead>
              <tbody>
                {/* Add JavaScript content here */}
              </tbody>
            </Table>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="html" onSelect={handleTabChange}>
            <Nav.Item>
              <Nav.Link eventKey="html">Learn HTML</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="css">Learn CSS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="javascript">Learn JavaScript</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title style={{ color: 'green' }}>Mindtrail Technologies Pvt Ltd</Card.Title>
          {renderContent()}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Learningdashboard;
