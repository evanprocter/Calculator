calculateOperations = () => {
    let result = this.state.operations.join('')
    if(result) {
        result = math.eval(result)
        result =math.format(result, { precision: 14 })
        result = String(result)
        this.setState({
            operations: [result],
        })
    }
}