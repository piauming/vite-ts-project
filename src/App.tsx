import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux';
import { RootState } from './redux/reducers';

import Item, { ItemState } from './components/Item/Item'

const URL_PRODUCTS = 'https://fakestoreapi.com/products';

function App() {
	const state = useSelector((state: RootState) => state);
	const [items, setItems] = useState<ItemState[] | null>();
	const { addToCart } = bindActionCreators(actionCreators, useDispatch());

	useEffect(()=> {
		console.log("useEffect for state = ", state.cart.length);
	},[state]);

	useEffect(() => {
		axios.get(URL_PRODUCTS).then(response => {
			setItems(response.data)
		});
	}, [])

	const addItemToCart = (id: number, count: number, title: string) => {
		addToCart({ id: id, count: count, title: title });
	}

	return (
		<div className="App">
			<div>Cart: {state.cart.length} items</div>
			<ul>
				{
					items && items.map(item => {
						return (
							<Item key={item.id} {...item} addItemToCart={addItemToCart}/>
						);
					})
				}
			</ul>
		</div>
	)
}

export default App
