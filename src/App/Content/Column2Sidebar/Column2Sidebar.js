import User from "./Sidebar/User";
import Sugestion from "./Sidebar/Sugestion";
import UsersSugestions from "./Sidebar/UsersSugestions";
import Copyright from "./Sidebar/Copyright";


export default function Column2Sidebar() {
    return (
        <div class="sidebar">
            <User userImg="https://q46bt2.csb.app/Imagens/zane.png"
                userName="Zane Flynt"
                userId="crazyBoyo" />

            <Sugestion />

            <UsersSugestions />
            
            <Copyright />
        </div>
    );
}