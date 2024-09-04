import styled from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <header className={styled.header}>
                <h1>Book App</h1>
                <p>Sasan Farhadi</p>
            </header>
            {children}
            <footer className={styled.footer}><p>Bootcamp FrontEnd | Botostart.ir</p></footer>
        </>
    )
}

export default Layout
