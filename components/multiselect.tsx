// MultiselectComponent.tsx
'use client'
import React, { useEffect } from 'react';
// import './MultiselectComponent.css';

const MultiselectComponent: React.FC = () => {
  useEffect(() => {
    initMultiselect();
  }, []);

  const initMultiselect = () => {
    checkboxStatusChange();

    document.addEventListener("click", function (evt) {
      const flyoutElement = document.getElementById('myMultiselect');
      let targetElement = evt.target as HTMLElement;

      do {
        if (targetElement === flyoutElement) {
          return;
        }

        targetElement = targetElement.parentNode as HTMLElement;
      } while (targetElement);

      toggleCheckboxArea(true);
    });
  };

  const checkboxStatusChange = () => {
    const multiselect = document.getElementById("mySelectLabel") as HTMLDivElement;
    const multiselectOption = multiselect.getElementsByTagName('option')[0];
  
    const values: string[] = [];
    const checkboxes = document.getElementById("mySelectOptions") as HTMLDivElement;
    const checkedCheckboxes = checkboxes.querySelectorAll('input[type=checkbox]:checked');
  
    for (let i = 0; i < checkedCheckboxes.length; i++) {
      const item = checkedCheckboxes[i];
      const checkboxValue = (item as HTMLInputElement).getAttribute('value');
      values.push(checkboxValue as string);
    }
  
    let dropdownValue = "Nothing is selected";
    if (values.length > 0) {
      dropdownValue = values.join(', ');
    }
  
    multiselectOption.innerText = dropdownValue;
  };

  const toggleCheckboxArea = (onlyHide = false) => {
    const checkboxes = document.getElementById("mySelectOptions") as HTMLDivElement;
    const displayValue = checkboxes.style.display;

    if (displayValue !== "block") {
      if (onlyHide === false) {
        checkboxes.style.display = "block";
      }
    } else {
      checkboxes.style.display = "none";
    }
  };

  return (
    <div className="container-fluid">
      <div className="form-group col-sm-8">
        {/* Original select */}
        <label htmlFor="dur">BS original select</label>
        <select id="dur" className="form-select">
          <option value="12" selected>One Year</option>
          <option value="24">Two Year</option>
          <option value="36">Three Year</option>
          <option value="48">Four year</option>
          <option value="60">Five Year</option>
        </select>
      </div>

      <div className="form-group col-sm-8">
        {/* Custom multiselect */}
        <label htmlFor="myMultiselect">BS custom multiselect</label>
        <div id="myMultiselect" className="multiselect">
          <div id="mySelectLabel" className="selectBox" onClick={() => toggleCheckboxArea()}>
            <select className="form-select">
              <option>somevalue</option>
            </select>
            <div className="overSelect"></div>
          </div>
          <div id="mySelectOptions">
            {/* Add your checkbox options here as React components */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiselectComponent;
