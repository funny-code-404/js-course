import {createPhoto} from "@components/photoComponent/photo";
import {createInfoDiv} from "@components/infoComponent/info";
import {createBiography} from "@components/biographyComponent/biography";
import {createSignature} from "@components/signatureComponent/signature";
import {createDate} from "@components/dateComponent/date";
import "./style.scss"

const divContainer = document.getElementById('container');

divContainer.append(createPhoto())
divContainer.append(createInfoDiv())
divContainer.append(createBiography())
divContainer.append(createDate())
divContainer.append(createSignature())

console.log(divContainer)