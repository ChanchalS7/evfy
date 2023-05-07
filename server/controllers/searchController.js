const { body, validationResult } = require('express-validator');
export const searchController = () => {
	[
		// validate input fields
		body('field1').notEmpty().withMessage('Field1 is required'),
		body('field2').notEmpty().withMessage('Field2 is required'),
		body('field3').notEmpty().withMessage('Field3 is required'),
	], async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { field1, field2, field3 } = req.body;

		try {
			// search for records that match the selected values of field1, field2, and field3
			const records = await Record.find({ field1, field2, field3 });

			// return the results
			return res.json(records);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Server error' });
		}
	}
}
