
//Higher order functions, functions that take other functions as higher order functions

//Filter, map and reduce are functions on the array object
	const animal=[
		{Name: "Tom",Species: "Cat"},
		{Name: "Jerry", Species: "Mouse"},
		{Name: "pluto", Species: "Dog"},
		{Name: "kelly",Species: "Dog"},
	]

	const obj={
		Name:"Tooom", Species: "Mouse"
	}

	const animalExist=animal.some(val=>val.Name===obj.Name)
	console.log(animalExist)




	// const Dogs=obj.reject((val)=>val==4)
	// console.log(Dogs);
	
	// const names=[]

	// for (let i=0;i<animal.length;i++)
	// {
	// 	names.push(animal[i].Name)
	// }

	//Map and filters are funct

	const names=animal.map((val)=>(
		// console.log(val)
		val.Species+"l"

	))

	console.log(names);
	

	//Map transforms the elements of the array   

	

