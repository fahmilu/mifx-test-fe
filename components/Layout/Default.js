import Head from "next/head";

const Layout = ({children}) => {
    return (
        <>
        <Head>
            <title>MIFX Assignment - Fahmi</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={``}>
            {/* header */}
            <header className="bg-gray-300">
                <div className={`px-5 py-10 max-w-7xl mx-auto`}>
                    <h1 className={`text-2xl font-bold text-center`}>MIFX Assignment</h1>
                </div>
            </header>
            {/* content */}
            <section className={`px-5 py-10 max-w-5xl mx-auto`}>
                {children}
            </section>
            {/* footer */}
            <footer className="bg-green-100">
                <div className={`px-5 py-10`}>
                    <div className={`text-sm text-center`}>By Fahmilu Kurniawan</div>
                </div>
            </footer>


        </div>
        </>
    );
}

export default Layout;