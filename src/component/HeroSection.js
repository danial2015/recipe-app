import CostumeImage from "./CostumImage";

export default function HeroSection(){
    const images =[
        "img/gallery2/1.jpg",
        "img/gallery2/2.jpg",
        "img/gallery2/3.jpg",
        "img/gallery2/4.jpg",
        "img/gallery2/5.jpg",
        "img/gallery2/6.jpg",
        "img/gallery2/7.jpg",
        "img/gallery2/8.jpg",
        "img/gallery2/9.jpg"
    ]
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Siapakah Kami?</h1>
                <p className="info">Reseepku merupakan sebuah website yang mempublikasikan beberapa resep Nusantara dan Mancanegara, disini terdapat beberapa resep rahasia dari Chef terkenal yang memiliki pengalaman ahli dan keterampilan yang memukau,Kalian juga dapat menuliskan resep kalian disini loh !. Apa aja yang akan kami hadirkan kepada Anda?. Yuk simak! </p>
                <button className="btn">Jelajahi Sekarang</button>
                </div>
                <div className="col gallery">
                    {images.map((src, index) => (
                        <CostumeImage key={index} imgSrc={src} pt={"80%"}/>
                    )) }
                
               
                </div>  
        </div>
    )
}

