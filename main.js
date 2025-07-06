
//Higher order functions, functions that take other functions as higher order functions

//Filter, map and reduce are functions on the array object
	const animal=[
		{Name: "Tom",Species: "Cat"},
		{Name: "Jerry", Species: "Mouse"},
		{Name: "pluto", Species: "Dog"},
		{Name: "kelly",Species: "Dog"},
	]

	const orders= [
		{amount:250},
		{amount:340},
		{amount:700},
	]

	const obj=[1,2,3,4,4,2,8,9]
	const sum=orders.reduce((sum,acc)=>{
		console.log("values :",sum,acc)
		return sum+=acc.amount
	},0)
	console.log('Sum by reduce:',sum)



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

	

