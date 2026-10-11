import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/playlists">Playlists</NavLink>
          <NavLink to="/sync">Sync</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}