import { blurhashAsGradients } from 'blurhash-gradients';

interface Profile {
    key: number;
	userName: string;
    displayName: string;
    message: Array<object>;
    time: string;
    hash: string;
    following: boolean; 
    online: boolean;
}

export function generateChat(data:Profile):HTMLElement {

    const generateEliza = (lines) => {

        return `
            <ul class='eliza__message_thread'>
                ${lines.map(line => `<li class="${line.usr}">${line.msg}</li>`).join("")}
            </ul>
            <div class='eliza__message_thinking'><div class="dot-pulse"></div></div>
                <form class='eliza__message_form'>
                    <label >
                        <input 
                            class='eliza__message_input'
                            type="text" 
                            value=''
                            placeholder="Message"
                        />
                    </label>
                    <input class='eliza__message_submit' type="submit" value="Send" />
                </form>
            </div>
        `;
    }

    const styleToString = (style) => {
        return Object.keys(style).reduce((acc, key) => (
            acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
        ), '');
    };

    const blurImage = (hash) => {
        const css = blurhashAsGradients(hash, {
                width: 8, //The horizontal resolution of the gradients
                height: 8, //The vertical resolution of the gradients
                blur: 20, //The amount of blur to apply to the gradients (in pixels). Increase this on large display sizes.
        });
        let r = `<div class="blurImage__BlurImage" style="height:100%;width:100%;${ styleToString(css) }"></div>`;
        return r;
    }

    const chat = document.createElement("div");
    chat.classList.add("chat__chat");
    chat.dataset.chatid = data.key.toString();
    const inner = `
        <div class="chat__chat_preview">
            <div class="chat__chat_preview__icon online">
                ${blurImage( data.hash )}
            </div>
            <div class='chat__chat_preview__username'>${data.userName}</div>
            <div class='chat__chat_preview__message'>
                <p class='chat__chat_preview__message_p'>${data.message}</p>
                <span class='chat__chat_preview__message_hour'>${data.time}</span>
            </div>
        </div>
        <dir class="chat__chat_chat">
            <div class='chat__chat_header'>
                <div class="backIcon__BackIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z"/></svg>
                </div>
                <div class='chat__chat_header__storyIcon'>
                    ${blurImage( data.hash )}
                </div>
                
                <div class='chat__chat__header_meta'>
                    <div class='chat__chat__header_meta_username'>${data.userName}</div>
                    <div class='chat__chat__header_meta_active'>Active ${data.time} ago</div>
                </div>
            </div>
            <div class='chat__chat_eliza'>
                ${generateEliza( data.message )}
            </div>
            <div class='chat__chat_footer'></div>
        </dir>
    `;
    chat.innerHTML = inner;
    return chat;
}