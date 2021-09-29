import { img_300 } from "../Config/Config"
import "./SingleContent.css"
import { Badge } from "@material-ui/core";
const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    return (
        <div className="media">
        <Badge badgeContent={vote_average} color={vote_average>6?"primary":"secondary"}/>
        <div>
           <img className="poster" src={`${img_300}/${poster}`} alt={title}/>
           <b className="title">{title}</b>
               <span className="subTitle">{media_type==="tv"?"TV series":"MOVIES"}
               <span className="subTitle">{date}</span>
               </span>
        </div>
        </div>
    );
}

export default SingleContent
