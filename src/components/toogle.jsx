import styled from "styled-components";

const ToogleStyled = styled.label`
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--grey);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
	.slider:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
	input:checked + .slider {
		background-color: var(--purple-dark);
	}
	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
	.slider.round {
		border-radius: 34px;
	}
	.slider.round:before {
		border-radius: 50%;
	}
`;

function Toogle({ setTemporary, temporary }) {
	function handleToggle(event) {
		const temp = event.target.id;
		switch (temp) {
			case "month": {
				setTemporary("yearly");
				break;
			}
			case "yearly": {
				setTemporary("month");
				break;
			}
			default:
				break;
		}
	}
	return (
		<ToogleStyled>
			<label className="switch" onClick={handleToggle}>
				<input type="checkbox" />
				<span
					className="slider round"
					id={temporary}
				></span>
			</label>
		</ToogleStyled>
	);
}

export default Toogle;
