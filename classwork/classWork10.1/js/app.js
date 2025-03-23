import todoList from "./js/todo.js";
import booksObj from "./js/books.js";

class StartApp extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false,
            itemsObject: JSON.parse(JSON.stringify(todoList))
        }
    }

    changeItemState = function (id) {
        const newItemsList = JSON.parse(JSON.stringify(this.state.itemsObject))
        newItemsList[this.state.selected].forEach(todo => {
            if (todo.id === id) {
                todo.state = !todo.state;
            }
        });
        this.setItemsObject(newItemsList)
    }


    setSelected = function (name) {
        this.setState({ selected: name })
    }

    setItemsObject = function (itemsObject) {
        this.setState({ itemsObject: itemsObject })
    }

    render() {
        return (
            <React.Fragment>
                <PageTitle>Список дел</PageTitle>
                <ButtonsList names={Object.keys(this.state.itemsObject)} clickHandler={this.setSelected.bind(this)}></ButtonsList>
                <PageSubtitle>{this.state.selected}</PageSubtitle>
                <ListWrapper toDoList={this.state.itemsObject} selected={this.state.selected} changeHandler={this.changeItemState.bind(this)}></ListWrapper>
            </React.Fragment>)
    }
}

class PageTitle extends React.Component {
    render() {
        return <h1>{this.props.children}</h1>
    }
}

class PageSubtitle extends React.Component {
    render() {
        return <h2>{this.props.children}</h2>
    }
}

class ButtonsList extends React.Component {
    render() {
        let items = this.props.names.map((name) => {
            return <ButtonItem key={name} clickHandler={this.props.clickHandler}>{name}</ButtonItem>
        })
        return items
    }
}

class ButtonItem extends React.Component {
    render() {
        return <button onClick={() => { this.props.clickHandler(this.props.children) }}>{this.props.children}</button>
    }
}


class ListWrapper extends React.Component {
    render() {
        if (this.props.selected) {
            let items = this.props.toDoList[this.props.selected].map((elem) => {
                return <ListItem key={elem.id} changeHandler={this.props.changeHandler}>{elem}</ListItem>
            })

            return <ul>{items}</ul>
        }
        return ''
    }
}

class ListItem extends React.Component {
    render() {
        const props = this.props.children
        const id = props.id
        const state = props.state
        return <li className={`list-item ${props.state ? 'done' : ''} ${props.urgent ? 'urgent' : ''}`}>
            <input type="checkbox" checked={state} id={id} onChange={()=> {this.props.changeHandler(id)}} />
            <label htmlFor={id}>{props.title}</label>
        </li>
    }
}


















const rootElem = document.getElementById('app')
const rootReactElem = ReactDOM.createRoot(rootElem)
rootReactElem.render(<StartApp></StartApp>)