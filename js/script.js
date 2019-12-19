document.addEventListener('DOMContentLoaded', function(e) {

	const addBtn = document.querySelector('.app-header__btn');
	const addInt = document.querySelector('.app-header__int');
	const appList = document.querySelector('.app-list');
	const arrItems = [];

	document.querySelector('.info').innerHTML += navigator.vendor + ' ' + navigator.language + '<br>' + navigator.userAgent


	addBtn.addEventListener('click', function(e) {
		let text = addInt.value;

		if (text.trim()) {
			arrItems.push(text);
			addInt.value = ''
			let li = document.createElement('li');
			let btnRM = document.createElement('button');
			btnRM.innerHTML = '&times;';
			btnRM.classList.add('app-list__rm')
			li.classList.add('app-list__item');
			li.innerHTML = '<span>' + text + '</span>';
			li.insertAdjacentElement('beforeend', btnRM);
			li.querySelector('button').addEventListener('click', removeItem);
			appList.insertAdjacentElement('afterbegin', li);
			displaySpaceText()


		} else {
			alert('Вводите не пустоту!')
		}
	});

	function removeItem() {
		this.closest('li').remove()
		arrItems.find((item, i) => {
			if (item === this.closest('li').querySelector('span').textContent) {
				arrItems.splice(i, 1);
			}

		})
		displaySpaceText()

	} 

	function displaySpaceText() {
		if (arrItems.length > 0) {
			document.querySelector('.cleaning').style.display = 'none'
		} else {
			document.querySelector('.cleaning').style.display = 'block'
		}

	}

})