  
import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './search.module.css'
import SearchIcon from '@material-ui/icons/Search';

export default function Search() {
  //fake data
  const filmdata = [{"id":1,"title":"test"},{"id":2,"title":"hbo"},{"id":3,"title":"nba"}]
  //
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])
  
 // const searchEndpoint = (query) => `/api/film?title=${query}`
 // fetch(searchEndpoint(userinput))

  const onChange = useCallback((event) => {
    const query = event.target.value
    setQuery(query)
    if(query.length>0)
    setResults(filmdata.filter(film => film.title.toLowerCase().includes(query)))
    else
    setResults([])
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div
      className={styles.container}
      ref={searchRef}
    >
      <input
        className={styles.search}
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Search movies'
        type='text'
        value={query}
      />
      <SearchIcon></SearchIcon>
      { active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map(({ id, title }) => (
            <li className={styles.result} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) }
    </div>
  )
}
