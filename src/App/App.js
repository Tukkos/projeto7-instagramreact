import TopBar from "./TopBar/TopBar";
import TopBarMobile from "./TopBar/TopBarMobile";
import Content from "./Content/Content";

export default function App() {
    return (
        <div>
            <TopBar />
            <TopBarMobile />
            <Content />
        </div>
    );
}