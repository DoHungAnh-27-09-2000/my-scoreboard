import '../assets/styles/PageNotFound.css'
import { NavLink } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="pageNotFound-container">
            <div className="title">404!</div>
            <p>Trang này không tồn tại</p>
            <NavLink to='/'>Đi tới trang chủ</NavLink>
        </div>
    )
}

export default PageNotFound