export default function UpperBar(props) {
    return (
        <div class="barra-superior">
            <div>
                <img src={props.userImg} alt="" />
                <h2>{props.userName}</h2>
            </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
    );
}