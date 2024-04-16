import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from "aphrodite";


function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = {
    backgroundColor: "#f5f5f5ab"
  };

  const headerRowStyle = {
    backgroundColor: "#deb5b545"
  };

  const tableItem = css(isHeader ? styles.CourseListTh : styles.CourseListTd);
  return (
    <tr style={isHeader ? headerRowStyle : rowStyle}>
      {isHeader ?
        textSecondCell === null ?
          <th colSpan="2" className={css(styles.CourseListThSpan)}>{textFirstCell}</th>
        :
          <>
            <th className={tableItem}>{textFirstCell}</th>
            <th className={tableItem}>{textSecondCell}</th>
          </>
      :
        <>
          <td className={tableItem}>{textFirstCell}</td>
          <td className={tableItem}>{textSecondCell}</td>
        </>
      }
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

const styles = StyleSheet.create({
  CourseListTh: {
    borderBottom: "1px solid gray",
    margin: "0",
    padding: "0",
    textAlign: "left"
  },
  CourseListTd: {
    paddingLeft: "3px",

  },
  CourseListThSpan: {
    textAlign: "center",
  }
});

export default CourseListRow;