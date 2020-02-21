import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

export default ({element}) => {
return <ParallaxProvider>{element}</ParallaxProvider>
}