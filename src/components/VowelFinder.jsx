function VowelFinder(props) {
    let vowels = 'aeiouAEIOU'
    let letters = []

    const renderHighlightVowels = () => {
        if (props.word === "") {
            return null 
        }

        for (let i = 0; i < props.word.length; i++) {
            if (vowels.includes(props.word[i])) {
                letters.push(<span className="highlight">{ props.word[i] }</span>)
            } else {
                letters.push(<span>{ props.word[i] }</span>) 
            }
        }
        return letters
    }

    return (
        <div>
            <h1>Your word: { renderHighlightVowels() }</h1>
        </div>
    )
};

export default VowelFinder