import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import {connect} from "raect-redux";
import PropTypes from "prop-types";

function Footer() {
  return (
          <div className="footer">
            <p>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {user && <a href="#">Contact us</a>}
          </div>
        );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return{
    user : state.get("user")
  }
}

export default connect (mapStateToProps)(Footer);
