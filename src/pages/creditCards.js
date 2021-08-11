import React from "react"
import { useStaticQuery, graphql,Link } from "gatsby";
const getData = graphql`
  {
    allMicrocmsCreditCard {
      edges {
        node {
          createdAt
          creditCardId
					name
        }
      }
    }
  }
`;
function CreditCardsPage () {
	const data = useStaticQuery(getData)
	const cardList = data.allMicrocmsCreditCard.edges
	return (	<>
	<ul className="w-11/12 m-auto">
		{cardList.map(card =>
			<li key={card.node.name} className="">
				<Link to={`/${card.node.creditCardId}`} className="p-4  block bg-blue-400 m-5"> 
					{card.node.name}
				</Link>
			</li>
		)}
		</ul>
	</>)
}
export default CreditCardsPage