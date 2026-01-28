import React from 'react'

const Card = ({ img, name, location, followers, following, repo, notFound }) => {
    if (notFound) {
        return (
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-9">
                    <div className="card text-center p-sm-5 pt-5 pb-5 ps-2 pe-2 rounded-3 shadow-lg">
                        <h3 className="fw-semibold text-light">Data Not Found</h3>
                        <p className="text-muted light-color m-0">Please enter valid GitHub username</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-9">
                    <div className="card text-center p-sm-5 pt-5 pb-5 ps-2 pe-2 rounded-3 shadow-lg">

                        <img src={img} alt="avatar" className="userImg img-fluid mx-auto d-block mb-4" />

                        <h3 className="fw-semibold text-light mb-2">{name || "NA"}</h3>

                        <p className="light-color mb-3">
                            <i className="bi bi-geo-alt me-1"></i>{location || "NA"}
                        </p>

                        <div className="d-flex justify-content-around mt-3">
                            <div>
                                <h6 className="fw-bold text-light mb-0">{followers}</h6>
                                <p className="light-color m-0">Followers</p>
                            </div>
                            <div>
                                <h6 className="fw-bold text-light mb-0">{following}</h6>
                                <p className="light-color m-0">Following</p>
                            </div>
                            <div>
                                <h6 className="fw-bold text-light mb-0">{repo}</h6>
                                <p className="light-color m-0">Repos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card