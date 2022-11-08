
import React from "react";
import PostSummaryList from "../post-summary-list";
import NavigationSidebar from "../navigation-sidebar";
import PostList from "../../post-list";
import WhatsHappening from "./whats-happening";
import TuitList from "../tuits/tuit-list";

const HomeComponent = () => {
    return (
        <div>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </div>

    );
}
export default HomeComponent;