import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = (props) => {
    return (
        <div className='h-100 overflow-hidden col-md-6'>
            <div className='proj-imgbx'>
                <img alt='pic' src={props.project.img} />
                <div className='proj-txtx'>
                    <h4>{props.project.title}</h4>
                    <span>{props.project.desc}</span>
                    <div className='d-flex align-items-center justify-content-center mt-2'>
                        <a className='btn btn-dark me-3' target='_blank' href={props.project.git}>Code</a>
                        {props.project.netlify ?
                            <a className='btn btn-light' target='_blank' href={props.project.netlify}>View</a>
                            : ""}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard