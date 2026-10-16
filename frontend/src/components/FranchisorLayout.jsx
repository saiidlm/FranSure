// Owner: Member 1
import { Outlet } from "react-router-dom";

export default function FranchisorLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-60 border-r bg-white p-4">
        <p className="font-bold">LOGO</p>
        <p className="mt-4 text-sm text-gray-500">Franchisor sidebar (TODO)</p>
      </aside>
      <main className="flex-1">
        <header className="border-b bg-white p-4 text-sm">Topbar (TODO)</header>
        <Outlet />
      </main>
    </div>
  );
}
