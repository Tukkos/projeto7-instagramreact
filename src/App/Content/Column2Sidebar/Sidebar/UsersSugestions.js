export default function UsersSugestions(props) {
    return (
            <div class="outro-perfil">
                <div>
                    <img src={props.sugImg} alt="" />
                    <div>
                        <h2>{props.sugName}</h2>
                        <h3>Segue você</h3>
                    </div>
                </div>
                <h3>Seguir</h3>
            </div>
    );
}