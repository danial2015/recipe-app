export default function CostumeImage({imgSrc,pt}){
    return(
        <div className="costum-image" style={{paddingTop:pt}}>
            <img src={imgSrc} alt=""/>
            </div>
    );
}