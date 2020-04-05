// @desc    get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show all bootcamps`});

}

// @desc    get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  public

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Bootcamp ${req.params.campId}`});
}

// @desc    create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  private

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `create new bootcamp`});
}

// @desc    update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  private

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `update bootcamp ${req.params.campId}`});
}

// @desc    delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  private

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `delete bootcamp ${req.params.campId}`});
}