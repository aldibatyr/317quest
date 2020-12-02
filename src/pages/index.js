import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import VideoPreview from "../components/VideoPreview"
import Overview from "../components/Overview"
import Facts from "../components/Facts"
import SignUp from "../components/SignUp"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"

const IndexPage = () => {
  const { width, height } = useWindowSize()
  return (
    <Layout>
      <Confetti
        tweenDuration={5000}
        width={width}
        height={height}
        recycle={false}
      />
      <SEO title="Home" />
      <Hero />
      <About />
      <VideoPreview />
      <Overview />
      <Facts />
      <SignUp />
    </Layout>
  )
}

export default IndexPage
