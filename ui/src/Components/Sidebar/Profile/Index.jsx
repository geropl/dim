import { useSelector } from "react-redux";

import ProfileImage from "./Image.jsx";
import CircleIcon from "../../../assets/Icons/Circle";

import "./Index.scss";

function Profile(props) {
  const user = useSelector(store => store.user);

  // FETCH_USER_START
  if (user.fetching) {
    return (
      <div className="profile">
        <div className="icon loading">
          <div className="placeholder-icon"/>
        </div>
      </div>
    );
  }

  // FETCH_USER_ERR
  if (user.fetched && user.error) {
    return (
      <div className="profile">
        <div className="icon">
          <div className="error-icon">
            <CircleIcon/>
          </div>
        </div>
        <div className="info">
          <h5>Cannot load data</h5>
        </div>
      </div>
    );
  }

  // FETCH_USER_OK
  if (user.fetched && !user.error) {
    const { username, picture, spentWatching } = user.info;

    return (
      <div className="profile">
        <div className="icon">
          <ProfileImage src={picture}/>
        </div>
        <div className="info">
          <h4>{username || "eray_chumak"}</h4>
          {props.hoursSpentWatching &&
            <h5>Spent {spentWatching || 0}h watching</h5>
          }
        </div>
      </div>
    );
  }

  return <div className="profile"/>;
}

export default Profile;
