import React from "react";
import Bottom from "./bottom";
import Navbar from "./navbar";
import SongList from "./songlist";
function Page(){
    return(<div>
        <Navbar/>
        <SongList/>
        <Bottom/>
    </div>);
}
export default Page;