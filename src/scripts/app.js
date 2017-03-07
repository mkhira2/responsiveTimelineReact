import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

var Logo = React.createClass({
	render: function() {
		return (
			<div className = "logo">
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
				<Row1 />
				<Row2 />
				<Row3 />
	        </div>
	        )
	        }
})

var Row1 = React.createClass({
	render: function() {
		return (
			<div className = "row1">
				<div className = "left">
					<div className="date">
						<p>1/11/1989</p>
					</div>
					<div className="time">
					<p>1:23</p>
                    </div>
                </div>
                <div className='middle'>
                    <i className="material-icons">smartphone</i>
                </div>
                <div className='right'>
                    <div className='top'>
                        <h3>Apple pear tomato scallion</h3>
                    </div>
                    <div className='bottom'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, alias nobis, accusantium qui ea maxime facere et quam nostrum in saepe quos soluta nesciunt natus ex quisquam consequuntur ut asperiores?</p>
                    </div>
                </div>
            </div>
			)
	}
})

var Row2 = React.createClass({
	render: function() {
		return (
			<div className='row2'>
                <div className='left'>
                    <div className='date'>
                        <p>11/18/1986</p>
                    </div>
                    <div className='time'>
                        <p>2:34</p>
                    </div>
                </div>
                <div className='middle'>
                    <i className="material-icons">computer</i>
                </div>
                <div className='right'>
                    <div className='top'>
                        <h3>Broccoli spinach salad turkey</h3>
                    </div>
                    <div className='bottom'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veniam expedita aliquam, assumenda eos, aperiam possimus? Iusto tempore doloribus placeat veniam voluptatibus reprehenderit, provident nisi architecto voluptatum quod, amet fugit.</p>
                    </div>
                </div>
            </div>
			)
	}
})

var Row3 = React.createClass({
	render: function() {
		return (
			<div className='row3'>
                <div className='left'>
                    <div className='date'>
                        <p>06/30/1987</p>
                    </div>
                    <div className='time'>
                        <p>3:45</p>
                    </div>
                </div>
                <div className='middle'>
                    <i className="material-icons">email</i>
                </div>
                <div className='right'>
                    <div className='top'>
                        <h3>Meat Fish Potato Rice</h3>
                    </div>
                    <div className='bottom'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, eum voluptatum, at quas, ab repellat corporis omnis praesentium totam odio vel nemo, debitis aliquam delectus quisquam ut provident doloribus nesciunt!</p>
                    </div>
                </div>
            </div>
			)
	}
})

var app = function() {
	var libraryName = 'react'

	ReactDOM.render(<Logo />, document.querySelector('.mainContainer'))
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..