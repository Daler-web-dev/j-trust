import axios from "axios";


const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`

export const sendMessages = async (data: string) => {
    try {

        const res = await axios.post(URL, {
            chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
            parse_mode: "html",
            text: data,
        })

        return { res }
    } catch (error) {
        console.log(error);
    }
}
