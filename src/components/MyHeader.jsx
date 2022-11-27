import "./MyHeader.css"

function MyHeader(props) {
    return (
        <h1 id="main-header">{ props.text }</h1>
    );
};

export default MyHeader