import {useState,useEffect} from "react"
import axios from "axios"
import SingleContent from "../../SingleContent/SingleContent";

const Series = () => {
    const [content, setcontent] = useState([]);
    const [page,setPage] = useState(1)
    const fetch=async () =>{
        const {data} =await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=0344aa98cb8be833b25b14a2ff5466ef`)
        console.log(data.results);
        setcontent(data.results);
    };
    useEffect(() => {
        fetch();
    }, []);
    return (
        <div>
            <span className="pageTitle">Series</span>
            <div className="trending">
                {
                    content && content.map((c) =>
                        <SingleContent key={c.id} id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type="tv"
                            vote_average={c.vote_average}
                        />)
                }
            </div>
        </div>
    )
}

export default Series
