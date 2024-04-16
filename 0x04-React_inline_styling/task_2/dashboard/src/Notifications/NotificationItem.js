import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from "aphrodite";

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const colorItem = css(type === "urgent" ? styles.urgent : styles.default);
    return (
      this.props.value ? 
      <li
      className={colorItem}
      data-notification-type={this.props.type}
      onClick={() => this.props.markAsRead(this.props.id)}
      >{this.props.value}</li> 
      :
      <li
      className={colorItem}
      data-notification-type={this.props.type}
      dangerouslySetInnerHTML={this.props.html}
      onClick={() => {console.log('empty func');}}
      ></li>
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {console.log('empty func');},
	id: 0
};

NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },

  urgent: {
    color: "red",
  },
});

export default NotificationItem;
