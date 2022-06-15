import { useState } from "react";
import {useDebounceEffect} from '../other/useDebounceEffect'

export function useSearch(){
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    useDebounceEffect(() => {
        
    }, 0.5, [])
}