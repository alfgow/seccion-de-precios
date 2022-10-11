import styled from "styled-components";
import CircleCheck from "../../icons/circle-check";
import Button from "../button";

const CardStyled = styled.div`
	grid-area: pro;
	border: 1px solid var(--border);
	border-radius: 1.5rem;
	padding-inline: 1.5rem;
	padding-block: 1.5rem;
	background: var(--purple-ligth);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
		0px 25px 63px rgba(189, 135, 205, 0.24),
		0px 9.62963px 20.0667px rgba(189, 135, 205, 0.145778),
		0px 2.03704px 5.13333px rgba(189, 135, 205, 0.0942222);

	.card-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding-block-end: 2.5rem;
	}

	.title {
		font: var(--h2);
		margin: 0;
		color: var(--blue-dark);
	}
	.text {
		font: var(--body1-regular);
		color: var(--card__background);
		margin: 0;
	}
	.card-price {
		display: flex;
		align-items: flex-end;
	}
	.price {
		font: var(--h2);
		margin: 0;
		margin-block-end: -4px;
		color: var(--blue-dark);
	}
	.currency {
		font: var(--body1-bold);
		color: var(--blue-dark);
	}
	.temporary {
		font: var(--body1-bold);
		color: var(--card__background);
	}
	.card-includes {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.title-card-includes {
		font: var(--body1-bold);
		margin: 0;
		color: var(--blue-dark);
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
		color: var(--blue-dark-inactive);
	}
	.includings-text {
		color: var(--blue-dark);
		margin: 0;
	}
`;

function cardPro(props) {
	const { title, plan, description, temp } = props;
	let price;
	let temporary;
	switch (temp) {
		case "month": {
			price = "$75";
			temporary = "mensual";
			break;
		}

		case "yearly": {
			price = "$540";
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
								<CircleCheck color="var(--blue-dark-inactive)" />
							</div>

							<p className="no-includings-text">
								Acceso de por
								vida a los
								cursos que
								completes
							</p>
						</div>
						<div className="includes-item">
							<div className="circle-check">
								<CircleCheck color="var(--blue-dark)" />
							</div>
							<p className="includings-text">
								Acceso a todos
								los cursos
							</p>
						</div>
						<div className="includes-item">
							<div className="circle-check">
								<CircleCheck color="var(--blue-dark)" />
							</div>
							<p className="includings-text">
								Acceso a todos
								los proyectos
							</p>
						</div>
						<div className="includes-item">
							<div className="circle-check">
								<CircleCheck color="var(--blue-dark)" />
							</div>
							<p className="includings-text">
								Acceso a Discord
							</p>
						</div>
					</div>
				</div>
			</div>
			<Button classN="secondary" />
		</CardStyled>
	);
}

export default cardPro;
