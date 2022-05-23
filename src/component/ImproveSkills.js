export default function ImproveSkills(){
    const list = [
        "Mempelajari Resep Khas Daerah",
        "Pengalaman terhadap Makanan Khas Daerah",
        "Menulis Masakan Kalian",
        "Mendapatkan Tips Memasakan Makanan Khas Daerah"
    ]
    return(
        <div className="section improve-skills">
        <div className="col img">
            <img src="img/gallery2/5.jpg" alt=""/>
         </div>  
        <div className="col typography">
            <h1 className="title">Mengembangkan Ketermpilan Kuliner</h1>
            {list.map((item, index) => (
                <p className="skill-item" key={index}>{item}</p>
            ))}
            <button className="btn">signup</button>
            </div>
           
    </div>
    )
}