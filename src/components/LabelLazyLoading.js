import React, { Component, lazy, Suspense } from 'react'
import Label from '../components/Label'

const LazyLabel = lazy(()=> import ('../components/Label'))

class LabelLazyLaoding extends Component {


    render(){
        return(
            <React.Fragment>
                <Suspense fallback={<div style={{color:'red'}}>Loading...</div>}>
                    <div>Hello</div>
                    <LazyLabel counter="100"></LazyLabel>
                </Suspense>
            </React.Fragment>
        )
    }
}

export default LabelLazyLaoding