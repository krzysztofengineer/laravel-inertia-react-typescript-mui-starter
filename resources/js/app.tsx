import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import RootLayout from './layouts/RootLayout'

createInertiaApp({
    resolve: name => {
        // @ts-ignore
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })

        let page = pages[`./pages/${name}.tsx`]
        page.default.layout = page.default.layout || (page => <RootLayout children={page} />)

        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})