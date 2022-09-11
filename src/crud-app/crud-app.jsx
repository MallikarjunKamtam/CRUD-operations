import React from "react";
import {
  crudOpsState,
  getEmployeesAsync,
  postEmployeesAsync,
} from "./crud-app.slice";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

function CrudApp() {
  const dispatch = useDispatch();
  const [currentOperation, setCurrentOperation] = useState("Get");
  const [postData, setPostData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const employeesData = useSelector(crudOpsState).employees;
  const { employees } = useSelector(crudOpsState).employees;

  const dispatchEmployees = () => {
    dispatch(getEmployeesAsync());
  };

  useEffect(() => {
    if (employeesData.status !== "fulfilled") {
      dispatchEmployees();
    }
  }, []);

  const heading = () => {
    return (
      <>
        <div className="w-full m-5 bg-stone text-xl text-cyan">
          CRUD Operations
        </div>
      </>
    );
  };

  const card = (detail) => {
    return (
      <>
        {
          <label className="text-amber bg-stone text-lg font-bold">
            {detail.first_name}
            {">>>>>>"} {detail.email}
          </label>
        }
      </>
    );
  };

  const employeesContent = () => {
    return employees.map((x) => <div key={x.id}>{card(x)}</div>);
  };

  const operations = ["Get", "Post", "Delete", "Put"];

  console.log(postData, "postData");

  const initialForm = () => {
    return (
      <div className="flex flex-col items-center justify-center border-4 p-4 w-auto  gap-4">
        <input
          onChange={(e) => {
            setPostData({ ...postData, first_name: e.target.value });
          }}
          name="firstName"
          className="w-[226px] h-[34px] border-2 rounded-lg text-xs items-center justify-center"
          placeholder="First name"
          type="text"
        />
        <input
          onChange={(e) => {
            setPostData({ ...postData, last_name: e.target.value });
          }}
          name="lastName"
          className="w-[226px] h-[34px] border-2 rounded-lg text-xs items-center justify-center"
          placeholder="Last name"
          type="text"
        />
        <input
          onChange={(e) => {
            setPostData({ ...postData, email: e.target.value });
          }}
          name="email"
          className="w-[226px] h-[34px] border-2 rounded-lg text-xs items-center justify-center"
          placeholder="Email"
          type="email"
        />
        <button
          onClick={() => {
            dispatch(postEmployeesAsync(postData));
          }}
          className="border-4 rounded-xl p-3"
        >
          Submit
        </button>
      </div>
    );
  };

  return (
    <div>
      {heading()}
      <div className="flex gap-1 items-center justify-center mb-5">
        {operations.map((op) => (
          <button
            key={op}
            value={op}
            onClick={(event) => {
              setCurrentOperation(event.target.value);
            }}
            className="bg-red h-[50px] w-[100px] rounded border-4"
          >
            {op}
          </button>
        ))}
      </div>
      {employees &&
        employees.length &&
        currentOperation === "Get" &&
        employeesContent()}
      {currentOperation === "Post" && initialForm()}
    </div>
  );
}

export default CrudApp;
