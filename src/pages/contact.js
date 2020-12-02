import React from "react"
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