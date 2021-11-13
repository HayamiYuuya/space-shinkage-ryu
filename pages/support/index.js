//space-shinkage-ryu.com/support/
import Head from 'next/head'
import Link from 'next/link'
omport Layout from '../../components/layout/layout'

function SupportPage () {
  return ( 
    <>
    <Head>
      <title>Space Shinkage-ryu | Support</title>
    </Head>
    <Layout>
    <h1>Support Page</h1>
    <Link href="/">
      <a>go back</a>
    </Link>
    </Layout>
    </>
    )
}

export default SupportPage
