import styled from "styled-components";
import CardBasic from "./card-basic";
import CardBussines from "./card-bussines";
import CardPro from "./card-pro";

const IndexStyled = styled.div``;

function Card(props) {
	const { id } = props;

	switch (id) {
		case "individual": {
			return <CardBasic {...props} />;
		}
		case "pro": {
			return <CardPro {...props} />;
		}

		case "bussines": {
			return <CardBussines {...props} />;
		}

		default:
			break;
	}
}

export default Card;
