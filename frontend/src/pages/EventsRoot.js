import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsRoot = () => {
    return <>
        <EventsNavigation />
        <main>
            <Outlet />
        </main>
    </>
};

export default EventsRoot;