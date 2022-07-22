// import UpperBar from "./UpperBar";
// import LowerBar from "./LowerBar";
import { useState } from "react";

// export default function Posts(props) {

//     const post = props.postsInfo
//     const [liked, setLike] = useState(false);
//     const [likes, setLikes] = useState(post.likes);

//     const like = () => {
//         setLike(true);
//         setLikes(likes + 1);
//         console.log(likes);
//     };
//     const dislike = () => {
//         setLike(false);
//         setLikes(likes - 1);
//         console.log(likes);
//     };

//     function LikesBar(props) {
//         return (
//             <div>{(props.liked) ? 
//                 <div class="linha2">
//                     <img src="https://q46bt2.csb.app/Imagens/zane.png" alt="" />
//                     <h3>Curtido por <b>crazyBoyo</b> e <b>{props.likes.toLocaleString("pt-br")} pessoas</b></h3>
//                 </div>
//                           : 
//                 <div class="linha2">
//                     <img src={props.likedByImg} alt="" />
//                     <h3>Curtido por <b>{props.likedBy}</b> e <b>{props.likes.toLocaleString("pt-br")} pessoas</b></h3>
//                 </div>}
//             </div>
//         );
//     }

//     function LowerBar(props) {
//         return (
//             <div class="barra-inferior">
//                 <div class="linha1">
//                     <div>
//                         {(!props.liked) ? <ion-icon name="heart-outline" onClick={props.like}></ion-icon>
//                                   : <ion-icon class="heart-icon" name="heart" onClick={props.dislike}></ion-icon>}
//                         <ion-icon name="chatbubble-outline"></ion-icon>
//                         <ion-icon name="paper-plane-outline"></ion-icon>
//                     </div>
//                     <ion-icon name="bookmark-outline"></ion-icon>
//                 </div>
//                 <LikesBar likes={props.likes} likedBy={props.likedBy} likedByImg={props.likedByImg} liked={props.liked} />
//                 {/* <div class="linha2">
//                     <img src={props.likedByImg} alt="" />
//                     <h3>Curtido por <b>{props.likedBy}</b> e <b>{props.likes} pessoas</b></h3>
//                 </div> */}
//             </div>
//         );
//     }

//     return (
//         <div>
//             <UpperBar userImg={post.userImg} userName={post.userName} />

//             {(!liked) ? <img src={post.postImg} alt="" class="imagem" onClick={like} />
//                       : <img src={post.postImg} alt="" class="imagem" onClick={dislike} />}

//             <LowerBar likedBy={post.likedBy}
//                 likedByImg={post.likedByImg}
//                 likes={likes}
//                 liked={liked}
//                 like={like}
//                 dislike={dislike} />
//         </div>
//     );
// }

export default function Posts({userName, userImg, postImg, likedBy, likedByImg, likes}) {
    const [sliked, setSLiked] = useState(false);
    const [slikes, setSLikes] = useState(likes);

    const like = () => {
        setSLiked(true);
        setSLikes(likes + 1);
        // console.log(likes);
    };
    const dislike = () => {
        setSLiked(false);
        setSLikes(likes);
        // console.log(likes);
    };

    return (
        <div>
            <div class="barra-superior">
                <div>
                    <img src={userImg} alt={`Avatar de ${userName}`} />
                    <h2>{userName}</h2>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>

            <img src={postImg} alt={`Post de ${userName}`} class="imagem" onClick={like} />
            {/* {(!liked) ? <img src={post.postImg} alt="" class="imagem" onClick={like} />
                      : <img src={post.postImg} alt="" class="imagem" onClick={dislike} />} */}

            <div class="barra-inferior">
                <div class="linha1">
                    <div>
                        {(!sliked) ? <ion-icon name="heart-outline" class="md hydrated" onClick={like}></ion-icon>
                                  : <ion-icon name="heart" class="heart-icon md hydrated" onClick={dislike}></ion-icon>}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div>{(sliked) ? 
                    <div class="linha2">
                        <img src="https://q46bt2.csb.app/Imagens/zane.png" alt="Curtido por crazyBoyo" />
                        <h3>Curtido por <b>crazyBoyo</b> e <b>{slikes.toLocaleString("pt-br")} pessoas</b></h3>
                    </div>
                            : 
                    <div class="linha2">
                        <img src={likedByImg} alt={`Curtido por ${likedBy}`} />
                        <h3>Curtido por <b>{likedBy}</b> e <b>{slikes.toLocaleString("pt-br")} pessoas</b></h3>
                    </div>}
                </div>
            </div>
        </div>
        
    );
}