import './BackIcon.scss';

function BackIcon() {


return (
    <div className="backIcon__BackIcon">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8m-4-4v8"/></g></svg> */}
        <svg  xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
            <polyline strokeLinecap="round" strokeLinejoin="round" points="17.41 22.82 6.59 12 17.41 1.18"/>
        </svg>
    </div>
    );
}
export default BackIcon;

