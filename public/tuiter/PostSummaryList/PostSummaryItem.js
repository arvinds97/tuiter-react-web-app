const PostSummaryItem = (post) => {
    return(`
     <li class="list-group-item">
                        <div class="row text-white">
                            <div class="col-10">
                                <div class="row">
                                    <span class="wd-font-13" style="color: darkgray">${post.topic}</span>
                                </div>
                                <div class="row">
                                <span class="wd-font-13 wd-font-bold">${post.userName}</i><i class="fas fa-check-circle" style="padding-left: 1%"></i>
                                <span class="wd-font-13" style="font-weight: normal;color: darkgray">
                                        -${post.time}
                                    </span>
                                </span>
                                <span class="wd-font-13 wd-font-bold">${post.title}</span>
                                </div>
                                <div class="row">
                                    <span class="wd-font-13" style="color: darkgray">${post.tweets} Tuits</span>
                                </div>
                            </div>
                            <div class="col-2">
                                <img src=${post.image} width="70" height="60"  style="padding-top: 10%;padding-left: 20%">
                            </div>
                        </div>
                    </li>
 `);
}
export default PostSummaryItem;