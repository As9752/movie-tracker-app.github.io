import axios from "axios"
import { useState, useEffect } from "react";
import CustomPagination from "../../Pagination/CustomPagination";
import SingleContent from "../../SingleContent/SingleContent";
import "./Trending.css"

const Trending = () => {
    const [content, setcontent] = useState([]);
    const [page,setPage] = useState(1)
    const fetch = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=0344aa98cb8be833b25b14a2ff5466ef`);

        console.log(data.results);
        setcontent(data.results);
    };
    useEffect(() => {
        fetch();
    }, []);
    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {
                    content && content.map((c) =>
                        <SingleContent key={c.id} id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />)
                }
            </div>
            {/* //<CustomPagination/> */}
        </div>
    )
}

export default Trending
