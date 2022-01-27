class CustomAPIError extends Error
{
    constructor(message)
    {
        super(message);
    }
};

class BadRequestError extends CustomAPIError
{
    constructor(message)
    {
        super(message);
        this.statusCode = 400;
    }
};

class AuthenticationError extends CustomAPIError
{
    constructor(message)
    {
        super(message);
        this.statusCode = 401;
    }
};

class NotFoundError extends CustomAPIError
{
    constructor(message)
    {
        super(message);
        this.statusCode = 404;
    }
};

module.exports =  {
    CustomAPIError,
    BadRequestError,
    AuthenticationError,
    NotFoundError
}