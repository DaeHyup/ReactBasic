import React from 'react';
import Avartar from './Avartar';
import '../App.css'

export default function Profile({image, name, title, isNew}) {
	return (
		<div className='profile'>
			<Avartar image={image} isNew={isNew} />
			<p>{name}</p>
			<h1>{title}</h1>
		</div>
		
	)
}

