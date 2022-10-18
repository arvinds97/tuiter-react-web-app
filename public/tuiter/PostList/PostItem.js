const PostSummaryItem = (post) => {
    return(`
     <div>
            <div class="row ">
                <div class="col-1">
                    <img src=${post.profilePic} class="wd-image-style rounded-circle pt-1"/>
                </div>
                <div class="col-11">
                    <div style="padding-left: 2%">
                    <span class="wd-float-left wd-text-bold wd-font-color-white">${post.userName}</span>
                    <i class="wd-float-left fa fa-check-circle wd-float-left-side-bar wd-icon-dark-mode pt-1"></i>
                    <span class="wd-float-left wd-user-handle">@${post.handle}</span>
                    <span> - ${post.time}</span>
                    </div>
                    <span class="wd-font-color-white" style="padding-left: 2%">${post.body}</span>
                    <div class="row border-thin border-grey border-solid" style="padding-left: 2%">
                        <img src=${post.image} class="wd-post-image pt-1 pb-1"/>
                        <div class="wd-text-bold wd-font-color-white">
                        ${post.cardTitle}
                        </div>
                        <div class="row ps-4 wd-user-handle">
                        ${post.cardDesc}
                        </div>
                        <div class="">
                        <i class="fa fa-link wd-icon-grey"><a class="ps-1 wd-hyperlink-grey" href="${post.cardLink}">${post.cardLink}</a></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-comment wd-icon"></i>${post.numberOfComments}</a></div>
                        <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-retweet wd-icon"></i>${post.numberOfReposts}</a></div>
                        <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-heart wd-icon"></i>${post.numberOfLikes}</a></div>
                        <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey wd-float-left" href="#"><i class="fa fa-upload wd-icon"></i></a></div>
                        <div style="clear:both;">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
 `);
}
export default PostSummaryItem;