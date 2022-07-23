import classNames from "classnames";
import {useState, useEffect} from "react";
import elasticlunr from 'elasticlunr';
import SearchContext from "./searchContext";

export interface SearchProps {
    searchIndex: object,
    className?: string,
}

export function SearchBar({}) {
    return (
        <form>
            <input id="searchTerm" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </form>
    )
}

export default function SearchResults({searchIndex, className}: SearchProps) {

    const idx = elasticlunr.Index.load(searchIndex);

    const [searchTerm, setSearchTerm] = useState<string | undefined>();
    const [searchResults, setSearchResults] = useState<any[] | undefined>();

    useEffect(() => {
        setSearchResults(idx.search(searchTerm));
    }, [searchTerm]);

    return (
        <div className={classNames('search', className)}>
            <form>
                <input id="searchTerm" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </form>
            <ul>
                {searchResults && searchResults.map((searchResult) => (
                    <li key={searchResult.ref}>{idx.documentStore.getDoc(searchResult.ref).title}</li>
                ))}
            </ul>
        </div>
    )
}