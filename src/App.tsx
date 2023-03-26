import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux';


import Item, { ItemProps } from './components/Item/Item'

// never[]. This type represents an array that will never contain any elements (will always be empty).

const URL_PRODUCTS = 'https://fakestoreapi.com/products';

function App() {
	const [items, setItems] = useState<ItemProps[] | null>()


	const dispatch = useDispatch();

  const { addToCart } = bindActionCreators(actionCreators, dispatch)

	useEffect(() => {
		axios.get(URL_PRODUCTS).then(response => {
			setItems(response.data)
		});
	}, [])

	const handleClick = () => {
		addToCart({id:1, count:2, title: "Nike"});
	}

	return (
		<div className="App">
			<div onClick={handleClick}>Click</div>
			<ul>
				{
					items && items.map(item => {
						return (
							<Item key={item.id} {...item}/>
						);
					})
				}
			</ul>
		</div>
	)
}

export default App
