import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/oppurtunitypostingone">OppurtunityPostingOne</Link>
        </li>
        <li>
          <Link to="/postoppurtunitytwo">PostoppurtunityTwo</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboardone">DashboardOne</Link>
        </li>
        <li>
          <Link to="/postoppurtunityone">PostoppurtunityOne</Link>
        </li>
        <li>
          <Link to="/oppurtunitypostingthree">OppurtunityPostingThree</Link>
        </li>
        <li>
          <Link to="/postoppurtunity">Postoppurtunity</Link>
        </li>
        <li>
          <Link to="/oppurtunityposting">OppurtunityPosting</Link>
        </li>
        <li>
          <Link to="/oppurtunitypostingtwo">OppurtunityPostingTwo</Link>
        </li>
        <li>
          <Link to="/viewcandidateview">ViewCandidateView</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
