# React Hooks

Build React CRUD APP using new Hooks, using Simple components (vs. Class components).

## Components

### Simple component

```JavaScript
const Example = () => {
    return <div>I'm a simple component</div>
}
```

### Class component

```JavaScript
class Example extends Component {
    render() {
        return <div>I'm a class component</div>
    }
}
```

## State vs. Hook State

### Functional component with Hook state

> Using a library book as an example

```JavaScript
const App = () => {
  const initialBookState = {
    title: '',
    available: false,
  }

  const [book, setBook] = useState(initialBookState)

  const updateBook = book => {
    setBook({ title: book.title, available: book.available })
  }
}
```

### Class component with state

> Using a library book as an example

```JavaScript
class App extends Component {
  initialState = {
    title: '',
    available: false,
  }

  state = initialState

  updateBook = book => {
    this.setState({ title: book.title, available: book.available })
  }
}
```

## Requirements

Running React 16.7.0-alpha

- View all users
- Add a new user
- Delete a user
- Edit an existing user
