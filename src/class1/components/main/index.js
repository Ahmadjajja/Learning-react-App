import burger1 from "../../components/Assets/burger 1.jpg";
import piza1 from "../../components/Assets/pizza 1.jpg";
import burger3 from "../../components/Assets/burger 3.jpg";
import pizza2 from "../../components/Assets/pizza 2.jpg";
function Main() {
    return (
        <main>
        <div className="parent">
            <div>
                <br/><br/>
                <div class="parent"><strong>We serve delicious fast food items</strong></div><br/><br/>
                <div class="parent">
                    <img src={burger1} alt="burger 1" height="150" />
                    <img src={piza1} alt="pizza 1" height="150" />
                    <img src={burger3} alt="burger 1" height="150" />                        
                    <img src={pizza2} alt="pizza 2" />
                </div>
                <br/>
                <div class="parent"><button><a id="button" href="Menu.html" border="2">Let see our menu</a></button></div><br/>
            </div>
        </div>
        </main>
    );
  }

  export default Main;