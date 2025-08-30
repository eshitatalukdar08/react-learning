const Input = ({colorValue, setColorValue, isDarkText, setIsDarkText}) => {
    return ( 
        <form onSubmit={(e)=>e.preventDefault()}>
            <input
            className="input"
            type="text"
            placeholder="Add Color Name"
            required
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
            />
            <br/>
            <button
            className="button"
            type="button"
            onClick={() => setIsDarkText(!isDarkText)}>
                Toggle Text Color
            </button>
        </form>
    );
}

export default Input;