import React, {Component} from 'react';
import data from '../data'

class GroupBy extends Component{
    constructor(){
        super()
        this.state = {
            data: []
        }
    }

    groupData = (arr, prop) => {
        return arr.reduce(function (acc, obj) {
            let key = obj[prop]
            if(!acc[key]){
                acc[key] =[]
            }
            acc[key].push(obj)
            return acc
        }, {})
    }
    render(){
        let groupD = groupBy(data, 'listId')
        return(
            <div>
                <div>{groupD}
                </div>
            </div>
        )
    }
}
export default GroupBy;