import React from 'react'


export const Pagenotfound = () => {
  return (
    <div style={{boxSizing:'border-box'}}>
        <div className="row">
            <div className="col-md-2 m-0 p-0"></div>
            <div className="col-md-8 d-flex justify-content-center align-items-center flex-column m-0 p-0" style={{height:'100vh'}}>
                <img src="https://cdn.svgator.com/images/2024/04/walking-investigator-animation-in-404-error-page.gif" alt="no image" width='100%' height='50%'/>
                <h1>Looks like you're lost</h1>
                <h5>The page you are looking is unavailable</h5>
                <buttton className="btn btn-success mt-3 rounded-0">Go Home</buttton>
            </div>
            <div className="col-md-2 m-0 p-0"></div>
        </div>
    </div>
  )
}
