import ChiefCard from './ChiefCard';

export default function ChiefSection(){
    const chief =[
        {
            name: "William Wongso",
            img: "/img/top-chiefs/1.jpg",
            recipeCount: "12",
            causine:"Indonesia",
            
        },
        {
            name: "Chandra Yudaswara",
            img: "/img/top-chiefs/2.jpg",
            recipeCount: "10",
            causine:"Indonesia",
    
        },
        {
            name: "Jesselyn Lauwreen",
            img: "/img/top-chiefs/7.jpg",
            recipeCount: "09",
            causine:"Indonesia",
        },
        {
            name: "Stefani Horison",
            img: "/img/top-chiefs/4.png",
            recipeCount: "11",
            causine:"Indonesia",
        },
        {
            name: "Suhaidi Jamaan",
            img: "/img/top-chiefs/5.jpg",
            recipeCount: "09",
            causine:"Indonesia",
        },
        {
            name: "William Ghozali",
            img: "/img/top-chiefs/6.jpg",
            recipeCount: "14",
            causine:"Indonesia",
        },
        {
            name: "Faizi Al-Aqsa",
            img: "/img/top-chiefs/12.jpg",
            recipeCount: "1",
            causine:"Indonesia",
        },
      
    ]
    return(
        <div className="section chiefs">
            <h1 className="title">Chef Terbaik </h1>
            <div className="top-chiefs-containers">
                {/* Cheifcard */}
               {chief.map(chief => (
                   <ChiefCard key={chief.name} chief={chief}/>
                ))}
            </div>
        </div>
    )
}