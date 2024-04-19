import supabase from "../config/supabaseClient";

interface Task {
  id: number;
  task_name: string;
  task_description: string;
  priority: string;
  due_date: string; // or you can use Date type if due date is a Date object
}
interface TaskCardProps {
  task: Task;
  onDelete: (taskId: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", task.id);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(task.id);
    }
  };

  return (
    <div className="task-card">
      <h3>{task.task_name}</h3>
      <p>{task.task_description}</p>
      <p>{task.due_date}</p>
      <div className="priority">{task.priority}</div>
      {/* <div className="due_date">{task.due_date}</div> */}
      <div className="buttons">
        {/* <Link to={"/" + task.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i> */}
      </div>
    </div>
  );
};

export default TaskCard;
