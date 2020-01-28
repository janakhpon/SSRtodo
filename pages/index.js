import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'

const index = () => {
  return (
    <Layout>
      <Head>
        <title>HOME</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link rel="shortcut icon" href="https://avatars1.githubusercontent.com/u/46496244?s=400&u=9611ffb5e3cb7039ee5c6bdee55ee12668d53a7c&v=4" />
      </Head>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.2, width=device-width"
          key="viewport"
        />
      </Head>
      <h1>Index</h1>
    </Layout>
  )
}

export default index