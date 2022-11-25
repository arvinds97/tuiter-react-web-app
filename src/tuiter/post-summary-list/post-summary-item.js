import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic" : "Space",
            "userName" : "SpaceX",
            "time" : "2h",
            "title" : "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on it's 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="wd-grey-text">
                        {post.topic} - {post.time}
                    </div>
                    <span>
                        <div className="fw-bolder">{post.userName}<i className="bi bi-patch-check-fill wd-post-summary-spacing"></i>
                    </span>
                    </div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} />
                </div>
            </div>
        </li>
    );
}

export default PostSummaryItem;