import UpperBar from "./UpperBar";
import LowerBar from "./LowerBar";

export default function Posts(props) {
    const post = props.postsInfo
    return (
        <div>
            <UpperBar userImg={post.userImg} userName={post.userName} />

            <img src={post.postImg} alt="" class="imagem" />

            <LowerBar likedBy={post.likedBy} likedByImg={post.likedByImg} likes={post.likes} />
        </div>
    );
}