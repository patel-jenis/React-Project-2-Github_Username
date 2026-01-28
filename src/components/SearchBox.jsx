import React from 'react'

const SearchBox = ({ getQuery }) => {
    return (
        <>
            <h1 className="fw-bold text-light mb-5">Github Usercard</h1>

            <div className="row justify-content-center mb-4">
                <div className="col-lg-5 col-md-9">
                    <div className='d-flex'>
                        <input type="text" placeholder="Search GitHub username..." className="form-control text-white rounded-2 border-0 me-2" id="userName" />

                        <button className="btn btn-dark px-4" onClick={getQuery}>Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBox