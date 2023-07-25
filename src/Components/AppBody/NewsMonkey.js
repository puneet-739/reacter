function NewsMonkey({theme}) {
    theme && ((() => {
        document.body.style.backgroundColor = theme.bodyColor;
        document.body.style.color = theme.textColor;
    })());
    return (<div>News Monkey</div>);
}

export default NewsMonkey;