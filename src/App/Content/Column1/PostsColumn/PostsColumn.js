import Posts from "./Posts";

const posts = [{id: 1,
                userName: "crazyBoyo",
                userImg:"https://q46bt2.csb.app/Imagens/zane.png",
                postImg: "https://q46bt2.csb.app/Imagens/zane1.jpg",
                likedBy: "commando",
                likedByImg: "https://q46bt2.csb.app/Imagens/axton.png",
                likes: 1555423
                },
                {id: 2,
                userName: "notSoTiny",
                userImg:"https://q46bt2.csb.app/Imagens/tina.png.jpg",
                postImg: "https://q46bt2.csb.app/Imagens/butt1.jpg",
                likedBy: "commando",
                likedByImg: "https://q46bt2.csb.app/Imagens/axton.png",
                likes: 2998423
                },
                {id: 3,
                userName: "kingTr4p",
                userImg:"https://q46bt2.csb.app/Imagens/claptrap.png",
                postImg: "https://q46bt2.csb.app/Imagens/claptrap1.png",
                likedBy: "commando",
                likedByImg: "https://q46bt2.csb.app/Imagens/axton.png",
                likes: 3
                }]

export default function PostColumn() {
    return (
        <div class="coluna-posts">
            {posts.map((post) => (<Posts postsInfo={post} />))}
        </div>
    );
}