import React from 'react'
import vid from "../../assets/Untitled video - Made with Clipchamp (1).mp4"
import vid2 from "../../assets/Untitled video - Made with Clipchamp (2).mp4"

const Loading = () => {
    const mode = localStorage.getItem("mode") ? localStorage.getItem("mode") : "dark";
    mode === "light"
      ? document.body.style.backgroundColor = "white"
      : document.body.style.backgroundColor = "black"

    return (
        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <video height="100%" width="100%" muted autoPlay onContextMenu={(e) => {e.preventDefault()}}>
                {
                    mode === "dark" ?
                        <source src={vid} type="video/mp4" />
                        :
                        <source src={vid2} type="video/mp4" />
                }
            </video>
        </div>
    )
}


export default Loading