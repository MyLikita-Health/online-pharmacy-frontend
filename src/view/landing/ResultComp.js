import React from 'react'
import useQuery from '../../helpers/useQuery'

export default function ResultComp(){
    const query = useQuery()
    const item_name = query.get("item_name")
    return(
        <>
<h1>{JSON.stringify(item_name)}</h1>
        </>
    )
}