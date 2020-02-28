import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/store.scss'
import Lottie from 'react-lottie'
import animationData from '../images/jumbo-typing.json'

const Store = () => {

    const animOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    };

    return (
        <Layout>
            <SEO title='Store' />
            <div className='main-text'>
                <h1>Store is in development...</h1>
                <Lottie
                    options={animOptions}
                    height={300}
                />
            </div>
        </Layout>
    )
}

export default Store   