const Footer = () => {
    return <footer className="page-footer red lighten-4" >
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-3 right" href="#">More</a>
            </div>
        </div>
    </footer>
}

export default Footer