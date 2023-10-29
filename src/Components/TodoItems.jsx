import './css/TodoItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'

const TodoItems = ({no,display,text,settodos}) => {
    const deleteitem = (no) =>
    {

        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo)=> todo.no !== no);
        settodos(data);

    }
    const toggle = ()=>
    {
        let data =JSON.parse(localStorage.getItem("todos"));
        for(let i = 0; i<data.length;i++)
        {
            if(data[i].no === no)
            {
                if(data[i].display === "")
                {
                    data[i].display ="line-through";
                }
                else
                {
                    data[i].display = "";
                }
                break;
            }
        }
        settodos(data);
    }
  return (
    <div>
      <div className="todoitems">
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display===""?<img className="nottick"src={not_tick} alt="" />:
            <img className="tick" src={tick} alt="" />
            }
            <div className="todoitems-text">{text}</div>
        </div>
        <img className = "todo-items-cross-icon" onClick={()=>{deleteitem(no)}}src={cross} alt="" />
      </div>
    </div>
  )
}

export default TodoItems
