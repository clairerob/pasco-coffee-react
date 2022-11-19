const Category = ({ category }) => {
	return (
		<div
			className='bg-gray-100 rounded-xl p-10 w-full lg:w-1/3'
			style={{ backgroundColor: `#${category.hexCode}` }}
		>
			<h4 className='text-2xl py-3 font-bold capitalize'>{category.title}</h4>
			<p>{category.description}</p>
			<button
				style={{ backgroundColor: '#FE043C' }}
				className='rounded mt-3 px-5 py-2 text-white'
			>
				{category.slug.current}
			</button>
		</div>
	);
};

export default Category;
