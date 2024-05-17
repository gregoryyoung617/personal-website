import "./stylesheets/app.css";
import "./stylesheets/contact.css";

function Copied(props) {
  return props.trigger ? <div className="copied-text">Copied!</div> : "";
}

export default Copied;
