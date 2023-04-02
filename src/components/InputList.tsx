import React from 'react'

interface InputListProps<T> {
    items: T[] 
    render: (item: T) => React.ReactNode
}

function InputList<T>({items, render}: InputListProps<T>){
  return (
    <div>
        { items.map(render) }
    </div>
  )
}

export default InputList