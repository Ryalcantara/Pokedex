import { useState, useEffect } from 'react'
/**
 * @USEPOKEPAGINATE
 * use to paginate the list of pokemons
 * it takes the default url and returns
 * 1. result -> pokemon list e.g [{name: 'bulbasaur', url: 'https://pokeapi.co/....'}, {name: '', ...}]
 * 2. previous -> a function that triggers a previous section of pokemon
 * 3. next -> a function that triggers a next section of pokemon
 * @param {string} url
 * @returns
 */
export default function usePokePaginate(url) {
    const [paginateData, setPaginateData] = useState({ prev: null, next: null });
    const [result, setResult] = useState([]);

    useEffect(() => {
        //fetch the default data
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setResult(res.results)
                setPaginateData({ prev: res.previous, next: res.next });
            });

    }, []);

    //goto next section
    function next() {
        if (paginateData.next) {
            fetch(paginateData.next)
                .then((res) => res.json())
                .then((res) => {
                    setResult(res.results)
                    setPaginateData({ next: res.next, prev: res.previous });
                });
        }
    }

    //goto prev section
    function previous() {
        if (paginateData.prev) {
            fetch(paginateData.prev)
                .then((res) => res.json())
                .then((res) => {
                    setResult(res.results)
                    setPaginateData({ prev: res.previous, next: res.next });
                });
        }
    }

    return [result, previous, next];
}