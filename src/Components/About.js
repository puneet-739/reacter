function About({theme}) {
    
    theme && ((() => {
        document.body.style.backgroundColor = theme.bodyColor;
        document.body.style.color = theme.textColor;
    })());
    return(
        <p className="container mt-5"> Reacter: This is a React learning project. </p>
    );
}

export default About;