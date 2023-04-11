import React from 'react'
import Banner from '../components/banner/banner'
import NavBar from '../components/navBar/navBar'
import Skils from '../components/skils/skils'
import Projects from '../components/projects/projects'
import { Footer } from '../components/footer/footer'

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Skils/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default Home