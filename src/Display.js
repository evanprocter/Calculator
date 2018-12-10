class Display extends Component {
    render() {
        const string = this.props.data.jon('')
        return <div className="Display"> {string} </div>
    }
}

export default Display;