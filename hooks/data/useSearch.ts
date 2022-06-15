import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import pagesApi from "../../api/pages/pagesApi";

export function useSearch(){
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        console.log(searchResults);
    }, [searchResults]);
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const tryFetching = async (nickname : string, nim : string) => {
        setIsLoading(true);
        try{
            const results = await pagesApi.searchPage(nickname, nim);
            setSearchResults(results);
        }
        catch(e){
            console.log(e);
        }
        setIsLoading(false);
    }

    const categorizeFetching = async (search: string) => {
        let data
        if(/[a-zA-Z]/.test(search) == false){
            tryFetching("", search);
        }
        else{
            tryFetching(search, "");
        }
        return data
    }

    const [, cancel] = useDebounce(
        async () => {
            if(search.length > 0){
                let data = await categorizeFetching(search);
                if(data){
                    setSearchResults(data);
                }
            }else{
                let data = await pagesApi.getAllPages();
                setSearchResults(data);
            }
        },
        500,
        [search]
      );

    
    return { search, handleSearch, searchResults, setSearch, isLoading }
}