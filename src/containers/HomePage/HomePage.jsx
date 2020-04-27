import React, { Component } from 'react'
import Slider from '../../components/Home/Slider/Slider'
import Banner from '../../components/Home/Banner/Banner'
import Arrivals from '../../components/Home/Arrivals/Arrivals'
import Events from '../../components/Home/Events/Events'
import './HomePage.scss';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <Slider />
				<Banner />
				<Arrivals />
				<Events />
            </>
        )
    }
}
