import { Provider } from "react-redux"
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks"
import { store } from "./redux/store"
import { counterAction } from "./redux/actions/example"
import ProviderRoutes from "./routes/routes"

const App = () => {
    return (
        <Provider store={store}>
            <ProviderRoutes />
        </Provider>
    )
}

const Appp = () => {

    const dispatch = useAppDispatch()
    const counter = useAppSelector(store => store.counterReducer.value)

    return (
        <div>
            {counter}
            <br />
            <button onClick={() => dispatch(counterAction(22))}>
                hace algo esto 
            </button>
        </div>
    )
}


export default App