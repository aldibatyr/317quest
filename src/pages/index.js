import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero';
import About from "../components/About";
import VideoPreview from "../components/VideoPreview";
import Overview from "../components/Overview";
import Facts from "../components/Facts";
import SignUp from "../components/SignUp";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <About/>
    <VideoPreview/>
    <Overview/>
    <Facts/>
    <SignUp/>
  </Layout>
)

export default IndexPage
