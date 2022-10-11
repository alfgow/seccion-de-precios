import styled from "styled-components";

const LayoutStyled = styled.main`
	min-block-size: 100vh;
	margin-inline: 1.55rem;
	margin-block-start: 1.5rem;
	@media screen and (min-width: 40.75rem) {
		margin-block-start: 2.5rem;
	}
	@media screen and (min-width: 60.5rem) {
		margin-inline: 6.25rem;
		margin-block-start: 5rem;
	}
`;

function Layout({ children }) {
	return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
