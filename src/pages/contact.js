import React from "react"
import { Link } from "gatsby";
import SEO from '../components/seo';
import Layout from "../components/layout";
import ContactContainer from "../components/ContactContainer";

const ContactPage = () => {
return (
    <Layout>
        <SEO title='contact'/>
        <ContactContainer/>
    </Layout>
)

}

export default ContactPage;