import React, { Component } from 'react'
import '../css/index.css'

class Child extends Component {
    render() {
        return (
            <div>oooooooooo</div>
        )
    }
}


export class app extends Component {
    render() {
        let name = 'Tian Chunle'
        let obj = {
            color: 'red'
        }
        return (
            <div>
                {
                    /** 
                     * React 推荐我们使用行内样式，因为React 觉得每一个组件都是一个独立的整体
                     */
                }
                <span>{10 + 20}-{name}</span>
                <br></br>
                <h1 className="active">{10 > 20 ? '哈哈' : '嘻嘻'}</h1>
                <br></br>
                hello react component
                <h1 style={obj}>哈哈哈哈</h1>
                <Child />
                <div>
                    <label htmlFor='username'>用户名：</label>
                    <input type='text' id="username"></input>
                </div>
                <br></br>
                <div>
                    <input></input>
                    <button onClick={() => {
                        console.log("click1")
                    }}>Add</button>
                    <button onClick={() => {
                        this.handleClick2()
                    }}>Add</button>
                </div>
            </div>
        )
    }
    handleClick2() {
        console.log('click2')
    }
}

export default app
