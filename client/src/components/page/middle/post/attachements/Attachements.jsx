export default function Attachements({ images }) {
    return (
        <div className="w3-row-padding image-container" style={{ margin: "0 -16px" }}>
            {images.map(item => (
                <div key={item} className="w3-half">
                    <img
                        src={item}
                        style={{ width: "100%", height: "200px", objectFit: "cover" }}
                        alt="Picture"
                        className="w3-margin-bottom"
                    />
                </div>
            ))}
        </div>
    );
}