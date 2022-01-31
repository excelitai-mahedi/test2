import React, { useEffect, useState } from "react";
import classes from "./History.module.css";

const History = () => {
  const [History, SetHistory] = useState([]);

  useEffect(() => {
    let retrivetodos = JSON.parse(localStorage.getItem("todos"));
    SetHistory(retrivetodos);
  }, []);

  return (
    <div className={[classes.historyContainer]}>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>TODO</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {History.length ? (
              History?.map((el) => (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>
                    {el.status ? (
                      <button disabled className="btn btn-success">
                        Complete
                      </button>
                    ) : (
                      <button disabled className="btn btn-primary">
                        On Process
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>NO DATA</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
