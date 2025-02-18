import style from './App.module.css'
import {Counter} from "../features/counter/ui/components/counter/Counter.tsx";


function App() {
      return (
        <div className={style.App}>
            <Counter/>
        </div>
    );
}

export default App
