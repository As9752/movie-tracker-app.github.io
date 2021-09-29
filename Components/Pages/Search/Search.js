import { TextField } from "@mui/material";
import axios from "axios"
import { useState, useEffect } from "react";
import CustomPagination from "../../Pagination/CustomPagination";
import SingleContent from "../../SingleContent/SingleContent";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@restart/ui/esm/Button";


// import "./Trending.css"
const Search = () => {
    const [content,setContent] = useState([])
    const [page,setPage]=useState(1);
    const [searchText, setSearchText] = useState("")
    const [type,setType]=useState(0);
    const fetch = async () =>{
        try{
        const {data}=await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=0344aa98cb8be833b25b14a2ff5466ef&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
        //console.log(data.results);
        setContent(data.results);
        }
        catch(error){
        console.error(error);
        }
    };
    useEffect(() => {
        window.scroll(0,0);
        fetch();
    }, [type]);
    return (
        <div>
        <div className="search">
        <TextField
        style={{flex:1}}
        className="searchBox"
        label="Search"
        variant="filled"
        onChange={(e) => setSearchText(e.target.value)}
        />
        <Button  onClick={fetch} variant="contained" style={{marginleft:10}}> <SearchIcon/></Button>
        </div>

            {/* <span className="pageTitle">Search</span> */}
            <div className="trending">
                {
            content && content.map((c) =>(
                        <SingleContent key={c.id} 
                        id={c.id}
                         poster={c.poster_path}
                         title={c.title || c.name}
                         date={c.first_air_date || c.release_date}
                         media_type={type?"tv":"movie"}
                        vote_average={c.vote_average}
                        />))
                }
                {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
            </div>
        </div>
    )
}

export default Search
