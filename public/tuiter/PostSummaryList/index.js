import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"
const PostSummaryList = () => {
    return (`
           <ul class="list-group pt-2">
           ${
        post.map(postOne => {
            return(PostSummaryItem(postOne));
        }).join('')
    }
           </ul>
`); }
export default PostSummaryList;