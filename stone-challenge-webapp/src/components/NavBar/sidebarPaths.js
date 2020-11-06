import React from "react";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Atividades Stone's",
    path: "/",
    onclick: null,
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Criar Atividade Stone",
    path: "/create",
    onclick: null,
    icon: <BiIcons.BiBookAdd />,
    cName: "nav-text",
  },
  {
    title: "Criar Funcionário Stone",
    path: "/employee",
    onclick: null,
    icon: <IoIcons.IoIosPersonAdd />,
    cName: "nav-text",
  },
  {
    title: "Creditos",
    path: "#",
    onclick: "credits",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
