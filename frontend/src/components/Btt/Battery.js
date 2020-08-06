import React, { Component } from "react";

export default class Battery extends Component {
  render() {
    return (
      <div className="main__battery">
        {/* <h2>Battery Level</h2> */}
        <div className="main__battery__art">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8v8h-17v-8h17zm2-2h-21v12h21v-12zm1 9h.75c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-.75v6zm-16-6h-3v6h3v-6zm4 0h-3v6h3v-6zm4 0h-3v6h3v-6z"/></svg>
        </div>
      </div>
    );
  }
}
