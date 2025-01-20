import './StoryIcon.scss';


function StoryIcon() {

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const makeGradient = () => {
        var colors = ["#96e09a", "#96e0bf", "#b7e096", "#e096dc", "#e09a96", "#96dce0"];
       return `linear-gradient(to bottom, ${colors[getRandomInt(0, colors.length-1)]} 0%, ${colors[getRandomInt(0, colors.length-1)]} 50%, ${colors[getRandomInt(0, colors.length-1)]} 100%)`;
    }


    var bc = { "backgroundImage": makeGradient() };

return (
    <div className='storieIcon'>
        <div className='storieIcon__border' style={bc}></div>
    </div>
    );
}
export default StoryIcon;