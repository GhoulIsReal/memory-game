import React, { Fragment } from "react";
import Leaderboard from "@/Components/Leaderboard";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

const Home = props => {
  const { users, user } = props;

  return (
    <Fragment>
      {user && (
        <InertiaLink href="/logout" method="post">
          Logout
        </InertiaLink>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <h1>Leaderboard</h1>
        <button
          onClick={() => {
            Inertia.visit("/play");
          }}
          style={{
            marginLeft: "1rem",
            marginTop: "1.5rem"
          }}
        >
          Play
        </button>
      </div>
      <Leaderboard users={users} currentUser={user ? user.id : undefined} />
    </Fragment>
  );
};

export default Home;
