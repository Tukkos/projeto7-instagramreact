export default function User(props) {
    return (
        <div class="perfil">
            <img src={props.userImg} alt="" class="perfil" />
            <div>
                <h2>{props.userId}</h2>
                <h2>{props.userName}</h2>
            </div>
        </div>
    );
}