function WordInput(props) {

    const inputIdStr = "input-word"

    //event handler
    const handleClick = () => {
        let inputElement = document.getElementById(inputIdStr)
        if (inputElement) {
            let userWord = inputElement.value
            props.functionToCallWhenButtonIsClicked(userWord)
        };
    };

    return (
        <div>
            <input id={inputIdStr} type="text" placeholder="enter a word"/>
            <button onClick={ handleClick }>click me!</button>
        </div>
    );
};

export default WordInput