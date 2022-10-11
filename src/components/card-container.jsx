import styled from "styled-components";
import Card from "./cards";

const CardContainerStyled = styled.div`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: repeat(3, auto);
	gap: 1.5rem;
	grid-template-areas: "basic" "pro" "bussines";
	@media screen and (min-width: 41.75rem) {
		grid-template-columns: repeat(2, auto);
		grid-template-rows: repeat(2, auto);
		grid-template-areas: "basic pro" "bussines bussines";
	}
	@media screen and (min-width: 75rem) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

function CardContainer(temporary) {
	const temp = temporary.temporary;
	return (
		<CardContainerStyled>
			<Card
				title="Básico"
				plan="individual"
				id="individual"
				description="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. "
				temp={temp}
			/>
			<Card
				title="Pro"
				plan="Plan Individual"
				id="pro"
				description="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. "
				temp={temp}
			/>
			<Card
				title="Empresas"
				plan="Plan para 5 miembros"
				id="bussines"
				description="Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. "
				temp={temp}
			/>
		</CardContainerStyled>
	);
}

export default CardContainer;
