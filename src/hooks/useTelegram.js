const tg = window.Telegram.WebApp;

export function useTelegram() {

    return {
        user: tg.initDataUnsafe?.user
    }
}
