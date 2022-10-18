import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <li class="list-group-item wd-font-bold text-white">Who to follow</li>
           ${
                who.map(whoOne => {
                    return(WhoToFollowListItem(whoOne));
                }).join('')
    }
           </ul>
`); }
export default WhoToFollowList;