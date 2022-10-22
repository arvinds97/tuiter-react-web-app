import PostItem from "./PostItem.js";
import postsArray from './post.json';
const PostList = () => {
    return(
        <ul className="list-group wd-font-size">
            {
                postsArray.map(
                    post=> <PostItem key={post._id} post={post}/>
                )

            }
        </ul>
    );
}
export default PostList;