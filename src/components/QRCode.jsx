import "../styles/css/index.css";
import QRCode from "qrcode.react";

const QRGenerator = ({text}) => {
    return (
        <QRCode value={text}/>
    );
}

export default QRGenerator;