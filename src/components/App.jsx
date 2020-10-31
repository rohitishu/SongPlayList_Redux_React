import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

function App() {
  return (
    //     <div className="ui container grid">
    //       <div className="ui row">
    //         <div className="column eight wide">
    //      <SongList />
    //      </div>
    //      <div className="column eight wide">
    //      <SongDetail />
    //      </div>
    // </div>
    //      </div>
    <div class="ui one column stackable center aligned page grid">
      <h1> Your Songs PlayList </h1>
      <div className="row">
        <div class="column eight wide">
          <SongList />
        </div>
        <div class="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
