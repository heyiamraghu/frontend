export function NavBar() {
    return (
        <div className="p-5 navbar bg-primary-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>

                </div>
                <a className="btn btn-ghost text-xl">Bloggy</a>
            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-end flex space-x-2">
                <a className="btn btn-primary">Login</a>
                <a className="btn btn-primary">Register</a>
                <a className="btn btn-secondary">New Post</a>
            </div>
        </div>
    )
}