function BarraInferior(props) {
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
                <img src="./Imagens/axton.png" alt="" />
                <h3>Curtido por &#160</h3>
                <h2>commando &#160</h2>
                <h3>e &#160</h3>
                <h2>254.365 pessoas</h2>
            </div>
        </div>
    );
}

function BarraSuperior(props) {
    return (
        <div class="barra-superior">
            <div>
                <img src="https://www.gamereactor.pt/media/46/borderlands3recension_2964633b.png" alt="" />
                <h2>notSoTiny</h2>
            </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
    );
}

function Posts(props) {
    return (
        <div>
            <BarraSuperior userImg="https://www.gamereactor.pt/media/46/borderlands3recension_2964633b.png" userName="notSoTiny" />
            <img src="https://www.gamereactor.pt/media/46/borderlands3recension_2964633b.png" alt="" class="imagem" />
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