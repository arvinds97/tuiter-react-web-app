import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
            <div class="row">
                 <div class="col-11 wd-center-icons">
                <i class="fas fa-search wd-icon-dark-model"></i>
                <input type="text" class="wd-search-box-dark-mode wd-input-field"
                       placeholder="Search Tuiter"/>
                </span>
                </div>
                <div class="col-1">
                    <a href="settings.html"><i class="fas fa-cog wd-settings-icon-dark-mode fa-2x pt-1"></i></a>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
               <li class="nav-item" >
                        <a class="nav-link active" href="#">For you</a>
                    </li>
                    <li class="nav-item" style="color: darkgray">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item" style="color: darkgray">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item" style="color: darkgray">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item" style="color: darkgray">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
           </ul>
           <div class="card">
                <img src="../../images/download.jfif"
                     class="card-img-top" alt="..." width="100%" height="350rem">
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
