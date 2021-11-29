import Card from "../../UI/Card";

import classes from './Home.module.css';

const Home = props => {
    return <Card className={classes.home}>
        <h1>Welcome Home</h1>
    </Card>
}

export default Home;