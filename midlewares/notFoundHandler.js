import createError from 'http-errors'


const notFoundHandler = () => {
	next(createError(404, 'Route not found'))
}

export default notFoundHandler