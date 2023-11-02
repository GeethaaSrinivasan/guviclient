//import { size } from "lodash";
// import React from "react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./CSS/Registration.css";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const LoginNavigation = () => {
    if (password === Confirmpassword) {
      fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email: email, name: name, password: password }),
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      })
        .then((response) => response.json())

        .catch((err) => {
          console.log(err.message);
        });
      alert("Registered Successfully");
      navigate("/Login");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "grey" }}>
        <form className="Registration" onSubmit={handleSubmit(LoginNavigation)}>
          <label className="title" style={{ textAlign: "center" }}>
            Registration Form
          </label>
          <label>Name :</label>
          <input
            type="text"
            {...register("name")}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label>Email :</label>
          <input
            type="email"
            {...register("email", { required: true })}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors.email && (
            <span style={{ color: "red" }}>*Email* is mandatory </span>
          )}
          <label>Password :</label>
          <input
            type="password"
            {...register("password", { required: true })}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errors.password && (
            <span style={{ color: "red" }}>*Password* is mandatory </span>
          )}

          <label>ConfirmPassword :</label>
          <input
            type="password"
            {...register("Confirmpassword", {
              validate: (value) => value === getValues("password"),
            })}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          {errors.Confirmpassword &&
            errors.Confirmpassword.type === "validate" && (
              <div>:Passwords do not match</div>
            )}
          <input
            className="Submit"
            style={{ backgroundColor: "#a1eafb" }}
            type={"submit"}
          />
        </form>
      </div>
    </>
  );
}

export default Registration;
