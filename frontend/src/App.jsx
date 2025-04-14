import React from "react";
import LandingPage from "./pages/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import SelectedNotePage from "./pages/SelectedNotePage";
import NoteEditor from "./components/notes/editor/NoteEditor";
import SettingsPage from "./pages/SettingsPage";
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>
            <Route path="/notes" element={<SelectedNotePage />}>
              <Route path="/notes/:id" element={<NoteEditor />} ></Route>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
