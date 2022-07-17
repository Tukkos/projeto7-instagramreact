// export default function LowerBar(props) {
//     return (
//         <div class="barra-inferior">
//             <div class="linha1">
//                 <div>
//                     {(!props.liked) ? <ion-icon name="heart-outline" onClick={props.like}></ion-icon>
//                               : <ion-icon class="heart-icon" name="heart" onClick={props.dislike}></ion-icon>}
//                     <ion-icon name="chatbubble-outline"></ion-icon>
//                     <ion-icon name="paper-plane-outline"></ion-icon>
//                 </div>
//                 <ion-icon name="bookmark-outline"></ion-icon>
//             </div>
//             <div class="linha2">
//                 <img src={props.likedByImg} alt="" />
//                 <h3>Curtido por <b>{props.likedBy}</b> e <b>{props.likes} pessoas</b></h3>
//             </div>
//         </div>
//     );
// }