import { useContext, useState, useEffect } from "react";


import { Header, Footer, LeftSocialHolder } from "./components/Pagging";
import AppContext from "./components/context/AppContext";
import Home from "./components/page/page-home/Home";
var color = "0,0,0";
var generated;
var r, g, b = 0;
var i = 0;
function App() {
    const [counter, setcounter] = useState(0);
    const [style, setstyle] = useState("155,155,155");

    function Increase() {
        i++;
        setcounter(i);
    }
    useEffect(() => {
        var timer = setInterval(() => {

            r = Math.round(Math.random() * (1, 255));
            g = Math.round(Math.random() * (1, 255));
            b = Math.round(Math.random() * (1, 255));
            console.log("RED GREN BLU " + r + " ," + g + ", " + b);
            generated = `${r},${g},${b}`;
            setstyle(generated);
            i++;
            setcounter(i);
            console.log("generated" + generated);


        }, 1000);

        return () => { clearInterval(timer) };
    }, [])

    console.log("news style " + style);


    const [activePage, setActivePage] = useState(<Home />);
    const [clickedPageItem, setclickedPageItem] = useState(1);

    function ChangePage(page) {
        setActivePage(page);
    }

    function PageClicked(getclickedpage) {
        setclickedPageItem(getclickedpage);
    }


    var mainPageContext = useContext(AppContext);
    mainPageContext.pageChanger = setActivePage;




    return (

        <AppContext.Provider value={{ pageChanger: ChangePage, pageClick: PageClicked, pageClicked: clickedPageItem }}>
            <span style={{ color: `rgb(${style})`, fontSize: "60px" }}>{counter}</span>
            <button style={{ color: `rgb(${style})`, fontSize: "20px" }} onClick={Increase}> TIKLA</button>
            <LeftSocialHolder />
            <Header />
            <div className="container">
                {activePage}

            </div>
            <Footer />
        </AppContext.Provider>
    );
}
export default App;
