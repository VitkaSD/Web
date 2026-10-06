const objects = [
    {width: 50, height:40},
    {width: 70, height:20},
    {width: 45, height:45},
    {width: 60, height:30},
    {width: 10, height:80}
];

const root = document.getElementById("wrapper");

function boxToView(uobj){
    const rootEL = document.createElement('div');
    rootEL.classList.add('obj');
    
    rootEL.style.width = `${uobj.width}px`;

    rootEL.style.height = `${uobj.height}px`;
    return rootEL;
}

for(let i = 0; i < objects.length; i++){
    root.appendChild(boxToView(objects[i]));
}