class StartApp extends React.Component {

    render() {
        return (
            <div>
                <UserCard userName = "Marco">Marco</UserCard>
                <UserCard userName = "Carlos"/>
                <UserCard/>
            </div>)
    }
}

class UserCard extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                User {this.props.children}
            </div>)
    }
}












const rootElem = document.getElementById('app')
const rootReactElem = ReactDOM.createRoot(rootElem)
rootReactElem.render(<StartApp></StartApp>)