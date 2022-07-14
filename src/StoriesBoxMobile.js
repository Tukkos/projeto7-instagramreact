function Story(props) {
    return (
        <div class="stories">
            <img src="./Imagens/stories_background.png" alt="" class="new-story" />
            <img src={props.userImg} alt="" class="story" />
            <h3>{props.userName}</h3>
        </div>
    );
}

export default function StoriesBox() {
    return (
        <div class="stories-box-mobile">
            <Story userImg="aaa" userName="aaa" />
            <Story userImg="aaa" userName="aaa" />
        </div>
    );
}