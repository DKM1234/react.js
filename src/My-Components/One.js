import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BsTrash, BsPencil } from "react-icons/bs";

function One() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://personal-api-my41.vercel.app/api/users")
        .then((response) => response.json())
        .then((data) => {
          const dataArray = Object.values(data);
          const updatedData = dataArray.map((item) => ({
            ...item,
            id: item._id,
          }));
          setTableData(updatedData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    }, 100);
  };

  const editRowData = (id) => {
    const rowToEdit = tableData.find((row) => row.id === id);
    if (rowToEdit) {
      const editedData = {
        name: prompt("Update Name:", rowToEdit.name),
        email: prompt("Update Email:", rowToEdit.email),
        message: prompt("Update Message:", rowToEdit.message),
      };
      if (
        editedData.name !== null &&
        editedData.email !== null &&
        editedData.message !== null
      ) {
        fetch(`https://personal-api-my41.vercel.app/api/users/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedData),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Data updated successfully.");
              const updatedData = tableData.map((row) =>
                row.id === id ? { ...row, ...editedData } : row
              );
              setTableData(updatedData);
            } else {
              throw new Error("Error:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  };

  const deleteRow = (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this row?"
    );
    if (shouldDelete) {
      fetch(`https://personal-api-my41.vercel.app/api/users/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            // console.log("Row deleted successfully.");
            const updatedData = tableData.filter((row) => row.id !== id);
            setTableData(updatedData);
          } else {
            throw new Error("Error:", response.status);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div>
      {tableData.length === 0 ? (
        <>
          <Button variant="primary" onClick={fetchData} disabled={loading}>
            {loading ? "Loading . . ." : "Refresh Data"}
          </Button>
          <h6 style={{ color: "green" }} className="mt-5">
            No Data Available
          </h6>
          <h5 style={{ color: "blue" }} className="mt-5">
            Please add some Data and click Refresh Data
          </h5>
        </>
      ) : (
        <div className="table-responsive">
          <Table
            striped
            bordered
            hover
            className="container my-4 border border-primary"
          >
            <thead>
              <tr>
                <th colSpan="5" className="text-center">
                  <Button
                    variant="primary"
                    onClick={fetchData}
                    disabled={loading}
                  >
                    {loading ? "Loading . . ." : "Refresh Data"}
                  </Button>
                </th>
              </tr>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.message}</td>
                  <td>
                    <Button variant="link" onClick={() => deleteRow(row.id)}>
                      <BsTrash style={{ color: "red" }} />
                    </Button>
                    <Button variant="link" onClick={() => editRowData(row.id)}>
                      <BsPencil style={{ color: "blue" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default One;
