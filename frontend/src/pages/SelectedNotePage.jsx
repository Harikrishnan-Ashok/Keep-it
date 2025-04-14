import {Outlet} from "react-router-dom";
import React from "react";
export default function SelectedNotePage(){
  return(<>
    <Outlet></Outlet>
    <h1>Selected Note</h1>
  </>)
}
