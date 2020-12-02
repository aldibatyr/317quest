import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button } from '../components/Form'
import { Link } from "gatsby"

const Page = styled.div`
  height: 100vh;
  padding-top: 100px;
  text-align: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Page>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link>
        <Button>
          <span style={{color: 'white', fontWeight: '700'}}>GO HOME</span>
        </Button>
      </Link>
    </Page>
  </Layout>
)

export default NotFoundPage
