import React, { Component } from "react";
import axios from "axios";
import "./activities-list.css";
import Lottie from "react-lottie";
import deleteHover from "../../anims/delete.json";
import editHover from "../../anims/edit.json";
import loading from "../../anims/loading.json";

const deleteAnimOptions = {
  autoplay: true,
  animationData: deleteHover,
  loop: false,
};

const editAnimOptions = {
  autoplay: true,
  animationData: editHover,
  loop: false,
};

const loadingAnimOptions = {
  autoplay: true,
  animationData: loading,
  loop: true,
};

const LoadingSpinner = () => {
  return (
    <div>
      <Lottie
        options={loadingAnimOptions}
        height={450}
        width={450}
        speed={1.0}
      />
    </div>
  );
};

// handle change event of search input

const Activity = (props) => (
  <div className="itemCard">
    <div className="roleAndNameRow">
      <div style={{ marginTop: 6, marginLeft: 30 }}>
        <div className="role" style={{ right: 10, height: 20 }}>
          <h1 className={"roleText"} style={{ fontSize: 12, marginTop: 2 }}>
            {props.activity.role}
          </h1>
          <h1 className={"roleT"} style={{ fontSize: 12 }}>
            Idade: {props.activity.age}
          </h1>
        </div>
      </div>
      <div>
        <h1
          style={{
            fontSize: 12,
            marginLeft: 20,

            marginTop: 10,
          }}
        >
          Funcionário:
        </h1>

        <p style={{ fontSize: 22, marginLeft: 20, fontWeight: "600" }}>
          {props.activity.employee_name}
        </p>
      </div>
    </div>
    <div style={{ marginTop: 25 }}>
      <h1
        style={{
          fontSize: 12,
          marginLeft: 20,
        }}
      >
        Atividade:
      </h1>
      <h1
        style={{
          fontSize: 18,

          marginLeft: 20,
        }}
      >
        {props.activity.activity_desc}
      </h1>
    </div>
    <div className="row-actions">
      <div
        style={{
          alignSelf: "flex-end",
          width: 250,
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <h1 style={{ fontSize: 12 }}>Previsto para:</h1>
        <h1 style={{ fontSize: 14, fontWeight: "600", left: 10, bottom: 5 }}>
          {props.activity.date.substring(0, 10)}
        </h1>
        <div
          style={{
            width: 50,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <h1 style={{ fontSize: 12, bottom: 25 }}>Peso:</h1>
          <h1
            style={{
              fontSize: 14,
              fontWeight: "600",

              right: 35,
              bottom: 25,
            }}
          >
            {props.activity.weight}
          </h1>
        </div>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          onClick={() => {
            props.deleteActivity(props.activity._id);

            window.location.href = "/";
          }}
          className="optionBtns"
        >
          <Lottie
            options={deleteAnimOptions}
            height={30}
            width={30}
            speed={1.5}
          />
        </div>

        <div
          onClick={() => {
            window.location.href = "/edit/" + props.activity._id;
          }}
          className="optionBtns"
        >
          <Lottie
            options={editAnimOptions}
            height={26}
            width={26}
            speed={1.5}
          />
        </div>
      </div>
    </div>
  </div>
);

function searchingFor(search) {
  return function (x, y) {
    return (
      x.employee_name.toLowerCase().includes(search.toLowerCase()) ||
      x.role.toLowerCase().includes(search.toLowerCase()) ||
      x.activity_desc.toLowerCase().includes(search.toLowerCase()) ||
      x.age.toString().toLowerCase().includes(search.toLowerCase()) ||
      !search
    );
  };
}

export default class ActivitiesList extends Component {
  constructor(props) {
    super(props);
    this.deleteActivity = this.deleteActivity.bind(this);
    this.state = {
      activities: [],
      setActivities: [],
      isLoading: true,
      search: null,
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch(event) {
    this.setState({ search: event.target.value });
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/activities/")
      .then((res) => {
        this.setState({ activities: res.data, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteActivity(id) {
    axios
      .delete("http://localhost:4000/activities/" + id)
      .then((res) => {
        console.log(res.data);
        this.setState({
          activities: this.state.activities.filter((el) => el.id !== id),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  checkAction() {
    
      const { activities } = this.state;

      return activities >= 0 ? (
        <div className="firstbtndiv">
          <button
            className="FirstActivityBtn"
            onClick={() => (window.location.href = "/create")}
          >
            Criar Primeira Atividade
          </button>
        </div>
      ) : (
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            columns: 3,
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 30,
            display: "flex",
          }}
        >
          {this.activityList()}
        </div>
      );
    
  }

  activityList() {
    if (this.state.search == null) {
      return this.state.activities.map((currentactivity) => {
        return (
          <Activity
            activity={currentactivity}
            deleteActivity={this.deleteActivity}
            key={currentactivity._id}
          />
        );
      });
    } else {
      return this.state.activities
        .filter(searchingFor(this.state.search))
        .map((currentactivity) => {
          return (
            <Activity
              activity={currentactivity}
              deleteActivity={this.deleteActivity}
              key={currentactivity._id}
            />
          );
        });
    }
  }

  render() {
    const { search } = this.state;

    return (
      <div className="container">
        {this.state.activities >= 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginTop: 30,
                fontFamily: "revert",
                fontWeight: "600",
              }}
            >
              Nenhuma atividade registrada!
            </h2>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginTop: 30,
                fontFamily: "revert",
                fontWeight: "600",
              }}
            >
              Atividades Stone's:
            </h2>
            <input
              type="text"
              className="fieldSearch"
              value={search}
              placeholder="Pesquisar (cargo,decrição,funcionário ou idade)"
              onChange={this.handleChangeSearch}
            />
          </div>
        )}

        {this.state.isLoading ? <LoadingSpinner /> : this.checkAction()}
      </div>
    );
  }
}
