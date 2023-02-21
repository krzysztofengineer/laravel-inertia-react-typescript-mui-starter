import { Link } from '@inertiajs/react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'

const theme = createTheme({

})

export default function RootLayout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>

    )
}