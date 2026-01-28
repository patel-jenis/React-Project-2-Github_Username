import React from 'react'

const Btn = ({ title, url }) => {
  if(title === "Download Card") {
    return (
      <a className={`btn btn-darks`} >
        {title}
      </a>
    );
  }

  return <a href={url} target="_blank" className={`btn btn-darks`}>{title}</a>;
};


export default Btn