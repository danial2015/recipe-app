import PreviousSeraches from "../component/PreviousSeraches";
import RecipesCard from "../component/RecipesCard";

export default function Recipes(){
    const recipes = [
        {
        title: "Sate Madura",
        img: "/img/gallery2/1.jpg",
        authorImg:"/img/top-chiefs/1.jpg",
    }, 
    {
        title: "Nasi Goreng Telur",
        img: "/img/gallery2/2.jpg",
        authorImg:"/img/top-chiefs/2.jpg",
    },
    {
        title: "Rendang",
        img: "/img/gallery2/3.jpg",
        authorImg:"/img/top-chiefs/1.jpg",
    },
    {
        title: "Tempe Goreng dan Terasi",
        img: "/img/gallery2/4.jpg",
        authorImg:"/img/top-chiefs/7.jpg",
    },
    {
        title: "Bolu Surabaya",
        img: "/img/gallery2/5.jpg",
        authorImg:"/img/top-chiefs/4.png",
    },
    {
        title: "Sop Iga",
        img: "/img/gallery2/6.jpg",
        authorImg:"/img/top-chiefs/5.jpg",
    },
    {
        title: "Nasi Goreng Kampung",
        img: "/img/gallery2/7.jpg",
        authorImg:"/img/top-chiefs/5.jpg",
    },
    {
        title: "Mie Aceh Warkop",
        img: "/img/gallery2/8.jpg",
        authorImg:"/img/top-chiefs/6.jpg",
    },
    {
        title: "Lemang",
        img: "/img/gallery2/9.jpg",
        authorImg:"/img/top-chiefs/7.jpg",
    },
    {
        title: "Empek-Empek",
        img: "/img/gallery2/10.jpg",
        authorImg:"/img/top-chiefs/3.jpg",
    },
    {
        title: "Fried Flatsfish and Tuna.",
        img: "/img/gallery2/11.jpeg",
        authorImg:"/img/top-chiefs/12.jpg",
    },

    ].sort(() => Math.random() - 0.5);
    return(
        <div>
           <PreviousSeraches />
           <div className="recipes-container">
           {/* <RecipesCard /> */ }
            {recipes.map((recipe, index) =>(
                <RecipesCard key={index} recipe={recipe} />
            ))}
           </div>
        </div>
    );
} 