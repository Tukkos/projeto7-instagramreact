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
        <div class="stories-box">
            <div>
                <Story userImg="aaa" userName="aaa" />
                <Story userImg="aaa" userName="aaa" />
            </div>
            <ion-icon name="chevron-forward-circle" class="setinha"></ion-icon>
        </div>
    );
}