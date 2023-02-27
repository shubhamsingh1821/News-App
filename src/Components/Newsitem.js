import React from 'react'

const Newsitem = (props) => {
    let {title , description , imageUrl , newsUrl, author , date , source} = props;
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={!imageUrl?"https://www.greatandhra.com/newphotos10/Connect-Movie-Review-21671720502.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : "88%" , zIndex : '1'}}>{source}</span></h5>
                <p className="card-text">{description}</p>
                <p className="card-footer text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</p>
                <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
            </div>
      </div>
    )

}

export default Newsitem






