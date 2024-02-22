

const inputElement = document.querySelector('#file');
const fileBox = document.querySelector('#fileBox');
inputElement.addEventListener("change", handleFiles, false);
fileBox.addEventListener("click", removeItem)
let filesArr = [];

function handleFiles() {
    console.log(inputElement.value)
    const fileList = this.files;
    filesArr = [...filesArr, ...fileList]
    console.log(filesArr);

    generateItems(filesArr, fileBox)
}
function removeItem(e) {
    const elName = e.target.innerHTML
    e.target.remove();
    console.log(elName);

    const filtredFiles = filesArr.filter((file) => {
        return (
            file.name !== elName
        )

    });
    filesArr = [...filtredFiles]
    console.log(filesArr);

}

function generateItems(items, element) {

    element.innerHTML = ''
    fileBox.insertAdjacentHTML('beforeend', '')
    console.log(fileBox)
    const markup = items
        .map((item) => `<li class="file">${item.name} &#x2716</li> `)
        .join('');
    element.insertAdjacentHTML('beforeend', markup);

}
