const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item text-white">
                    <div id="follow-item" class="row">
                        <div class="col-2">
                            <img src=${who.avatarIcon} width="50" height="50" class="wd-border-radius">
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <span class="wd-font-13 wd-font-bold">${who.userName}<i class="fas fa-check-circle" style="padding-left: 5%"></i></span>
                            </div>
                            <div class="row">
                                <span class="wd-font-13" style="color:darkgrey">${who.handle}</span>
                            </div>
                        </div>
                        <div class="col-4">
                            <button type="button" class="btn btn-primary wd-border-radius rounded-pill bg-color-blue">Follow</button>
                        </div>
                    </div>
                </li>
 `);
}
export default WhoToFollowListItem;
