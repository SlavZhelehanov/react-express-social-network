export default function LoadingTemplateImage({ type, alt }) {
    const data = type === "shimmer" ? {
        src: "/assets/loadingRounded.svg",
        cn: "shimmer-img"
    } : {
        src: "/assets/loadingBlocks.svg",
        cn: "fallback-img"
    };

    return <img src={data.src} alt={alt} className={data.cn} />;
}