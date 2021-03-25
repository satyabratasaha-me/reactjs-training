import React, {Component, lazy, Suspense} from 'react'
import TableComponent from '../components/Table'
import axios from 'axios'
const LazyTableComponent = lazy(() => import('../components/Table'))

class BookAuthorLazyLoading extends Component {

    constructor(props){
        super(props);
        this.state = {
            'items': [],
            'headers' : ['Name','Author','Price'],
            'data' : []
        }
    }

    fetchHandler = () => {
        const url = 'http://localhost:8080/api/v1/books'


        axios.get(url).then((items) => {
            this.setState({
                'data' : items.data
            })
        })
        
    }

    clearHandler = () => {
        this.setState({
            'data' : [],
        })
    }

     componentDidMount(){
        const url = 'http://localhost:8080/api/v1/books'

        axios.get(url).then((items) => {
            this.setState({
                'data' : items.data
            })
        })
        console.log('Test')
    }



    render(){

        const headers = this.state.headers.map((header,index) => {
            return(
                <th key={index}>{header}</th>
            )
        })
    
        const items = this.state.data.map((item,index) => {
            return(

                <tr key = {index}>
                    <td>{item['name']}</td>
                    <td>{item['author']}</td>
                    <td>{item['price']}</td>
                </tr>
            )
        })
        
        return(
            <div>
                <Suspense fallback={<h1 style={{color:'red'}}>Loading..</h1>}>
                    <button onClick={this.fetchHandler.bind(this)}>Fetch</button>
                    <button onClick={this.clearHandler.bind(this)}>Clear</button>
                    <LazyTableComponent headers={headers} items={items}>Books</LazyTableComponent>
                </Suspense>
            </div>
        )

    }


}

export default BookAuthorLazyLoading;


// 'headers' : ['Name','Author','Price'],