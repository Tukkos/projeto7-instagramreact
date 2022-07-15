import StoriesBox from "./StoriesBox/StoriesBox";
import StoriesBoxMobile from "./StoriesBox/StoriesBoxMobile";
import PostsColumn from "./PostsColumn/PostsColumn";

export default function Column1() {
    return (
        <div class="coluna-1">
            <StoriesBox />
            <StoriesBoxMobile />
            <PostsColumn />
        </div>
    );
}