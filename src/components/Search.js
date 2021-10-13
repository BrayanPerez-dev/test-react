import { useHistory } from 'react-router'
import styled from 'styled-components'
import { Input} from 'antd'
import 'antd/dist/antd.css'


const Search = () => {
    const history = useHistory()
    const { Search } = Input;

    const onSearch = (name) => {
        history.push(`/list/${name}`)
    };
    return (
        <Wrapper>
            <header className="header"><h2>GitHub Repos</h2></header>
            <div className="divSearch">
            <Search onSearch={onSearch} className="search" />
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: aliceblue;
    display:block;
    justify-content: center;

.header{
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:20vh;
    background:aliceblue;
}
.divSearch{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.search{
    width: 50vw;
    border-radius: 100px;
    border-color: cadetblue;

}
`
export default Search
