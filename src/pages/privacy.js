import React from "react"
import { Document } from "react-pdf"
import { privacy } from "../../static/PP317Quest.pdf"

function Privacy() {
  return <Document file={privacy}></Document>
}

export default Privacy
