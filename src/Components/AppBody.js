import { useState } from "react";
import '../Css/appBody.css';

function AppBody({ mode , theme , setTheme}) {
    let isDark = mode === 'dark';
    const [formText, setFormText] = useState('');

    theme && ((() => {
        document.body.style.backgroundColor = theme.bodyColor;
        document.body.style.color = theme.textColor;
    })());
    const textAreaStyle = theme? ({backgroundColor: theme.layerThree, color: theme.textColor}): ({ backgroundColor: isDark ? '#353535' : 'white', color: !isDark ? 'gray' : 'white' });
    return (
        <div >
            <div className="mx-5 py-5">  {/*style={theme && {backgroundColor: theme.bodyColor}}*/}
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Enter your text
                </label>
                <textarea
                    className={`form-control`}
                    id="exampleFormControlTextarea1"
                    rows={6}
                    style={textAreaStyle}
                    value={formText}
                    onChange={(event) => { setFormText(event.target.value) }}
                />
                {/* <GeneralButton id="UpperCaseBtn" buttonText="UPPERCASE" onClick={textToUpperCase} /> */}
                <ButtonList text={formText} setText={setFormText} theme={theme}/>
                <TextDetails text={formText} />
            </div>
        </div>

    );
}

function GeneralButton({ id, buttonText, onClick, theme }) {
    console.log(theme);
    return (
        <button type="button" style={{background: theme? theme.buttonColor: '#3399ff'}} id={id} className="btn mt-3 me-2" onClick={onClick} color="black">
            {buttonText}
        </button>
    );
}

const upperCase = (text, setText) => {
    let newText = text.toUpperCase();
    setText(newText);
}

const lowerCase = (text, setText) => {
    let newText = text.toLowerCase();
    setText(newText);
}

const reverseText = (text, setText) => {
    let reverseString = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reverseString += text[i];
    }
    setText(reverseString);
}

const clearText = (text, setText) => {
    setText('');
}

function ButtonList({ text, setText, theme }) {
    return (
        <>
            <GeneralButton id="UpperCaseBtn" buttonText="UPPERCASE" theme={theme} onClick={() => upperCase(text, setText)} />
            <GeneralButton id="LowerCaseBtn" buttonText="Lowercase" theme={theme} onClick={() => lowerCase(text, setText)} />
            <GeneralButton id="reverseStringBtn" buttonText="Reverse" theme={theme} onClick={() => reverseText(text, setText)} />
            <GeneralButton id="ClearBtn" buttonText="Clear" theme={theme} onClick={() => clearText(text, setText)} />
        </>
    );
}

function TextDetails({ text }) {
    let trimmedText = text.replace(/\s+/g, ' ').trim();
    let totalWords = trimmedText === ''? 0:trimmedText.split(' ').length;
    return (
        <h6 className="mt-2"> total words: {totalWords} total texts: {text.length} </h6>
    );
}

export default AppBody;