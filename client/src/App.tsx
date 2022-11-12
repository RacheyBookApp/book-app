import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'


const ROUTER = createBrowserRouter([
    { 
        path: "/", 
        element: <Home />
    }
])

class ErrorBoundary extends React.Component { 
    state = { hasError: false }

    getDerivedStateFromError(error: any) { 
        return { hasError: true } 
    }

    render() { 
        if(this.state.hasError) { 
            return <>
                <h1>An error occurred!</h1>
            </>
        }
        // @ts-ignore I'm not sure what the best way to initialize this is 🤷🏻
        else return this.props.children 
    }
}

export default function App() { 
    return <ErrorBoundary>
        <RouterProvider router={ROUTER} /> 
    </ErrorBoundary>
}