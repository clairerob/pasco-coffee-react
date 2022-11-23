import { useState, useEffect } from 'react'
import sanityClient from '../client'

const [classType, setClassType] = useState(null)

useEffect(() => {
	sanityClient
		.fetch(`*[_type == "classType"]{...}`)
		.then((data) => {
			setClassType(data)
			console.log(classType)
		})
		.catch(console.error)
}, [])
