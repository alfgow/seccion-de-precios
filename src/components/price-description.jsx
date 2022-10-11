import styled from "styled-components";
import Toogle from "./toogle";

const PriceDescriptionStyled = styled.div`
	color: white;
	font: var(--body1-regular);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-block-end: 1.5rem;

	.toggle {
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		margin-inline: 0.75rem;
	}
	.toggle > * {
		margin: 0;
	}
	.price-description {
		color: var(--grey);
		text-align: center;
		margin: 0;
		padding-block-end: 2.5rem;
		padding-inline: 1.5rem;
	}
	.price-subtitle {
		text-align: center;
		font: var(--h2);
		margin: 0;
		padding-block-end: 1rem;
	}
	h1 {
		font: var(--body1-bold);
		color: var(--purple-ligth);
		margin: 0;
		padding-block-end: 2.5rem;
	}
`;

function PriceDescription({ setTemporary, temporary }) {
	return (
		<PriceDescriptionStyled>
			<h1>PRECIOS</h1>
			<h3 className="price-subtitle">
				Desbloquea tu creatividad. ¡Prueba el plan Pro
				gratis!
			</h3>
			<p className="price-description">
				Comienza tu prueba gratuita con acceso a todo el
				contenido de manera gratuita por 7 días.
			</p>
			<div className="toggle">
				<p>Mensual</p>
				<Toogle
					setTemporary={setTemporary}
					temporary={temporary}
				/>
				<p>Anualmente(-40%)</p>
			</div>
		</PriceDescriptionStyled>
	);
}

export default PriceDescription;
