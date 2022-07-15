export default function Posts(props) {
    const post = props.postsInfo;
    return (
        <div>
            <div class="barra-superior">
                <div>
                    <img src={post.userImg} alt="" />
                    <h2>{post.userName}</h2>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>

            <img src={post.postImg} alt="" class="imagem" />

            <div class="barra-inferior">
                <div class="linha1">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="linha2">
                    <img src={post.likedByImg} alt="" />
                    <h3>Curtido por <b>{post.likedBy}</b> e <b>{post.likes} pessoas</b></h3>
                </div>
            </div>
        </div>
    );
}