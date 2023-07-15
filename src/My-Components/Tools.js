import React from "react";
import { Button, Table } from "react-bootstrap";

function Tools() {
  return (
    <div className="container mt-3 mb-4">
      <h5 style={{color: 'blue'}} className="mt-0 mb-0">This is an important tool for starting your learning</h5>
      <Table
        responsive
        bordered
        className=""
        style={{ border: "1px solid blue" }}
      >
        <thead>
          <tr>
            <th style={{ backgroundColor: "green", color: "#fff" }}>S.No</th>
            <th style={{ backgroundColor: "green", color: "#fff" }}>
              Tool & App Name
            </th>
            <th style={{ backgroundColor: "green", color: "#fff" }}>
              Website Link
            </th>
            <th style={{ backgroundColor: "green", color: "#fff" }}>
              Video Link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Crome browser</td>
            <td>
              <a
                href="https://www.google.com/chrome/?brand=YTUH&gclid=CjwKCAjw2K6lBhBXEiwA5RjtCZ3UTQ_8aBZGatqkv92guB9opaGkG2bH_8Y21HzH7Vl1mv-NszCrehoC6LcQAvD_BwE&gclsrc=aw.ds"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                Click to Visit
              </a>
            </td>
            <td>
              <a
                href="https://www.youtube.com/watch?v=LnXM53NTBoo"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                View Video
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>V S Code</td>
            <td>
              <a
                href="https://code.visualstudio.com/Download"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                Click to Visit
              </a>
            </td>
            <td>
            <a
                href="https://www.youtube.com/watch?v=bN6DE-4uFNo&t=52s"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                View Video
              </a>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Git</td>
            <td>
              <a
                href="https://git-scm.com/download/win"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                Click to Visit
              </a>
            </td>
            <td>
            <a
                href="https://www.youtube.com/watch?v=cJTXh7g-uCM"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                View Video
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Node</td>
            <td>
              <a
                href="https://nodejs.org/en/download"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                Click to Visit
              </a>
            </td>
            <td>
            <a
                href="https://www.youtube.com/watch?v=__7eOCxJyow"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                View Video
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Postman</td>
            <td>
              <a
                href="https://www.postman.com/downloads/"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                Click to Visit
              </a>
            </td>
            <td>
            <a
                href="https://www.youtube.com/watch?v=5Fk6ef_mj9w"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                View Video
              </a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Github</td>
            <td>
              <a
                href="https://github.com/"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                Click to Visit
              </a>
            </td>
            <td>
            <a
                href="https://www.youtube.com/watch?v=kJaIYx5tHOI"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                View Video
              </a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Any Desk</td>
            <td>
              <a
                href="https://anydesk.com/en/downloads/windows"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                Click to Visit
              </a>
            </td>
            <td>
            <a
                href="https://www.youtube.com/watch?v=dP3s558iw2g"
                target="__blank"
                style={{ textDecoration: "none" }}
              >
                View Video
              </a>
            </td>
          </tr>
          
          <tr>
            <td>8</td>
            <td>----</td>
            <td style={{color: 'blue'}}>----</td>
            <td style={{color: 'blue'}}>----</td>
          </tr>

          <tr>
            <td>9</td>
            <td>----</td>
            <td style={{color: 'blue'}}>----</td>
            <td style={{color: 'blue'}}>----</td>
          </tr>
          
        </tbody>
      </Table>
      <div className='mt-2 mb-2'>
      <a  
      href="https://liveweave.com/"
      target="__blank"
      >
      <Button>Test Live Demo</Button>
    </a>

      </div>
    </div>
  );
}

export default Tools;
