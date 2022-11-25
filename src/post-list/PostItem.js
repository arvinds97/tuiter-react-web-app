 import React from "react";

const PostItem = (
    {
        post = {
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "body": "Amazing show about @Inspiration4x mission!",
            "image": "/images/countdown.jfif",
            "cardTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "cardDesc": "From training to launching to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "cardLink": "netflix.com",
            "numberOfLikes": "37.5K",
            "numberOfReposts": "3.5K",
            "numberOfComments": "4.2K",
            "profilePic": "/images/muskdp.jfif"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row ">
                <div className="col-1">
                    <img src={post.profilePic} className="wd-image-style rounded-circle pt-1" style={{width : '50px', height : '50px'}} alt={"profile"}/>
                </div>
                <div className="col-11">
                    <div style={{paddingLeft : '2%'}}>
                        <span className="wd-float-left wd-text-bold wd-font-color-white">{post.userName}</span>
                        <i className="wd-float-left fa fa-check-circle wd-float-left-side-bar wd-icon-dark-mode pt-1"></i>
                        <span className="wd-float-left wd-user-handle">@{post.handle}</span>
                        <span> - {post.time}</span>
                    </div>
                    <span className="wd-font-color-white" style={{paddingLeft : '2%'}}>{post.body}</span>
                    <div className="row border-thin border-grey border-solid" style={{paddingLeft : '2%'}}>
                        <img src={post.image} className="wd-post-image pt-1 pb-1"/>
                        <div className="wd-text-bold wd-font-color-white">
                            {post.cardTitle}
                        </div>
                        <div className="row ps-4 wd-user-handle">
                            {post.cardDesc}
                        </div>
                        <div className="">
                            <i className="fa fa-link wd-icon-grey"><a className="ps-1 wd-hyperlink-grey"
                                                                      href="{post.cardLink}">{post.cardLink}</a></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 wd-navbar"><a className="wd-hyperlink-grey wd-float-left" href="#"><i
                            className="fa fa-comment wd-icon"></i>{post.numberOfComments}</a></div>
                        <div className="col-3 wd-navbar"><a className="wd-hyperlink-grey wd-float-left" href="#"><i
                            className="fa fa-retweet wd-icon"></i>{post.numberOfReposts}</a></div>
                        <div className="col-3 wd-navbar"><a className="wd-hyperlink-grey wd-float-left" href="#"><i
                            className="fa fa-heart wd-icon"></i>{post.numberOfLikes}</a></div>
                        <div className="col-3 wd-navbar"><a className="wd-hyperlink-grey wd-float-left" href="#"><i
                            className="fa fa-upload wd-icon"></i></a></div>
                        <div style={{clear : 'both'}}>&nbsp;</div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;