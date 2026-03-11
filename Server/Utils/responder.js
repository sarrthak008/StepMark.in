
const responder = (res, success,statusCode = 200, message ="easycode on file" , data = null) => {
      try {
       return  res.status(statusCode).json({
            success,
            message,
            data
        })

      } catch (error) {
         console.error("Error in responder:", error);
       return  res.status(500).json({
            success: false,
            message: "Internal Server Error",
            data: null
         })
      }
}

export default responder;