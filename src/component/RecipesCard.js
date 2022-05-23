 import CostumeImage from "./CostumImage";


export default function RecipesCard({recipe}){
    return(
        <div className="recipe-card">
            <CostumeImage imgSrc={recipe.img} pt="65%"/>
        <div className="recipe-card-info">
            <img className="auther-img" src={recipe.authorImg} alt="" />
            <p className="recipe-title">{recipe.title}</p>
            <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <a href="#!" className="read-more">Lanjut Baca</a>
        </div>
        </div>
    )
}