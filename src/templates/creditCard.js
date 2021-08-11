import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

const creditCard = ({ data }) => {
  const creditCard = data.microcmsCreditCard;

  const formatDay = function (date) {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    return `${year}.${month}.${day}`;
  };
  return (
		<>
			<p>{ formatDay(creditCard.createdAt)}</p>
			<p>{creditCard.name}</p>
		</>
  );
};

export const query = graphql`
  query getSingleCreditCard($slug: String) {
    microcmsCreditCard(creditCardId: { eq: $slug }) {
      id
			name
			createdAt
    }
  }
`;

creditCard.propTypes = {
  data: PropTypes.any,
};

export default creditCard;
