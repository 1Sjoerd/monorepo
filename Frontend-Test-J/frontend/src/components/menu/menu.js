import React from "react";
import SpotifyLoginButton from "@/api/SpotifyLoginButton";
import GetTopNumbersButton from "@/api/GetTopNumbers";

export default function Menu() {
  return (
    <>
      <div className="flex flex-col mx-5 my-10 text-white bg-blue-500 rounded-lg divide-y-2 divide-blue-600 divide-dotted content-center ">
        <div>
          <div className="p-4">
            I am some relevant text in the menu. Look at me!
          </div>
        </div>
        <div>
          <div className="p-4">
            I am ALSO somehow very relevant to the items you are accessing here.
          </div>
        </div>
        <div className="p-4 flex flex-col">
          <button className="flex p-4 mx-auto my-2 bg-blue-600 rounded text-white">
            Retrieve top artists
          </button>
          <GetTopNumbersButton></GetTopNumbersButton>
          <button className="flex p-4 mx-auto my-2 bg-red-400 rounded text-white">
            Remove the top 50 songs.
          </button>
          <SpotifyLoginButton></SpotifyLoginButton>
        </div>
      </div>
    </>
  );
}
