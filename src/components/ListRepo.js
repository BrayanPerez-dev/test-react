import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Card, Empty } from 'antd'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const ListRepo = () => {
    const { name } = useParams()
    const { data, error } = useFetch(name)

    console.log(data, error)

    return (
        <Wrapper>
            {
                error && <div className="not-found">
                    <Empty />
                </div>
            }
            <div className="repos">
                {
                    data.filter(item => item.private === false).map(item => (

                        <Card key={item.id} className="card-repo">
                            <p>Name: {item.name}</p>
                            <p>Created at: {new Date(item.created_at).toLocaleDateString()}</p>
                            <p>Default Branch: {item.default_branch}</p>
                            <p>Language: {item.language}</p>
                            <p>Forks count: {item.forks_count}</p>
                            <p>Description: {item.description}</p>
                        </Card>

                    ))
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    width:100%;
    height:100%;
    background-color: burlywood;

.repos{
    flex-direction:column;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.card-repo{
    width:50%;
    background: honeydew;
    text-align: center;
    margin-bottom: 10px;
    border-radius: 31px;
    font-family: cursive;
    font-style:normal;
}
   .not-found{ 
    width:100vw;
   height :100vh;
   background: burlywood;

}
`
export default ListRepo
