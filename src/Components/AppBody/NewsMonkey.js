import { useState } from 'react';
import defaultNewsImage from '../../assests/Images/defaultNewsPaperImage.jpg'

const newsApiResponse = require('../../Services/NewsAPIServices');

function NewsMonkey({ theme }) {
    const [newsCard, setNewsCard] = useState(null);
    theme && ((() => {
        document.body.style.backgroundColor = theme.bodyColor;
        document.body.style.color = theme.textColor;
    })());

    newsApiResponse.then((res) => {
        if(res.status === 'ok') {
            setNewsCard(res.articles);
        }
    })

    if(newsCard != null) {
        const cardList = newsCard.map((element) => <Card imageUrl={element.urlToImage} title={element.title} description={element.description} url={element.url}/>);
        return (<div className='d-flex flex-wrap justify-content-center'> {cardList} </div>);
    } else {
        return (<p> NewsMonkey </p>);
    }
}

function Card({imageUrl, title, description, url}) {
    // if(imageUrl === null) return (<div></div>);
    return (<div className="card my-2 mx-2" style={{ width: "18rem" }}>
        <img className="card-img-top" src={imageUrl || defaultNewsImage} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {description}
            </p>
            <a href={url} target="_blank" className="btn btn-primary">
                Go to site
            </a>
        </div>
    </div>);
}

export default NewsMonkey;