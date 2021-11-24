export default function ErrorPage(props) {
    let code;
    let message = "";
    if (!props.errorCode) {
        code = 404;
    } else {
        code = props.errorCode;
    }
    if (!props.message) {
        message = "Whoops! Looks like that page doesn't exist!";
    } else {
        message = props.message;
    }
    return (
        <div className="error__body">
            {code} error:{message}
        </div>
    );
}
