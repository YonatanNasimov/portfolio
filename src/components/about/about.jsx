import React from 'react'
import "./about.css"

const About = () => {
    return (
        <div className='summery'>
            <div>
                <div className='d-flex align-items-center p-0 mb-3'>
                    <h2>
                        <span className='span-color'>
                            <strong>
                                Professional Experience:
                            </strong>
                        </span>
                        <span className='span ms-2'><strong>2022 - present</strong>
                        </span>
                    </h2>
                </div>
                <div>
                    <h5 className='text-white'>
                        Freelance Full Stack developer, and web programmer - Building websites including design for clients in all areas:
                    </h5>
                    <ul className='text-white p-3'>
                        <li>
                            landing pages, business management systems, online stores, blogs and more...
                        </li>
                        <li>
                            according to the client's request including backend client side, design and security.
                        </li>
                        <li>
                            maintenance of an existing website.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About