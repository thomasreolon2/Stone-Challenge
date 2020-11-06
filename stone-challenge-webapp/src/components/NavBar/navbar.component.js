import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as GoIcons from "react-icons/go";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarPaths";
import "./navbar.css";
import { IconContext } from "react-icons";
import logoSide from "../../imgs/stoneicon.png";
import logoHeader from "../../imgs/stone.png";
import Lottie from "react-lottie";
import menuAnim from "../../anims/menu.json";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import logoHeader from '../../imgs/stone.png';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 115,
      sidebar: false,
      width: 80,
    };

    this.defaultOptions = {
      autoplay: false,
      animationData: menuAnim,
      loop: false,
    };
  }

  onRefLottie = (ref) => {
    this._lottieHeartRef = ref;
  };

  EnterLottie = (c) => {
    console.log("start");
    this._lottieHeartRef && this._lottieHeartRef.play();
  };

  LeaveLottie = (c) => {
    console.log("stop");

   this._lottieHeartRef && this._lottieHeartRef.stop();
  };

  handleMouseEnter = (e) => {
    this.setState({
      left: e.target.getBoundingClientRect().x - 35,
      width: e.target.getBoundingClientRect().width + 45,
    });
  };

  sideNavButton = (e) => {
    this.setState({
      left: e.target.getBoundingClientRect().x - 10,
      width: 80,
    });
  };

  render() {
    return (
      <IconContext.Provider value={{ color: "#fff" }}>
        <ToastContainer draggable={false} transition={Slide} autoClose={8000} />
        <div className="navbar">
          <div
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              display: "flex",
            }}
          >
            <Link to="/">
              <img
                class="LogoHeader"
                resizeMode="contain"
                src={logoHeader}
                alt="Logo"
              />
            </Link>
            <Link to="#">
              <div
                className="test2"
                onMouseEnter={(this.EnterLottie, this.sideNavButton)}
                onMouseLeave={this.LeaveLottie}
                onClick={() => this.setState({ sidebar: !this.state.sidebar })}
              >
                <Lottie
                  options={this.defaultOptions}
                  height={60}
                  width={60}
                  autoplay={false}
                  speed={1.5}
                  style={{ alignSelf: "center" }}
                  ref={this.onRefLottie}
                />
              </div>
            </Link>
          </div>

          <div className="navbarHeader">
            <Link to="/" className="nav-link">
              <GoIcons.GoListUnordered />
              <h className="nav-titles" onMouseEnter={this.handleMouseEnter}>
                Atividades Stone's
              </h>
            </Link>
            <Link to="/create" className="nav-link">
              <BiIcons.BiBookAdd />
              <h className="nav-titles" onMouseEnter={this.handleMouseEnter}>
                Criar Atividade Stone
              </h>
            </Link>
            <Link to="/employee" className="nav-link">
              <IoIcons.IoIosPersonAdd />
              <h className="nav-titles" onMouseEnter={this.handleMouseEnter}>
                Criar Funcionário Stone
              </h>
            </Link>
            <div
              className="stripe"
              style={{ left: this.state.left, width: this.state.width }}
            ></div>
          </div>
        </div>

        <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
          <ul
            className="nav-menu-items"
            onClick={() => this.setState({ sidebar: !this.state.sidebar })}
          >
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              function checkCredits(item) {
                if (item.onclick === "credits") {
                  toast.success("Recrutador: Yann Souza");
                  toast.success("Recrutador: Yago Dotti");
                  toast.success("Desenvolvedor: Thomaz Reolon");
                }
              }

              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={() => checkCredits(item)}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <img
              class="LogoIconside"
              resizeMode="contain"
              src={logoSide}
              alt=""
            />
          </ul>
        </nav>
      </IconContext.Provider>
    );
  }
}
