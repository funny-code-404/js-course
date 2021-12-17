import {createPhoto} from "./components/photoComponent/photo";
import {createInfoDiv} from "./components/infoComponent/info";
import {createBiography} from "./components/biographyComponent/biography";
import {createSignature} from "./components/signatureComponent/signature";
import {createDate} from "./components/dateComponent/date";
import "./style.scss"

export function cvComponent (containerForCV) {
    containerForCV.append(createPhoto())
    containerForCV.append(createInfoDiv())
    containerForCV.append(createBiography())
    containerForCV.append(createDate())
    containerForCV.append(createSignature())
}





