const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder');

if (command ==='add') {
  const add = prompt('Patient Name?');
  patientList.push(add);
  alert(patientList);
}


else if (command ==='update') {
  const update = prompt ('Patient Name');
  const newName = prompt ('Patient New Name?');
  for (let i=0; patientList.length; i++) {
    if (patientList[i]=== update){
      patientList[i] = newName;
    alert(patientList);
    }
  }
}

else if (command ==='delete') {
  const add = prompt('Patient Name');
  for (let i=0; patientList.length; i++) {
    if (patientList[i]=== add){
    patientList.splice(i,1);
   alert(patientList); 
    }
  }
}

if (command ==='reorder') {
  const add = prompt('Patient Name');
  const anotherName = prompt('Patient Name');
  for (let i=0; patientList.length; i++) {
    if(patientList[i]=== add){
      patientList.splice(i,1,anotherName);    
    }
    if(patientList[i]=== anotherName){
      patientList.splice(i,1,add); 
    }
  alert(patientList);  
  }  
}
