import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./create-activity.css";
import Art from "../../imgs/art1.png";

function Anim() {
  return (
    <div
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <h3 style={{ marginLeft: 25, marginTop: 30 }}>Criar Atividade Stone</h3>
      <img class="Art" resizeMode="contain" src={Art} alt="Logo" />
    </div>
  );
}

export default class CreateActivity extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeActivityDesc = this.onChangeActivityDesc.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      employee_name: "",
      activity_desc: "",
      weight: 0,
      date: new Date(),
      age: 0,
      role: "",
      employees: [],
      employees_obj: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/employees/")
      .then((res) => {
        console.log(res.data);
        this.setState({
          employees: res.data.map((employee) => employee.employee_name),
          employee_name: res.data[0].employee_name,
          employees_obj: res.data,
          role: res.data[0].role,
        });
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeEmployeeName(e) {
    const object = this.state.employees_obj.filter(
      (item) => item.employee_name === e.target.value
    );

    this.setState({
      employee_name: e.target.value,
      age: object[0].age,
      role: object[0].role,
    });
  }

  onChangeActivityDesc(e) {
    this.setState({
      activity_desc: e.target.value,
    });
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const activities = {
      employee_name: this.state.employee_name,
      activity_desc: this.state.activity_desc,
      weight: this.state.weight,
      date: this.state.date,
      age: this.state.age,
      role: this.state.role,
    };

    console.log(activities);
    axios
      .post("http://localhost:4000/activities/add", activities)
      .then((res) => (window.location = "/"));
  }

  render() {
    const options = this.state.employees.map((employee) => (
      <option className="field" key={employee} value={employee}>
        {employee}
      </option>
    ));

    return (
      <div className="customCard">
        <Anim />

        <form onSubmit={this.onSubmit}>
          <div
            style={{ marginLeft: 10, marginRight: 10 }}
            className="form-group"
          >
            <label style={{ marginLeft: 20 }}>Funcionário: </label>

            <select
              ref="userInput"
              required
              className="selectField"
              defaultValue="."
              value={this.state.employee_name}
              onChange={this.onChangeEmployeeName.bind(this)}
            >
              {options}
            </select>
          </div>

          <div>
            <label style={{ marginLeft: 30 }}>Descrição da Atividade</label>
            <textarea
              type="text"
              required
              className="fieldDescription"
              value={this.state.activity_desc}
              onChange={this.onChangeActivityDesc}
            />
          </div>
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <div
              style={{ marginLeft: 25, marginTop: 25 }}
              className="form-group"
            >
              <label>Peso: </label>
              <input
                type="number"
                required
                className="fieldNumber"
                value={this.state.weight}
                onChange={this.onChangeWeight}
              />
            </div>
            <div style={{ marginRight: 10 }} className="form-group">
              <label>Término em: </label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Criar Atividade Stone"
              className="buttonSubmit"
            />
          </div>
        </form>
      </div>
    );
  }
}
