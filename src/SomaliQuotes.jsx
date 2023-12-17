import { useState } from "react"
function SomaliQuotes(){
    const [index, setIndex] = useState(0);
    const maahmaah = ["1.Aan wada hadalno waa aan heshiino" ,"2.Abkeey dooli diloow, dad nool maas u daahaa.",
"3.Alla aamin ma iisho", "4.Alle watow wehel uma baahna", "5. Allow nin aan wax ogeyn ha cadaabin",
"6. Ama afeef hore lahow ama adkaysi danbe.","7. Ama waa la muuqdaa ama waa la maqanyahay.",
"8. Baddu waa isku dhadhan.", "9. Barasho horteed ha i nicin.","10. Barasho u yeelo geedkaad cugsan doonto."]
    

  const nextBtn = () => {
    if(index<maahmaah.length -1)
    {
        setIndex(index + 1)

    }
    
  }
  const prevBtn = () => {
    if(index >0){
        setIndex(index -1)
    }
  }
    return <div className="text-center">
        <h1 style={{display: index === maahmaah.length-1 ? "block" : "none"}} className="my-20 text-3xl">Dhamaad</h1>
        <p   className={` my-20 text-3xl ${index === maahmaah.length-8 ? "text-yellow-400" : "text-black"}`}>{maahmaah[index]}</p>
        <button  onClick={prevBtn} className="text-white bg-blue-500 text-2xl rounded-xl py-3 px-8">Previous</button>
        <button onClick={nextBtn} className="text-white ml-8 text-2xl bg-blue-500 rounded-xl py-3 px-8">Next</button>
    </div>
}
export default SomaliQuotes