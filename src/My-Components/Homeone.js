import Accordion from "react-bootstrap/Accordion";
import '../App.css'

function AllCollapseExample() {
  return (
    <div style={{marginTop: '45px'}}>
    <Accordion className="container mt-4 mb-4">
      <Accordion.Item  className="text-render" eventKey="0">
        <h3>Introduction</h3>
        <Accordion.Header>HTML</Accordion.Header>
        <Accordion.Body>
          HTML (HyperText Markup Language) is the standard markup language used
          for creating and structuring web pages on the internet. It provides a
          set of predefined tags and attributes that define the structure,
          content, and presentation of a webpage. HTML uses a hierarchical
          structure of elements, organized in a tree-like fashion.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item  className="text-render" eventKey="1">
        <Accordion.Header>CSS</Accordion.Header>
        <Accordion.Body>
          CSS (Cascading Style Sheets) is a style sheet language used to
          describe the presentation and visual appearance of a document written
          in HTML or XML. It provides a set of rules and properties that define
          how elements within a webpage should be displayed. With CSS, web
          developers can control various aspects of the design, layout, and
          formatting of web pages. CSS allows you to specify the colors, fonts,
          sizes, margins, paddings, backgrounds, and other visual properties of
          HTML elements. It provides a way to separate the content of a webpage
          from its presentation, enabling developers to easily change the
          appearance of multiple web pages by modifying a single CSS file.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item  className="text-render" eventKey="2">
        <Accordion.Header>Javascript</Accordion.Header>
        <Accordion.Body>
          JavaScript is a high-level programming language primarily used for
          creating dynamic and interactive web content. It is one of the core
          technologies of the World Wide Web and is supported by all modern web
          browsers. JavaScript enables developers to add functionality and
          interactivity to web pages. It can be used to manipulate and modify
          the content of a webpage, respond to user actions, validate form
          inputs, create animations, and communicate with servers to retrieve
          and send data asynchronously.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default AllCollapseExample;
