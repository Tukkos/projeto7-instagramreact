import Coluna1 from "./Coluna1";
import Coluna2Sidebar from "./Coluna2Sidebar";
import InferiorBarMobile from "./InferiorBarMobile";

export default function Conteudo() {
    return (
        <div class="conteudo">
            <Coluna1 />
            <Coluna2Sidebar />
            <InferiorBarMobile />
        </div>
    );
}