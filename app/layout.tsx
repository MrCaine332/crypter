"use client"

import {Provider} from "react-redux";
import {store} from "../src/client/store/store";
import '../src/client/styles/globals.scss'
import Header from "../src/client/components/header/Header";
import Footer from "../src/client/components/footer/Footer";
import ThemeProvider from "../src/client/components/ThemeProvider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
	return (
        <html lang="en">
        <body>
            <Provider store={store}>
                <ThemeProvider>
                    <Header/>
                    <main>
                        {children}
                    </main>
                    <Footer/>
                </ThemeProvider>
            </Provider>
        </body>
        </html>
    )
}
