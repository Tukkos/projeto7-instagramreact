import StoriesBox from "./StoriesBox";
import StoriesBoxMobile from "./StoriesBoxMobile";
import PostsColumn from "./PostsColumn";

export default function Column1() {
    return (
        <div class="coluna-1">
            <StoriesBox />
            <StoriesBoxMobile />
            <PostsColumn />
        </div>
    );
}