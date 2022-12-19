import React, { useEffect } from "react";

export default function HeadwayWidget (){

  useEffect( () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.headwayapp.co/widget.js";
    document.head.appendChild(script);
    var config = {
      selector: ".headway-badge",
      account: "7O1g6y",
      debug: true
    };
    script.onload = function() {
      window.Headway.init(config)
    }
  }, [])

  return (
    <div className="headway-badge" id="headway-badge" style={{position: 'absolute', right: 0, bottom: 0}}/>
  )

}