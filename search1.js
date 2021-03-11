  
import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './search.module.css'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  Button:{
    marginTop:'10px'
  },
  searchIcon:{
    paddingTop: '10px',
  }
})

export default function Search() {
  
  const moviedata = [
    {"id":1,"title":"test"},
    {"id":2,"title":"HBO"},
    {"id":3,"title":"HBO Family"},
    {"id":4,"title":"NBA"}
  ]

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const onChange = useCallback((event) => {
    const query = event.target.value
    setQuery(query)
    if(query.length>2)
    setResults(moviedata.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase())).map(item=>{
    let newTitle = item.title.replace(
      new RegExp(query,'gi'),
      match => `<mark style="background:#DFFF00">${match}</mark>`
    )
    return {
      ...item,
      title:newTitle
    }
    }
    ))
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

  const createMarkup = html =>{
    return {_html:html}
  }

  const classes = useStyle()
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
      <div className = {classes.searchIcon}>
      <Link href="/posts/[id]" as={`/posts/1`}>
      <Button>
      <SearchIcon />
      </Button>
      </Link>
      </div>

      { active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map(({ id, title }) => (
            <li className={styles.result} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <p dangerouslySetInnerHTML={createMarkup(title)}></p>
              </Link>
            </li>
          ))}
        </ul>
      ) }
    </div>
  )
}
