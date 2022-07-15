export default function Story(props) {
    return (
        <div class="stories">
            <img src="https://q46bt2.csb.app/Imagens/stories_background.png" alt="" class="new-story" />
            <img src={props.userImg} alt="" class="story" />
            <h3>{props.userName}</h3>
        </div>
    );
}