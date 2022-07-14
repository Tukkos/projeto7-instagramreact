function BarraInferior(props) {
    return (
        <div class="barra-superior">
            <div>
                <img src={userImg} alt="" />
                <h2>{userName}</h2>
            </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
    );
}

function BarraSuperior(props) {
    return (
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
                <img src="./Imagens/axton.png" alt="">
                <h3>Curtido por &#160</h3>
                <h2>commando &#160</h2>
                <h3>e &#160</h3>
                <h2>254.365 pessoas</h2>
            </div>
        </div>
    );
}

function Posts(props) {
    return (
        <div>
            <BarraSuperior userImg="" userName="" />
            <img src={props.postImg} alt="" class="imagem"></img>
            <BarraInferior />
        </div>
    );
}

export default function PostColumn() {
    return (
        <div class="coluna-posts">
            <Posts postImg="" />
        </div>
    );
}