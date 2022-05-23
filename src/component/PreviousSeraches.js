import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function PreviousSeraches(){
    const searches = [ 
        'Mie Aceh','Bika Ambon','Pangsit','Bolu Surabaya','Rendang','Nasi lemak','Empek-Empek','Tahu Bulat', 'Ayam Geprek'
    ]
    return(
        <div className="previous-searches section">
        <h2>Pencarian Sebelumnya</h2>
         <div className="previous-searches-containers">
         {searches.map((search,index)=> (<div key={index} style={{animationDelay: index *  .1+ "s"}} className="search-item"> 
             <p>{search}</p>
         </div>
         ))}
         <div className="search-box">
             <input type="text" placeholder="Cari resep"/>
             <button className="btn">
                 <FontAwesomeIcon icon={faSearch} />
                 </button>
            
         </div>
         </div> 
    </div>
    )
}