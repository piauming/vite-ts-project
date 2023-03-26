import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
// actionCreators = "./actions/creators/index";
import { actionCreators } from './redux';

import Item, { ItemProps } from './components/Item/Item'

const URL_PRODUCTS = 'https://fakestoreapi.com/products';

function App() {
	const [items, setItems] = useState<ItemProps[] | null>()
	const { addToCart } = bindActionCreators(actionCreators, useDispatch())

	useEffect(() => {
		axios.get(URL_PRODUCTS).then(response => {
			setItems(response.data)
		});
	}, [])

	const handleClick = () => {
		addToCart({ id: 1, count: 2, title: "Nikee" });
	}

	return (
		<div className="App">
			<div onClick={handleClick}>Click</div>
			<ul>
				{
					items && items.map(item => {
						return (
							<Item key={item.id} {...item} />
						);
					})
				}
			</ul>
		</div>
	)
}

export default App
