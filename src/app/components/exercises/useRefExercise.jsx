import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";

const UseRefExercise = () => {
  const ref = useRef();

  const handleClick = () => {
    ref.current.innerText = "text";
    ref.current.style.height = "150px";
    ref.current.style.width = "80px";
  };

  return (
      <CollapseWrapper title="Упражнение">
        <p className="mt-3">
          У вас есть блок, у которого заданы ширина и высота. Добавьте
          кнопку, при нажатии которой изменятся следующие свойства:
        </p>
        <ul>
          <li>Изменится содержимое блока на &quot;text&quot;</li>
          <li>высота и ширина станут равны 150 и 80 соответственно</li>
        </ul>
        <Divider />
        <div className={"d-flex justify-content-start align-items-start"}>
          <div
              ref={ref}
              className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
              style={{
                height: 40,
                width: 60,
                color: "white"
              }}
          >
            <small>Блок</small>
          </div>
          <button className={"btn btn-success ms-4"} onClick={handleClick}>Click</button>
        </div>
      </CollapseWrapper>
  );
};

export default UseRefExercise;
