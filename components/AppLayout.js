import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"
import Head from "next/head"

const AppLayout = (props) => {
    return (
        <div className="layout-body">
            <Head>
                <title>Random Employee React</title>
                <meta name="description" content="A quick jab at a React.js employee management tool" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppHeader />
            <section>{props.children}</section>
            <AppFooter />
        </div>
    )
}

export default AppLayout
