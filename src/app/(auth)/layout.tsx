type Props = { children : React.ReactNode}

const Layout = ({children} : Props) => {
    return(
        <div className="flex justify-center items-center h-screen w-full">
            {children}
        </div>
    )
}

export default Layout