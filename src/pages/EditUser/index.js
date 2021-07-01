import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useStyles from "./style";
const EditUsers = (props) => {
  const [user, setUser] = useState({
    avatar: "",
    email: "",
    first_name: "",
    last_name: "",
  });
  const classes = useStyles();
  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: `https://reqres.in/api/users/${props.match.params.id}`,
      })
      .then(function (response) {
        setUser({
          avatar: response.data.data.avatar,
          email: response.data.data.email,
          first_name: response.data.data.first_name,
          last_name: response.data.data.last_name,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  var options = {
    method: "PUT",
    url: "https://reqres.in/api/users/1",
    headers: { "Content-Type": "application/json" },
    data: { name: "morpheus", job: "zion resident" },
  };

  return (
    <div className={classes.main}>
      <div>
        <img src={user.avatar} />
        <input value={user.email} />
        <input
          onChange={(e) => {
            setUser({
              ...user,
              first_name: e.target.value,
            });
          }}
          value={user.first_name}
        />
        <input
          onChange={(e) => {
            setUser({
              ...user,
              last_name: e.target.value,
            });
          }}
          value={user.last_name}
        />
        <button
          onClick={() => {
            axios
              .request({
                method: "PUT",
                url: "https://reqres.in/api/users/1",
                headers: { "Content-Type": "application/json" },
                data: {
                  name: user.first_name + user.last_name,
                  job: "zion resident",
                },
              })
              .then(function (response) {
                console.log(response.data);
              })
              .catch(function (error) {
                console.error(error);
              });
          }}
        >
          Salvar
        </button>
      </div>
    </div>
  );
};
export default EditUsers;
