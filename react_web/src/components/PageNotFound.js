import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {

    return (
        <div className='mt-5 pt-5 text-center'>
            <div>
                <h3>Page Not Found</h3>
                <Link to="/">
                    <p>Go to Homepage</p>
                </Link>
            </div>
        </div>
    )
}
