function Mostrar(Tipo){
	// document.getElementById('Experiencia').display = 'none';
	switch (Tipo){
		case "Datos":
			Colapso('DatosPersonales');
			break;
		case "Formacion":
			Colapso('FormacionAcademica');
			break;
		case "Laboral":
			Colapso('Experiencia');
			break;
		case "Habilidades":
			Colapso('Habilidades');
			break;
		case "Interes":
			Colapso('AreasDeInteres');
			break;
	}
		
}
function Colapso(Valor){
	 
	for (var i = 0; i < document.getElementsByName('Colapso').length; i++) 
	{
		if(document.getElementsByName('Colapso')[i].id != Valor)
		{
			document.getElementsByName('Colapso')[i].style.display = 'none';
		}else
		{
			document.getElementsByName('Colapso')[i].style.display = 'block';
		}
	}
}