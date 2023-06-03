import { useState } from "react";
import { createContext } from "react";
import axios from "axios"

const TasksContext = createContext();
//kullandığımız şeylerin çoğu app.js de bulunur. fakat biz bunları artık Contexten yönetmek istiyoruz. o yüzden
//MANTIĞI
//bunların hespini bir fonksiyona atarız. Fonks adına Provider diyelim
//kullanacağımız her şeyi children olarak yazıyoruz
function Provider({children}){
  const [task, setTask] = useState([])

  //taşığımız fonksiyonlarımızı kullanabilmemiz için value kısmına geçmemiz lazım
  //ve tüm taskları da buradan kullanacağımız için onu da value kısmına geçmemiz lazım
  //bunları bir obje içine atayabiliriz. Objeyi en alt kısımda oluşturucam
    const onCreate = async (title,date,desc) => {
        //datayı yüklemek için
        const response = await axios.post("http://localhost:3004/tasks",{
          title,
          date,
          desc
        });
        console.log(response)
        const createdTask=[
          ...task,
          response.data
        ]
        setTask(createdTask)
      }
    
      const fetchData = async() => {
        //api de bulunan datayı getirmek için
        const response = await axios.get('http://localhost:3004/tasks');
        setTask(response.data)
      } 
      const editTaskById = async(id,updateTitle,updateDate,updateDesc) => {
        //burada axios put kullanırız fakat put kullandıktan sonra tanımladığımız gibi değişen hallerini tanımlamamız gerekir.
        await axios.put("http://localhost:3004/tasks/"+id,{
          id,
          title:updateTitle,
          date:updateDate,
          desc:updateDesc
    
        })
        const updateTask= task && task.map((task) => {
          if (task.id === id) {
            return {
              id,
              title:updateTitle,
              date:updateDate,
              desc:updateDesc
            }
          }{
            return task
          }
        })
        setTask(updateTask)
      }
      const deleteTaskById = async(id) => {
        await axios.delete("http://localhost:3004/tasks/"+id)
       const newList= task.filter((x) =>{
        return x.id !== id
       });
       setTask(newList)
      }

      //children olarak geçtiğimiz için tüm uygulamada geçerli olacak.
      //value olarak da paylaşmamız gerekiyor
      //bunları da yaptıktan sonra artık tüm uygualamada methodlara ve değerlere ulaşabiliriz
      //şimdi App.js e gidip düzenlemeleri yapıyoruz
      const sharedValuesAndMethods={
        task,
        onCreate,
        fetchData,editTaskById,
        deleteTaskById,
      }

    //fonksiyonu döndürmemiz gerekiyor
    return(
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {
                //Provider için yazdığımız children ı gelip buraya veriyoruz
                //bunu aşşağı da dışarıya çıkarmıştık
                //index.js de App comp Provider ile kapsarsak her yerden ulaşabiliriz (provider buradaki fonskiyon)
                //yani fonksiyonda kullandığımız tüm değişkenleri ana kapsayıcı yani index.js'te kullanmış olucaz
                //çünkü index.js App comp kapsar
                children
            }
        </TasksContext.Provider>
    )
}
export {Provider}
export default TasksContext;    