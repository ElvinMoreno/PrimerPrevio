

function entrar() {
	var codigo = document.getElementById('codigo').value;

	var contra = document.getElementById('password'.value);

	var password = 1234;

	let usuario = {
			codigo: codigo,
			contra: contra,
			};

	fetch('https://api-parcial.crangarita.repl.co/login')
		.then(data => res.json())		
		.then(data=>{
			console.log(data.codigo)
		})
}
