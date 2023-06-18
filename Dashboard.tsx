const isLogin = false

const Dashboard = () => {

    
    if(isLogin) {
        return (
            <div>Login</div>
        )
    } else {
        return (
            <div>Not Login</div>
            )
    }
}

export default Dashboard