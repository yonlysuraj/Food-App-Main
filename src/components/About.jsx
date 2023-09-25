import UserComp from "./UserComp";

const About = ()=> {
    return (
        
        <>
            <div className="about-main">
                <h1 className="text-4xl font-semibold mb-2" >About</h1>
                <h2 className="text-4xl font-semibold mb-2"  >Welcome to Namaste React</h2>
                <p className="text">At FoodDeliver, we are passionate about connecting hungry individuals with their favorite meals from the best restaurants
        in town. Our mission is to provide convenient and delicious food delivery experiences, all while supporting local businesses.</p>
            </div>
            <div className="about-users">
                <UserComp/>
            </div>
        </>
    );
}

export default About;