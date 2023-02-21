import { Link } from '@inertiajs/react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'

const theme = createTheme({

})

export default function RootLayout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <header>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </header>
                <article>{children}</article>
            </main>
        </ThemeProvider>

    )
}