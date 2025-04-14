export const Task = ({task_text})=>{
    return(
        <div className="h-[20px] flex gap-[10px]">
            <div>
  <label class="peer ...">
    <input type="checkbox" name="todo[1]" checked />
    {task_text}
  </label>
  <svg class="peer-has-checked:hidden ..."></svg>
</div>
{/* <p className="text-[14px] text-black">{task_text}</p> */}
        </div>
    )
}