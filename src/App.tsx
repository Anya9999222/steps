import Form from './components/Form/Form'
import './App.css'
import { useState } from 'react'
import { Training } from './models/Training'
import TableItem from './components/TableItem/TableItem'


function App() {
  const [trainingList, setTrainingList] = useState<Training[]>([]);

  const addDistance = (prev) => {
    const updatedList = trainingList.map(i => {
      if(i.date === prev.date){
        let result = 1*i.distance + 1*prev.distance

        return {...i, distance: String(result)}
      }  
      return i
    })
    setTrainingList(updatedList)
  }
  const addTraining = (newTraining: Omit<Training, 'id'>) => {
    const train = {
      ...newTraining,
      id: Math.ceil(Math.random() * 1000)
    }
    trainingList.find((train) => 
    train.date === newTraining.date) 
    ? addDistance(newTraining) 
    : setTrainingList(prev => [...prev, train])
   
  }

  const filtered = trainingList
      .sort((a,b) =>  new Date(b.date) - new Date(a.date))

  const deleteTraining = (id: number) => {
    setTrainingList(trainingList.filter((i) => i.id !== id))
  }

  return (
    <div className='main_content'>
      <Form 
      onSubmit={addTraining}/>
      <div className="table">
            <div className="table_header">
                <span>Дата (ДД.ММ.ГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
            <div className={filtered.length > 0 ? `table_list`: ''}>
              {filtered.map(item => 
              <TableItem 
                item = {item} 
                key={item.id} 
                deleteItem={() => deleteTraining(item.id)}/>
              )}
            </div>
        </div>
      
    </div>
  )
}

export default App
