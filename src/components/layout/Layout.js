import css from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className={css.main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;