handleClick = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
        case 'clear':
        this.setState({
            operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const newOperations = update(this.state.operations, {
            $push: [value],
        })
        this.setState({
            operations: newOperations,
        })
        break
    }
}