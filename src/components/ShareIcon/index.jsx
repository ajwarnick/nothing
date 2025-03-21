import './ShareIcon.scss';

function ShareIcon({path}) {
    console.log(path);

    async function share() {

        if(navigator){
            // console.log(navigator)
        }

        // try {
        //   await navigator.share({
        //     text: 'Follow me to get more web development content.',
        //     url: 'https://ilxanlar.medium.com'
        //   })
        // } catch (error) {
        //   console.log('Sharing failed!', error)
        // }
    }

return (
    <div className="post__ShareIcon" onClick={share}>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6l-4-4l-4 4m4-4v13"/></svg>
    </div>
    );
}
export default ShareIcon;