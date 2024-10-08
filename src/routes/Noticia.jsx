import { NoticiaStyle } from "../css/NoticiaStyle";

const Noticia = ({title, content, imgpath}) => {
    let formattedContent = "";
    let paragraphs = [];
    for (let i = 0; i < content.length; i++) {
        let element = <p key={i}>{content[i]}</p>
        paragraphs.push(element); 
    }

    return (
        <NoticiaStyle>
        <div className="article">
            <div className="article-title">{title}</div>
            <div className="article-content">
                <img className="article-image" src={imgpath} />
                {paragraphs}
            </div>
        </div>
        </NoticiaStyle>
    );
}

export default Noticia;