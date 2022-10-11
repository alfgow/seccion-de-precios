import styled from "styled-components";
import CircleCheck from "../../icons/circle-check";
import Button from "../button";

const CardStyled = styled.div`
	border: 1px solid var(--border);
	border-radius: 1.5rem;
	grid-area: bussines;
	padding-inline: 1.5rem;
	padding-block: 1.5rem;
	background: var(--card__background);
	.card-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding-block-end: 2.5rem;
	}

	.title {
		font: var(--h2);
		color: var(--white);
		margin: 0;
	}
	.text {
		font: var(--body1-regular);
		color: var(--grey);
		margin: 0;
	}
	.card-price {
		display: flex;
		align-items: flex-end;
	}
	.price {
		font: var(--h2);
		color: var(--white);
		margin: 0;
		margin-block-end: -4px;
	}
	.currency {
		font: var(--body1-bold);
		color: var(--white);
	}
	.temporary {
		font: var(--body1-bold);
		color: var(--grey);
	}
	.card-includes {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.title-card-includes {
		font: var(--body1-bold);
		color: var(--white);
		margin: 0;
	}
	.includes {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.includes-item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.no-includings-text {
		color: var(--grey);
		margin: 0;
	}
	.includings-text {
		color: var(--white);
		margin: 0;
	}
`;

function CardBussines(props) {
	const { title, plan, description, temp } = props;
	let price;
	let temporary;
	switch (temp) {
		case "month": {
			price = "$99";
			temporary = "mensual";
			break;
		}

		case "yearly": {
			price = "$713";
			temporary = "anual";
			break;
		}

		default:
			break;
	}

	return (
		<CardStyled>
			<div className="card-container">
				<div className="card-header">
					<h2 className="title">{title}</h2>
					<span className="text">{plan}</span>
				</div>

				<div className="card-description">
					<p className="text">{description}</p>
				</div>

				<div className="card-price">
					<p className="price">{price}</p>
					<span className="currency">USD</span>
					<span className="temporary">
						/{temporary}
					</span>
				</div>

				<p className="title-card-includes">
					¿Qué está incluido?
				</p>

				<div className="card-includes">
					<div className="includes">
						<div className="includes-item">
							<div className="circle-check">
								<CircleCheck color="var(--purple-dark)" />
							</div>
							<p className="includings-text">
								Acceso de por
								vida a los
								cursos que
								completes
							</p>
						</div>
						<div className="includes-item">
							<div className="circle-check">
								<CircleCheck color="var(--purple-dark)" />
							</div>
							<p className="includings-text">
								Acceso a todos
								los cursos
							</p>
						</div>
						<div className="includes-item">
							<div className="circle-check">
								<CircleCheck color="var(--purple-dark)" />
							</div>
							<p className="includings-text">
								Acceso a todos
								los proyectos
							</p>
						</div>
						<div className="includes-item">
							<div className="circle-check">
								<CircleCheck color="var(--purple-dark)" />
							</div>
							<p className="includings-text">
								Acceso a Discord
							</p>
						</div>
					</div>
				</div>
			</div>
			<Button classN="primary" />
		</CardStyled>
	);
}

export default CardBussines;
