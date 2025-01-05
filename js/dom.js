const colorInput=document.querySelector('#color');
const widthInput=document.querySelector('#width');
const heightInput=document.querySelector('#height');
const submitButton=document.querySelector('#submit');
const rectangleDis=document.querySelector('#rectangle');

submitButton.addEventListener('click', function(){
    const color=colorInput.value;
    const width=widthInput.value;
    const height=heightInput.value;

    if (color && width && height) {
    rectangleDis.style.backgroundColor= `#${color}`;
    rectangleDis.style.width= `${width}px`;
    rectangleDis.style.height= `${height}px`;
    rectangleDis.style.display= 'block';
    rectangleDis.textContent= `#${color}`;
    } else {
    alert('Vui lòng nhập đầy đủ mã màu, chiều ngang và chiều dọc!');
    }
});

rectangleDis.addEventListener('click', function(){
    colorInput.value='';
    widthInput.value='';
    heightInput.value='';
    rectangleDis.style.display= 'none';
});