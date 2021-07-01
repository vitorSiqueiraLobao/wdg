import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useStyles from "./style";
const Users = () => {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(0);
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const [usersList, setUsersList] = useState({
    data: [],
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
  });
  const changeUsers = (param) => {
    if (usersList.total_pages >= usersList.page + param) {
      axios
        .request({
          method: "GET",
          url: "https://reqres.in/api/users",
          params: { page: usersList.page + param },
        })
        .then((response) => {
          setUsersList({
            data: response.data.data,
            page: response.data.page,
            per_page: response.data.per_page,
            total: response.data.total,
            total_pages: response.data.total_pages,
          });
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };
  const handleDelete = () => {
    axios
      .request({
        method: "DELETE",
        url: `https://reqres.in/api/users/${userId}`,
      })
      .then((response) => {
        setOpen(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const deleteUser = (id) => {
    setOpen(true);
    setUserId(id);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .request({
        method: "GET",
        url: "https://reqres.in/api/users",
        params: { page: "1" },
      })
      .then((response) => {
        console.log(response.data);
        setUsersList({
          data: response.data.data,
          page: response.data.page,
          per_page: response.data.per_page,
          total: response.data.total,
          total_pages: response.data.total_pages,
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.usersList}>
        <Dialog
          open={open}
          onClose={() => {}}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className={classes.dialog}>
            Confirmar
            <div>
              <button onClick={() => setOpen(false)}>Cancelar</button>
              <button onClick={() => handleDelete()}>Deletar</button>
            </div>
          </div>
        </Dialog>
        <div>
          {!loading &&
            usersList.data.map((a) => {
              return <img src={a.avatar} />;
            })}
        </div>
        <div>
          {!loading &&
            usersList.data.map((a) => {
              return <p>{a.first_name}</p>;
            })}
        </div>
        <div>
          {!loading &&
            usersList.data.map((a) => {
              return <p>{a.last_name}</p>;
            })}
        </div>
        <div>
          {!loading &&
            usersList.data.map((a) => {
              return <p>{a.email}</p>;
            })}
        </div>
        <div>
          {!loading &&
            usersList.data.map((a) => {
              return (
                <>
                  <p
                    onClick={() => {
                      deleteUser(a.id);
                    }}
                  >
                    Deletar
                  </p>
                  <p
                    onClick={() => {
                      history.push({
                        pathname: `/users/${a.id}`,
                        state: a,
                      });
                    }}
                  >
                    Editar
                  </p>
                </>
              );
            })}
        </div>
      </div>

      <div className="buttons">
        <button onClick={() => changeUsers(-1)}>Anterior</button>
        <button onClick={() => changeUsers(1)}>Próximo</button>
      </div>
    </div>
  );
};
export default Users;
