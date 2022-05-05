import Head from 'next/head'
import React from 'react'

interface Props{
    pageTitle? : string
    description? : string
}

const Title = ({pageTitle="", description=""} : Props) => {
  return (
    <Head>
        <title>{`Yearbook ${pageTitle ? "|" : ""} ${pageTitle}`}</title>
        <meta name="description" content={description}/>
    </Head>
  )
}

export default Title