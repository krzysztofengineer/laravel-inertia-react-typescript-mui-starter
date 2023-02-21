import React, { useEffect, useState } from 'react'
import { router } from '@inertiajs/react'
import { Button } from '@mui/material'

type Project = {
    name: string,
}

interface Props {
    projects?: Project[],
}

function HomePage(props: Props) {
    useEffect(() => {
        setTimeout(() => {
            router.reload({ only: ['projects'] })
        }, 0)
    }, [])

    return <div>
        <h1>Projects</h1>
        <Button variant="contained">
            HELOOOOO
        </Button>
        <p>
            <button onClick={() => {
                router.reload({ only: ['projects'] })
            }}>Reload</button>
        </p>
        <ul>
            {props.projects?.map(p => (
                <li key={p.name}>{p.name}</li>
            ))}
        </ul>
    </div>
}

export default HomePage