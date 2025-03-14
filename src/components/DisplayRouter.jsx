import { Navigate, Route, Routes } from "react-router";
import { Header } from "./Header";
import { Display } from "./Display";
import { Album } from "./Album";

export function DisplayRouter() {
  return (
    <div className="space-y-4">
      <Header />

      <Routes>
        <Route path="/album/:id" element={<Display />} />
        <Route path="/*" element={<Navigate to={'/album/0'} />} />
      </Routes>

      <Album />

    </div>
  );
};