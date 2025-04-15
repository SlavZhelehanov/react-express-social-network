export default function Message({ message, color = "blue" }) {
    return (
        <div className={`w3-panel w3-${color} w3-round w3-padding`}>
            <p className="w3-text-white">{message}</p>
        </div>
    );
}