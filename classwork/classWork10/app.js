import todoList from "./js/todo.js";
import booksObj from "./js/books.js";

class StartApp extends React.Component{
    constructor(){
        super()
        this.state = {selected: false, itemObject: JSON.parse(JSON.stringify(todoList))}
    }
    render(){
        return <div>
            <PageTitle>Список дел</PageTitle>
            <ButtonsList names={(Object.keys(this.state.itemObject))}></ButtonsList>
            <ListWrapper>{this.state.itemObject}</ListWrapper>
            </div>
    }
}

class PageTitle extends React.Component{
    render(){
        return <h1>{this.props.children}</h1>
    }
}

class ButtonsList extends React.Component{
    render(){
         items = this.props.names
    }
}

class ListWrapper extends React.Component{
    render(){
        let listItem = this.props.children["Влад"].map((elem) => {
            return <ListItem>{elem}</ListItem>
        })
        return <ul>{listItem}
        </ul>
    }
}
class ListItem extends React.Component{
    render(){
        return this.props.children.state ? '': <li className = {this.props.children.urgent ? 'urgent' : ''}>{this.props.children.title}</li>
    }
}
    



const rootElem = document.getElementById('app')
const rootReactElem = ReactDOM.createRoot(rootElem)
rootReactElem.render(<StartApp></StartApp>)
