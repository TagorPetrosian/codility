const renderList = function (Array) {
  Array.forEach(function (a) {
    const { sub: subtype } = a.type;
    if (subtype == 'hello') {
      let li = document.createElement('li');
      li.textContent = a.text;
      document.getElementById('containerDiv').appendChild(li);
    }
    //  d = 'was rendered'; // what is the purpose
  });
};

const getData = function () {
  return $.xhr('/my/cool/api', { type: 'list' });
};

const d = getData();
renderList(d);
console.log(d);
