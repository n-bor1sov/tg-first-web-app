import React from "react"
import './Challenge.css'
import ProgressBar from "../ProgressBar/ProgressBar";

const images = [
    "https://downloader.disk.yandex.ru/preview/66b96c0b8c86f9eca9e36b89e904793c07ef89bea4fd3fcf074ec6e2ba9c7edc/64a2a648/VKAaGjA6mvI5Iee-Do844qKFN9_nflGC39FCapIuMsDp3aOGEp9FLPzZl7YS2fupimi9F4r3zPafvnvC3RE4CQ%3D%3D?uid=0&filename=0.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048",
    "https://downloader.disk.yandex.ru/preview/e814fd434380ed747074273a1ee63bb41162f8503a144837f5d699f0789caa96/64a2a663/VKAaGjA6mvI5Iee-Do844qKFN9_nflGC39FCapIuMsDp3aOGEp9FLPzZl7YS2fupimi9F4r3zPafvnvC3RE4CQ%3D%3D?uid=0&filename=1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048",
    "https://downloader.disk.yandex.ru/preview/163cb2cf1d29652272598075b17af696217db37289f102d2d556dc62e3cd2c66/64a2a676/iF4brzzxLtGMfsf2tErT1UrReJQBBGwJiUSIy3MQV_TxbowqZQ-NHg6-P8L186oELY80HI3w06qfCvZ3uCCoxA%3D%3D?uid=0&filename=3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048",
    "https://downloader.disk.yandex.ru/preview/163cb2cf1d29652272598075b17af696217db37289f102d2d556dc62e3cd2c66/64a2a676/iF4brzzxLtGMfsf2tErT1UrReJQBBGwJiUSIy3MQV_TxbowqZQ-NHg6-P8L186oELY80HI3w06qfCvZ3uCCoxA%3D%3D?uid=0&filename=3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048"
]

const Challenge = (item) => {
    console.log(item);
    return (
        <div className={"challenge"}>
            <div className={"challenge-left-module"}>
                <img src={images[item.challenge.info.id]} alt="Сhallenge reward picture" />
                <div className="rewards">
                    <div className={"points"}>{item.challenge.info.points} points</div>
                    <div className={"gems"}>{item.challenge.info.gems} gems</div>
                </div>
            </div>
            <div className={"challenge-right-module"}>
                <ProgressBar
                    type = "Challenge Bar"
                    name = {item.challenge.info.title}
                    need = {item.challenge.info.need}
                    actual = {item.challenge.progress?.progress}
                    description = {item.challenge.info?.description}
                />  
            </div>
        </div>
    )
};

export default Challenge;
