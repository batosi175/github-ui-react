import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import registerServiceWorker from './registerServiceWorker'
// will render the category for a product
class ProductCategoryRow extends React.Component {
  render() {
    return(
      <tr><th colSpan='2'>{this.props.category}</th></tr>
    )
  }
}

// will render product
class ProductRow extends React.Component {
  render () {
    var name = this.props.product.stocked ? 
      this.props.product.name : 
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )

  }
}

// will contain products row and and product category row
class ProductTable extends React.Component {
  render() {
    const inStockOnly = this.props.inStockOnly
    var rows = []
    var lastCategory = null
    this.props.products.forEach(product => {

      // check if filter text fails, stockonly and not in stock 

      if (product.name.indexOf(this.props.filterText) === -1 || (this.props.inStockOnly && !product.stocked)) {
        return
      }

      // check if it is a category value
      if (product.category !== lastCategory){
        rows.push(
          <ProductCategoryRow category={product.category} key={product.category} />
        )
      }

      // push it as product if other special checks fail
      rows.push(
        <ProductRow product={product} key={product.name} />
      )
      lastCategory = product.category
    })
    return (
      <table>
        <thead>
          <tr>
          <th>Name:</th>
          <th>Price:</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

// will contain search feature
class SearchBar extends React.Component{
  constructor(props) {
    super(props)
    this.handleFilterTextInputChanged = this.handleFilterTextInputChanged.bind(this)
    this.handleStockOnlyInputChanged = this.handleStockOnlyInputChanged.bind(this)
  }

  handleFilterTextInputChanged(e) {
    this.props.onFilterTextInput(e.target.value)
  }

  handleStockOnlyInputChanged(e) {
    this.props.onStockOnlyInput(e.target.checked)
  }

  render() {
    const filterText = this.props.filterText
    const inStockOnly = this.props.inStockOnly
    return (
      <form>
        <input type="text" placeholder="Search..." value={filterText} onChange={this.handleFilterTextInputChanged} />
        <p>
          <input type="checkbox" checked={inStockOnly} onChange={this.handleStockOnlyInputChanged} />
          {''}
          Only show products in stock
        </p>
      </form>
    )
  }
}

// will contain searchbar and products table
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state={filterText: '', inStockOnly: false}
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
    this.handleStockOnlyInput = this.handleStockOnlyInput.bind(this)
  }

  handleFilterTextInput(value) {
    this.setState({filterText: value})
  }

  handleStockOnlyInput(value) {
    this.setState({inStockOnly: value})
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onStockOnlyInput={this.handleStockOnlyInput}
         />
        <ProductTable 
        products={this.props.products}
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

ReactDOM.render(
  <FilterableProductTable products={products} />,
  document.getElementById('container')
)

registerServiceWorker()
