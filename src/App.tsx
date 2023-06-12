import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Body } from './components/body/body';

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
