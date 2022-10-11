import styled from "styled-components";

const ButtonStyled = styled.div`
	button {
		padding-block: 1.625rem;
		inline-size: 100%;
		border-radius: 6rem;
		border: none;
		font: var(--body1-bold);
		color: var(--white);
	}
	.primary {
		background: var(--purple-dark);
	}
	.secondary {
		background: var(--blue-dark);
	}
`;

function Button(props) {
	const { classN } = props;
	return (
		<ButtonStyled>
			<button className={classN}>Empezar</button>
		</ButtonStyled>
	);
}

export default Button;
