import { dogImageGet,randomDogImageGet } from "../dogApi/dogApi";
export async function fetchData(name, func) {
    const data = await dogImageGet(name);
    const urlImg = data.data.message;
    func(urlImg);
    console.log('loading successful');
};

export async function fetchRandomData(func) {
    const data = await randomDogImageGet();
    const urlImg = data.data.message;
    func(urlImg);
    console.log('loading successful');
    }