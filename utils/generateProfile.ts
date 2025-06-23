import { blurhashAsGradients } from 'blurhash-gradients';

interface Profile {
	userName: string;
    displayName: string;
    userAvatar: string;
    posts: Array<string>;
    stories: Array<string>;
    numberOfFollowers: number;
    numberOfFollowing: number;
    bio: string;
}

export function generateProfile(data:Profile):HTMLElement {

    const styleToString = (style) => {
        return Object.keys(style).reduce((acc, key) => (
            acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + style[key] + ';'
        ), '');
    };

    const makeModal = (el) => {

        // <div class:list={[ 'hello modal__Modal', className ]} >  
        //     <div class='modal__Content'>
        //         <slot />
        //     </div>
        //     <div class='modal__Backdrop'></div>
        // </div>


        let r = `
            <div class'hello modal__Modal closed'>  
                <div class='modal__Content'>${el}</div>
                <div class='modal__Backdrop'></div>
            </div>
        `;
    }

    const blurImage = (hash) => {
        const css = blurhashAsGradients(hash, {
                width: 8, //The horizontal resolution of the gradients
                height: 8, //The vertical resolution of the gradients
                blur: 20, //The amount of blur to apply to the gradients (in pixels). Increase this on large display sizes.
        });
        let r = `<div class="blurImage__BlurImage" style="height:100%;width:100%;${ styleToString(css) }"></div>`;
        return r;
    }

    const makeStories = (stories) => {
        // <div class='profile__Stories_story'>
        //     <StoryIcon hash={story.hash} />
            //     <a class="storieIcon" href=""> 
            //         <div class="storieIcon__blurImage_container" > 
            //             <div class="storieIcon__BlurImage" >
            //             </div> 
            //             </div> 
            //             <div class="storieIcon__blurImage_border" style="" >
            //         </div> 
            //     </a> 
        //     <div class="storyLable">{story.label}</div>
        // </div>

        let r = ''
        stories.forEach(element => {
            r += `<div class='profile__Stories_story '>
                    <a class="storieIcon" href="/stories/">
                        <div class="storieIcon__blurImage_container noBorder"> 
                            <div class="storieIcon__BlurImage" >
                                ${blurImage(element.hash)}
                            </div>
                        </div>
                    </a>
                    <div class="storyLable">${element.label}</div>
                </div>`;
        });

        return r
    }

    const makePosts = (posts) => {
        let r = '';
         posts.forEach(post => {
           r += `<div class='profile__Grid_item'><a href="${"/post/" + encodeURI(encodeURIComponent(post))}">${blurImage(post)}</a></div>`;
        });

        return r;
    }

    const base = document.createElement("div");
    base.classList.add("profile__Profile");
    const profile = `

    <div class='profile__Data'>
        <div class='profile__Data_avatar'>
            ${blurImage( 'LEHV6nWB2yk8pyo0adR*.7kCMdnj' )}
        </div>
        <div class='profile__Data_data'>
            <div class='profile__Data_username'>${data.userName}</div>
            <div class='profile__Data_following'><div class="userIcon__UserIcon"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3H8z"/></svg></div>Following</div>
            <a class='profile__Data_message' href="/chats/">Message</a>
            <div class='profile__Data_add'>
            </div>
            <div class='profile__Data_option'>
            </div>
        </div>
        <div class='profile__Stats_stats'>
            <div class='profile__Stats_post'><span class='profile__Stats_number'>${data.posts.length }</span> posts</div>
            <div class='profile__Stats_followers'><span class='profile__Stats_number'>${data.numberOfFollowers }</span> followers</div>
            <div class='profile__Stats_following'><span class='profile__Stats_number'>${data.numberOfFollowing }</span> following</div>
        </div>
        <div class='profile__Bio'>
            <span class='profile__Bio_displayName'>${data.displayName }</span><br/>
            Followed by _thewanderingartteacher_, wassaicproject and 130 more
        </div>
    </div>
    <div class='profile__Stories'>
        ${makeStories( data.stories )}
    </div>
    <div class='profile__Icons'>
        <div class='profile__Icons_grid'></div>
        <div class='profile__Icons_feed'></div>
        <div class='profile__Icons_'></div>
        <div class='profile__Icons_bookmark'></div>
    </div>
    <div class='profile__Grid'>
        ${makePosts( data.posts )}
    </div>
    `;

    base.innerHTML = profile;
    return base;
}