
let a = document.querySelector('.button');

a.addEventListener('click', function () {
    if(document.querySelector('.write').value.length == 0){
        alert("Enter Task Name!")
    }
else{
    let bool=true;
    let d = document.querySelector('.list');
    let b = document.querySelector('.write');
    let c = document.createElement('div');
    c.style.display = 'flex';
    let v = document.createElement('li');
    let k = document.createElement('cancelbutton');
    k.innerHTML= '<img src="file:///C:/Users/Berlin/Downloads/delete-bin-svgrepo-com.svg">'
    k.classList.add('delete')
    v.textContent = b.value;
    c.append(v);
    c.append(k);
    d.append(c);
    b.value = null;
    k.addEventListener('click', function (event){
        let f = event.currentTarget.parentElement;
        f.remove();
    
    })

    let y= document.querySelector('.sorting');
    y.addEventListener('click',function(){
        if(bool){
            bool=false;
        let o =[]
        let l = document.querySelectorAll('li');
        l.forEach(el => {
            o.push(el.innerText);
        })
        o.sort();
        for(let i=0;i<o.length;i++){
            let z = document.querySelectorAll('li')[i];
            z.textContent=o[i];
        }
    }
    else{
        bool=true;
        let o =[]
        let l = document.querySelectorAll('li');
        l.forEach(el => {
            o.push(el.innerText);
        })
        o.sort();
        o.reverse();
        for(let i=0;i<o.length;i++){
            let z = document.querySelectorAll('li')[i];
            z.textContent=o[i];
        }
    }
    }) }
})
