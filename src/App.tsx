import React from 'react';
import styled from '@emotion/styled'
import Product from './components/Product'
import product01 from './img/product01_col01.jpg'
import product02 from './img/product02_col01.jpg'
import './App.css'

const Container = styled.div({
	height: '100vh',
})

class App extends React.Component<any, any>{
	public render() {
		return (
			<Container>
				<header className="header">
					<h1>Product Builder</h1>
					<nav className="nav">
						<ul>
							<li><a className="active" href="#models">Models</a></li>
							<li><a href="#colors">Colors</a></li>
							<li><a href="#accessories">Accessories</a></li>
							<li><a href="#summary">Summary</a></li>
						</ul>
					</nav>
				</header>
				<div className="steps">
					<section>
						<ul>
							<Product src={product01} name="BMW i3" price='42,400' />
							<Product src={product02} name="BMW i8" price='140,700' />
						</ul>
					</section>
				</div>
				<footer className="footer">
					test
				</footer>
			</Container>
		);
	}
}

export default App;
