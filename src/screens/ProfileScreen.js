import React from "react";
import "./ProfileScreen.css";
import Nav from "../components/Nav";
import avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={avatar} alt="avatar" />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <p className="profileScreen__date">Renewal date: 04/03/2021</p>
              <div className="profileScreen__payments">
                <p>
                  Netflix Standard <br /> 1080p
                </p>
                <button>Subscribe</button>
              </div>

              <div className="profileScreen__payments">
                <p>
                  Netflix Basic <br /> 1080p
                </p>
                <button>Subscribe</button>
              </div>

              <div className="profileScreen__payments">
                <p>
                  Netflix Premium <br /> 4k + HDR
                </p>
                <button className="profileScreen__currentPackage">
                  Current Package
                </button>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signout"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
