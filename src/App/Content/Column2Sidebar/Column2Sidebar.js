import User from "./Sidebar/User";
import Sugestion from "./Sidebar/Sugestion";
import UsersSugestions from "./Sidebar/UsersSugestions";
import Copyright from "./Sidebar/Copyright";


export default function Column2Sidebar() {
    const sugestions = [{id: 1, sugName: "someJack", sugImg:"https://q46bt2.csb.app/Imagens/jack.jpg"},
                    {id: 2, sugName: "ms.Froze", sugImg:"https://q46bt2.csb.app/Imagens/aurelia.png"},
                    {id: 3, sugName: "TyreenStar", sugImg:"https://q46bt2.csb.app/Imagens/tyreen.png"},
                    {id: 4, sugName: "troyboy", sugImg:"https://q46bt2.csb.app/Imagens/troy.png"},
                    {id: 5, sugName: "commSteele", sugImg:"https://q46bt2.csb.app/Imagens/steele.png"}]

    return (
        <div class="sidebar">
            <User userImg="https://q46bt2.csb.app/Imagens/zane.png"
                userName="Zane Flynt"
                userId="crazyBoyo" />

            <Sugestion />

            {sugestions.map((sug)=>(<UsersSugestions sugName={sug.sugName} sugImg={sug.sugImg} />))}

            <Copyright />
        </div>
    );
}