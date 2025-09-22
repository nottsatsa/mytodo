"use client";
import Image from "next/image";
import { Buttons, Task_container, Input } from "@/components";
import { Add_button } from "@/components/Add_button";
import { useState } from "react";
import { document } from "postcss";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [task_name_input, setTask_name_input] = useState("");

  const input_handleOnChange = (event) => {
    setTask_name_input(event.target.value);
  };

  const [tasks, setTasks] = useState([]);
  const addDAta = () => {
    setTasks([
      ...tasks,
      { title: task_name_input, isChecked: false, id: uuidv4() },
    ]);
    setTask_name_input("");
  };

  // const [delete_button, setDelete_button] = useState(tasks);
  // const delete_button_fnc = (index) => {
  //   setDelete_button(tasks.splice(index, 1));
  // };

  const delete_button_fnc = (id) => {
    setTasks(tasks.filter((value) => value.id !== id));
  };
  const [isChecked, setIsChecked] = useState(false);

  // const checkbox_handleOnChange = (id) => {
  //   const updatedTasks = [...tasks];
  //   updatedTasks[id].isChecked = !updatedTasks[id].isChecked;
  //   setTasks(updatedTasks);
  // };
  const checkbox_handleOnChange = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    );
    setTasks(updatedTasks);
  };

  const [filter, setFilter] = useState("All");

  ////ajilku
  // const act = tasks.map((value) => {
  //     return !value.isChecked;
  //   })

  // const done = tasks.map((value) => {
  //     return value.isChecked;
  //   })

  //   else if (filter === "Completed") {
  //     return value.isChecked;
  //   } else {
  //     return filter;
  //   }
  // });

  //ajilna
  const filteredTasks = tasks.filter((value) => {
    if (filter === "Active") {
      return !value.isChecked;
    } else if (filter === "Completed") {
      return value.isChecked;
    } else {
      return true;
    }
  });

  return (
    <div className="flex flex-col items-center justify-center gap-[40px] border-solid border-black bg-[#ffffff] w-[377px] py-[24px] px-[16px] rounded-[6px]">
      <div className="flex flex-col w-[345px] gap-[32px] items-center justify-center">
        <div className="flex flex-col w-[345px] gap-[20px] items-center justify-center">
          <h6 className="text-black">To-Do list</h6>
          <div className="flex flex-row gap-[6px]">
            <Input
              input_value={task_name_input}
              task_name={input_handleOnChange}
            />
            <Buttons className={"h-[40px]"} text={"Add"} onClick={addDAta} />
          </div>
          <div className="w-[345px] flex flex-row justify-start gap-[6px] ">
            <Buttons text={"All"} onClick={() => setFilter("All")} />
            <Buttons text={"Active"} onClick={() => setFilter("Active")} />
            <Buttons
              text={"Completed"}
              onClick={() => setFilter("Completed")}
            />
          </div>
        </div>
        {/* <h6>No tasks yet. Add one above!</h6> */}
        {filteredTasks.length === 0 ? (
          <h6>No tasks yet. Add one above!</h6>
        ) : (
          filteredTasks.map((value, id) => {
            return (
              <Task_container
                key={value.id}
                check_name={`${value.title}`}
                delelteClick={() => {
                  delete_button_fnc(value.id);
                }}
                isChecked={value.isChecked}
                onCheckboxChange={() => checkbox_handleOnChange(value.id)}
              />
            );
          })
        )}
      </div>
      <footer>
        <h6>Powered by Pinecone academy</h6>
      </footer>
    </div>
  );
}

// "use client";
// import React, { useState } from "react";
// import { FileUploader } from "react-drag-drop-files";

// const fileTypes = ["JPG", "PNG", "GIF"];

// function DragDrop() {
//   const [file, setFile] = useState(null);
//   const handleChange = (file) => {
//     setFile(file);
//   };
//   return (
//     <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
//   );
// }

// export default DragDrop;

