import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux';
import { RootState } from './redux/reducers';

import Item, { ItemProps } from './components/Item/Item'

const URL_PRODUCTS = 'https://fakestoreapi.com/products';

function App() {
	const state = useSelector((state: RootState) => state)
	const [items, setItems] = useState<ItemProps[] | null>()
	const { addToCart } = bindActionCreators(actionCreators, useDispatch())

	useEffect(()=> {
		console.log("useEffect for state = ", state.cart.length);
	},[state]);

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
