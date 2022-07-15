import Column1 from "./Column1/Column1";
import Column2Sidebar from "./Column2Sidebar/Column2Sidebar";
import InferiorBarMobile from "./InferiorBarMobile/InferiorBarMobile";

export default function Conteudo() {
    return (
        <div class="conteudo">
            <Column1 />
            <Column2Sidebar />
            <InferiorBarMobile />
        </div>
    );
}