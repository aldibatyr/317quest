import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/Hero';
import About from "../components/About";
import VideoPreview from "../components/VideoPreview";
import Overview from "../components/Overview";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <About/>
    <VideoPreview/>
    <Overview/>
  </Layout>
)

export default IndexPage
