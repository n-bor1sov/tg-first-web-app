import React from "react"
import './Challenge.css'
import Button from "../Button/Button"
import ProgressBar from "../ProgressBar/ProgressBar";

const images = [
    "https://1.downloader.disk.yandex.ru/preview/fdbb9d99fe67471361f1941fa08c805b005a949c0c514316e271a3d5e3ef4007/inf/VKAaGjA6mvI5Iee-Do844qKFN9_nflGC39FCapIuMsDp3aOGEp9FLPzZl7YS2fupimi9F4r3zPafvnvC3RE4CQ%3D%3D?uid=590435900&filename=0.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=590435900&tknv=v2&size=1898x947",
    "https://1.downloader.disk.yandex.ru/preview/fdbb9d99fe67471361f1941fa08c805b005a949c0c514316e271a3d5e3ef4007/inf/VKAaGjA6mvI5Iee-Do844qKFN9_nflGC39FCapIuMsDp3aOGEp9FLPzZl7YS2fupimi9F4r3zPafvnvC3RE4CQ%3D%3D?uid=590435900&filename=0.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=590435900&tknv=v2&size=1898x947",
    "https://2.downloader.disk.yandex.ru/preview/d41a5335c7ebe94485c74bbfbb0c9248aa2726e701e326e98a6eb82f174cc38f/inf/rmhKwYjmw1kEt__riQUMf-H9CYlqr-QlLtTQ848KYMU2eD7Ke1Bcdj2pUKTlD7UwG2bRTF7g0GsAM0vVYOgoqw%3D%3D?uid=590435900&filename=2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=590435900&tknv=v2&size=1898x947",
    "https://2.downloader.disk.yandex.ru/preview/9d38f4db83ebf77f322e885ec3d5fd27df29369da041915b0f79d3b4923a628e/inf/iF4brzzxLtGMfsf2tErT1UrReJQBBGwJiUSIy3MQV_TxbowqZQ-NHg6-P8L186oELY80HI3w06qfCvZ3uCCoxA%3D%3D?uid=590435900&filename=3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=590435900&tknv=v2&size=1898x947"
]

const Challenge = (item) => {
    console.log(item);
    const finishHandler = () => {
    }
    return (
        <div className={"challenge"}>
            <div className={"challenge-left-module"}>
                <img src={images[item.challenge.info.id]} alt="There should be a challenge reward picture" />
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
