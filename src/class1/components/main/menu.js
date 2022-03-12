import burger1 from "../../components/Assets/burger 1.jpg";
import burger3 from "../../components/Assets/burger 3.jpg";
import burger2 from "../../components/Assets/burger 2.jpg";
import pizza1 from "../../components/Assets/pizza 1.jpg";
import pizza2 from "../../components/Assets/pizza 2.jpg";
import pizza3 from "../../components/Assets/pizza 3.jpg";
function Menu() {
    return (
        <main>
            <div class="parent">
                <div>
                    <h1 class="headings">Our Menu</h1>
                    {/* <!-- <hr/><hr/> --> */}
                        <h3 class="headings">Burgers</h3>
                        {/* <!-- <hr/><hr/> --> */}
                        <img src={burger1} alt="burger 1" height="100"/>
                        <img src={burger3} alt="burger 3" height="100"/>
                        <img src={burger2} alt="burger 2" height="100"/>
                    {/* <!-- <hr/><hr/> --> */}
                        <h3 class="headings">Pizzas</h3>
                        {/* <!-- <hr/><hr/> --> */}
                        <img src={pizza1} alt="pizza 1" height="100"/>
                        <img src={pizza2} alt="pizza 2" height="100"/>
                        <img src={pizza3} alt="pizza 3" height="100"/>
                </div>
            </div>
        </main>
    );
}
export default Menu;