import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'
import classes from './css/postFilter.module.css'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div className={classes.filter}>
      
      <MySelect
        value = {filter.sort}
        onChanges ={e => setFilter({...filter, sort: e})}
        defaultValue = 'Сортировка по...'
        options ={[
          {value: 'title', name: 'По заголовку'},
          {value: 'body', name: 'По описанию'}
        ]}
      />
      <MyInput
        value = {filter.query}
        onChange = {e => setFilter({...filter, query: e.target.value})}
        placeholder ='Поиск'
      />
    </div>
  )
}

export default PostFilter