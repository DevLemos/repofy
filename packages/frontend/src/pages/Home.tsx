import React from "react";
import Header from "../components/Header";
import RepositoryList from "../components/RepositoryList";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <section className="feed-container">
        <h1 className="feed-title">Feed</h1>
        <RepositoryList />
      </section>
    </div>
  );
};

export default Home;
