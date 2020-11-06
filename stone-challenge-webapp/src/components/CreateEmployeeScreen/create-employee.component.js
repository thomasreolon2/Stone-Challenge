import React, { Component } from "react";
import axios from "axios";
import "./create-employee.css";
import Art from "../../imgs/art3.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      employee_name: "",
      age: 0,
      role: "",
    };
  }

  onChangeEmployeeName(e) {
    this.setState({
      employee_name: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const employee = {
      employee_name: this.state.employee_name,
      age: this.state.age,
      role: this.state.role,
    };

    console.log(employee);

    axios
      .post("http://localhost:4000/employees/add", employee)
      .then((res) => {
        this.createdUserNotify();
      })
      .catch((err) => {});

    this.setState({
      employee: "",
    });
  }

  createdUserNotify() {
    toast("Usuario Cadastrado!", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    setTimeout(function () {
      window.location = "/create";
    }, 3000);
  }

  render() {
    return (
      <div>
        <ToastContainer draggable={false} transition={Bounce} />
        <div className="customCard">
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <h3 style={{ marginLeft: 25, marginTop: 30 }}>
              Criar Funcionário Stone
            </h3>
            <img class="Art" resizeMode="contain" src={Art} alt="Logo" />
          </div>
          <form onSubmit={this.onSubmit}>
            <div
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <div className="form-group">
                <label style={{ marginLeft: 20 }}>Funcionário: </label>
                <input
                  type="text"
                  required
                  className="field"
                  value={this.state.employee}
                  onChange={this.onChangeEmployeeName}
                />
              </div>

              <div className="form-group">
                <label style={{ marginRight: 20 }}>Idade: </label>
                <input
                  type="text"
                  required
                  className="field"
                  value={this.state.age}
                  onChange={this.onChangeAge}
                />
              </div>
            </div>
            <div className="form-group">
              <label style={{ marginLeft: 20 }}>Cargo: </label>
              <select
                ref="userInput"
                required
                className="selectField"
                value={this.state.role}
                onChange={this.onChangeRole.bind(this)}
              >
                <option></option>
                <option>Desenvolvedor</option>
                <option>Técnico</option>
                <option>Marketing</option>
                <option>Vendedor</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Criar Funcionário Stone"
                className="buttonSubmit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
