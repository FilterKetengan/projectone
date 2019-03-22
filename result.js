function addData() {
	// body...
	var noUrut = document.getElementById('NomorUrut')
	var namaLengkap = document.getElementById('fullName')
	var noInduk = document.getElementById('NomorInduk')
	var className = document.getElementById('NamaKelas')

	var instID = document.getElementById('LamaAngsuran')
	var instDate = document.getElementById('tanggalAngsuran')
	var instNom = document.getElementById('nominalAngsuran')

	var donType = document.getElementById('jenisSumbangan')
	var donDate = document.getElementById('tanggalSumbangan')
	var donNom = document.getElementById('nominalSumbangan')

	var table = document.getElementById("tableStudent")

	var arr = [noUrut.value, namaLengkap.value, noInduk.value, className.value, instID.value, instDate.value, instNom.value, donType.value, donDate.value, donNom.value]
	//var arr2 = [instID.value, instDate.value, instNom.value]


	//var resultTable = document.createElement('tr')
	
	/*var tdNomorUrut = document.createElement('td')
	tdNomorUrut.innerText = noUrut.value
	resultTable.appendChild(tdNomorUrut)

	var tdNamaLengkap = document.createElement('td')
	tdNamaLengkap.innerText = namaLengkap.value
	resultTable.appendChild(tdNamaLengkap)

	var tdNoInduk = document.createElement('td')
	tdNoInduk.innerText = noInduk.value
	resultTable.appendChild(tdNoInduk)

	var tdClassName = document.createElement('td')
	tdClassName.innerText = className.value
	resultTable.appendChild(tdClassName)
	
	table.appendChild(resultTable)*/
	
	var resultTable = document.createElement('tr')
	
	for (var i = 0; i <= arr.length -1; i++) {
		
		var tdObj = document.createElement('td');
		tdObj.innerText = arr[i];

		resultTable.appendChild(tdObj)

	}

	table.appendChild(resultTable)

	/*var resultTable = document.createElement('tr')
	
	for (var j = 0; j <= 2; j++) {
		
		
		var tdObj = document.createElement('td');
		tdObj.innerText = arr2[i];

		resultTable.appendChild(tdObj)

		table2.appendChild(resultTable)

	}*/

}