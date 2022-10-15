import { Provider } from "react-redux"
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks"
import { store } from "./redux/store"
import ProviderRoutes from "./routes/routes"

const App = () => {
    return (
        <Provider store={store}>
            <ProviderRoutes />
        </Provider>
    )
}



export default App