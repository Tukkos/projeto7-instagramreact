import Story from "./Story";

export default function StoriesBox() {
    const users = [{id: 1, userName: "notSoTiny", userImg:"https://q46bt2.csb.app/Imagens/tina.png.jpg"},
                    {id: 2, userName: "commando", userImg:"https://q46bt2.csb.app/Imagens/axton.png"},
                    {id: 3, userName: "Athena", userImg:"https://q46bt2.csb.app/Imagens/athena.png"},
                    {id: 4, userName: "mordyy", userImg:"https://q46bt2.csb.app/Imagens/mordecai.jpg"},
                    {id: 5, userName: "Zer0", userImg:"https://q46bt2.csb.app/Imagens/zer0.jpg"},
                    {id: 6, userName: "sirenHunter", userImg:"https://q46bt2.csb.app/Imagens/tannis.jpg"},
                    {id: 7, userName: "brBrick", userImg:"https://q46bt2.csb.app/Imagens/brick.png"}]

    return (
        <div class="stories-box-mobile">
            <div>
                {users.map((story) => (<Story userName={story.userName} userImg={story.userImg} />))}
            </div>
        </div>
    );
}