import React, { useEffect, useState } from 'react'
import { router } from '@inertiajs/react'
import { Button } from '@mui/material'
import Paperbase from '../Paperbase'

type Project = {
    name: string,
}

interface Props {
    projects?: Project[],
}

function HomePage(props: Props) {
    return <Paperbase />
}

export default HomePage