import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./edit-activity.css";
import Art from "../../imgs/art2.png";

export default class EditActivity extends Component {
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
      .get("http://localhost:4000/activities/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          employee_name: res.data.employee_name,
          activity_desc: res.data.activity_desc,
          weight: res.data.weight,
          date: new Date(res.data.date),
          age: res.data.age,
          role: res.data.role,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/employees/")
      .then((res) => {
        this.setState({
          employees: res.data.map((employee) => employee.employee_name),
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
      .put(
        "http://localhost:4000/activities/update/" + this.props.match.params.id,
        activities
      )
      .then((res) => (window.location = "/"));
  }

  render() {
    const options = this.state.employees.map((employee, k) => (
      <option className="field" key={k} value={employee}>
        {employee}
      </option>
    ));

    return (
      <div className="customCard">
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <h3 style={{ marginLeft: 25, marginTop: 30 }}>Editar Atividade</h3>
          <img class="Art" resizeMode="contain" src={Art} alt="Logo" />
        </div>
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
              value="Editar Atividade"
              className="buttonSubmit"
            />
          </div>
        </form>
      </div>
    );
  }
}
