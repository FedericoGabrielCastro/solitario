import { FunctionComponent } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setCardDeckAction } from '../../redux/actions/setCardDeckAction'
import { shuffleDeckAction } from '../../redux/actions/shuffleDeckAction'
import styles from './buttonStartGame.module.css'

const ButtonStartGame: FunctionComponent = () => {
    
    const dispatch = useAppDispatch()

    const handleNewGame = (event: { preventDefault: any }) => {
        event.preventDefault

        dispatch(setCardDeckAction())
        setTimeout(() => {
            dispatch(shuffleDeckAction())
        }, 2)
    }
    
    return (
        <button className={styles.buttonNewGame} onClick={handleNewGame}>
            New game
        </button>
    )
}

export default ButtonStartGame