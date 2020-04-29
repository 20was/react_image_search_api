import React from "react";

const ImageList = (props) => {
  const newList = props.images.map((image) => {
    return (
      <>
        <div className="card">
          <div className="content">
            <div className="right floated meta">{image.created_at}</div>
            <img className="ui avatar image" src={image.urls.regular} alt="" />
          </div>
          <div className="image">
            <img className="ui image" src={image.urls.regular} alt="" />
          </div>
          <div className="content">
            <span className="right floated">
              <i className="heart outline like icon"></i>
              {image.likes} likes
            </span>
            <i className="circle icon"></i>ID: {image.id}
          </div>
          <div className="extra content">
            <div className="ui large transparent left icon input">
              <i className="heart outline icon"></i>
              <input type="text" placeholder="Add Comment..." />
            </div>
          </div>
        </div>
      </>
    );
  });
  return <div className="ui link cards">{newList} </div>;
};

export default ImageList;
