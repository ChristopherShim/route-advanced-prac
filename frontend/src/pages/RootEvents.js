import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const RootEvent = () => {
  return (
    <>
      <EventsNavigation/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootEvent;
